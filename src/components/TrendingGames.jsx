const TrendingGames = ({ gamesList }) => {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-whitish mb-5">
        Trending Games
      </h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gamesList.map(
          (game, index) =>
            index > 0 &&
            index < 5 && (
              <div
                key={game.id}
                className="bg-[#ffc404be] rounded-lg group hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
              >
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="h-[270px] rounded-t-lg object-cover"
                />
                <h2 className="dark:text-whitish text-[20px] font-bold p-2">
                  {game.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
