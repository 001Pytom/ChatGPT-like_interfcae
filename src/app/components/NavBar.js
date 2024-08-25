import Toggle from "./Toggle";

function NavBar() {
  return (
    <nav className="bg-white dark:bg-[#212121]  dark:text-white shadow-lg w-full p-3 flex justify-between items-center">
      <span className="dark:text-white">ChatGPT</span>
      <Toggle />
    </nav>
  );
}

export default NavBar;
