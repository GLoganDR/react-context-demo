import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// This is how you get the data/context from this.context
// class Button extends React.Component {
//   static contextType = LanguageContext;
//
//   render() {
//     const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
//     return <button className="ui button primary">{text}</button>;
//   }
// }

class Button extends React.Component {
  renderSubmit = value => {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  };

  renderButton = color => {
    return (
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {/*The below function is automatically called by the Consumer, and it will be called with whatever current value
            is in side of our pipe, and it will be the first arg inside of the arrow function. First time in React.
            Providing function as child to React Comp. Take child function and automatically invoke it for us.
            Logic could be done in a helper method on the Class. eg: renderSubmit() above.
            Consumer should be used when pulling from multiple different Context Objects inside of a single component.
            this.context should only be used when there is a SINGLE Context in the component.
            */}
            {value => this.renderSubmit(value)}
          </LanguageContext.Consumer>
        </button>
    );
  };

  render() {
    return (
        <ColorContext.Consumer>
          {color => this.renderButton(color)}
        </ColorContext.Consumer>
    );
  }
}

export default Button;
