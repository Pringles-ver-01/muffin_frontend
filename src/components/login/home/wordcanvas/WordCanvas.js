import React, {useEffect, useState} from "react";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import axios from 'axios'

const WordCanvas = () => {
  const callbacks = {
    getWordColor: word => word.value > 10 ? "red" : "blue",

    onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 10 ? "good" : "bad"}]`,
  }
  const options = {
    rotations: 1,
    rotationAngles: [0, -90],
    colors: ['#1f77b4','#ff7f0e','#2ca02c','#d62728','#9467bd','#8c564b'],
    fontFamily: 'impact',
    scale: 'sqrt',
    spiral: 'archimedean',
    fontSize: 100

  };
  const size = [500, 300];
  const [wordList, setWordList] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/cloud`)
      .then((res)=>{
        console.log(res.data)
        setWordList(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])

  return (
    <>
        <div>
          <ReactWordcloud
            words={wordList} size={size} options={options}
          />
        </div>
    </>
  );
};

export default WordCanvas;
