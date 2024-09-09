import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500  ">
        <p>
          ABOUT <span className="text-gray-700 font-bold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full  md:max-w-[360px]"
          src={assets.about_image}
          alt="image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Footprints, your trusted partner in managing your lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Cumque aspernatur
            itaque cupiditate amet repudiandae distinctio alias. Hic cumque
            laboriosam quisquam debitis nostrum ipsa, officia illo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, iure
            alias ad animi porro, expedita dolore veniam quasi ipsam unde error
            sit quam ut vel, sit amet consectetur adipisicing elit. Hic, iure
            alias ad animi porroanimi porro, expedita dolore veniam quasi ipsam
            unde error sit quam ut vel, sit amet consectetur adipisicing elit.
            Hic, iure alias ad animi porro.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sapiente, error impedit accusantium explicabo quaerat, natus rerum
            quas ex deleniti eveniet. Sit labore doloribus voluptas.
          </p>
        </div>
      </div>

      <div>
        <p className="uppercase ">
          Why <span className="text-gray-700 font-semibold">Choose Us</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Stramlined appointment scheduling that fits into your busy lifestyle
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Acces to a network of lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Tailored recommendations and reminders to Lorem ipsum dolor amet
            consectetur adipisicing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
