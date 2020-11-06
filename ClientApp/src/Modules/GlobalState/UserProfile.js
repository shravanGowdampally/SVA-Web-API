import React from "react";

var PreferencesDefault = {
  EntityCode: null,
  BusinessLineCode: null,
  Controller: null,
  ProductLineCode: null,
  Validator: null,
};

var UserProfile = {
  FirstName: "",
  IsUKLanguage: true,
  LastName: "",
  Roles: [],
  UTCode: "",
  UserDisplayName: "",
  Preferences: PreferencesDefault,
};
export const UserProfileContext = React.createContext({ User: [] });
export default UserProfile;
