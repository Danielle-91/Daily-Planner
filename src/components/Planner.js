import { getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from "react";
import Header from "./Header";
import NewItemModule from "./UI/NewItemModule";

function Planner(props) {

    const [tasks, setTasks] = useState([])

    // useEffect(() => {
    //     // App.js
    //     const database = getDatabase(firebase);
    //     const dbRef = ref(database);

    //     onValue(dbRef, (response) => {
    //         // here we're creating a variable to store the new state we want to introduce to our app
    //         const newState = [];

    //         // here we store the response from our query to Firebase inside of a variable called data.
    //         // .val() is a Firebase method that gets us the information we want
    //         const data = response.val();
    //         // data is an object, so we iterate through it using a for in loop to access each book name 

    //         for (let key in data) {
    //             // inside the loop, we push each book name to an array we already created inside the onValue() function called newState
    //             newState.push(data[key]);
    //         }

    //         // then, we call setBooks in order to update our component's state using the local array newState
    //         setTasks(newState);
    //     });
    // }, [])


    return (
        <>
            <header>
                <Header />
            </header>

            <section className='notepad'>

                <div className="priorities">
                    <h2>Top Priorities</h2>
                </div>

                <div className="reminders">
                    <h2>Reminders</h2>
                    <div className="items">
                        <ul>
                            {tasks.map((task) => {
                                return(
                                    <li>{task}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="todo">
                    <h2>To Do</h2>
                </div>

                <div className="notes">
                    <h2>Notes</h2>

                    <ul>
                        <li>Walk dog</li>
                        <li>Buy lettuce</li>
                        <li>Vengeance</li>
                    </ul>
                </div>
            </section>
        </>

    )
}

export default Planner;