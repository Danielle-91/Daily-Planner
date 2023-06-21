import React, { useState, useEffect } from 'react';
import { uid } from 'uid';
import { onAuthStateChanged } from 'firebase/auth';
import { set, push, ref, onValue } from 'firebase/database';
import { auth, db, priRef } from '../../firebase';
import NewItemModule from '../UI/NewItemModule';

// onClick = {(e) => console.log(e.target.id)}-> use this syntax later when deleting/editing tasks to select the whole item not just the input******

function TopPriorities() {

    const [newPri, setNewPri] = useState("");
    const [priorities, setPriorities] = useState([])
    const [showTemplate, setShowTemplate] = useState(false);

    const handleTemplate = (e) => {
        setShowTemplate(!showTemplate)
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                onValue(ref(db, priRef), snapshot => {
                    console.log(snapshot.val())
                    const data = snapshot.val();
                    if (data !== null) {
                        let newPriorities = [];
                        for(let item in data){
                            newPriorities.push({
                                key: item,
                                task: data[item]
                            })
                        } 
                        setPriorities(newPriorities)
                    }
                })
            }
        })
    }, [])

    const createNewTask = (e) => {
        e.preventDefault();

        if (newPri === "") {
            alert('please enter a valid task')
            
        }

        push(ref(db, priRef), 
            newPri
        )

        setNewPri("");

        handleTemplate();
    }

    const handleChange = (e) => {
        setNewPri(e.target.value)
    }

    return (

        <div className="priorities">
            <div className="titleFlex">
                <h2>Top Priorities</h2>

                <input type="checkbox" className="toggle" />
                <button className='addBtn' onClick={handleTemplate}><i className="fa-solid fa-plus"></i></button>
            </div>


            {showTemplate === true ?

                <NewItemModule 
                newTask={newPri}
                handleChange={handleChange}
                createNewTask={createNewTask}/>
                :
                null
            }

            <div className="taskList">
                <ul>
                {
                    priorities.map((priority) => (
                            <li id={priority.key}>{priority.task}</li>
                    ))
                }
                </ul>
            </div>

        </div>
    )
}
export default TopPriorities;
