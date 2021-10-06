import React from 'react'
//import {useState, useEffect} from 'react'
//import Swal from 'sweetalert2/dist/sweetalert2.js'
//import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2'

function Answers(props) {

    //const [correcto, setCorrecto] = useState(false)
    
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            {
                props.answers.map((answer,key)=>{
                    return <button key={key} 
                    onClick={()=>answer.correct?Swal.fire({
                        icon: 'success',
                        title: 'Correcto!',
                        text: '100 puntos',
                        background: '#fff url(/images/trees.png)',
                        backdrop: `
                            rgba(0,0,123,0.4)
                            url("https://c.tenor.com/xzjlrhYq_lQAAAAi/cat-nyan-cat.gif")
                            left top
                            no-repeat
                        `
                    }):Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })}>{answer.answer}</button>
                })
            }
        </div>
    )
}

export default Answers
