import { useState } from 'react';
import './Header.css'
import QuizCatagory from './QuizCat';

const HeaderMain = () => {

    const [ isSportCardOpened, setIsSportCardOpened ] = useState(false);


    const set_sport_card_status_to_open = () => {

        setIsSportCardOpened(true)

        
    }

    const [isFoodCardOpened, setIsFoodCardOpened] = useState(false)


    const set_food_card_status_to_open = () => {

        setIsFoodCardOpened(true)

        
    }


    const [ isCarCardOpened, setIsCarCardOpened ] = useState(false)


    const set_car_card_status_to_open = () => {

        setIsCarCardOpened(true)

        

    }


    return(
        <>
        <div className="quiz-headers">
            <h1>Quiz Application.</h1>
            <h2>Quizes.</h2>


        </div>


        <div>
            <QuizCatagory 
            isSportOpened={isSportCardOpened} SportCardOpenFunction={set_sport_card_status_to_open}
            isFoodOpened={isFoodCardOpened}  FoodCardOpenFunction={set_food_card_status_to_open}
            isCarOpened={isCarCardOpened}  CarCardOpenFunction={set_car_card_status_to_open}/>
        </div>

        </>
        


        


    )
}


export default HeaderMain;