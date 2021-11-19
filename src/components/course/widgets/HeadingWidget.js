import React from 'react'

function HeadingWidget({widget, updateWidget}) {
  let text;
  let size; 
    return (
        <div>
            <h1> HEADING WIDGET  </h1>
           <label htmlFor="text">Heading Text: </label>
           <input 
                ref={node => text= node} 
                id="text" className="form-control" 
                placeholder="Enter The Heading Text"
                onChange={()=>{
                    widget.text = text.value;
                    updateWidget(widget); 
                }}
            />
           <label htmlFor="size">Heading size: </label>
           <select 
              ref={node => size= node} 
              onChange={()=>{
                widget.size = parseInt(size.value);
                updateWidget(widget); 
              }}
              className="form-control" 
              id="size"
            >
               <option value="1">Heading 1</option>
               <option value="2">Heading 2</option>
               <option value="3">Heading 3</option>
               <option value="4">Heading 4</option>
           </select>
                <h4>Preview: </h4>
           <div style={{backgroundColor: "rgba(0,200,200,0.3)", "margin":"1% 2% ", padding:"20px", width:"50%"}}> 
                {widget.size === 1 && <h1>{widget.text}</h1> }
                {widget.size === 2 && <h2>{widget.text}</h2> }
                {widget.size === 3 && <h3>{widget.text}</h3> }
                {widget.size === 4 && <h4>{widget.text}</h4> }
           </div>
        </div>
    )
}

export default HeadingWidget
