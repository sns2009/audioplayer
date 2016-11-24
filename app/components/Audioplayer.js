import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';
import Trackname from './Trackname';
import Progressbar from './Progressbar';
import Previous from './Previous';
import Play from './Play';
import Next from './Next';
import Volume from './Volume';
import Search from './Search';
import Playlist from './Playlist'


class Audioplayer extends React.Component {

  render() {
    return (<div styleName="audioplayer">
              <h1>Audioplayer</h1>
                <Trackname />
                <Progressbar />
                <div styleName="track-constrols">
                  <Previous />
                  <Play />
                  <Next />
                </div>
                <Volume />
                <Search />
                <Playlist />


            </div>);
  }
}
export default CSSModules(Audioplayer, styles);
