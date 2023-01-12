function Header(){

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <>

            <div className="menu">
                <nav>
                    <i class="fa-solid fa-plus"></i>
                </nav>
            </div>
            
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