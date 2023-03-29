import React, { useState, useEffect } from 'react';
import { uid } from 'uid';
import { onAuthStateChanged } from 'firebase/auth';
import { set, ref, onValue } from 'firebase/database';
import { auth, db } from '../../firebase';

function TopPriorities() {

    const [newTask, setNewTask] = useState("");
    const [priorities, setPriorities] = useState([])
    const [showTemplate, setShowTemplate] = useState(false);

    const handleTemplate = (e) => {
        setShowTemplate(!showTemplate)
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                onValue(ref(db, `/${auth.currentUser.uid}`), snapshot => {
                    setPriorities([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        Object.values(data).map(newTask => {
                            setPriorities((oldArray) => [...oldArray, newTask])
                        })
                    }
                })
            }
        })
    }, [])

    const createNewTask = (e) => {
        e.preventDefault();
        const uidd = uid();

        if (newTask === "") {
            alert('please enter a valid task')
        }

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
            <div className="titleFlex">
                <h2>Top Priorities</h2>

                <input type="checkbox" className="toggle" />
                <button className='addBtn' onClick={handleTemplate}><i className="fa-solid fa-plus"></i></button>
            </div>


            {showTemplate === true ?
                <div className="template">
                    <div className="addItem">
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
                </div> :
                null
            }



            <div className="taskList">
                {
                    priorities.map((priority) => (
                        <ul>
                            <li key={newTask.uidd}>{priority.newTask}</li>
                        </ul>
                    ))
                }
            </div>

        </div>
    )
}
export default TopPriorities;