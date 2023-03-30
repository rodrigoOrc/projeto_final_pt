import { useState, useEffect } from "react"

const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    const [topMovies, setTopMovies] = useState([])
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }
    useEffect(() => {
        const TopRatedUrl = `${movieURL}top_rated?${apiKey}`
        getTopRatedMovies(TopRatedUrl)
    }, [])

    return <div>
        {topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}
    </div>
}

export default Home;