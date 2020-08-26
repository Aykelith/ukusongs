//= Functions & Modules
// Package
import React, { Suspense } from "react";
import { boundMethod } from "autobind-decorator";
import immer from "immer";

export default class Song extends React.PureComponent {
    static propTypes = {

    };

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
        
    }

    @boundMethod
    renderChord(text) {
        return (
            <b>{text}</b>
        );
    }

    @boundMethod
    recordLyric(text) {
        return (
            <div>{text}</div>
        );
    }

    render() {
        return (
            <div className="Song">
                <div className="_title">{ /* G_SONG_TITLE */ }</div>
                <div className="_content">
{ /* G_SONG_CONTENT */ }
                </div>
            </div>
        );
    }
}