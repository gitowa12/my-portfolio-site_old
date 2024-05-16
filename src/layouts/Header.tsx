const Header = () => {
  return (
    <>
      <header className="h-14 flex justify-between items-center md:h-16">
        <h1 className="font-bold tracking-widest text-xl">
          <a href="#home">TOWA</a>
        </h1>
        <div className="md:hidden">
          <img src="/menu.svg" alt="メニュー" className="w-6 h-6" />
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-4">
              <li className="font-bold tracking-wide text-lg">
                <a href="#about">About</a>
              </li>
              <li className="font-bold tracking-wide text-lg">
                <a href="#work">Work</a>
              </li>
              <li className="font-bold tracking-wide text-lg">
                <a href="#blog">Blog</a>
              </li>
              <li className="font-bold tracking-wide text-lg">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
