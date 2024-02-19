import React, { useState } from "react";


const Quest = ({ quest, onDelete }) => {
    const [ completed, setCompleted]  = useState(false);
    const toggleCompleted = () => {
        setCompleted(!completed);
    }
    const handleDelete = () => {
        onDelete(quest.id);
    }
    return (
        <div className="card col-auto mt-3" >
            <div className="card-header d-flex justify-content-between">
                <h5 className="card-title m-0">{quest.title}</h5>
                <button type="button" aria-label="Delete Quest" className="btn btn-outline-danger align-self-end" onClick={handleDelete}>Delete</button>
            </div>
            <div className={`card-body ${completed ? 'bg-info': 'bg-light' }`}>
                <h6 className="card-subtitle mb-2 text-muted">{quest.title}</h6>
                <p className="card-text">{quest.description}</p>
                <button onClick={toggleCompleted} className={`btn btn-${completed ? 'light' :'success'}`}>{completed ? 'Mark as Incomplete' : 'Mark as Complete' }</button>
            </div>
        </div>
    )
}

export default Quest;