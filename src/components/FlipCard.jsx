export const FlipCard = ({ name, image, id, toggleCard, setToggleCard }) => {
  const selectedCard = (idCard) => {
    toggleCard === idCard ? setToggleCard(0) : setToggleCard(idCard);
  };
  return (
    <div
      className="group h-80 w-80 md:w-56 md:h-56 cursor-pointer hover:scale-110 transition-all [perspective:1000px]"
      onClick={() => selectedCard(id)}
    >
      <div
        className={`shadow-xl transition-all duration-700 relative h-full w-full rounded-xl [transform-style:preserve-3d] ${
          toggleCard === id
            ? "[transform:rotateY(-180deg)]"
            : "[transform:rotateY(0deg)]"
        }`}
      >
        <div id="cards" className="absolute inset-0">
          <img
            src={image}
            alt="Character Image"
            className="h-full w-full rounded-xl object-cover shadow-md select-none"
          />
        </div>
        <div className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white transition-all duration-700 absolute inset-0 h-full w-full rounded-xl px-12 text-center [transform:rotateY(-180deg)] [backface-visibility:hidden]">
          <h3 className="flex min-h-full flex-col items-center justify-center text-xl font-semibold">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};
