import PropTypes from "prop-types";

const Banner = ({ gameBanner }) => {

  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent rounded-xl">
        <h2 className="text-[24px] font-bold text-whitish">
          {gameBanner.name}
        </h2>
        <button className="bg-lightBlue text-whitish px-2 p-1 rounded-lg">
          Get Now
        </button>
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

Banner.propTypes = {
  gameBanner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
  }).isRequired,
};
