import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english'? 'Name' : 'Naam';

    return (
        <div className="ui field">
          <label htmlFor="name">{text}</label>
          <input name="name" />
        </div>
    );
  }
}

export default Field;
