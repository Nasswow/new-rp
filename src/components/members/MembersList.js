import { Button, SmallButton } from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import "./MembersList.css";
const MembersList = (props) => {
  const members = useSelector((state) => state.members);
  const addNewMember = () => {
    props.openUpdateForm();
  };
  return (
    <div className="members-list-container">
      <h1>ETEA Members</h1>
      {/* <div className="members">
        {members.map((member) => (
          <div key={member.id} className="member-container">
            <div className="member-name">
              {member.name} ({member.id})
            </div>
            <div
              onClick={() => {
                props.imageClickHandler(member);
              }}
              className="member-image"
            ></div>
            <div className="member-base">
              {member.base} Base {member.position}
            </div>
            {props.admin && (
              <div className="member-base">
                <SmallButton
                  value="Update"
                  style={{ marginRight: "5px" }}
                  onClick={() => {
                    props.openUpdateForm(member);
                    console.log(member);
                  }}
                />
                <SmallButton
                  value="Delete"
                  onClick={() => {
                    props.deleteHandler(member.id);
                    console.log(member.id);
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div> */}
      {props.admin && (
        <Button
          value="Register New Members"
          onClick={addNewMember}
          type="submit"
        />
      )}
    </div>
  );
};

export default MembersList;
