import React, { useState } from 'react';
import { uid } from 'uid';
import { set, ref } from 'firebase/database';
import { auth, db } from '../../firebase';

function TopPriorities() {

    const [newTask, setNewTask] = useState("");

    const createNewTask = (e) => {
        e.preventDefault();

        const uidd = uid();
        set(ref(db, `${auth.currentUser.uid}/${uidd}`), {
            newTask: newTask,
            uidd: uidd,
        })

        setNewTask("");


    }

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    return (
        <div className="priorities">
            <h2>Top Priorities</h2>

            <input type="checkbox" className="toggle" />
            <div className="listBtn">
                <button><i className="fa-solid fa-plus"></i></button>

                <form action="" name="newItem">

                    <label htmlFor="newItem">Add a new Top Priority</label>
                    <input type="text"
                        id="task"
                        name="task"
                        value={newTask}
                        onChange={handleChange} />


                    <button type="submit" onClick={createNewTask}>Add</button>

                </form>
            </div>
        </div>
    )
}

export default TopPriorities;