import React from "react";
import SearchForm from "../SearchForm"

function Jumbotron() {
    return (
        <div className="jumbotron">
            <div class="card">
                <h5 class="card-header">Search Books</h5>
                <div class="card-body">
                    <SearchForm/>
                </div>
            </div>

        </div>
    )
}

export default Jumbotron;