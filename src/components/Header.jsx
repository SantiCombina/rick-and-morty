import { DarkModeSwitch } from "./DarkModeSwitch";

export const Header = () => {
  return (
    <header
      id="title"
      className="bg-blue-500 shadow-blue-500 text-white h-72 flex flex-col justify-center items-center shadow-md relative"
    >
      <div className="w-full flex justify-end p-4 absolute top-5 right-5">
        <DarkModeSwitch />
      </div>
      <div className="flex flex-col items-end mx-4">
        <h1 className="text-7xl">Rick and Morty</h1>
        <a href="#cards" className="text-2xl p-1">
          characters
        </a>
      </div>
    </header>
  );
};
