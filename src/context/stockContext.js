import React, { useState } from "react";

<<<<<<< HEAD

=======
>>>>>>> master
const StockContext = React.createContext({});

const StockProvider = ({ children }) => {
  const [crawledStock, setCrawledStock] = useState({});
  return (
    <StockContext.Provider value={{ crawledStock, setCrawledStock }}>
      {children}
    </StockContext.Provider>
  );
};

export { StockContext, StockProvider };
