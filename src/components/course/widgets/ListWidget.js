import React,{useState} from 'react';
import './newWidgetStyle.css';

function ListWidget({widget, updateWidget, saveWidgets, deleteWidget}) {
    const [editIsOpen,setEditIsOpen] = useState(false);
    const toggleEditIsOpenToTrue =()=>{
        setEditIsOpen(!editIsOpen)
    }
    
    let title,text;
    return (
        <div className="container">
            <div className="row"> 
                <div className="col">Type: List Widget </div>
                <div className="col">Title: {widget.title}</div>
                <div className="col">List items: {widget.listItems.split('\n').join(", ")}</div>
                <div className="col">{widget.ordered?"ordered":"unordered"}</div>
                <div className="col"> 
                    <button className="btn btn-danger float-right" onClick={()=>deleteWidget(widget.id)}>Delete</button>
                    <button className="btn btn-primary" onClick={()=>toggleEditIsOpenToTrue()}> Edit</button>
                </div>
            </div>
            
            <div className="row" className={editIsOpen?"showElement":"hideElement"}>
                <div className="col">
                    <label htmlFor="title">Title</label>
                    <input 
                        name="title"
                        id="title"
                        ref={(node)=> title = node}
                        type="text" 
                        className="col-sm form-control" 
                        placeholder={widget.title} 
                        onChange={
                            () => {
                                widget.title =title.value;
                                updateWidget(widget.title)
                            }
                        }>
                    </input>
                </div>
                <div className="col">
                    <label htmlFor="listItems">List Items</label>
                    <textarea
                        name="listItems"
                        id="listItems"
                        ref={node => text = node} 
                        className="col form-control"
                        placeholder={widget.listItems}
                        onChange={
                            () => {
                                widget.listItems=text.value;
                                updateWidget(widget.listItems)
                            }
                        } 
                    ></textarea>
                </div>
                <div className="col">
                    <label htmlFor="ordered">
                        <input type="radio" id="ordered" value="ordered" name={`ordered${widget.title}`} defaultChecked={widget.ordered?"checked":""}
                            onClick = {() => {
                                widget.ordered = true;
                                updateWidget(widget);
                            }}/>
                        Ordered
                    </label>
                    <label htmlFor="unordered">
                        <input type="radio" id="unordered" value="unordered" name={`ordered${widget.title}`} defaultChecked={!widget.ordered?"checked":""}
                            onClick = {() => {
                                widget.ordered = false;
                                updateWidget(widget);
                            }}/>
                        Unordered
                    </label>
                </div> 
                <div className="col">
                    <button className="btn btn-primary float-right" onClick ={saveWidgets}> Save </button> 
                </div>  
            </div>
            
            
        </div>
    )
}

export default ListWidget


