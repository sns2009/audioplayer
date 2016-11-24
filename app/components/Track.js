import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';

class Track extends React.Component {

  render() {
    return (<div styleName="playlist">
              <div styleName="trackname">Artist - Trak</div>
              <div styleName="duration">2:57</div>
            </div>)
  }
}
export default CSSModules(Track, styles);