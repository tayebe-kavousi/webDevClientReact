import React from 'react';
import "../css/style.css"


function ModuleListItem(props){
    return(               
        <li className="list-group-item">
            {props.title}
            <span className="pull-right">
                <i className="fa fa-trash i-small-box i-plain"></i>
                <i className="fa fa-pencil i-small-box i-plain"></i>
            </span>
        </li>
    );
}

export default class ModuleList extends React.Component{
    render(){
        return (
            <div>
                <h3>Modules</h3>
                <ul className="list-group">
                    <ModuleListItem title={"module 1"}/>
                    <ModuleListItem title={"module 2"}/>
                    <ModuleListItem title={"module 3"}/>
                    <ModuleListItem title={"module 4"}/>
                    <ModuleListItem title={"module 5"}/>
                    <ModuleListItem title={"module 6"}/>
                </ul>
            </div>
        );
    }
}