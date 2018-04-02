import React from 'react';
import PropTypes from 'prop-types';

const baseUrl = 'http://localhost:3000/';

const MainContent = props => {
  const { profile_image } = props.currentProfile;
  let profileImage = null;
  if (profile_image) {
    profileImage = <img className="profile-image" src={baseUrl + props.currentProfile.profile_image} alt="Login" />;
  }
  return (
    <div className="container padding-top-20px">
      <div className="row">
        <div className="col-sm-3 no-padding">{profileImage}</div>
        <div className="col-sm-9">Hello World</div>
      </div>
    </div>
  );
};

MainContent.propTypes = {
  currentProfile: PropTypes.shape({
    id: PropTypes.string,
    user_id: PropTypes.string,
    email: PropTypes.string,
    title: PropTypes.string,
    sex: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    middle_name: PropTypes.string,
    work_destination: PropTypes.string,
    address_1: PropTypes.string,
    address_2: PropTypes.string,
    address_3: PropTypes.string,
    profile_image: PropTypes.string
  })
};

MainContent.defaultProps = {
  currentProfile: {}
};

export default MainContent;
