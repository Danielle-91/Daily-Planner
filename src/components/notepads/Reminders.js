import React, { useState, useEffect } from 'react';
import { uid } from 'uid';
import { onAuthStateChanged } from 'firebase/auth';
import { set, push, ref, onValue } from 'firebase/database';
import { auth, db, remindRef } from '../../firebase';
import NewItemModule from '../UI/NewItemModule';

function Reminders() {
    const [newRTask, setNewRTask] = useState("");
    const [reminders, setReminders] = useState([])
    const [showTemplate, setShowTemplate] = useState(false);

    const handleTemplate = (e) => {
        setShowTemplate(!showTemplate)
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                onValue(ref(db, remindRef), snapshot => {
                    console.log(snapshot.val())
                    const data = snapshot.val();
                    if (data !== null) {
                        let newReminders = [];
                        for (let item in data) {
                            newReminders.push({
                                key: item,
                                task: data[item]
                            })
                        }
                        setReminders(newReminders)
                    }
                })
            }
        })
    }, [])

    const createNewTask = (e) => {
        e.preventDefault();

        if (newRTask === "") {
            alert('please enter a valid task')
        }

        push(ref(db, remindRef),
            newRTask
        )

        setNewRTask("");

        handleTemplate();
    }

    const handleChange = (e) => {
        setNewRTask(e.target.value)
    }

    return (

        <div className="reminders">
            <div className="titleFlex">
                <h2>Reminders</h2>

                <input type="checkbox" className="toggle" />
                <button className='addBtn' onClick={handleTemplate}><i className="fa-solid fa-plus"></i></button>
            </div>


            {showTemplate === true ?

                <NewItemModule
                    newTask={newRTask}
                    handleChange={handleChange}
                    createNewTask={createNewTask} />
                :
                null
            }

            <div className="taskList">
                <ul>
                    {
                        reminders.map((reminder) => (
                            <li id={reminder.key}>{reminder.task}</li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default Reminders;