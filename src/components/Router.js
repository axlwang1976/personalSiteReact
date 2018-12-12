/* eslint-disable camelcase */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import StudyList from './StudyList';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/study" component={StudyList} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;