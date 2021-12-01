import React from 'react'

function ListWidget({widget, updateWidget}) {
    let text;
    return (
        <>
            <div className="col-sm">Type: List Widget </div>
            <div className="col-sm">Title: {widget.title}</div>
            <div className="col-sm">List items: {widget.listItems.split('\n').join(", ")}</div>
            <div className="col-sm">{widget.ordered ? "ordered" : "unordered"}</div>
            
            <div className="col-sm">
                <label htmlFor="ordered">
                    <input type="radio" id="ordered" value="ordered" name={`ordered${widget.title}`} defaultChecked={widget.ordered ? "checked" : ""}
                        onClick = {() => {
                            widget.ordered = true;
                            updateWidget(widget);
                        }}/>
                    Ordered
                </label>
                <label htmlFor="unordered">
                    <input type="radio" id="unordered" value="unordered" name={`ordered${widget.title}`} defaultChecked={widget.ordered ? "" : "checked"}
                        onClick = {() => {
                            widget.ordered = false;
                            updateWidget(widget);
                        }}/>
                    Unordered
                </label>
            </div>
            <textarea
                ref={node => text = node} 
                className="col-sm form-control"
                onChange={
                    () => {
                        widget.listItems=text.value;
                        updateWidget(widget.listItems)
                    }
                } 
            ></textarea>
          
            
        </>
    )
}

export default ListWidget


