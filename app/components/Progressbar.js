import React from 'react';
import R from 'ramda';
import CSSModules from 'react-css-modules';
import styles from '../../css/style.css';


class Progressbar extends React.Component {

  constructor(){
    super();
    this.timelineUpdate = this.timelineUpdate.bind(this);
    this.timelineClick = this.timelineClick.bind(this);
    this.state = {timelineWidth: 0};
  }

  componentDidUpdate(){
    if(!R.isNil(window.playingTrack)) window.playingTrack.addEventListener("timeupdate", this.timelineUpdate);


  }



  timelineUpdate(){
    const duration = window.playingTrack.duration;
    const currentTime = window.playingTrack.currentTime;
    const width = this.progressbar.getBoundingClientRect().width;
    this.setState({
      timelineWidth: currentTime*width/duration
    })
  }

  timelineClick(e){

    if(this.props.isPlaying) {
      let newTimelineWidth = +(e.pageX - e.currentTarget.getBoundingClientRect().left);
      let time = window.playingTrack.duration * newTimelineWidth / e.currentTarget.getBoundingClientRect().width;
      window.playingTrack.currentTime = time;
      this.setState({
        timelineWidth: newTimelineWidth
      });
    }
  }

  render() {
    let timeline = {height: '100%', 
                    width: `${this.state.timelineWidth}px`, 
                    backgroundColor: 'black'};
    return  (<div onClick={this.timelineClick} ref={(elem) => { this.progressbar = elem; }} 
                    styleName="progressbar">
              <div style={timeline}></div> 
            </div>)
  }
}
export default CSSModules(Progressbar, styles);
