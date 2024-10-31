import { useEffect, useState } from "react";
import { ArrowToStartPage } from "../components/ArrowToStartPage";
import { ComponentsMultiplier } from "../components/ComponentsMultiplier";
import { FlipCard } from "../components/FlipCard";
import { Header } from "../components/Header";
import { CardSkeleton } from "../components/Skeletons/CardSkeleton";
import { Spinner } from "../components/Spinner";
import { useInfinityScroll } from "../hooks/useInfinityScroll";

export const RickAndMorty = () => {
  const [apiData, setApiData] = useState([]);
  const [toggleCard, setToggleCard] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [flag, setFlag] = useState(0);

  const apiRickAndMorty = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (page === 1) {
          setApiData([]);
        }
        setFlag(data.info.count);
        setApiData((prev) => [...prev, ...data.results]);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
  };

  const [setLastItem, isVisible, setIsVisible, isLoading] = useInfinityScroll({
    root: null,
    rootMargin: "0px",
    threshold: 0.99,
  });

  useEffect(() => {
    apiRickAndMorty();
  }, [page]);

  useEffect(() => {
    if (isVisible) {
      setPage(page + 1);
      setIsVisible(false);
    }
  }, [isVisible]);

  return (
    <div className="bg-white dark:bg-gray-800 transition-all duration-700 font-montserrat">
      <Header />
      <section className="flex w-full justify-center py-10">
        <div className="flex flex-wrap justify-center p-5 max-w-screen-lg gap-7">
          {loading ? (
            <ComponentsMultiplier itemsQuant={20}>
              <CardSkeleton />
            </ComponentsMultiplier>
          ) : (
            <>
              {apiData.map((char, index) => {
                const flagItems = index === flag - 1;
                const isLastItem = index === apiData.length - 1;
                return (
                  <div
                    className="flex w-full sm:w-fit justify-center transition-all"
                    key={index}
                    ref={
                      isLastItem && !flagItems
                        ? (last) => setLastItem(last)
                        : null
                    }
                  >
                    <FlipCard
                      toggleCard={toggleCard}
                      setToggleCard={setToggleCard}
                      id={char.id}
                      name={char.name}
                      image={char.image}
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </section>
      {isLoading && <Spinner />}
      <ArrowToStartPage className="fixed bottom-3 2xl:right-32 xl:right-20 right-10" />
    </div>
  );
};
