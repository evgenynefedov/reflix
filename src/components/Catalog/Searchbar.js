
import React, { useState, useEffect } from 'react'

function Searchbar({searchQuery, handleSearchChange}) {

    return (
        <div className="searchbar">
           <input id="search-input" placeholder="Search..." onChange={(e) => handleSearchChange(e)} value={searchQuery} />
        </div>
    );
}

export default Searchbar;
