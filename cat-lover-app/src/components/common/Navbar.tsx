import Logo from "../../assets/img/logo/cat-lover.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-30 text-primaryBrown1 max-w-[1240px] px-4 mx-auto">
      <img className="mx-left py-4" src={Logo} alt="/" />
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Kitties</li>
        <li className="p-4">About</li>
        <li>sdasdas</li>
      </ul>
    </div>
  );
};

export default Navbar;
