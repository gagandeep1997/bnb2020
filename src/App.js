import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route } from 'react-router-dom';

// Pages
const Dashboard = lazy(() => import('./pages/dashboard'));
const Market = lazy(() => import('./pages/market'));

const renderLoader = () => <h1>Loading...</h1>;

const App = () => {
  return (
    <Router>
      <Suspense fallback={renderLoader()}>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/market" component={Market} />
      </Suspense>
    </Router>
  );
}

export default App;