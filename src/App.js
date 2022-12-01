import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Detail from "./Components/Detail";
import Favorites from "./Components/Favorites";
import Home from "./Components/Home";
// import Landing from "./Components/Landing";
import NotFound from "./Components/NotFound";
import Resultados from "./Components/Resultados";
// import swal from '@sweetalert/with-react'

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs");

    if (favsInLocal !== null) {
      const favsArray = JSON.parse(favsInLocal);
      setFavorites(favsArray);
    }
  }, []);

  const addOrRemoveFovorite = (e) => {
    const favMovies = localStorage.getItem("favs");

    let moviesInFavs;

    if (favMovies === null) {
      moviesInFavs = [];
    } else {
      moviesInFavs = JSON.parse(favMovies);
    }

    console.log(moviesInFavs);

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const padre = parent.parentElement;
    const imgURL = padre.querySelector("img").getAttribute("src");
    const title = padre.querySelector("h1").innerText;
    const date = padre.querySelector("span").innerText;
    const movieData = {
      imgURL,
      title,
      date,
      id: btn.dataset.movieId,
    };

    let moviesIsInArray = moviesInFavs.find((oneMovie) => {
      return oneMovie.id === movieData.id;
    });

    if (!moviesIsInArray) {
      moviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(moviesInFavs));
      setFavorites(moviesInFavs);
      // swal("Good job!",
      //           "Se agrego la pelicula", "success"
      //       )
      console.log("Se agrego la pelicula");
    } else {
      let movieLeft = moviesInFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(movieLeft));
      setFavorites(movieLeft);
      console.log("Se elimino la pelicula");
    }
  };

  return (
    <div className="">
      <Switch>
        {/* <Route exact path="/" component={Landing} /> */}
        <Route
          path="/listado"
          render={(props) => (
            <Home
              favorites={favorites}
              addOrRemoveFovorite={addOrRemoveFovorite}
              {...props}
            />
          )}
        />
        <Route path="/detail/:id" component={Detail} />
        <Route
          path="/resultados"
          render={(props) => (
            <Resultados addOrRemoveFovorite={addOrRemoveFovorite} {...props} />
          )}
        />
        <Route
          path="/favorites"
          render={(props) => (
            <Favorites
              favorites={favorites}
              addOrRemoveFovorite={addOrRemoveFovorite}
              {...props}
            />
          )}
        />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
