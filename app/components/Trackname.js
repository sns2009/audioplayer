import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';

class Trakcname extends React.Component {

  render() {
    return (<div styleName="trakcname">
            Artist - Track
            </div>)
  }
}
export default CSSModules(Trakcname, styles);
