import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-slate-700">
  <nav className="">
    <div className="">
      <div className="">
        <ul className="flex flex-row justify-center gap-10 py-2">
          <li>
            <a href="#" className="text-white font-sans text-lg lg:text-2xl font-semibold" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-sans text-lg lg:text-2xl font-semibold">
              About me
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-sans text-lg lg:text-2xl font-semibold">
            Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  );
};
export default Header;
