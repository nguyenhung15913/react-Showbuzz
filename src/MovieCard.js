import React from 'react'
import Rating from './Rating'
import { useHistory } from 'react-router-dom'

function MovieCard({ movie, name }) {
	const history = useHistory()

	return (
		<div
			className="movie"
			onClick={() => {
				history.push(`/movie/${movie.imdbID}`)
			}}
			key={movie.imdbID}
		>
			<div className="movie-image movie-gallery">
				<span className="play" title={name}>
					<span className="name">{name}</span>
				</span>
				<img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={name}
				/>
				<Rating rate={movie.vote_average} />
			</div>
		</div>
	)
}

export default MovieCard
