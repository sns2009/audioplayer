import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';
import Playingnow from './Playingnow';
import Progressbar from './Progressbar';
import Previous from './Previous';
import PlayPause from './PlayPause';
import Next from './Next';
import Volume from './Volume';
import Search from './Search';
import Playlist from './Playlist'


class Audioplayer extends React.Component {

  render() {
    return (<div styleName="audioplayer">
              <h1>Audioplayer</h1>
                <div styleName="player">
                  <Playingnow />
                  <Progressbar />
                  <div styleName="track-constrols">
                    <Previous />
                    <PlayPause />
                    <Next />
                    <Volume />
                  </div>
                </div>
                <Search />
                <Playlist />


            </div>);
  }
}
export default CSSModules(Audioplayer, styles);
