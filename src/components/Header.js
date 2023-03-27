import React from "react";
import { useState } from "react";
import NewItemModule from "./UI/NewItemModule";

function Header() {

    const [showTemplate, setShowTemplate] = useState(false);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const handleTemplate = (e) => {
        setShowTemplate(!showTemplate)
    }


    return (
        <>

        {showTemplate === true ?
        <NewItemModule
        handleTemplate={handleTemplate}
        /> :
        null
}
            

            <div>
                <h1>Daily Planner 1</h1>
            </div>

            <div className="date">
                <h3>Date: {date}</h3>
            </div>

        </>
    )
}

export default Header;