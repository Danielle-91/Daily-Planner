import { getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from "react";
import Header from "./Header";
import Auth from './Auth';
import TopPriorities from './notepads/TopPriorities';
import Reminders from './notepads/Reminders';
import ToDo from './notepads/ToDo';
import Notes from './notepads/Notes';

function Planner(props) {

    const [tasks, setTasks] = useState([])

    return (
        <>
            <header>
                <Header />
            </header>

            <div className="userInfo">
                <Auth />
            </div>

            <section className='notepad'>

                <TopPriorities />

                <Reminders />

                <ToDo />

                <Notes />
            </section>
        </>

    )
}

export default Planner;