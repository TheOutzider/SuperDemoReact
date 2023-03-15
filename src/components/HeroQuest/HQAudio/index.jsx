import React from 'react';
import ReactPlayer from 'react-player';
import { VolumeMute } from 'react-bootstrap-icons';

class HQPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          playing: true,
          loop: true,
          playlist: 
          [
            "https://www.youtube.com/watch?v=cxb3P6hrfhM"
        ],
          currentIndex: 0,
          muted: false,
          volume: 0.6,
        
        };
      }
    
      handleMute = () => {
        this.setState({
          muted: !this.state.muted,
        });
      };
    
      getArtistAndTrackName = (url) => {
        const splitUrl = url.split(/[ /, ? ]+/) ;
        const artistName = splitUrl[2].toUpperCase();
        const trackName = splitUrl[3].toUpperCase();
        return {
          artistName,
          trackName,
          
        }
      }

    render() {
      const { playlist, currentIndex, volume, muted, loop} = this.state;
    
      return (
        <div>
          <ReactPlayer
            url={playlist[currentIndex]}
            playing={this.state.playing}
            muted={muted}
            loop={loop}
            width="0px"
            height="0px"
            volume={volume}
          />
          <div className='nav__HQ'>
          <VolumeMute className="button__HQ" onClick={this.handleMute} />
        </div>
        </div>
      );
    }
  
}

export default HQPlayer;  