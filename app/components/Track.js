import React from 'react';
import R from 'ramda';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';

class Track extends React.Component {

  constructor(){
    super();
    this.trackClick = this.trackClick.bind(this);
    this.onTrackEnds = this.onTrackEnds.bind(this);
    this.durationTimeUpdate = this.durationTimeUpdate.bind(this);
    this.state = {
      isMounted: true,
      time: '00:00'
    };
  }

  componentDidMount(){
    console.log("MOUNTED!!!")
    this.props.trackMount(true);


  }

  componentDidUpdate(){
    if(!R.isNil(window.playingTrack)) window.playingTrack.addEventListener("timeupdate", this.durationTimeUpdate);


  }

  trackClick(e){
    e.preventDefault();
    this.props.playTrack(this.props.track['id']);
    window.playingTrack.addEventListener("timeupdate", this.durationTimeUpdate);

  }

  durationTimeUpdate(){
    let minToShow, secToShow;
    let min = Math.floor(window.playingTrack.currentTime / 60);
    let s = parseInt(window.playingTrack.currentTime) - (min * 60);
    console.log(min);
    console.log(s);

    if (min < 10){
       minToShow = `0${min}`;
    }else{
        minToShow = min;
    }

    if (s < 10) {
      secToShow = `0${s}`
    }else{
      secToShow = s;
    }

    if(this.props.isTrackMounted){
      this.setState({
        time: `${minToShow}:${secToShow}`
      });
    }
  }
 
  onTrackEnds(){
    // this.props.next();
  }


  render() {
    let trackStyle = 'track';
    let duration = this.props.track['duration'];
    if( this.props.playingTrackId === this.props.track['id'] && (!R.isNil(this.props.playingTrackId)) && this.props.isTrackMounted ) {
      trackStyle = 'track-playing';
      duration = this.state.time;
    }
    return (<div styleName={trackStyle} onClick={this.trackClick}>
              <div styleName="trackname">{this.props.track['artist']} - {this.props.track['track']}</div>
              <div styleName="duration">{duration}</div>
            </div>)
  }

  componentWillUnmount(){
    this.props.trackMount(false);
    window.playingTrack.removeEventListener("timeupdate", this.durationTimeUpdate);


  }
}
export default CSSModules(Track, styles);