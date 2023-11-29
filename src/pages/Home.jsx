import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

import './movieGrid.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY



const Home = () => {

    const [topMovie, setTopMovie] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovie(data.results)
    }

    useEffect (()=>{
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

        getTopRatedMovies(topRatedUrl)
    },[])

    return(
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topMovie.length === 0 && <p>Carregando...</p> }
                {topMovie.length > 0 && topMovie.map((movie)=> <MovieCard key={movie.id} movie={movie}/>
                )}
            </div>
            
        </div>
    )
}

export default Home