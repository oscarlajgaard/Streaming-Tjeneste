import React, { Component } from 'react';
import './Search.css';

export class Search extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <input placeholder="Ex. Disco Ormene..." className="searchbar"></input>
                </div>

            </div>
        )
    }
}

export default Search
