import { useState, useEffect } from 'react';
import Answers from "./Answers"
import helpers from "../helpers"


const Game = () => {
    const [questions, setQuestions] = useState([])
    var counter = 0

    async function fetchQuestions() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const preguntas = await fetch('https://6141ec414d16670017ba2a7b.mockapi.io/api/v1/questions',
        requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result
        })
        .catch((error) => {
            return error
        })
        console.log('Preguntas:', preguntas)
        helpers.shufler(preguntas)
        setQuestions(preguntas)
    }

    useEffect(() => {
        //Acá va el fetch
        fetchQuestions()
    }, [])

    return (
        <div>
        <h1>Mi juego de preguntas y respuestas</h1>
        <button onClick={()=>console.log(counter++)}> Siguiente Pregunta</button>
        {
            questions.map((question,key)=>{
                const {answerA, answerB, answerC } = question.wrongAnswers[0]
                const answers = [
                    { answer: question.rightAnswer, correct: true},
                    { answer: answerA, correct: false},
                    { answer: answerB, correct: false},
                    { answer: answerC, correct: false}
                ]
                helpers.shufler(answers)
                return (
                    <>
                <h4 key={key}>{question.question}</h4>
                <Answers answers={answers}></Answers>
                    </>
                )
            })
        }
        </div>
    )
}
export default Game