import React,{useState} from 'react';
import {Card, CardFooter,CardHeader,CardBody} from 'reactstrap';
import './newWidgetStyle.css';

function ListWidget({widget, updateWidget, deleteWidget}) {
    const [editIsOpen,setEditIsOpen] = useState(false);
    const toggleEditIsOpenToTrue =()=>{
        setEditIsOpen(!editIsOpen)
    }
    
    let title,text;
    return (
        
        <Card>
            <CardHeader> 
                <h4>List Widget </h4>
            </CardHeader>
            <CardBody>
                <h6>Title: {widget.title}</h6>
                <div className="col">List items: {widget.listItems.split('\n').join(", ")}</div>
                <div className="col">{widget.ordered?"ordered":"unordered"}</div>
            </CardBody>
            <CardFooter>
            <div className="col"> 
                <button className="btn btn-danger float-right" onClick={()=>deleteWidget(widget.timestamp)}>Delete</button>
                <button className="btn btn-primary" onClick={()=>toggleEditIsOpenToTrue()}> Edit</button>
            </div>
            </CardFooter>
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
                        className="form-control"
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
                    <br/>
                    <label htmlFor="unordered">
                        <input type="radio" id="unordered" value="unordered" name={`ordered${widget.title}`} defaultChecked={!widget.ordered?"checked":""}
                            onClick = {() => {
                                widget.ordered = false;
                                updateWidget(widget);
                            }}/>
                        Unordered
                    </label>
                </div>  
            </div>  
        </Card>
    
    )
}

export default ListWidget


