import React from 'react';

import profiles from './data/berlin.json';

function Facebook() {
  return profiles.map((profile) => UserId(profile));
}

function UserId(profile) {
  return (
    <div className="d-flex flex-row bd-highlight mb-3 f-b-box">
      <div>
        <img className="picture" src={profile.img} />
      </div>
      <div className="d-flex flex-column bd-highlight mb-3">
        <span>
          <strong>First Name</strong>
          {profile.firstName}
        </span>
        <span>
          <strong>Last Name</strong>
          {profile.lastName}
        </span>
        <span>
          <strong>Country</strong>
          {profile.country}
        </span>
        <span>
          <strong>Type:</strong>
          {profile.isStudent ? 'Student' : 'Teacher'}
        </span>
      </div>
    </div>
  );
}

export default Facebook;
