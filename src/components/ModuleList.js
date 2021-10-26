import React from 'react';
import "../css/style.css"


function ModuleListItem({title}){
    return(               
        <li className="list-group-item">
            {title}
            <span className="pull-right">
                <i className="fa fa-trash i-plain"></i>
                <i className="fa fa-pencil i-plain"></i>
            </span>
        </li>
    );
}

export default class ModuleList extends React.Component{
    constructor(){
        super();
        this.state = {
            title:"",
            modules:[{"title":"module 1"},{"title": "module 2"}, {"title": "module 3"}, {"title": "module 4"}]
        }
        this.renderModuleList=this.renderModuleList.bind(this);
        this.handleInputChang=this.handleInputChang.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    renderModuleList(){
        const modules = this.state.modules.map( (module, i) => <ModuleListItem key={i} title={module.title}/> );
        return modules;
    }
    handleInputChang(event){
        console.log(event.target.value);
        this.setState({
            title:event.target.value
        })
        console.log("state.title: " ,this.state.title)
    }

    handleClick(){
        let module = {title: this.state.title};
        this.setState({
            modules:[
            ...this.state.modules,
            module]
        });
    }

    render(){
        return (
            <div>
                <h3>Modules</h3>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="title"
                    onChange={this.handleInputChang}
                    />
                <div className="d-grid gap-2 margined-top-bottom">
                    <button
                        className="btn btn-primary" 
                        type="button"
                        onClick={this.handleClick}>
                        Add module
                    </button>
                </div>
                <ul className="list-group">
                   {this.renderModuleList()}
                </ul>
            </div>
        );
    }
}