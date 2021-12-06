import React,{useState} from 'react';
import './newWidgetStyle.css';

function HeadingWidget({widget, updateWidget,deleteWidget, saveWidgets}) {
  const [editIsOpen,setEditIsOpen] = useState(false);
  const toggleEditIsOpenToTrue =()=>{
    setEditIsOpen(!editIsOpen)
  }
  let text,size; 
  return (
    <div className="container">
      <div className="row">
        <div className="col">Type: Heading Widget </div>
        <div className="col">Title: {widget.title}</div>
        <div className="col">Text: {widget.text}</div>
        <div className="col">size: {widget.size}</div>
        <div className="col"> 
          <button className="btn btn-danger float-right" onClick={()=>deleteWidget(widget.id)}>Delete</button>
          <button className="btn btn-primary" onClick={()=>toggleEditIsOpenToTrue()}> Edit</button>
        </div>
      </div>
      <div className="row" className={editIsOpen?"showElement":"hideElement"}>
        <div className="col">
          <label htmlFor="text">Heading Text: </label>
          <input 
            ref={node => text= node} 
            id="text" className="form-control" 
            placeholder="Enter The Heading Text"
            onChange={()=>{
                widget.text = text.value;
                updateWidget(widget); 
          }}/>
        </div>
        <div className="col">
          <label htmlFor="size">Heading size: </label>
          <select 
            ref={node => size= node} 
            onChange={()=>{
            widget.size = parseInt(size.value);
            updateWidget(widget); 
            }}
            className="form-control" 
            id="size">
              <option value="1">Heading 1</option>
              <option value="2">Heading 2</option>
              <option value="3">Heading 3</option>
              <option value="4">Heading 4</option>
          </select>
        </div>
        <div className="col"> 
            {widget.size === 1 && <h1>{widget.text}</h1> }
            {widget.size === 2 && <h2>{widget.text}</h2> }
            {widget.size === 3 && <h3>{widget.text}</h3> }
            {widget.size === 4 && <h4>{widget.text}</h4> }
        </div>
        <div className="col">
                    <button className="btn btn-primary float-right" onClick ={saveWidgets}> Save </button> 
                </div>  
      </div>
    </div>
  )
}

export default HeadingWidget
