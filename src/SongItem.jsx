//= Functions & Modules
// Package
import React, { Suspense } from "react";
import { boundMethod } from "autobind-decorator";
import immer from "immer";

const SongComponent = React.lazy(() => import(/* G_SONG_FILENAME */));

export default class SongItem extends React.PureComponent {
    static propTypes = {

    };

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="SongItem">
                <div className="_listItem">
                    { this.props.title }
                </div>
                {
                    this.state.show
                    &&
                    <Suspense fallback={<div>Loading...</div>}><SongComponent/></Suspense>
                }
            </div>
        );
    }
}