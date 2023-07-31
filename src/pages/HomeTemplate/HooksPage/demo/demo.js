import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers";

const App = () => {
    const [state, setState] = useState({
        movies: [],
        selectedMovie: null,
        seats: [],
        selectedSeats: [],
        totalPrice: 0,
    });

    useEffect(() => {
        // Get all movies
        fetch("https://api.themoviedb.org/3/movie/popular?language=en-US")
            .then(response => response.json())
            .then(movies => setState({ movies }));
    }, []);

    const onSelectMovie = movieId => {
        setState({ selectedMovie: movieId });
    };

    const onSelectSeat = seatId => {
        setState(prevState => {
            const selectedSeats = [...prevState.selectedSeats, seatId];
            const totalPrice = selectedSeats.length * 10;
            return {
                selectedSeats,
                totalPrice,
            };
        });
    };

    const onSubmitOrder = () => {
        // TODO: Submit order to payment gateway
    };

    return (
        <Provider store={createStore(reducer)}>
            <div className="app">
                <h1>Movie Theater</h1>
                <div className="movies">
                    {state.movies.map(movie => (
                        <div className="movie" key={movie.id}>
                            <h2>{movie.title}</h2>
                            <img src={movie.poster_path} alt={movie.title} />
                            <p>{movie.overview}</p>
                            <button onClick={() => onSelectMovie(movie.id)}>Select</button>
                        </div>
                    ))}
                </div>
                <div className="selected-movie">
                    {state.selectedMovie ? (
                        <div>
                            <h2>{state.selectedMovie.title}</h2>
                            <img src={state.selectedMovie.poster_path} alt={state.selectedMovie.title} />
                            <p>{state.selectedMovie.overview}</p>
                            <div className="seats">
                                {state.seats.map(seat => (
                                    <div className="seat" key={seat.id}>
                                        <input type="checkbox" name="seats" value={seat.id} /> {seat.id}
                                    </div>
                                ))}
                            </div>
                            <h3>Total Price: {state.totalPrice}</h3>
                            <button onClick={onSubmitOrder}>Submit Order</button>
                        </div>
                    ) : (
                        <div>No movie selected</div>
                    )}
                </div>
            </div>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));