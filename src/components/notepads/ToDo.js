import React, { useState, useEffect } from 'react';
import { uid } from 'uid';
import { onAuthStateChanged } from 'firebase/auth';
import { set, push, ref, onValue } from 'firebase/database';
import { auth, db, toDoRef } from '../../firebase';
import NewItemModule from '../UI/NewItemModule';

// onClick = {(e) => console.log(e.target.id)}-> use this syntax later when deleting/editing tasks to select the whole item not just the input******

function ToDo() {

    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([])
    const [showTemplate, setShowTemplate] = useState(false);

    const handleTemplate = (e) => {
        setShowTemplate(!showTemplate)
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                onValue(ref(db, toDoRef), snapshot => {
                    console.log(snapshot.val())
                    const data = snapshot.val();
                    if (data !== null) {
                        let newTodos = [];
                        for (let item in data) {
                            newTodos.push({
                                key: item,
                                task: data[item]
                            })
                        }
                        setTodos(newTodos)
                    }
                })
            }
        })
    }, [])

    const createNewTask = (e) => {
        e.preventDefault();

        if (newTodo === "") {
            alert('please enter a valid task')

        }

        push(ref(db, toDoRef),
            newTodo
        )

        setNewTodo("");

        handleTemplate();
    }

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }

    return (

        <div className="todo">
            <div className="titleFlex">
                <h2>To Do</h2>

                <input type="checkbox" className="toggle" />
                <button className='addBtn' onClick={handleTemplate}><i className="fa-solid fa-plus"></i></button>
            </div>


            {showTemplate === true ?

                <NewItemModule
                    newTask={newTodo}
                    handleChange={handleChange}
                    createNewTask={createNewTask} />
                :
                null
            }

            <div className="taskList">
                <ul>
                    {
                        todos.map((todo) => (
                            <li id={todo.key}>{todo.task}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ToDo;