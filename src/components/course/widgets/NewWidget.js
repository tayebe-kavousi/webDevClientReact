import React from 'react';


function NewWidget ({addWidget}) {
    //let newWidget = {};
    let newWidgetTitle;
    let newWidgetType;
    let newWidgetSrc;
    let newWidgetText;
    let newWidgetSize;
    let newWidgetordered;
        return (
            <div className="container-fluid">
                <h1>New Widget</h1>
                <label htmlFor="title">Title: </label>
                <input id="title" ref={node => newWidgetTitle = node.value} className="form-control"/>
                <label htmlFor="type">Choose type of the widget</label>
                <select className="form-control" ref= {node => newWidgetType = node} >
                    <option value="HEADING">Heading Widget</option>
                    <option value="YOUTUBE">Youtube Widget</option>
                    <option value="LIST">List Widget</option>
                    <option value="WT1">Widget Type 1</option>
                    <option value="WT2">Widget Type 2</option>
                    <option value="WT3">Widget Type 3</option>
                </select>
                <div>
                    {newWidgetType.value === 'YOUTUBE' && 
                        <div>
                            <label htmlFor="URL">URL:</label>
                            <input ref={node => newWidgetSrc = node} id="URL" className="control-form"/>
                        </div>
                    }
                    {newWidgetType.value === 'HEADING' &&
                        <div>
                            <label htmlFor="text">Heading Text: </label>
                            <input 
                                ref={node => newWidgetText = node} 
                                id="text" className="form-control" 
                                placeholder="Enter The Heading Text"
                            />
                            <label htmlFor="size">Heading size: </label>
                            <select ref={node => newWidgetSize= node} className="form-control" id="size" onChange={}>
                                <option value="1">Heading 1</option>
                                <option value="2">Heading 2</option>
                                <option value="3">Heading 3</option>
                                <option value="4">Heading 4</option>
                            </select>
                        </div>
                    }
                    {newWidgetType.value === 'LIST' && 
                        <div>
                            <textarea ref={node => newWidgetText = node} className="form-control"></textarea>
                            <label htmlFor="order">
                                <input ref={node => newWidgetordered = node} type="checkbox" checked={newWidgetordered}/> Ordered
                            </label>
                        </div>
                    }
                </div>
                <div className="d-grid gap-2 margined-top-bottom">
                    <button className="btn btn-primary" 
                            onClick = {()=> 
                            {
                                let widget = {
                                    title:newWidgetTitle.value,
                                    id: (new Date()).getTime(),
                                    widgetType: newWidgetType.value,
                                    src:newWidgetSrc.value,
                                    text:newWidgetText.value,
                                    size:newWidgetSize.value,
                                    ordered:newWidgetordered.value
                                }
                                newWidgetTitle.value= '';
                                addWidget(widget)
                            }
                        }> Add widget
                    </button>
                </div>  
            </div>
        )

}

export default NewWidget