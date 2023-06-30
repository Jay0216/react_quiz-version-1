import { useState } from 'react';
import './CarQuiz.css'
import Car_Quiz from '../quiz_data/Car_quiz_data/CarQuiz';
import Car_Quiz_Answers from '../quiz_data/Car_quiz_data/Car_Quiz_Answers';
import Right_Answers_Car from '../quiz_data/Right Answers/Right_Answers_for_Car';
import CarMarks from './CarMarks';

const CarQuiz = () => {

    let load_initial_car_question = Car_Quiz[0].quiz_name

    const [ car_questions, setCarQuestions ] = useState(load_initial_car_question)
    let [ car_question_counter, setCarQuestionCounter ] = useState(0)


    let load_initial_answer_a = Car_Quiz_Answers[0].answer_a
    let load_initial_answer_b = Car_Quiz_Answers[0].answer_b
    let load_initial_answer_c = Car_Quiz_Answers[0].answer_c
    let load_initial_answer_d = Car_Quiz_Answers[0].answer_d


    const [ answer_a, setAnswer_A ] = useState(load_initial_answer_a)
    const [ answer_b, setAnswer_B ] = useState(load_initial_answer_b)
    const [ answer_c, setAnswer_C ] = useState(load_initial_answer_c)
    const [ answer_d, setAnswer_D ] = useState(load_initial_answer_d)


    let [ answer_counter, setAnswerCounter ] = useState(0)


    const set_next_answers = () => {

        if(answer_counter >= Car_Quiz_Answers.length - 1){
            console.log(`Car Answer Counter Stopped at ${answer_counter}`)

        }else{

            setAnswerCounter(answer_counter + 1)

            setAnswer_A(Car_Quiz_Answers[answer_counter + 1].answer_a)
            setAnswer_B(Car_Quiz_Answers[answer_counter + 1].answer_b)
            setAnswer_C(Car_Quiz_Answers[answer_counter + 1].answer_c)
            setAnswer_D(Car_Quiz_Answers[answer_counter + 1].answer_d)


        }
    }
     
    let load_initial_right_answer = Right_Answers_Car[0].right_answer

    const [ right_answer, setRightAnswer ] = useState(load_initial_right_answer)

    let [ right_answer_counter, setRightAnswerCount ] = useState(0)

    const set_next_right_answer = () => {

        if(right_answer_counter >= Right_Answers_Car.length - 1){
            console.log(`Car Right Answer Counter is Stopped at ${right_answer_counter}`)
        }else{

            setRightAnswerCount(right_answer_counter + 1)

            setRightAnswer(Right_Answers_Car[right_answer_counter + 1].right_answer)

            console.log(right_answer)
        }
    }


    const set_next_question = () => {

        if(car_question_counter >= Car_Quiz.length - 1){

            console.log(`Car Quiz Counter Stopped at ${car_question_counter}`)

            alert('Quizes End..!!')



        }else{


            setCarQuestionCounter(car_question_counter + 1)

            setCarQuestions(Car_Quiz[car_question_counter + 1].quiz_name)


            set_next_answers()

            set_next_right_answer()


            reset_checked_a()

            reset_checked_b()

            reset_checked_c()

            reset_checked_d()


        }
    } 

    const [ mark_count, setMarkCount ] = useState(0)

    const answer_checking = (e) => {
        

        if(e.target.value == Right_Answers_Car[right_answer_counter].right_answer){

            console.log('Answer Correct..!!')

            setMarkCount(mark_count + 10)





        }else{
            console.log('Answer Incorrect..!!')
        }
    }




    const [ check_a, setCheck_A ] = useState(false)


    const handle_checked_a = (e) => {

        setCheck_A(false)

        if(check_a == false){
            setCheck_A(true)

            console.log(e.target.value)

            answer_checking(e)


        }else{

            setCheck_A(false)
        }
    }


    const reset_checked_a = () => {
        setCheck_A(false)
    }




    const [ check_b, setCheck_B ] = useState(false)

    const handle_checked_b = (e) => {

        setCheck_B(false)


        if(check_b == false){


            setCheck_B(true)

            console.log(e.target.value)

            answer_checking(e)



        }else{


            setCheck_B(false)


        }
    } 

    const reset_checked_b = () => {
        setCheck_B(false)
    }




    const [ check_c, setCheck_C ] = useState(false)


    const handle_checked_c = (e) => {

        setCheck_C(false)

        if(check_c == false){

            setCheck_C(true)

            console.log(e.target.value)

            answer_checking(e)


        }else{

            setCheck_C(false)
        }
    }

    const reset_checked_c = () => {

        setCheck_C(false)
    }






    const [ check_d, setCheck_D ] = useState(false)


    const handle_checked_d = (e) => {

        setCheck_D(false)

        if(check_d == false){

            setCheck_D(true)

            console.log(e.target.value)

            answer_checking(e)


        }else{

            setCheck_D(false)
        }
    }

    const reset_checked_d = () => {

        setCheck_D(false)
    }

    const [ car_quiz_counter, setCarQuizCount ] = useState(1)

    const set_car_quiz_count = () => {

        

        if(car_quiz_counter <= 10){

            setCarQuizCount(car_quiz_counter + 1)
            

        }else{



            alert('Quizes End..!!')

        }

    } 



    const answer_process = () => {

        if(check_a != true && check_b != true && check_c != true && check_d != true){
            alert('Please give answers..!!')
        }else{

            set_next_question()

            set_car_quiz_count()
        }
    }


    const set_car_quizes_and_marks_page = () => {

        if(car_quiz_counter <= 10){

          return(

            <>

                <div className="quiz-counter-car">
                    <h3 className='quiz-count-car'>Quiz : {car_quiz_counter}/10</h3>
                </div>


                <div className="car-quiz-content">

                      <div className="car-quiz-name">
                          <h2>{car_questions}</h2>
                      </div>


                   <div className="car-quiz-answers-grid">

                     <div className="car-quiz-answer">
                        <h3><input type="checkbox" value={answer_a} checked={check_a} onChange={handle_checked_a}/>   {answer_a}</h3>
                     </div>

                     <div className="car-quiz-answer">
                       <h3><input type="checkbox" value={answer_b} checked={check_b} onChange={handle_checked_b}/>   {answer_b}</h3>
                     </div>

                     <div className="car-quiz-answer">
                       <h3><input type="checkbox" value={answer_c} checked={check_c} onChange={handle_checked_c} />   {answer_c}</h3>
                     </div>

                     <div className="car-quiz-answer">
                       <h3><input type="checkbox" value={answer_d} checked={check_d} onChange={handle_checked_d}/>    {answer_d}</h3>
                     </div>
 
                   </div>



                  <div className="button-section">

                    <div className="next-btn">
                        <button onClick={answer_process}>Next</button>
                    </div>


                  </div>

            </div>
                
                
          </>


            )

        }
        
        else{

            return <CarMarks carmarks={mark_count}/>
        }
    }



    return(


    <div>

        <div className="main-car-content">

            {set_car_quizes_and_marks_page()}

        </div>
             

    </div>


    )
}


export default CarQuiz;