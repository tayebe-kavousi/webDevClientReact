import React from 'react'

function WidgetListComponent({widgets, deleteWidget}) {
    return (
        <div>
            <h1>Widget List Length : {widgets.length}</h1>
            <ul className="list-group">
            <li className="list-group-item">
                <input className="form-control"/>
                <div className="d-grid gap-2 margined-top-bottom">
                    <button className="btn btn-primary">Add widget</button>
                </div>
            </li>
                {widgets.map((widget, index)=>
                    <li key={index} className="list-group-item">
                        {widget.title} 
                        <button className="btn btn-danger float-right" onClick={()=>deleteWidget(widget.id)}>
                            Delete
                        </button>
                    </li>)}
            </ul>
        </div>
    )
}

export default WidgetListComponent
