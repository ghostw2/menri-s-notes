import React,{useState} from "react";
import Quests from "../components/Quests/Quests";
import Quest from "../components/Quests/Quest/Quest";

const AboutPage = () => {
    const [quests,setQuests] = useState([
        { id: 1, title: 'Explore the Forest', description: 'Navigate through the dense forest and discover hidden treasures.' },
        { id: 2, title: 'Conquer the Mountain', description: 'Climb to the summit of the tallest mountain in the land.' },
        { id: 3, title: 'Retrieve the Lost Artifact', description: 'Embark on a quest to find a powerful artifact lost in the ancient ruins.' },
        // Add more quests as needed
    ]);
    const deleteQuest = (id) => { 
        setQuests((prevQuests) => prevQuests.filter((quest) => quest.id !== id));
    }
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