import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="h-14 flex justify-between items-center md:h-16">
        <h1 className="font-bold tracking-widest text-xl">
          {/* <a href="#home">TOWA</a> */}
          <Link to="/">TOWA</Link>
        </h1>
        <div className="md:hidden">
          <img src="/menu.svg" alt="メニュー" className="w-6 h-6" />
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-4">
              <li className="font-bold tracking-wide text-lg">
                {/* <a href="#about">About</a> */}
                <Link to="/about">About</Link>
              </li>
              <li className="font-bold tracking-wide text-lg">
                {/* <a href="#work">Work</a> */}
                <Link to="/Work">Work</Link>
              </li>
              <li className="font-bold tracking-wide text-lg">
                {/* <a href="#blog">Blog</a> */}
                <Link to="/blog">Blog</Link>
              </li>
              <li className="font-bold tracking-wide text-lg">
                {/* <a href="#contact">Contact</a> */}
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
