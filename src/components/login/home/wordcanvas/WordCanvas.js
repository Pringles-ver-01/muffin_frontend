import React , {useState, useEffect} from "react";
import ReactWordcloud from 'react-wordcloud';

import axios from 'axios';


const WordCanvas = () => {

  const [name, setName] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/cloud`)
      .then((response)=>{
        console.log(response.data)
        setName(response.data)
      })
      .catch((error)=>{
        console.log(error)
        throw error
      })
  })

  return (
    <ReactWordcloud words={name} />

    /*data={setName} fontSizeMapper={fontSizeMapper} rotate={rotate} />*/
  );
};
/*
  const fontSizeMapper = word => Math.log2(word.value) * 5;
  const rotate = word => word.value % 360;
*/


/*

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



*/




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
