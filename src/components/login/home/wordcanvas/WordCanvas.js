import React, {useEffect, useState} from "react";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import axios from 'axios'

const WordCanvas = () => {
  const resizeStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };

  const [wordList, setWordList] = useState([
  ])
  const fontSizeMapper = word => Math.log2(word.value) * 5;
  const rotate = word => word.value % 360;

  useEffect(()=>{
    axios.get(`http://localhost:5000/cloud`)
      .then((res)=>{
        console.log(res.data.test)
        setWordList(res.data.test)
      })
      .catch((err)=>{
        throw err
      })
  })

  return (
    <>
        <div>
          <ReactWordcloud words={wordList}
                          fontSizeMapper={fontSizeMapper} rotate={rotate}/>
        </div>
    </>
  );
};

export default WordCanvas;
