import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./newWidgetStyle.css";

function Youtube({addWidget}){
    let title,src;
    const handleClick = ()=>{
        let widget = {
            title: title.value,
            id: (new Date()).getTime(),
            widgetType:"YOUTUBE",
            src: src.value.split("/")[3]
        }
        addWidget(widget);
        widget=null;
    }
    return (
            <div>
                <label htmlFor="title">Title: </label>
                <input id="title" ref={node => title = node} className="form-control"/>
                <label htmlFor="URL">URL:</label>
                <input ref={node => src = node} id="URL" className="control-form"/>
                <div className="d-grid gap-2 margined-top-bottom">
                    <button className="btn btn-primary" onClick={handleClick}
                        > Add widget
                    </button>
                </div> 
            </div>
    )
}


function Heading({addWidget}) {
    let title,text, size;
    const handleClick = ()=>{
        let widget = {
            title: title.value,
            id: (new Date()).getTime(),
            widgetType:"HEADING",
            text: text.value,
            size: parseInt(size.value)
        }
        console.log(widget)
        addWidget(widget);
    }
    return(
    <div>
        <label htmlFor="title">Title: </label>
        <input id="title" ref={node => title = node} className="form-control"/>
        <label htmlFor="text">Heading Text: </label>
        <input 
            ref={node => text=node}
            id="text" className="form-control" 
            placeholder="Enter The Heading Text"
        />
        <label htmlFor="size">Heading size: </label>
        <select  className="form-control" id="size" ref={node => size=node}>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
        </select>
        <div className="d-grid gap-2 margined-top-bottom">
            <button className="btn btn-primary" onClick={handleClick}
                > Add widget
            </button>
        </div> 
    </div>  
    ); 
}
    
function List({addWidget}) {
    let title,listItems,ordered;
    const handleClick = ()=>{
        let widget = {
            title: title.value,
            id: (new Date()).getTime(),
            widgetType:"LIST",
            listItems: listItems.value,
            ordered: ordered
        }
        console.log(widget);
        addWidget(widget);
    }
    return(
    <div>
        <label htmlFor="title">Title: </label>
        <input id="title" ref={node => title = node} className="form-control"/>
        <textarea ref={node => listItems= node} className="form-control"></textarea>
        {/* <label htmlFor="order">
            <input ref={node => ordered= node} type="checkbox"/> Ordered
        </label> */}
        <div>
                <input type="radio" value="ordered" name="newListOrdered"
                    onClick = {() => {
                        ordered = true;
                        
                    }}/>
                <label htmlFor="order">Ordered</label>
                <input type="radio" value="unordered" name="newListOrdered"
                    onClick = {() => {
                        ordered = false;
                        
                    }}/>
                <label htmlFor="order">Unordered</label>
            </div>
        <div className="d-grid gap-2 margined-top-bottom">
            <button className="btn btn-primary" onClick={handleClick}
                > Add widget
            </button>
        </div> 
    </div>
    );
} 

    

function NewWidget({addWidget}) {
    const [listWidget,setListWidget] = useState(false);
    const [youtubeWidget,setYoutubeWidget] = useState(false);
    const [headingWidget,setHeadingWidget] = useState(false);

    const showYoutub= () => {
        setHeadingWidget(false);
        setListWidget(false);
        setYoutubeWidget(!youtubeWidget);
    }
    const showList= () => {
        setHeadingWidget(false);
        setYoutubeWidget(false);
        setListWidget(!listWidget);
    }
    const showHeading= () => {
        setListWidget(false);
        setYoutubeWidget(false);
        setHeadingWidget(!headingWidget);
    }
    
    return (
        <div className="container-fluid">
            <h1>New Widget</h1>
            <h3>Type Of Widget</h3>
            <Link to="#"><button onClick={()=> showHeading()} className="btn btn-primary" id="HEADING">Heading</button></Link>
            <Link to="#"><button onClick={()=>showYoutub()} className="btn btn-primary" id="YOUTUBE">Youtube</button></Link>
            <Link to="#"><button onClick={()=>showList()} className="btn btn-primary" id="LIST">List</button></Link>
           <div> {youtubeWidget && <Youtube addWidget={addWidget}/>}</div>
           <div> {headingWidget && <Heading addWidget={addWidget}/>}</div>
           <div> {listWidget && <List addWidget={addWidget}/>}</div> 
        </div>
    )
}

export default NewWidget;


                 