import { useState } from 'react';
import './FoodQuiz.css'
import Food_Quizes from '../quiz_data/Food_quiz_data/FoodQuiz';
import Food_Quizes_Answers from '../quiz_data/Food_quiz_data/Food_Quiz_Answers';
import Right_Answers_Food from '../quiz_data/Right Answers/Right_Answers_for_Food';
import FoodMarks from './FoodMarks';

const FoodQuiz = () => {





    let load_initial_food_question = Food_Quizes[0].quiz_name

    const [ foodquestions, setFoodQuestions ] = useState(load_initial_food_question)
    let [ questioncounter, setQuestionCounter ] = useState(0)



    let load_initial_answer_a = Food_Quizes_Answers[0].answer_a
    let load_initial_answer_b = Food_Quizes_Answers[0].answer_b
    let load_initial_answer_c = Food_Quizes_Answers[0].answer_c
    let load_initial_answer_d = Food_Quizes_Answers[0].answer_d

    const [answer_a, setAnswer_A] = useState(load_initial_answer_a)
    const [answer_b, setAnswer_B] = useState(load_initial_answer_b)
    const [answer_c, setAnswer_C] = useState(load_initial_answer_c)
    const [answer_d, setAnswer_D] = useState(load_initial_answer_d)

    let [ answer_counter, setAnswerCounter ] = useState(0)



    const set_next_answers = () => {

        if(answer_counter >= Food_Quizes_Answers.length - 1){
            console.log(`Answer Counter Stopped at ${answer_counter}`)
        }else{

            setAnswerCounter(answer_counter + 1)

            setAnswer_A(Food_Quizes_Answers[answer_counter + 1].answer_a)
            setAnswer_B(Food_Quizes_Answers[answer_counter + 1].answer_b)
            setAnswer_C(Food_Quizes_Answers[answer_counter + 1].answer_c)
            setAnswer_D(Food_Quizes_Answers[answer_counter + 1].answer_d)
        }

    } 




    const set_next_questions = () => {

        

        if(questioncounter >= Food_Quizes.length - 1){
            console.log(`Food Question Counter Stopped at ${questioncounter}`)

            alert('Quizes end..!!')

        }else{

            setQuestionCounter(questioncounter + 1)

            setFoodQuestions(Food_Quizes[questioncounter += 1].quiz_name)

            set_next_answers()

            set_next_right_answer()

            reset_checked_a()

            reset_checked_b()

            reset_checked_c()

            reset_checked_d()


        }

    }

    let load_initial_right_answer = Right_Answers_Food[0].right_answer


    let [ right_answer_counter, setRightAnswerCounter ] = useState(0)

    const [ right_answer, setRightAnswer ] = useState(load_initial_right_answer)

    

    const set_next_right_answer = () => {

        if(right_answer_counter > Right_Answers_Food.length - 1){
            console.log(`Right Answer Counter Stopped at ${right_answer_counter}`)

        }else{

            setRightAnswerCounter(right_answer_counter + 1)

            setRightAnswer(Right_Answers_Food[right_answer_counter + 1].right_answer)

            console.log(right_answer)

            
        }
    }


    const [ mark_counter, setMarkCounter ] = useState(0)

    const answer_checking = (e) => {

        if(e.target.value == Right_Answers_Food[right_answer_counter].right_answer){
            console.log('Answer Correct..!!')

            setMarkCounter(mark_counter + 10)


        }else{
            console.log('Answer Incorrect..!!')
        }
    }




    const [ checked_a , setChecked_A ] = useState(false)

    const handle_check_a = (e) => {

        setChecked_A(false)

        if(checked_a == false){

            setChecked_A(true)

            console.log(e.target.value)

            answer_checking(e)
        }else{


            setChecked_A(false)
            


        }
    }

    const reset_checked_a = () => {
        setChecked_A(false)
    }



    const [ checked_b, setChecked_B ] = useState(false)

    const handle_check_b = (e) => {

        setChecked_B(false)

        if(checked_b == false){

            setChecked_B(true)

            console.log(e.target.value)

            answer_checking(e)



        }else{

            setChecked_B(false)

        }
    }

    const reset_checked_b = () => {

        setChecked_B(false)
    }



    const [ checked_c, setChecked_C ] = useState(false)

    const handle_check_c = (e) => {

        setChecked_C(false)

        if(checked_c == false){

            setChecked_C(true)

            console.log(e.target.value)

            answer_checking(e)


        }else{

            setChecked_C(false)
        }
    } 

    const reset_checked_c = () => {
        setChecked_C(false)
    }



    const [ checked_d, setChecked_D ] = useState(false)

    const handle_check_d = (e) => {


        setChecked_D(false)

        if(checked_d == false){

            setChecked_D(true)

            console.log(e.target.value)

            answer_checking(e)

        }else{

            setChecked_D(false)
        }
    }

    const reset_checked_d = () => {

        setChecked_D(false)

    }



    const [ food_quiz_counter, setFoodQuizCounter ] = useState(1)


    const set_food_quiz_counter = () => {

        

        if(food_quiz_counter <= 10){

            setFoodQuizCounter(food_quiz_counter + 1)

            console.log(food_quiz_counter)

            
        }else{

            console.log('Quizes Ended..!!')
        }
    }
    





    const quizes_and_answer_process_food = () => {

        if(checked_a != true && checked_b != true && checked_c != true && checked_d != true ){
            alert('Please give Answer..!!')
        }else{

            set_next_questions()

            set_food_quiz_counter()
        }
    } 


    const set_food_quizes_and_marks = () => {

        if(food_quiz_counter <= 10){
            return(

            <>
                
                <div className="quiz-counter">
                   <h3 className='quiz-count'>Quiz : {food_quiz_counter}/10</h3>
                </div>



                <div className="food-quiz-content">

                      <div className="food-quiz-name">
                         <h2>{foodquestions}</h2>
                      </div>


                  <div className="food-quiz-answers-grid">

                    <div className="food-quiz-answer">
                        <h3><input type='checkbox' value={answer_a} checked={checked_a}  onChange={handle_check_a}/> {answer_a}</h3>
                    </div>

                   <div className="food-quiz-answer">
                       <h3><input type='checkbox' value={answer_b} checked={checked_b} onChange={handle_check_b}/>  {answer_b}</h3>
                   </div>

                   <div className="food-quiz-answer">
                     <h3><input type='checkbox' value={answer_c} checked={checked_c} onChange={handle_check_c}/> {answer_c}</h3>
                   </div>

                   <div className="food-quiz-answer">
                     <h3><input type='checkbox' value={answer_d} checked={checked_d} onChange={handle_check_d}/>  {answer_d}</h3>
                   </div>


                  </div>


                 <div className="button-section">

         

                   <div className="next-btn">
                        <button onClick={quizes_and_answer_process_food}>Next</button>
                   </div>

         
                </div>


     
               </div>
        </>


            )


        }else{
            return <FoodMarks marks={mark_counter}/>
        }
    }

   return(

    <>


     <div className="main-food-content">

        {set_food_quizes_and_marks()}

    </div>

        

     </>
    )
}


export default FoodQuiz;