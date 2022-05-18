import React from 'react'
import { Container } from 'react-bootstrap'
import useSWR from 'swr'
import './Listing.css'
import MovieCard from './MovieCard'
import { Link, Redirect } from 'react-router-dom'
import Spinners from './Spinners'

function Listing() {
	const api_key = '9bd62ae862007998759f7d7a5df251bf'

	const { data: movies } = useSWR(
		`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
	)

	if (movies === undefined) {
		return <Redirect to="/movies" />
	}
	if (!movies) {
		return <Spinners />
	}

	return (
		<Container>
			<div className="listing-page">
				{movies.results.map((movie) => (
					<Link to={`/movie/${movie.id}`}>
						<MovieCard movie={movie} />
					</Link>
				))}
			</div>
		</Container>
	)
}

export default Listing
