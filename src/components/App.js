import React from 'react';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  render() {
    return (
        <div className="ui container">
          <LanguageStore>
            <LanguageSelector />

            {/*value prop is special to the Provider in this example of Provider
          (different from previous Provider). Secondary Providers, such as ColorContext can go inside or outside of
          the LanguageContext.Provider*/}
            <ColorContext.Provider value="red">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageStore>
        </div>
    )
  }
}

export default App;
