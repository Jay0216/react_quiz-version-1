import CarQuiz from './CarQuiz';
import FoodQuiz from './FoodQuiz';
import './QuizCat.css'
import SportQuiz from './SportQuiz';


const QuizCatagory = (props) => {

    


    if(props.isSportOpened == true){

        console.log(props.isSportOpened)

        console.log('Sport Category Opened..!!')

        return <SportQuiz/>
    }
    else if(props.isFoodOpened == true){

        console.log(props.isFoodOpened)

        console.log('Food Category Opened..!!')

        return <FoodQuiz/>

    }else if(props.isCarOpened == true){

        console.log(props.isCarOpened)

        console.log('Car Category Opened..!!')

        return <CarQuiz/>
    }




    

    
    return(
        <div>

            <div className="quiz-categories">

                
                <div className="categories" onClick={props.SportCardOpenFunction}>
                    <h2>Sports</h2>
                </div>


                <div className="categories"  onClick={props.FoodCardOpenFunction}>
                    <h2>Food</h2>
                </div>

                <div className="categories" onClick={props.CarCardOpenFunction}>
                    <h2>Cars</h2>
                </div>
            </div>
        </div>
    )
}


export default QuizCatagory;