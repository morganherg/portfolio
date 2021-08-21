// Example of A Carousel using slider from React-Slick and mapping multiple single cards

import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import * as landingPageService from "../../services/landingPageService";
import TrackSingle from "./TrackSingle";
import PlaylistSingle from "./PlaylistSingle";
import MemberSingle from "./MemberSingle";
import PropTypes from "prop-types";
import Slider from "react-slick";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

//import debug from "...";
//const _logger = debug.extend("LandingPage");

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  prevArrow: <NavigateBeforeIcon />,
  nextArrow: <NavigateNextIcon />,

  responsive: [
    {
      breakpoint: 1300,
      settings: { slidesToShow: 5, slidesToScroll: 5 },
    },
    {
      breakpoint: 940,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

class CarouselLP extends Component {
  constructor(props) {
    super(props);
    // _logger("Carousel Constructor with location", props.location);

    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    landingPageService
      .getTop10()
      .then(this.onGetTop10Success)
      .catch(this.onGetTop10Error);
  }

  onGetTop10Success = (response) => {
    //_logger({ content: response });
    let { contents, members, playlists } = response.item;
    this.setState(() => {
      return {
        mappedContent: contents?.map(this.mapContent),
        mappedPlaylist: playlists?.map(this.mapPlaylist),
        mappedMember: members?.map(this.mapMember),
      };
    });
  };

  onGetTop10Error = (error) => {
    // _logger(error);
  };

  mapContent = (oneContent) => {
    return (
      <TrackSingle
        key={`Top10-${oneContent.id}`}
        content={oneContent}
        onClick={this.onContentClick}
      />
    );
  };

  onContentClick = (oneContent) => {
    // _logger(oneContent);
    const { history } = this.props;
    history.push(`/track/${oneContent.id}`);
  };

  mapPlaylist = (onePlaylist) => {
    return (
      <PlaylistSingle
        key={`Top10-${onePlaylist.playlistId}`}
        playlists={onePlaylist}
        onClick={this.onPlaylistClick}
      />
    );
  };

  onPlaylistClick = (onePlaylist) => {
    // _logger("Open Playlist", onePlaylist);
    const { history } = this.props;
    history.push(`/playList/${onePlaylist.id}`);
  };

  mapMember = (oneMember) => {
    return (
      <MemberSingle
        key={`Top10-${oneMember.professionalName}`}
        members={oneMember}
        onClick={this.onMemberClick}
      />
    );
  };

  onMemberClick = (oneMember) => {
    //_logger(oneMember);
    const { history } = this.props;
    history.push(`/musician/${oneMember.id}`, { musician: oneMember });
  };

  render() {
    return (
      <Fragment>
        {this.state.mappedContent && (
          <div className="container mt-4">
            <div className="header">
              <h3> Trending Tracks</h3>
            </div>
            <Slider {...settings}>{this.state.mappedContent}</Slider>
          </div>
        )}
        {this.state.mappedPlaylist && (
          <div className="container mt-4">
            <div className="header">
              <h3>Popular Playlists</h3>
            </div>
            <Slider {...settings}>{this.state.mappedPlaylist}</Slider>
          </div>
        )}
        {this.state.mappedMember && (
          <div className="container mt-4">
            <div className="header">
              <h3> Recommended Members</h3>
            </div>
            <Slider {...settings}>{this.state.mappedMember}</Slider>
          </div>
        )}
      </Fragment>
    );
  }
}

CarouselLP.propTypes = {
  currentUser: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    userName: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};
export default withRouter(CarouselLP);
