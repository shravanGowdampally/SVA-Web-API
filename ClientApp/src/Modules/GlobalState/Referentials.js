import React from "react";

var Referentials = {
  BusinessLineReferential: [],
  ClientRicosTypeReferential: [],
};

export const ReferentialsContext = React.createContext({
  referentials: Referentials,
});
export default Referentials;
