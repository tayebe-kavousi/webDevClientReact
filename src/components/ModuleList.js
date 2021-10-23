import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

function ModuleListItem(props){
    return(                    
        <li className="list-group-item">{props.title}</li>
    );
}

export default class ModuleList extends React.Component{
    render(){
        return (
            <div>
                <h1>Module List:</h1>
                <ul className="list-group">
                    <ModuleListItem title={"module 1"}/>
                    <ModuleListItem title={"module 1"}/>
                    <ModuleListItem title={"module 1"}/>
                    <ModuleListItem title={"module 1"}/>
                    <ModuleListItem title={"module 1"}/>
                    <ModuleListItem title={"module 1"}/>
                </ul>
            </div>
        );
    }
}