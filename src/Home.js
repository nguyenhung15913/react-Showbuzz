import { Carousel, Container } from 'react-bootstrap'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import useSWR from 'swr'
import { Redirect, Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import Spinners from './Spinners'
import './Home.css'
function Home() {
	const api_key = '9bd62ae862007998759f7d7a5df251bf'

	const { data: movies } = useSWR(
		`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
	)

	const { data: shows } = useSWR(
		`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`
	)

	const { data: trending } = useSWR(
		`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
	)

	const slideOption = {
		padding: {
			left: 0,
			right: 10
		},
		speed: 200,
		perMove: 1,
		autoWidth: true,
		pagination: false,
		rewind: false
	}

	if (movies === undefined || shows === undefined || trending === undefined) {
		return <Redirect to="/" />
	}
	if (!movies) {
		return <Spinners />
	}

	return (
		<div className="home">
			<div className="bigger-container">
				<section className="big-slider">
					<Carousel>
						{trending.results.map((trend) => (
							<Carousel.Item>
								<Link to={`/movie/${trend.id}`}>
									<img
										className="d-block w-100"
										src={`https://image.tmdb.org/t/p/original/${trend.backdrop_path}`}
										alt={trend.title}
										title={trend.title}
									/>
									<Carousel.Caption>
										<h3 className="text-shadow">
											{trend.title ? trend.title : trend.name}
										</h3>
									</Carousel.Caption>
								</Link>
							</Carousel.Item>
						))}
					</Carousel>
				</section>
			</div>

			<Container>
				<section className="feature-movie">
					<h1>Feature Movies</h1>
					<Splide className="slider" options={slideOption}>
						{movies.results.map((movie) => (
							<SplideSlide key={movie.imdbID}>
								<Link to={`/movie/${movie.id}`}>
									<MovieCard movie={movie} name={movie.title} />
								</Link>
							</SplideSlide>
						))}
					</Splide>
				</section>

				<section className="feature-movie">
					<h1>Feature TV Shows</h1>
					<Splide className="slider" options={slideOption}>
						{shows.results.map((movie) => (
							<SplideSlide key={movie.imdbID}>
								<Link to={`/movie/${movie.id}`}>
									<MovieCard movie={movie} name={movie.name} />
								</Link>
							</SplideSlide>
						))}
					</Splide>
				</section>
			</Container>
		</div>
	)
}

export default Home
