import React from 'react';
import R from 'ramda';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';

class Playingnow extends React.Component {

  constructor(){
    super();
    this.updateName = this.updateName.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.state = {
      artistSong: 'Artist - Track'
    }
  }


  componentDidUpdate(){
    if(!R.isNil(window.playingTrack)) window.playingTrack.addEventListener('loadedmetadata', this.updateName);
    if(!R.isNil(window.playingTrack)) window.playingTrack.addEventListener('loadstart', this.setLoading);
    
  }

  setLoading(){
    console.log('start');
    this.setState({
      artistSong: 'Loading...'
    });
  }

  updateName(){
    let artistSongToShow = `${this.props.tracks[this.props.playingTrackId]['artist']} - ${this.props.tracks[this.props.playingTrackId]['track']}`;
    if(artistSongToShow.length > 30) artistSongToShow = artistSongToShow.substr(0,28).concat(' ...');
    console.log('update');
    this.setState({
      artistSong: artistSongToShow
    });
  }

  render() {

    return (<div styleName="playingnow">
            {this.state.artistSong}
            </div>)
  }
}
export default CSSModules(Playingnow, styles);
