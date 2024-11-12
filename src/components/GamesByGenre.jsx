/* eslint-disable react/prop-types */
const GamesByGenre = ({ gamesList }) => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gamesList.length &&
          gamesList.map((game) => (
            <div
              key={game.id}
              className="h-[300px] bg-gray-300 dark:bg-gray-600 p-3 rounded-lg pb-6 dark:text-whitish hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
            >
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-[80%] rounded-xl object-cover"
              />
              <h4 className="mt-1 font-bold">
                {game.name}
                <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-800">
                  {game.metacritic}
                </span>
              </h4>
              <h4>
                ⭐{game.rating} 💬{game.reviews_count} 🔥
                {game.suggestions_count}
              </h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GamesByGenre;
