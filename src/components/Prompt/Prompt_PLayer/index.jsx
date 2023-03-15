import React from 'react';
import ReactPlayer from 'react-player';
import { VolumeMute } from 'react-bootstrap-icons';

class PromptPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          playing: true,
          loop: true,
          playlist: 
          [
            "https://www.youtube.com/watch?v=iFoKGo0LwlM"
        ],
          currentIndex: 0,
          muted: false,
          volume: 0.3,
        
        };
      }
    
      handleMute = () => {
        this.setState({
          muted: !this.state.muted,
        });
      };
    

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
          <div className='nav__prompt'>
          <VolumeMute className="button__prompt" onClick={this.handleMute} />
        </div>
        </div>
      );
    }
  
}

export default PromptPlayer;  