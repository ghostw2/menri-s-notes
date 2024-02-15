import React, { useState } from "react";
import Quest from "./Quest/Quest";

const Quests = ({ quests,onDelete }) => {

    return (
        <div className="row mt-3">
            <div className="col-12">
                {
                    quests.map((quest) => (
                        <Quest key={quest.id} quest={quest} onDelete={onDelete}/>
                    ))
                }
            </div>
        </div>
    );


}
export default Quests;
