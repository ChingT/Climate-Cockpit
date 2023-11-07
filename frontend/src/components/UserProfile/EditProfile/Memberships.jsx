import { useState } from "react";
import { LikedThingsContainer } from "../Profile/ProfileData/ProfileData.style.js";
import { ProfileButton } from "../Profile/ProfileHeader.style.js";

const Memberships = ({ things, setUserData, userData }) => {
  const [newThing, setNewThing] = useState("");

  const submitNewThing = (e) => {
    e.preventDefault();
    if (newThing.length > 0) {
      setUserData({ ...userData, memberships: [...things, newThing] });
      setNewThing("");
    }
  };

  const removeThing = (e) => {
    const thingToRemove = e.target.previousSibling.innerHTML;
    setUserData({
      ...userData,
      memberships: things.filter((thing) => thing !== thingToRemove),
    });
  };

  return (
    <>
      <div className={"input-field things-liked"}>
        <label>Memberships</label>
        <LikedThingsContainer>
          {things?.map((thing) => {
            return (
              <li key={thing}>
                <span>{thing}</span>
                <button onClick={removeThing}>&#10005;</button>
              </li>
            );
          })}
        </LikedThingsContainer>
        <form onSubmit={submitNewThing} className="input-submit-wrapper">
          <input
            type="text"
            id="memberships"
            onChange={(e) => setNewThing(e.target.value)}
            value={newThing}
            placeholder={"Type something ..."}
          />
          <ProfileButton onClick={submitNewThing}>Add</ProfileButton>
        </form>
      </div>
    </>
  );
};

export default Memberships;
