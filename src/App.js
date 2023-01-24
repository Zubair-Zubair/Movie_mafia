import { useEffect, useState }  from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com?apikey=9dbef8fe';
 
//const movie1 = {
   // "Title": "Italian Spiderman",
   // "Year": "2007",
   // "imdbID": "tt2705436",
   // "Type": "movie",
   // "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
//}

const App = () => {
 //use state for dynamic data   
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();

         console.log(data.Search);
     //to change the state
        setMovies(data.Search);   
};
    //9dbef8fe  API key 
    // useEffect used for the fiirst time when web page load but the other null array [] allow us to change
useEffect (() => {
   searchMovies('joker');   

    } , []);


    return(
        <div className="app">
            <h1>Movie Mafia</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange = {(e) => setSearchTerm(e.target.value)}
                />
            <img 
                src={SearchIcon}
                alt="search"
                onClick={() =>searchMovies(searchTerm)}
            />
            </div>
            {movies?.length > 0 
                ? (
                    <div className="container"> 
                        {movies.map((movie) => 
                        <MovieCard movie1={movie} />
                        )}
                     </div> 
                ) : (
                     <div className="empty">
                        <h2>There is no movie</h2>    
                     </div>
            )} 
        </div>
    );
}
export default App;