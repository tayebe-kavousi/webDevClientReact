import React from 'react';
import HeadingWidget from './HeadingWidget';
import ListWidget from './ListWidget';
import WidgetType1 from './WidgetType1';
import WidgetType2 from './WidgetType2';
import WidgetType3 from './WidgetType3';
import YoutubeWidget from './YoutubeWidget';

function WidgetListComponent({widgets, deleteWidget, addWidget, updateWidget}) {
    let newWidgetTitle;
    let newWidgetType;
    return (
        <div>
            <h1>Widget List Length : {widgets.length}</h1>
            <ul className="list-group">
            <li className="list-group-item">
                <input ref={node => newWidgetTitle = node} className="form-control"/>
                <select className="form-control" ref= {node => newWidgetType = node} >
                    <option value="HEADING">Heading Widget</option>
                    <option value="YOUTUBE">Youtube Widget</option>
                    <option value="LIST">List Widget</option>
                    <option value="WT1">Widget Type 1</option>
                    <option value="WT2">Widget Type 2</option>
                    <option value="WT3">Widget Type 3</option>
                </select>
                <div className="d-grid gap-2 margined-top-bottom">
                    <button className="btn btn-primary" onClick=
                        {()=> 
                            {
                                let widget = {
                                    title:newWidgetTitle.value,
                                    id: (new Date()).getTime(),
                                    widgetType: newWidgetType.value
                                }
                                newWidgetTitle.value= '';
                                addWidget(widget)
                            }
                        }> Add widget
                    </button>
                </div>
            </li>
                {widgets.map((widget, index)=>
                    <li key={index} className="list-group-item">
                        <button className="btn btn-danger float-right" onClick={()=>deleteWidget(widget.id)}>
                            Delete
                        </button>
                        <div>
                            {widget.widgetType === 'YOUTUBE' && <YoutubeWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT1' && <WidgetType1 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT2' && <WidgetType2 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT3' && <WidgetType3 widget={widget} updateWidget={updateWidget}/>}
                        </div>
                    </li>)}
            </ul>
        </div>
    )
}

export default WidgetListComponent
