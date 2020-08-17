import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./recommendation.style.css";
import axios from "axios";

const RecommendationOpinion = () => {
  const url = "http://localhost:8080/boards";
  const [address, setAddress] = useState("/detail");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/recentBoard`)
      .then((response) => {
        response.data.content.map((item) => setArr((arr) => [...arr, item]));
      })
      .catch((error) => {
        console.log("실패");
      });
  }, []);

  return (
    <div className="recommendation_opinion_container">
      {arr.map((item) => (
        <div key={item.index}>
          <div>
            <div>
              <div>
                <div className="opinion_title_section">
                  <Link to="opinion/detail">
                    <div className="opinion_title">{item.boardTitle}</div>
                  </Link>

                  <div className="opinion_regdate">{item.boardRegdate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationOpinion;
