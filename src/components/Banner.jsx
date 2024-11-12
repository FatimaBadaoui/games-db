/* eslint-disable react/prop-types */

const Banner = ({ gameBanner, genreName }) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-slate-900 to-transparent rounded-xl">
        <h2 className="text-[40px] font-bold text-whitish">
          {genreName} Games
        </h2>
      </div>
      <img
        src={gameBanner.background_image}
        alt={gameBanner.name}
        className="md:h-[320px] w-full object-cover rounded-xl"
      />
    </div>
  );
};

export default Banner;
