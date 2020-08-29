import React, {useContext, useEffect, useState} from "react";
import { BudgetHistory, TotalBudget, HoldingShares } from "./index";
import "./portfoliopage.style.css";
import Navbar from "../logined_navbar/Navbar";
import Menu from "../menu/Menu";
import axios from "axios";
import { AssetContext } from "../../../context";

const PortfolioPage = () => {
  const { asset, setAsset } = useContext(AssetContext);
  const portfolioContent = [
<<<<<<< HEAD
    { title: "보유종목", content: <HoldingShares asset={asset} setAsset={setAsset}/> },
    { title: "거래내역", content: <BudgetHistory asset={asset} setAsset={setAsset}/> },
=======
    {
      title: "보유종목",
      content: <HoldingShares asset={asset} setAsset={setAsset} />,
    },
    {
      title: "거래내역",
      content: <BudgetHistory />,
    },
>>>>>>> master
  ];


  useEffect(() => {
    axios
<<<<<<< HEAD
      .get(`http://localhost:8080/assets/holdingCount/${JSON.parse(sessionStorage.getItem("logined_user")).userId}`)
=======
      .get(
        `http://localhost:8080/assets/holdingCount/${
          JSON.parse(sessionStorage.getItem("logined_user")).userId
        }`
      )
>>>>>>> master
      .then((response) => {
        setAsset(response.data.holdingCount);
      })
      .catch((error) => {
        throw error;
      });
  }, [asset]);
<<<<<<< HEAD

=======
>>>>>>> master

  const useTabs = (initialTabs, allTabs) => {
    const [portfolioContentIndex, setPortfolioContentIndex] = useState(
      initialTabs
    );
    return {
      portfolioContentItem: allTabs[portfolioContentIndex],
      portfolioContentChange: setPortfolioContentIndex,
    };
  };
  const { portfolioContentItem, portfolioContentChange } = useTabs(
    0,
    portfolioContent
  );


  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />
          <div>
            <div className="documentroom_container">
<<<<<<< HEAD
              <div className="documentroom_text"/>
=======
              <div className="documentroom_text" />
>>>>>>> master

              <TotalBudget asset={asset} setAsset={setAsset} />

              <div className="tab_portfolio_container">
                {portfolioContent && portfolioContent.map((section, index) => (
                  <button
                    onClick={() => portfolioContentChange(index)}
                    className="link-list-tab"
                  >
                    {section.title}
                  </button>
                ))}
              </div>

              <div className="tab_portfolio_content_container">
                {portfolioContentItem.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
