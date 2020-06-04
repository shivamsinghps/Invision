import React , { Fragment }from 'react';
import './App.css';

import ReadProgress from './containers/ReadingProgress/ReadingProgress'
import Layout from './containers/Layout/Layout'
import Header from './components/UI/Header/Header'

const target = React.createRef();
    // <ReadProgress target={target} />
function App() {
  return (
  <Fragment>
  <ReadProgress target={target} />
      <div className="App" ref={target}>
        <Layout>
          <Header />
        </Layout>
      </div>
  </Fragment>
  );
}

export default App;
