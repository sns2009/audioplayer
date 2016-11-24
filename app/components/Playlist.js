import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';
import Track from './Track';

class Playlist extends React.Component {

  render() {
    return (<Track />
    )
  }
}
export default CSSModules(Playlist, styles);
