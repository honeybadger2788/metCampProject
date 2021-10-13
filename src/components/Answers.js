import "../bootstrap-grid.css"
import React from 'react'
import helpers from "../helpers/helpers"
import Swal from 'sweetalert2'

function Answers(props) {

    const {answerA, answerB, answerC } = props.question.wrongAnswers[0]
    const answers = [
        { answer: props.question.rightAnswer, correct: true},
        { answer: answerA, correct: false},
        { answer: answerB, correct: false},
        { answer: answerC, correct: false}
    ]
    helpers.shufler(answers)

    
    return (
        <div className="container d-flex flex-column align-items-center col-md-6">
            {
                answers.map((answer,key)=>{
                    return <button className="buttonAnswer m-3" key={key} 
                    onClick={()=>{
                        if(answer.correct){
                            Swal.fire({
                                icon: 'success',
                                title: 'Correcto!',
                                text: props.question.score,
                                background: '#fff url(/images/trees.png)',
                                backdrop: `
                                    rgba(0,0,123,0.4)
                                    url("https://c.tenor.com/xzjlrhYq_lQAAAAi/cat-nyan-cat.gif")
                                    left top
                                    no-repeat
                                `,
                                showConfirmButton: false,
                                timer: 3000
                            })
                            props.scoreUpdate(props.question.score)
                            props.nextQuestion()
                        }else{
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Mejor suerte la próxima!',
                                showConfirmButton: false,
                                timer: 3000
                              })
                              props.nextQuestion()
                        }
                        // seleccionamos todos los botones de respuestas
                        let buttons = document.querySelectorAll("button.buttonAnswer")
                        // y los bloqueamos
                        for (let i = 0; i < buttons.length; i++) {
                            buttons[i].setAttribute("disabled","disabled")
                        }
                    }}>{answer.answer}</button>
                })
            }
        </div>
    )
}

export default Answers
