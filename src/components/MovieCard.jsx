import { Link } from "react-router-dom"
import {FaStar} from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink= true}) => {
  return (
    <div className="movie-card">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {/* Como vamos reaproveitar o movie card em varios locais,
        definimos essa variavel showLink que direciona para os detalhes
        do filme somente quando julgarmos necessario */}
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard