import React from "react";
import useSWR from "swr";
import { Container, Card } from "react-bootstrap";
import "./Movie.css";
import Rating from "./Rating";
import Spinners from "./Spinners";
import { Redirect } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
function Movie({ id }) {
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
	};
	const api_key = "9bd62ae862007998759f7d7a5df251bf";
	const { data: movie } = useSWR(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
	);

	const { data: credit } = useSWR(
		`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`
	);
	if (movie?.success === false) {
		return <Redirect to={`/movies`} />;
	}
	if (movie === undefined || credit === undefined || movie.success === false) {
		return <Redirect to={`/movie/${id}`} />;
	}

	if (!movie) {
		return <Spinners />;
	}

	function timeConvert(n) {
		var num = n;
		var hours = num / 60;
		var rhours = Math.floor(hours);
		var minutes = (hours - rhours) * 60;
		var rminutes = Math.round(minutes);
		return rhours + ":" + rminutes + ":00";
	}

	return (
		<Container>
			<section className="movie-detail-page">
				<img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
					className="movie-detail-img"
				/>
				<div className="movie-detail">
					<div className="information">
						<h1 className="title">{movie.title}</h1>
						<div className="sub-title">
							<p>{movie.release_date}</p>
							<p>-</p>
							{movie.genres.map((genre) => (
								<p>{`${genre.name ? genre.name + "," : ""}`}</p>
							))}
							<p>-</p>
							<p>{timeConvert(movie.runtime)}</p>
						</div>
						<div className="rate">
							<p>Rate: {movie.vote_average}</p>
							<div className="play-logo">
								<a href={movie.homepage}> Homepage</a>
							</div>
						</div>
						<p className="tagline">
							<i>{movie.tagline}</i>
						</p>
						<div className="overview">
							<h3>Overview</h3>
							<p>{movie.overview}</p>
						</div>

						<div className="crew">
							{credit.crew.map((m) => {
								if (m.job === "Director") {
									return (
										<div>
											<h5>{m.name}</h5>
											<p>{m.job}</p>
										</div>
									);
								}
								return null;
							})}

							{credit.crew.map((m) => {
								if (m.job === "Writer") {
									return (
										<div>
											<h5>{m.name}</h5>
											<p>{m.job}</p>
										</div>
									);
								}
								return null;
							})}
						</div>
					</div>
				</div>
			</section>
			<section className="cast">
				<h1>Cast</h1>
				<Splide className="slider" options={slideOption}>
					{credit.cast.map((member) => (
						<SplideSlide key={member.id}>
							<Card
								style={{ height: "380px", width: "230px", marginRight: "8px" }}
							>
								<Card.Img
									variant="top"
									src={`${
										member.profile_path
											? "https://image.tmdb.org/t/p/w185/" + member.profile_path
											: "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
									}`}
									alt="Picture not found"
									style={{ height: "75%" }}
								/>
								<Card.Body>
									<Card.Title style={{ fontSize: "1.2rem" }}>
										{member.name}
									</Card.Title>
									<Card.Text
										style={{
											overflow: "hidden",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap"
										}}
									>
										{member.character}
									</Card.Text>
								</Card.Body>
							</Card>
						</SplideSlide>
					))}
				</Splide>
			</section>
		</Container>
	);
}

export default Movie;
