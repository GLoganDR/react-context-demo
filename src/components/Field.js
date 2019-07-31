import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    // had to add .language to this.context, because context is now a full object with
    // multiple properties instead of just a string
    const text = this.context.language === 'english'? 'Name' : 'Naam';

    return (
        <div className="ui field">
          <label htmlFor="name">{text}</label>
          <input name="name" />
        </div>
    );
  }
}

export default Field;
