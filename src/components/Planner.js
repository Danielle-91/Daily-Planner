import Header from "./Header";

function Planner() {
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