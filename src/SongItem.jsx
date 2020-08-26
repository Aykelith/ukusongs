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
                <div 
                    className="_listItem"
                    onClick={() => this.setState({ show: true })}
                >
                    <div>{ /* G_SONG_TITLE */ }</div>
                </div>
                {
                    this.state.show
                    &&
                    <div
                        className="_songBackground"
                        onClick={event => {
                            if (event.target == event.currentTarget) {
                                this.setState({ show: false });
                            }
                        }}
                    >
                        <Suspense fallback={<div>Loading...</div>}><SongComponent/></Suspense>
                    </div>
                }
            </div>
        );
    }
}