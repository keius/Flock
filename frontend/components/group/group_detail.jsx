import React from 'react';
import {Link} from 'react-router-dom';

const GroupDetail = ({group}) => {

  return (
    <div className="group-background">
      <div className="group-banner">
          {group.image_url}
      </div>
      <div className="group-details">
        {group.owner_id}
        {group.title}
        {group.description}
        {group.location}
      </div>

      <button className="button" onClick={createMembership}>Join Group</button>

      <button className="button" onClick={deleteMembership}>Leave Group</button>

    </div>
  );
};

export default GroupDetail;
