import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./newsDetail.style.css";
import Navbar from "../../logined_navbar/Navbar";
import Menu from "../../menu/Menu";

const NewsDetail = () => {
  const [contents, setContents] = useState(
    "테슬라, 아마존, 구글 등 해외 우량주식을 직접 구매하려는 개인투자자들의 바람이 거세다. 해외주식 결제금액은 매년 사상 최고치를 경신하고 있다.\n" +
      "\n" +
      "실제 코로나19(COVID-19)에도 불구하고 놀라운 회복세를 보이고 있는 해외시장에서 큰 수익을 얻는 투자사례들도 상당하다.\n" +
      "\n" +
      "다만 미국 시장 쏠림 현상이 심화됐다. 절대적인 거래액은 늘지만 오히려 투자처는 좁아진 것이다.\n" +
      "\n" +
      "이러한 가운데 국내 증권사 리포트도 없는 소수시장을 개척하는 직구족들이 있다. 이탈리아, 필리핀, 남아공 등 전체 해외주식 결제액에서 차지하는 비중은 미미하지만 남들과 다른 전략을 통해 수익을 실현하려는 움직임이다.\n" +
      "\n" +
      "증권업계도 이같은 '미개척지' 개발이 필요하다는 데 공감하지만 기본적으로 해외종목에 대한 정보접근성이 제한되는 탓에 고객들에게 주요국 우량주 중심으로 종목을 추천할 수밖에 없다는 입장을 보였다.\n" +
      "27일 예탁결제원에 따르면 올해 상반기 해외주식 결제금액은 709억1000만달러(약 85조4000억원)로 사상 최고기록을 세웠다. 지난해 하반기(229억1000만달러) 대비 209.5%나 증가한 규모다.\n" +
      "\n" +
      "특히 미국 시장 편중세가 두드러졌다. 같은기간 미국시장 결제금액은 623억4000만달러로 전체 시장 중 87.9%나 차지했다. 미국 비중은 △2019년 상반기 70.4% △2019년 하반기 79.1%에 이어 급증세다.\n" +
      "\n" +
      "결제금액은 폭발적으로 증가하지만 시장은 미국에 극단적으로 쏠리는 경향이 강화된 것이다.\n" +
      "\n" +
      "이는 'FAANG'로도 불리는 페이스북, 아마존, 애플, 넷플릭스, 구글 등 대표적인 기술주들이 미국증시에 다수 포진했기 때문으로 보인다. 게다가 국내증권사들도 최근 몇 년 사이 미국 우량종목들에 대한 리포트를 크게 늘리며 정보접근성이 높아진 것도 영향을 미친 것으로 풀이된다.\n"
  );
  const [title, setTitle] = useState(
    "세계로 뻗는 개미들, 필리핀·이탈리아에서 이 주식 샀다"
  );
  const [regDate, setRegDate] = useState("2020-07-28");
  const [keyword, setKeyword] = useState("테슬라");
  const [image, setImage] = useState(
    "https://imgnews.pstatic.net/image/008/2020/07/27/0004445977_001_20200727145803090.jpg?type=w647"
  );

  const concernedNews = (e) => {
    alert(`뉴스 저장 요청`);
  };
  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />
          <div>
            <div className="documentdetaildiv">
              <div className="newsDetailTitle">
                <div className="newsTitle1">{title}</div>
                <div className="Title2">2020-08-06 20:47</div>
              </div>
            </div>
            <div className="contentdetaildiv">
              <img src={image} className="detail_content" />
              <div className="detail_content">
                {contents.split("\n").map(function (item, idx) {
                  return (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  );
                })}
              </div>
              <Link to="/news" className="list_button">
                목록
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
