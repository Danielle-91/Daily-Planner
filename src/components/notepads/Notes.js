import React, { useState, useEffect } from 'react';
import { uid } from 'uid';
import { onAuthStateChanged } from 'firebase/auth';
import { set, push, ref, onValue } from 'firebase/database';
import { auth, db, notesRef } from '../../firebase';
import NewItemModule from '../UI/NewItemModule';

// onClick = {(e) => console.log(e.target.id)}-> use this syntax later when deleting/editing tasks to select the whole item not just the input******

function Notes() {

    const [newNote, setNewNote] = useState("");
    const [notes, setNotes] = useState([])
    const [showTemplate, setShowTemplate] = useState(false);

    const handleTemplate = (e) => {
        setShowTemplate(!showTemplate)
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                onValue(ref(db, notesRef), snapshot => {
                    console.log(snapshot.val())
                    const data = snapshot.val();
                    if (data !== null) {
                        let newNotes = [];
                        for (let item in data) {
                            newNotes.push({
                                key: item,
                                task: data[item]
                            })
                        }
                        setNotes(newNotes)
                    }
                })
            }
        })
    }, [])

    const createNewTask = (e) => {
        e.preventDefault();

        if (newNote === "") {
            alert('please enter a valid task')

        }

        push(ref(db, notesRef),
            newNote
        )

        setNewNote("");

        handleTemplate();
    }

    const handleChange = (e) => {
        setNewNote(e.target.value)
    }

    return (

        <div className="notes">
            <div className="titleFlex">
                <h2>Notes</h2>

                <input type="checkbox" className="toggle" />
                <button className='addBtn' onClick={handleTemplate}><i className="fa-solid fa-plus"></i></button>
            </div>


            {showTemplate === true ?

                <NewItemModule
                    newTask={newNote}
                    handleChange={handleChange}
                    createNewTask={createNewTask} />
                :
                null
            }

            <div className="taskList">
                <ul>
                    {
                        notes.map((note) => (
                            <li id={note.key}>{note.task}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Notes;