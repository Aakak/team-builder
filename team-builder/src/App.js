import React, { useState } from "react";
import "./App.css";

import MemberForm from "./components/MemberForm";
import Member from "./components/Member";

function App() {
  const [members, setMembers] = useState([]);

  const addNewMember = member => {
    const newMembers = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMembers]);
  };

  return (
    <div className="App">
      <h1>Lambda School New Team Member Sign up</h1>
      <MemberForm AddNewMember={addNewMember} />
      <Member members={members} />
    </div>
  );
}

export default App;
