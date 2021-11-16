import React from 'react'

function WidgetListComponent({widgets, deleteWidget}) {
    return (
        <div>
            <h1>Widget List Length : {widgets.length}</h1>
            <ul className="list-group">
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
