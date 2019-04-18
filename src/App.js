import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import './App.css';
// import './App.scss';


// language / hoc
import { compose } from 'recompose';
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import pt from 'react-intl/locale-data/pt'
import * as locale from './locale';

// containers
import TestContainer from './containers/TestContainer/TestContainer';
import HomeContainer from './containers/HomeContainer/HomeContainer';

const Other = () => {
  return (
    <div>hello other</div>
  )
}

addLocaleData([...en, ...es, ...pt])
const defaultLang = navigator.language.slice(0,2) || 'en'

class App extends Component {
  componentDidMount() {
    console.log('process.env :', process.env);
  }
  
  render() {
    return (
      <IntlProvider
        // locale={lang}
        locale={'en'}
        // messages={locale[defaultLang==='es'||defaultLang==='en' ? defaultLang:lang]}
        messages={locale[defaultLang==='es'||defaultLang==='en' ? defaultLang:'en']}
      >
        <div className="App">
          <Router>
              <Link to="/">go to home</Link>
              <Link to="/other">go to other</Link>
              <Route path="/other" component = {Other} />
              <Route exact path="/" component = {HomeContainer} />
            
          </Router>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
