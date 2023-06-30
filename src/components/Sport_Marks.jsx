import './SportMarks.css'

const SportMarks = (props) => {

    const set_to_main_menu = () => {
        location.reload()
    }

    
    return(

        <>
         <div className="marks-div-sports">

            <h2>Quiz Results.</h2>
            <h3>Your Marks : {props.marks}</h3>
         </div>


         <div className="buttons-sport">
            <button className='restart-sport' onClick={set_to_main_menu}>Main menu</button>

            
         </div>
        </>
    )
}


export default SportMarks;