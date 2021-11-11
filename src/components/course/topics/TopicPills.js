import React from "react";

export default function TopicPills({lesson}){
    return(
        <div>
            <h3>Topics for {lesson.title}</h3>
            <ul className="nav nav-pills">
                {
                    lesson.topics.map((topic,i)=>{
                    return(
                    <li className="nav-item" key={i}>
                        <a className={i == 0 ? "nav-link active" : "nav-link"}  aria-current="page" href="#">topic {topic.title}</a>
                    </li>)
                })}
            </ul>
        </div>
    );
}