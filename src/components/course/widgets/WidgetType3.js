import React from 'react'

function WidgetType3({widget, updateWidget}) {
    let selectElement;
    return (
        <div>
            <h1> {widget.title} id : {widget.id}</h1>
            <p> widget type is: {widget.widgetType} </p>
            <select className="form-control" ref= {node => selectElement = node} onChange={()=>{
                let w ={
                    id:widget.id,
                    widgetType: selectElement.value
                }
                updateWidget(w)
            } }>
                    <option value="WT1">Widget Type 1</option>
                    <option value="WT2">Widget Type 2</option>
                    <option value="WT3">Widget Type 3</option>
                </select>
        </div>
    )
}

export default WidgetType3