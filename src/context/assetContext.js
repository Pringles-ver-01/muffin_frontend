import React, { useState } from "react";

<<<<<<< HEAD

const AssetContext = React.createContext({});

=======
const AssetContext = React.createContext({});
>>>>>>> master

const AssetProvider = ({ children }) => {
  const [asset, setAsset] = useState({});
  return (
    <AssetContext.Provider value={{ asset, setAsset }}>
      {children}
    </AssetContext.Provider>
  );
};

export { AssetContext, AssetProvider };
