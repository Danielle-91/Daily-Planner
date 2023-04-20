import React, { useState, useEffect } from 'react';
import { uid } from 'uid';
import { onAuthStateChanged } from 'firebase/auth';
import { set, ref, onValue } from 'firebase/database';
import { auth, db } from '../../firebase';
import NewItemModule from '../UI/NewItemModule';

function Reminders() {
    const [newTask, setNewTask] = useState("");
    const [reminders, setReminders] = useState([])
    const [showTemplate, setShowTemplate] = useState(false);

    const timestamp = Date.now();

    const handleTemplate = (e) => {
        setShowTemplate(!showTemplate)
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                onValue(ref(db, `/${auth.currentUser.uid}`), snapshot => {
                    setReminders([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        Object.values(data).map(newTask => {
                            setReminders((oldArray) => [...oldArray, newTask])
                        })
                    }
                })
            }
        })
    }, [])

    const createNewTask = (e) => {
        e.preventDefault();
        // input tasks were displaying out of order bc Firebase was storing them in order based on the UID; to fix this, I changed the ID from a UID to the current time in milliseconds so it would always be in order
        const cat = "reminder";

        if (newTask === "") {
            alert('please enter a valid task')
        }

        set(ref(db, `${auth.currentUser.uid}/${timestamp}`), {
            newTask: newTask,
        })

        setNewTask("");
        handleTemplate();
    }

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    return (

        <div className="priorities">
            <div className="titleFlex">
                <h2>Reminders</h2>

                <input type="checkbox" className="toggle" />
                <button className='addBtn' onClick={handleTemplate}><i className="fa-solid fa-plus"></i></button>
            </div>


            {showTemplate === true ?

                <NewItemModule
                    newTask={newTask}
                    handleChange={handleChange}
                    createNewTask={createNewTask} />
                :
                null
            }

            <div className="taskList">
                {
                    reminders.map((reminder) => (
                        <ul>
                            <li>{reminder.newTask}</li>
                        </ul>
                    ))
                }
            </div>

        </div>
    )
}

export default Reminders;