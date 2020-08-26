import React, { useState } from "react";

<<<<<<< HEAD
const AssetContext = React.createContext({});
=======
const AssetContext = React.createContext();
>>>>>>> efdffe48a4a430d281b171eb9e684aa9ecd1a444

const AssetProvider = ({ children }) => {
  const [asset, setAsset] = useState({});
  return (
    <AssetContext.Provider value={{ asset, setAsset }}>
      {children}
    </AssetContext.Provider>
  );
};

export { AssetContext, AssetProvider };
