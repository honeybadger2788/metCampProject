import { useState, useEffect } from 'react';
import Answers from "../components/Answers"
import helpers from "../helpers"


const Game = () => {
    const [questions, setQuestions] = useState([])
    const [counter, setCounter] = useState(0)

    const [totalScore, setTotalScore] = useState(0)

    function newScore (currentScore) {
        console.log(currentScore)
        setTotalScore(totalScore + currentScore)
    } 

    function restart(){
        setCounter(0)
        setTotalScore(0)
    }    

    function addCounter(){
        setCounter(counter + 1)
        console.log(counter)
    }

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        fetch('https://6141ec414d16670017ba2a7b.mockapi.io/api/v1/questions',requestOptions)
        .then((response) => response.json())
        .then((result) => {
            helpers.shufler(result)
            setQuestions(result)
        })
        .catch((error) => {
            return error
        })
    }, [])

    return (
        <div>
        <h1>Mi juego de preguntas y respuestas</h1>
        { counter<questions.length?
        <button onClick={addCounter}> Saltear Pregunta</button>:
        (
            <>
        <h4>Haz llegado al final del juego</h4>
        <button onClick={restart}>Reiniciar juego</button>
            </>
        )
        }
        {
            questions.map((question,key) => {
                if(key===counter){
                    return (
                        <>
                        <h4 key={key}>{question.question}</h4>
                        <Answers question={question} scoreUpdate={newScore} nextQuestion={addCounter}></Answers>
                        </>
                    )
                } 
            })
        }
        <h1>Puntaje total: {totalScore}</h1> 
        </div>
    )
}
export default Game