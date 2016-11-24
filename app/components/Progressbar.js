import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';

class Progressbar extends React.Component {

  render() {
    return  (<div styleName="progressbar"> 
            </div>)
  }
}
export default CSSModules(Progressbar, styles);
