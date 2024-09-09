import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* -----Left section---------- */}
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-500 leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            natus repellat culpa autem, a facere ratione sapiente porro pariatur
            soluta necessitatibus quia sint iure repellendus. natus repellat
            culpa autem, a facere ratione sapiente porro pariatur soluta
            necessitatibus quia sint iure repellendus.
          </p>
        </div>
        {/* -----Center section---------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* -----Right section---------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-9870</li>
            <li>footprintarts@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ----------Copyright-Text--------------------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-400">
          Copyright 2024@ FootprintArts - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;