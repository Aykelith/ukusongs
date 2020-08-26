//= Functions & Modules
// Package
import React, { Suspense } from "react";
import { boundMethod } from "autobind-decorator";
import immer from "immer";

//= React components
// Own
/* G_SONGS_IMPORTS */

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <div id="SongsList">
                    { /* G_SONGS_LIST */ }
                </div>
            </>
        );
    }
}