var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var routes = (
  <Router>
    <Route path="/" component={Hello}>
      <Route path="1" component={Child1} >
        <Route path="2" component={Child2} />
      </Route>
    </Route>
  </Router>
);
