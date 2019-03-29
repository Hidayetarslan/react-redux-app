import React from 'react';
import PropTypes from 'prop-types';

const MoviesList=({movies})=>{
    const emptyMessage=(
        <p>There are no movies yet</p>
    );
 const movieslist=(
     <div>
         Movies List
     </div>
 )
        return (
            <div>
                {movies.length===0 ? emptyMessage:movieslist}
            </div>
        );
    };


MoviesList.propTypes = {
movies:PropTypes.array.isRequired
};

export default MoviesList;