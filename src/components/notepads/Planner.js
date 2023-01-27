import Notes from "./Notes";
import Reminders from "./Reminders";
import TopPriorities from "./TopPriorities";
import ToDo from "./ToDo";
import Header from "../Header";

function Planner() {
    return (
        <>
            <header>
                <Header />
            </header>

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