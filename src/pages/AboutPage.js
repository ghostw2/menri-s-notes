import React, { useEffect, useState } from "react";
import axios from 'axios';
import Quests from "../components/Quests/Quests";
import Quest from "../components/Quests/Quest/Quest";

const AboutPage = () => {
    const [quests,setQuests] = useState([]);
    const deleteQuest = (id) => { 
        setQuests((prevQuests) => prevQuests.filter((quest) => quest.id !== id));
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/quests');
                if (response.data.error === false) { 
                    setQuests(response.data.data);
                }
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[]);
    
    return (
        <div className="container">
            <div className="row p-2">
                <div>
                    <h1>About Page</h1>
                    <h2>Menri's Notes</h2>
                    <p>This is a project that Menri is making to sharpen his react skills , node.js docker and to deploy sth of his own .</p>
                </div>
                <Quests quests={quests} onDelete={deleteQuest} />
            </div>

        </div>
    );
}
export default AboutPage;