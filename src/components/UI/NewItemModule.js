import { useState } from "react";

function NewItemModule() {

    const [enteredTask, setEnteredTask] = useState('');

    const handleNewTask = (e) => {
        setEnteredTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(enteredTask)
    }
    return (
        <div className="template">
            <div className="addItem">
                <form action="" name="newItem" onSubmit={handleSubmit}>
                    <label htmlFor="newItem">What's on the Agenda?</label>
                    <input type="text" id="task" name="task" value={enteredTask} onChange={handleNewTask} />

                    <div className="catBtns">
                        <button type="submit">Top Priorities</button
                        ><button type="submit">Reminders</button>
                        <button type="submit">Notes</button>
                        <button type="submit">To Do</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewItemModule;