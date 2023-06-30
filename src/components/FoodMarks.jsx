import './FoodMarks.css'


const FoodMarks = (props) => {

    const set_to_main_menu = () => {
        location.reload()
    }

    return(

        <>
         <div className="marks-div-food">

            <h2>Quiz Results.</h2>
            <h3>Your Marks : {props.marks}</h3>
         </div>


         <div className="buttons-food">
            <button className='restart' onClick={set_to_main_menu}>Main menu</button>

            
         </div>
        </>
    )
}



export default FoodMarks;