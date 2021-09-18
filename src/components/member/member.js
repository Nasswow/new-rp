const Member = ({ member, backToMembers }) => {
  return (
    <div>
      <h5>Member Information</h5>
      <div>{member.name}</div>
      <div>{member.id}</div>
      <button onClick={backToMembers}>Back to members list</button>
    </div>
  );
};

export default Member;
