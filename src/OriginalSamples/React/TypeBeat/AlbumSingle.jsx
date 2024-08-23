//Example of a Single Card to be mapped in another component

import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Link } from "@material-ui/core";

// import debug from "..";
// const _logger = debug.extend("LandingPage");

AlbumSingle.propTypes = {
  currentUser: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    userName: PropTypes.string,
  }),
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
  albums: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    professionalName: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default function AlbumSingle(props) {
  const oneAlbum = props.albums;
  // _logger(props.albums);

  const onError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://demo.tutorialzine.com/2015/03/html5-music-player/assets/img/default.png";
    // _logger(e.target.src);
  };

  const onAlbumClick = () => {
    props.onClick(oneAlbum);
  };

  return (
    <Card
      className="mb-4 mr-1"
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <img
        alt="..."
        className="card-img-top"
        style={{ borderRadius: 10, aspectRatio: "1/1" }}
        src={oneAlbum.imageUrl}
        onError={onError}
      />
      <CardContent className="p-3">
        <Link
          component="h5"
          className="card-title font-weight-bold font-size-lg"
          color="inherit"
          onClick={onAlbumClick}
        >
          {oneAlbum.name}
        </Link>
        <p className="card-text">{oneAlbum.professionalName}</p>
      </CardContent>
    </Card>
  );
}
