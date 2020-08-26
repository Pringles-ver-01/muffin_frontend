import React, { useState } from "react";

<<<<<<< HEAD
const StockContext = React.createContext({});
=======
const StockContext = React.createContext();
>>>>>>> efdffe48a4a430d281b171eb9e684aa9ecd1a444

const StockProvider = ({ children }) => {
  const [crawledStock, setCrawledStock] = useState({});
  return (
    <StockContext.Provider value={{ crawledStock, setCrawledStock }}>
      {children}
    </StockContext.Provider>
  );
};

export { StockContext, StockProvider };
