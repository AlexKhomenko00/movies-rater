import Header from "./components/Header/Header";
import FilterContainer from "./containers/FilterContainer";
import MovieListContainer from "./containers/MovieListContainer";
import RatingFormContainer from "./containers/RatingFormContainer";

function App() {
  return (
    <div className="container mx-auto py-5">
      <Header />
      <RatingFormContainer />
      <FilterContainer />
      <MovieListContainer />
    </div>
  );
}

export default App;
