import React from 'react'

function ListWidget({widget, updateWidget}) {
    let text;
    let ordered;
    return (
        <>
            <div className="col-sm">Type: List Widget </div>
            <div className="col-sm">Title: {widget.title}</div>
            <div className="col-sm">List items: {widget.listItems.split('\n').join(", ")}</div>
            <div className="col-sm">{widget.ordered?"Ordered":"Unordered"}</div>
      
            {/* <textarea 
                ref={node => text = node} 
                className="form-control"
                onChange={
                    () => {
                        widget.listItems= text.value;
                        updateWidget(widget.listItems)
                    }
                } 
            ></textarea>
            <label htmlFor="order">
                <input 
                    ref={node => ordered=node} 
                    onClick = {() => {
                        widget.ordered = ordered.checked;
                        updateWidget(widget);
                    }}
                    type="checkbox" 
                    checked={widget.ordered}
                /> Ordered
            </label>
            */}
            
        </>
    )
}

export default ListWidget
