import React , { Fragment , Suspense , lazy }from 'react';
import classes from './App.module.css';
import { Route , Switch , Redirect } from 'react-router-dom'
import SideDrawer from './components/UI/SideDrawer/SideDrawer'
import ReadProgress from './containers/ReadingProgress/ReadingProgress'
import Layout from './containers/Layout/Layout'
const Home = lazy(() => import ('./containers/Home/Home'))
const Blog = lazy(()=> import('./containers/Blog/Blog'))
const AboutUs = lazy(()=> import('./components/AboutUs/AboutUs'))
const Contact = lazy(()=> import('./components/Contact/Contact'))

const target = React.createRef();

function App() {
  return (
  <Fragment>
  <ReadProgress target={target} />
      <div className={classes.App} ref={target}>
        <Layout>
            <SideDrawer />
              <Suspense fallback={<div className={classes.Loader}>Loading...</div>}>
                <Switch>
                  <Route path='/OurWork' exact component={Blog} />
                  <Route path='/Contact' exact component={Contact} />
                  <Route path='/AboutUs' exact component={AboutUs} />
                  <Route path='/Home' exact component={Home} />
                  <Route path='/' exact component={Home} />
                  <Redirect to='/' />
                </Switch>
               </Suspense>
        </Layout>
      </div>
  </Fragment>
  );
}

export default App;
