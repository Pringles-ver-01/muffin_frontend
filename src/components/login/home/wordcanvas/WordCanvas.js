import React , {useState, useEffect} from "react";
import ReactWordcloud from "react-wordcloud";
import WordCloud from "react-d3-cloud"
import axios from 'axios';

const WordCanvas = () => {

  const word = "테스트"

  const selectDate = ({date}) =>{
    //날짜를 선택하고, 날짜를 params 로 보내서 flask 에서 선택된 날짜로 가져오게 하고 싶다
    useEffect(()=>{
      axios.get(`http://localhost:5000/cloud`)
        .then((response)=>{
          console.log('들어옴')
        })
        .catch((error)=>{
          console.log('엑시오스 에러')
          throw error
        })
    })
  }





  return (
    <>
      {word}
    </>
  );
};

/*
 const [topics, setTopics] = useState([
   {
   text: "word",
   value: "frequency",
   }
   ])
  useEffect(()=>{
    alert('워드클라우드 시도')
    axios.get(`http://localhost:5000/wordcloud`)
      .then((response)=>{
        response.data.list.map((item) => (
          setTopics((topics)=>[...topics, item])
      ))
        })
      .catch((error)=>{
        throw error
      })
  })*/


export default WordCanvas;
