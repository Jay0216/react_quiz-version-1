import './CarMarks.css'

const CarMarks = (props) => {

    const set_to_main_menu = () => {

        location.reload()
    }

    return(

        <>
         <div className="marks-div-car">

            <h2>Quiz Results.</h2>
            <h3>Your Marks : {props.carmarks}</h3>
         </div>


         <div className="buttons-car">
            <button className='restart' onClick={set_to_main_menu}>Main menu</button>

            
         </div>
        </>
    )
}


export default CarMarks;