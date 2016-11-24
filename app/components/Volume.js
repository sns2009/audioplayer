import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';

class Volume extends React.Component {

  render() {
    return (<div styleName="volume">
              <div styleName="speaker-high"></div>
              <div styleName="volume-bar"></div>
            </div>)
  }
}
export default CSSModules(Volume, styles);
