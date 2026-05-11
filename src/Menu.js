

const Menu = () => {
  return (
    <div className="bg-[#8A5F41] p-4 flex flex-row items-center justify-between fixed w-full top-0 z-10 shadow-md">
      <h1 className="text-2xl font-bold text-white">Converter App</h1>
      <ul className="list-none flex flex-row gap-2 p-3">
        <li><a href="#ropani-bigha" className="text-white hover:text-gray-300 font-[800]">Ropani Bigha</a></li>
        <li><a href="#ana-to-haat" className="text-white hover:text-gray-300 font-[800]">Ana to Haat</a></li>
        <li><a href="#ft-to-cm" className="text-white hover:text-gray-300 font-[800]">Feet to Centimeters</a></li>
      </ul>
    </div>
  );
};

export default Menu;