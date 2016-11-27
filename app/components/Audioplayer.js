import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';
import axios from 'axios';
import Playingnow from './Playingnow';
import Progressbar from './Progressbar';
import Previous from './Previous';
import PlayPause from './PlayPause';
import Next from './Next';
import Volume from './Volume';
import Search from './Search';
import Playlist from './Playlist'


class Audioplayer extends React.Component {

    componentDidMount(){
    console.log(window.playingTrack);
    }

    //  var audio = new Audio('https://freemusicarchive.org/music/listen/9679ffcc50755c75ded1bad8a11067cbb2bf0ac3');
    // audio.play();
    // audio.onloadedmetadata = function() {
    //   console.log(audio.duration / 60);
    // };
    
    // console.log(songs); 

  render() {
    return (<div styleName="audioplayer">
              <h1>Audioplayer</h1>
                <div styleName="player">
                  <Playingnow tracks={this.props.store.tracks}
                              playingTrackId={this.props.store.playingTrackId} />
                  <Progressbar isPlaying={this.props.store.isPlaying} />
                  <div styleName="track-constrols">
                    <Previous previous={this.props.previous}
                              isPlaying={this.props.store.isPlaying} />
                    <PlayPause  pause={this.props.pause}
                                play={this.props.play}
                                isPlaying={this.props.store.isPlaying}
                                playingTrackId={this.props.store.playingTrackId} />
                    <Next next={this.props.next}
                          isPlaying={this.props.store.isPlaying}/>
                    <Volume isPlaying={this.props.store.isPlaying}
                            volume={this.props.store.volume}
                            volumeBarWidth={this.props.store.volumeBarWidth}
                            setVolume={this.props.setVolume}
                             />
                  </div>
                </div>
                <Playlist fetching={this.props.store.fetching}
                          fetched={this.props.store.fetched}
                          tracks={this.props.store.tracks}
                          playingTrackId={this.props.store.playingTrackId}
                          isTrackMounted={this.props.store.isTrackMounted}
                          startTracksFetch={this.props.startTracksFetch}
                          tracksRecieved={this.props.tracksRecieved}
                          fetchTracksError={this.props.fetchTracksError}
                          playTrack={this.props.playTrack}
                          trackMount={this.props.trackMount}
                          next={this.props.next} />


            </div>);
  }
}
export default CSSModules(Audioplayer, styles);
