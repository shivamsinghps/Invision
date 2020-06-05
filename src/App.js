import React , { Fragment }from 'react';
import './App.css';
import { Route , Switch , Redirect } from 'react-router-dom'
import SideDrawer from './components/UI/SideDrawer/SideDrawer'
import ReadProgress from './containers/ReadingProgress/ReadingProgress'
import Layout from './containers/Layout/Layout'
import Home from './components/UI/Home/Home'
import Blog from './containers/Blog/Blog'
import AboutUs from './components/AboutUs/AboutUs'

const target = React.createRef();
    // <ReadProgress target={target} />
function App() {
  return (
  <Fragment>
  <ReadProgress target={target} />
      <div className="App" ref={target}>
        <Layout>
            <SideDrawer />
        <Switch>
          <Route path='/OurWork' exact component={Blog} />
          <Route path='/AboutUs' exact component={AboutUs} />
          <Route path='/Home' exact component={Home} />
          <Route path='/' exact component={Home} />
          <Redirect to='/' />
        </Switch>
        </Layout>
      </div>
  </Fragment>
  );
}

export default App;
// <Route path='/Blog' component={Blog} />
