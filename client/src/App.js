import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList  from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div className="movies-container">
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={ props => <Movie addToSavedList={addToSavedList} {...props} />} />
      </div>
    </div>
  );
};

export default App;
