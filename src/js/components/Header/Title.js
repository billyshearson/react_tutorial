import React from "react";
import { render } from "react-dom";

export default class Title extends React.Component {
    render() {
        return <h1 > { this.props.title } < /h1>;
    }
}