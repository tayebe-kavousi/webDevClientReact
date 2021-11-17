import React from "react";

export default function TopicPills({lesson}){
    return(
        lesson.topics.length > 0 ?
            <div className="p-2">
                <h5>{lesson.topics.length} topics for {lesson.title}</h5>
                <ul className="list-group">
                    {lesson.topics.map((topic,i) => <li className="list-group-item" key={i}> topic {topic.title} </li>)}
                </ul>
            </div>
        :
            <div className="p-2">
                <h6> No Topics Found !</h6>
            </div>
    );
}