import { useState } from "react"
import reactPNG from '../../assets/react-core-concepts.png'
import './header.css'
function makeWord(){
    const randomNumber = Math.floor(Math.random()*arrOfWords.length)
    return arrOfWords[randomNumber];
  }
  const arrOfWords = [
    'Фундаментaльные',
    'Чёткие',
    'Крутые'
    ];
export default function (){
    const [word, setWord] = useState(arrOfWords[0])
    return(
        <>
        <header>
          <img src={reactPNG} alt="" />
          <h1>{word} основы React</h1>
          <ol>
            <li>Название компонента должно начаться с большой буквы</li>
            <li>Если в название больше одного слова, то пишется через PascalCase</li>
            <li>Принято использовать семантико-верные названия(Header, MyHeader)</li>
          </ol>
          <button onClick={()=> setWord(makeWord())}>Нажми на меня</button>
        </header>
        </>
    )
}