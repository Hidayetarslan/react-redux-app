import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MoviesList from '../pages/MoviesList';
class MoviesPage  extends Component {
    static propTypes={
      movies:PropTypes.array.isRequired
    }
    render() { 
        return ( <div>
        <h1>Movies Page</h1>
        <MoviesList movies={this.props.movies}></MoviesList>
        </div> );
    }
}
 const mapStateToProps=({movies})=>{
     return{
         movies
     }
 };
export default connect(mapStateToProps)(MoviesPage);