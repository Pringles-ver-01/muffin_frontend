import React, {useEffect, useState} from "react";
import { BudgetHistory, TotalBudget, HoldingShares } from "./index";
import "./portfoliopage.style.css";
import Navbar from "../logined_navbar/Navbar";
import Menu from "../menu/Menu";
import axios from "axios";



const PortfolioPage = () => {
  const [holding,setHolding]=useState([]);
  const portfolioContent = [
    { title: "보유종목", content: <HoldingShares holding={holding} setHolding={setHolding}/> },
    { title: "거래내역", content: <BudgetHistory holding={holding} setHolding={setHolding}/> },
  ];
  const [user, setUser] = useState("");


  useEffect(() => {
    axios
      .get(`http://localhost:8080/assets/holdingCount/${JSON.parse(sessionStorage.getItem("logined_user")).userId}`)
      .then((response) => {
        console.log(`${JSON.stringify(response.data.holdingCount)}  : HoldingShares java useEffect then`);
        setHolding(response.data.holdingCount)

      })
      .catch((error) => {
        console.log(`HoldingShares useEffect catch`);
        throw error;
      });
  }, [user]);


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
              <div className="documentroom_text">포트폴리오</div>
              <TotalBudget />
              <div className="tab_portfolio_container">
                {portfolioContent.map((section, index) => (
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
