import { Component } from "react"
import "./Film.css"

export default class Films extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="film-container">
                {
                    this.props.items?.map((film) => (
                        <div className="film-item">
                            <div className="film-image">
                                <img src={film.image} key={film.id} alt={film.title} />
                            </div>
                            <div className="film-title">
                                <h3>{film.title}</h3>
                            </div>
                            <div className="film-info">
                                <h5><i>Year: {film.year}</i></h5>
                                <h5><i>Nation: {film.nation}</i></h5>
                            </div>
                            <div className="film-button">
                                <button>Details</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}