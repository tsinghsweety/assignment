import React from 'react';
import ReactDOM from 'react-dom';
import { movies } from "./movies.json";
import './bootstrap.min.css';
import './index.css';

class MyMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesArr: []
        }
        // this.fetchMovies = this.fetchMovies.bind(this);
    }
    // componentDidMount(){
    //     this.fetchMovies();
    // }
    // fetchMovies(){
    //     let mainThis = this;
    //     fetch('http://localhost:3001/movies')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         mainThis.setState({
    //             moviesArr: data
    //         });
    //     })
        
    // }
    render() {
        return (
            <div className="container">
                            <div className="row">
                                <div className="col">
                                    {movies.map((data, key) => {
                                        console.log("movies: ", movies);
                                        console.log("key: ", data.movieName);
                                        return (
                                            <div className="card-mvDetails">
                                                <div className="col-4">Name: {data.movieName}</div>
                                                <div className="col-4">Rating: {data.rating}</div>
                                                <div className="col-4">ReleaseDate:{data.releaseDate}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
        );
    }
}


ReactDOM.render(
    <React.StrictMode>
        <MyMovies />
    </React.StrictMode>,
    document.getElementById('root')
);

