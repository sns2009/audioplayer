import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';

class Playingnow extends React.Component {

  render() {
    return (<div styleName="playingnow">
            Artist - Track
            </div>)
  }
}
export default CSSModules(Playingnow, styles);
