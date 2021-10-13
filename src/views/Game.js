import "../bootstrap-grid.css"
import { useState, useEffect } from 'react';
import Answers from "../components/Answers"
import helpers from "../helpers/helpers"


const Game = () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    const [questions, setQuestions] = useState([])
    const [counter, setCounter] = useState(0)
    const [totalScore, setTotalScore] = useState(0)
    const [load, setLoad] = useState(false)

    function fetchQuestions(){
        fetch('https://6141ec414d16670017ba2a7b.mockapi.io/api/v1/questions',requestOptions)
        .then((response) => response.json())
        .then((result) => {
            helpers.shufler(result)
            return (
                setQuestions(result),
                setLoad(true)
                )
        })
        .catch((error) => {
            return error
        })
    }

    function scoreUpdate (currentScore) {
        console.log(currentScore)
        setTotalScore(totalScore + currentScore)
    } 

    function restart(){
        setCounter(0)
        setTotalScore(0)
        fetchQuestions() //ver cómo hacer para que vuelva a desordenar las preguntas
    }    

    function addCounter(){
        setCounter(counter + 1)
        console.log(counter)
    }

    useEffect(() => {
        fetchQuestions()
    },[])

    return (
        <div className="container col-6">
        <h1>Mi juego de preguntas y respuestas</h1>
        { counter<questions.length?
        <button className="" onClick={addCounter}> Saltear Pregunta</button>:
        (
            <>
        <h4>Haz llegado al final del juego</h4>
        <button className="" onClick={restart}>Reiniciar juego</button>
            </>
        )
        }
        {
            questions.map((question,key) => {
                if(key===counter){
                    return (
                        <>
                        <h4 key={key}>{question.question}</h4>
                        <Answers question={question} scoreUpdate={scoreUpdate} nextQuestion={addCounter}></Answers>
                        </>
                    )
                } 
            })
        }
        <h2>Puntaje total: {totalScore}</h2> 
        </div>
    )
}
export default Game