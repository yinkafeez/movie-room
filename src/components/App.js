import { useState,useEffect } from "react"
import Header from "./Header"
import Search from "./Search"
import Movie from "./Movie"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function App() {

    const API_URl = 'http://www.omdbapi.com/?apikey=b2d718fc';

    const[movies,setMovies] = useState([])
    const searchMovies = async(title)  => {
        const response = await fetch(`${API_URl}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }

   
    useEffect(() => {
        searchMovies('rush hour')
    }, []);


    return(
        <div>
            <Header />
            <Search searchMovies={searchMovies} />
            { movies.length > 0 
               ?(
                    <div className="movie-container">
                        <Row>
                            {movies.map(movie => {
                            return(
                                <Col xs={12} md={4} lg={3} key={movie.imdbID}>
                                    <Movie  movie={movie} />
                                </Col>
                            )
                            })}
                        </Row>
                    </div> 
                ):(
                    <div className="empty">
                        <h2> No movie to display </h2>
                    </div>
                )
            }
           
           
        </div>
    )
}

export default App