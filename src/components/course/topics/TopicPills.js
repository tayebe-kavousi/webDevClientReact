import React from "react";

export default function TopicPills({lesson}){
    return(
        <div>
            {lesson.topics.length > 0 ?
                <div>
                    <h5>{lesson.topics.length} topics for {lesson.title}</h5>
                    <ul className="nav nav-pills">
                        {lesson.topics.map((topic,i) => {
                            return(
                                <li className="nav-item" key={i}>
                                    <a className="nav-link" aria-current="page" href="#">topic {topic.title}</a>
                                </li>
                            )})
                        }
                    </ul>
                </div> :
                <h6> No Topics Found !</h6>
            }
        </div>
    );
}