import { useState } from "react";

function NewItemModule(props) {

    const [enteredTask, setEnteredTask] = useState('');

    const handleNewTask = (e) => {
        setEnteredTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {enteredTask}
        setEnteredTask('');
    }

    const prioritiesBtn = (e) => {
        console.log('priorities')
    }

    const remindersBtn = (e) => {
        // setEnteredTask(e.target.value)
        // event.preventDefault prevents the default action (form submission and page refresh)
        e.preventDefault();

        // // create a reference to our database
        // const database = getDatabase(firebase);
        // const dbRef = ref(database);

        // // push the value of the `userInput` state to the database
        // push(dbRef, userInput);

        // // reset the state to an empty string
        // setEnteredTask('');
    }

    const notesBtn = (e) => {
        console.log('notes')
    }

    const todoBtn = (e) => {
        return (
            <p>{enteredTask}</p>
        )
    }
    return (
        <>
            <div className="template">
                <div className="addItem">
                    <form action="" name="newItem" onSubmit={handleSubmit}>
                        {/* <button onClick={props.handleTemplate}><i class="fa-solid fa-x"></i></button> */}
                        <label htmlFor="newItem">What's on the Agenda?</label>
                        <input type="text" id="task" name="task" value={enteredTask} onChange={handleNewTask} />

                        <div className="catBtns">
                            <button type="submit" onClick={prioritiesBtn}>Top Priorities</button
                            ><button type="submit" onClick={remindersBtn}>Reminders</button>
                            <button type="submit" onClick={notesBtn}>Notes</button>
                            <button type="submit" onClick={todoBtn}>To Do</button>
                        </div>

                    </form>
                </div>
            </div>

        </>

    )
};

export default NewItemModule;