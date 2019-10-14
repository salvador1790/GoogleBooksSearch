import React from "react";

function SearchBook () {
    return (
        <div>
            <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Enter Book Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput"/>
    <button type="button" class="btn btn-primary">Search</button>
  </div>
</form>
        </div>
    )
}

export default SearchBook