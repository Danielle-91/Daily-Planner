function NewItemModule() {

    return (
        <div className="template">
            <div className="addItem">
                <form action="">
                    <label htmlFor="newItem">What's on the Agenda?</label>
                    <input type="text" id="task" name="task" />
                    <div className="categories">
                        <div className="left">
                            <button>Top Priorities</button>
                            <button>Reminders</button>
                        </div>
                        <div className="right">
                            <button>Notes</button>
                            <button>To Do</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewItemModule;