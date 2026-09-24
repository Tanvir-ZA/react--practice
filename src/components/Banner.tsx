import banner from "../assets/bg-shadow.png";
import logo from "../assets/banner-main.png";

const Banner = () => {
  return (
    <section
      className="h-[500px] bg-black bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="text-center">
        <img
          src={logo}
          alt="Logo"
          className="w-40 mx-auto mb-5"
        />

        <h1 className="text-4xl font-bold text-white mb-5">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Changed button to yellow background and black text */}
        <button className="bg-[#E7FE29] text-black px-6 py-3 rounded-lg font-semibold">
          Claim Free Credit
        </button>
      </div>
    </section>
  );
};

export default Banner;