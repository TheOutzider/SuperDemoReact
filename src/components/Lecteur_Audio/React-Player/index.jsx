import React from "react";
import ReactPlayer from "react-player";
import { Play } from "react-bootstrap-icons";
import { Pause } from "react-bootstrap-icons";
import { ChevronBarRight } from "react-bootstrap-icons";
import { ChevronBarLeft } from "react-bootstrap-icons";
import { VolumeMute } from "react-bootstrap-icons";
import CD from "../../../assets/cd.png";

class YoutubePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      loop: true,
      playlist: [
        "https://soundcloud.com/dabeull/sets/dabeull-intimate-fonk-2019?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      "https://soundcloud.com/dabeull/sets/tracks?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing,",
      "https://soundcloud.com/dabeull/sets/dabeull-fonk-delight-ep?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",     ],
      currentIndex: 0,
      muted: false,
      volume: 0.3,
    };
  }

  handleVolumeChange = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleProgress = (state) => {
    console.log("onProgress", state);
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleNext = () => {
    const { playlist, currentIndex } = this.state;
    if (currentIndex < playlist.length - 1) {
      this.setState({
        currentIndex: currentIndex + 1,
      });
    }
  };

  handleBack = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.setState({
        currentIndex: currentIndex - 1,
      });
    }
  };

  handleMute = () => {
    this.setState({
      muted: !this.state.muted,
    });
  };

  getArtistAndTrackName = (url) => {
    const splitUrl = url.split(/[ /, ? ]+/);
    const artistName = splitUrl[2].toUpperCase();
    const trackName = splitUrl[4 ].toUpperCase();
    return {
      artistName,
      trackName,
    };
  };

  render() {
    const { playlist, currentIndex, playing, muted, volume, loop } = this.state;
    const { artistName, trackName } = this.getArtistAndTrackName(
      playlist[currentIndex]
    );

    return (
      <div>
        <ReactPlayer
          url={playlist[currentIndex]}
          playing={this.state.playing}
          muted={muted}
          width="0px"
          height="0px"
          volume={volume}
          loop={loop}
          config={{
            soundcloud: {
              options: { auto_play: true },
            },
          }}
        />
        <div className="cdPlayer">
          {playing ? (
            <img
              src={CD}
              id="vinyl"
              alt="a cd player need cd to play"
              className="compactDisq__active"
            />
          ) : (
            <img
              src={CD}
              id="vinyl"
              alt="a cd player need cd to play"
              className="compactDisq"
            />
          )}
        </div>
        <div className="allContainer"> 
              <div>
                <svg
                  className="waves"
                  viewBox="0 24 150 28"
                  preserveAspectRatio="none"
                  shapeRendering="auto"
                >
                  <defs>
                    <path
                      id="gentle-wave"
                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                  </defs>
                  <g className="parallax">
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="0"
                      fill="rgba(229,255,255,0.7)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="3"
                      fill="rgba(255,222,255,0.5)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="5"
                      fill="rgba(255,255,225,0.3)"
                    />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                  </g>
                </svg>
              </div>
              
              
            </div>
        <div className="trackBox">
          <div className="track">{trackName}</div>
        </div>
        <div className="artiste__box">
          <div className="artiste">{artistName}</div>
        </div>
        <div className="nav">
          <ChevronBarLeft className="button" onClick={this.handleBack} />
          <div onClick={this.handlePlayPause}>
            {playing ? (
              <Pause id="noPlaying" className="button" />
            ) : (
              <Play id="activePlaying" className="button" />
            )}
          </div>
          <ChevronBarRight className="button" onClick={this.handleNext} />
          <VolumeMute className="button" onClick={this.handleMute} />
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={this.handleVolumeChange}
        />
      </div>
      
    );
  }
}

export default YoutubePlayer;
