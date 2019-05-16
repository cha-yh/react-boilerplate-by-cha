import React, { Component } from 'react';
import {Route} from 'react-router-dom';

// language / hoc
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import pt from 'react-intl/locale-data/pt'
import * as locale from './locale';

// containers
import TestContainer from './containers/TestContainer/TestContainer';

addLocaleData([...en, ...es, ...pt])
const defaultLang = navigator.language.slice(0,2) || 'en'

class App extends Component {  
  render() {
    return (
      <IntlProvider
        locale={'en'}
        messages={locale[defaultLang==='es'||defaultLang==='en' ? defaultLang:'en']}
      >
        <div className="App">
          <Route exact path="/" component = {TestContainer} />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
