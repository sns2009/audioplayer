import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';

class PlayPause extends React.Component {

  render() {
    return (<div styleName="play"> 
    </div>)
  }
}
export default CSSModules(PlayPause, styles);
