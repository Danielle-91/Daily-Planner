import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from 'firebase/database';
import {firebase} from '../../firebase';

// every time user is created a node is created with ID
// when user signs in, a key is associated w them
// when user is stored, save object for individual person
// break down to notebooks
// when user adds to database
    // look at docs

    // click to add, see 4 options, when user clicks reminder e.g., showcases the form
    // if reminder selected, show that form, scope on function to it
    // typepOfTask = db.filter(reminders) or something

function NewItemModule(props) {

    return (
        <>
            <div className="template">
                <div className="addItem">
                    
                </div>
            </div>

        </>

    )
};

export default NewItemModule;