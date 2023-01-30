import { useState } from "react";
import NewItemModule from "./UI/NewItemModule";

function Header() {

    // const handleClick = () => {
    //     sessionStorage.clear();
    // }
    const [showTemplate, setShowTemplate] = useState(false);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return (
        <>

            <input type="checkbox" className="toggle"/>
            <div className="listBtn">
                <i class="fa-solid fa-plus"></i>
            </div>

            <NewItemModule />

            <div>
                <h1>Daily Planner 1</h1>
            </div>

            <div className="date">
                <h3>Date: {date}</h3>
            </div>

            {/* <button onClick={handleClick}>Sign Out</button> */}

        </>
    )
}

export default Header;