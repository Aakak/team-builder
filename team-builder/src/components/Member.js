import React from "react";

const Member = props => {
  return (
    <>
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h1>Thank you!</h1>
          <p>Check your email.</p>
          <div className="submit-card" key={member.id}>
            <h4>{member.name}</h4>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Member;
