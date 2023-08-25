import React, { Component } from "react";
import Films from "./Films"

export default class ListOfFilms extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch(
            "https://64e5781c09e64530d17e95b3.mockapi.io/films")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                });
            })
    }
    render() {
        return (
            <Films items={this.state.items} />
        );
    }
}