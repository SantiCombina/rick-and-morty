import { AiOutlineArrowUp } from "react-icons/ai";

export const ArrowToStartPage = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-col items-center min-w-[100px] gap-2 group`}
    >
      <span className="bg-white drop-shadow-md rounded-md px-3 py-1 hidden group-hover:flex">
        Ir al incio
      </span>
      <a
        href="#title"
        className="bg-blue-500 dark:bg-gray-200 text-white dark:text-black transition-all duration-700 rounded-full h-10 w-10 text-3xl flex justify-center items-center"
      >
        <AiOutlineArrowUp />
      </a>
    </div>
  );
};
