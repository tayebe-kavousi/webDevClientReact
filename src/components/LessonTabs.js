import React from "react";

export default function LessonTabs(){
 return(
     <div>
     <h3>Lessons</h3>
        <ul className="nav nav-tabs">
            <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
            </li>
        </ul>  
     </div>
 );
}