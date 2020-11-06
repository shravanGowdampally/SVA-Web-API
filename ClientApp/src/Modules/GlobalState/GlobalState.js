import React, { useEffect, useState } from "react";
import UserProfileDefault, { UserProfileContext } from "./UserProfile";
import ReferentialsDefault, { ReferentialsContext } from "./Referentials";
import shared from "../Shared";
import Referentials from "./Referentials";

const { services } = shared;

const GlobalState = (props) => {
  const [userProfile, setUserProfile] = useState(UserProfileDefault);
  const [referentials, setReferentials] = useState(ReferentialsDefault);

  useEffect(() => {
    services.get(
      "certoUser/Details",
      userProfile.IsUKLanguage,
      (response) => {
        setUserProfile(response);
      },
      (message) => {}
    );
  }, []);

  useEffect(() => {
    services.get(
      "certoReferential/All",
      userProfile.IsUKLanguage,
      (response) => {
        setReferentials(response);
      },
      (message) => {}
    );
  }, [userProfile]);

  const updateUserProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
  };

  return (
    <UserProfileContext.Provider
      value={{
        user: userProfile,
        update: updateUserProfile,
      }}
    >
      <ReferentialsContext.Provider value={{ referentials: Referentials }}>
        {props.children}
      </ReferentialsContext.Provider>
    </UserProfileContext.Provider>
  );
};

export default GlobalState;
