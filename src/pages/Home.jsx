import GenreList from "../components/GenreList.jsx";

const Home = () => {
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-1 md:col-span-3">Anime List</div>
    </div>
  );
};

export default Home;
