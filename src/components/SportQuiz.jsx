import './SportQuiz.css'
import Sport_Quizes from '../quiz_data/Sport_quiz_data/SportQuiz';
import Sport_Answers from '../quiz_data/Sport_quiz_data/Sport_Quiz_Answers';
import Right_Answers from '../quiz_data/Right Answers/Right_Answers_for_Sports';
import SportMarks from './Sport_Marks';
import { useState } from 'react';

const SportQuiz = () => {

    const answer_process = () => {

        if(checked_a == false && checked_b == false && checked_c == false && checked_d == false){
            alert('Please give a Answer..!!')
        }else{
            next_questions()

            set_quiz_counter()

            
        }
        
    } 

    let load_initial_question = Sport_Quizes[0].quiz_name
    let load_initial_answer_a = Sport_Answers[0].answer_a
    let load_initial_answer_b = Sport_Answers[0].answer_b
    let load_initial_answer_c = Sport_Answers[0].answer_c
    let load_initial_answer_d = Sport_Answers[0].answer_d


    const [ questions, setQuestions ] = useState(load_initial_question)

    let [ counter, setCounter ] = useState(0)

    let [answercounter, setAnswerCounter] = useState(0)

    const [ answer_a, setAnswer_A ] = useState(load_initial_answer_a)
    const [ answer_b, setAnswer_B ] = useState(load_initial_answer_b)
    const [ answer_c, setAnswer_C ] = useState(load_initial_answer_c)
    const [ answer_d, setAnswer_D ] = useState(load_initial_answer_d)




    


    let load_initial_right_answer = Right_Answers[0].right_answer


    let [ rightanswercounter, setRightAnswerCounter ] = useState(0)
    const [ rightanswer, setRightAnswer ] = useState(load_initial_right_answer)
    
    

    const next_answers = () => {
        if(answercounter >= Sport_Answers.length - 1){
            console.log('Answer Counter Stopped..!!')
        }else{
            setAnswerCounter(answercounter + 1)

            setAnswer_A(Sport_Answers[answercounter + 1].answer_a)
            setAnswer_B(Sport_Answers[answercounter + 1].answer_b)
            setAnswer_C(Sport_Answers[answercounter + 1].answer_c)
            setAnswer_D(Sport_Answers[answercounter + 1].answer_d)
        }
    }

    

    const next_right_answer = () => {
        

        if(rightanswercounter > Right_Answers.length - 1){
            console.log(`Right Answer Counter Stopped at ${rightanswercounter}`)
        }else{
            setRightAnswerCounter(rightanswercounter + 1)

            setRightAnswer(Right_Answers[rightanswercounter += 1].right_answer)


        }
    }


    
    
    const next_questions = () => {


        
        
        if(counter >= Sport_Quizes.length - 1){

            
            console.log(`Counter Stopped..at ${counter}!!`)  

            alert('Quizes end..!!')

            
        }else{

            setCounter(counter + 1)

            setQuestions(Sport_Quizes[counter += 1].quiz_name)

            console.log(counter)

            next_answers()

            next_right_answer()

            

            reset_checkbox_a()

            reset_checkbox_b()

            reset_checkbox_c()

            reset_checkbox_d()


    
        }

    }

    const [ quizcounter, setQuizCounter ] = useState(1)


    const set_quiz_counter = () => {

        setQuizCounter(quizcounter + 1)


        if(quizcounter <= 10){

            setQuizCounter(quizcounter + 1)
            
            console.log(quizcounter)


            
        }else{

            console.log('Quizes end..!!')

    
            
        }
    }

    const [ marks_count, setMarksCount ] = useState(0)


    const answer_check = (e) => {

        if(e.target.value == Right_Answers[rightanswercounter].right_answer){
            console.log('Answer Correct..!!')

            setMarksCount(marks_count + 10)


        }else{

            console.log('Answer Incorrect..!!')

            
        }


        
    }


    


    const [ checked_a, setChecked_A ] = useState(false)
    
    
    const set_a_checkbox = (e) => {


        setChecked_A(false)

        if(checked_a == false){

            setChecked_A(true)

            console.log(e.target.value)


            

            answer_check(e)
        }else{

            setChecked_A(false)
        }
    }

    const reset_checkbox_a = () => {
        setChecked_A(false)
    }


    const [ checked_b, setChecked_B ] = useState(false)

    const set_b_checkbox = (e) => {

        setChecked_B(false)

        if(checked_b == false){

            setChecked_B(true)

            console.log(e.target.value)

            answer_check(e)


        }else{

            setChecked_B(false)
        }
    }


    const reset_checkbox_b = () => {

        setChecked_B(false)
    }



    const [ checked_c, setChecked_C ] = useState(false)

    const set_c_checkbox = (e) => {

        setChecked_C(false)


        if(checked_c == false){
            setChecked_C(true)

            console.log(e.target.value)

            

            answer_check(e)

        }else{

            setChecked_C(false)
        }
    }

    const reset_checkbox_c = () => {

        setChecked_C(false)
    }

    const [ checked_d, setChecked_D ] = useState(false)


    const set_d_checkbox = (e) => {

        setChecked_D(false)

        if(checked_d == false){
            setChecked_D(true)

            console.log(e.target.value)

            answer_check(e)

        }else{

            setChecked_D(false)
        }
    }

    const reset_checkbox_d = () => {

        setChecked_D(false)
    }
     

    
    
    
    



    
    
    


    

   const set_quizes_and_marks = () => {
     
    if(quizcounter <= 10){

        return(
            <div>
                        
             <div className="quiz-counter">

                <h3 className='quiz-count'>Quiz : {quizcounter}/10</h3>


                


             </div>
                    
             <div className="sport-quiz-content">

                    <div className="sport-quiz-name-and-marks">
                            <h2>{questions}</h2>

                    </div>


                    <div className="sport-quiz-answers-grid">

                        <div className="sport-quiz-answer">
                            <h3><input type='checkbox' value={answer_a} checked={checked_a} onChange={set_a_checkbox} />  {answer_a}</h3>
                        </div>

                        <div className="sport-quiz-answer">
                            <h3><input type="checkbox" value={answer_b} checked={checked_b} onChange={set_b_checkbox} />   {answer_b}</h3>

                        </div>

                        <div className="sport-quiz-answer">
                            <h3><input type="checkbox" value={answer_c} checked={checked_c} onChange={set_c_checkbox} />   {answer_c}</h3>
                        </div>

                        <div className="sport-quiz-answer">
                            <h3><input type='checkbox' value={answer_d} checked={checked_d} onChange={set_d_checkbox} />    {answer_d}</h3>
                        </div>

                     </div>



                    <div className="button-section">


                            <div className="next-btn">
                                <button onClick={answer_process}>Next</button>
                            </div>

                    </div>

                </div>


            </div>
        )
     }

     else{

        return <SportMarks  marks={marks_count}/>
    }
   }
    

    
   


    
    
    
        
    
    

    
    return(
        
        <div>

            <div className="main-content">


                {set_quizes_and_marks()}
            
            
            </div>


    


           
        </div>


    )
}








export default SportQuiz;

