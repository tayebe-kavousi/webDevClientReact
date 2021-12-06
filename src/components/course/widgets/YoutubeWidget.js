import React ,{useState} from 'react';
import './newWidgetStyle.css';

function YoutubeWidget({widget, updateWidget,deleteWidget,saveWidgets}) {
    const [editIsOpen,setEditIsOpen] = useState(false);
    const toggleEditIsOpenToTrue =()=>{
        setEditIsOpen(!editIsOpen)
    }
    let src, title;
    return (
        <div className="container">
            <div className="row"> 
                <div className="col-sm">Type: Youtube Widget </div>
                <div className="col-sm">Title: {widget.title}</div>
                <div className="col-sm">  
                    <iframe 
                        width="560" 
                        height="315" 
                        src= {`https://www.youtube.com/embed/${widget.src}`}
                        title="YouTube video player" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="col"> 
                    <button className="btn btn-danger float-right" onClick={()=>deleteWidget(widget.id)}>Delete</button>
                    <button className="btn btn-primary" onClick={()=>toggleEditIsOpenToTrue()}> Edit</button>
                </div>
            </div>
            <div className="row" className={editIsOpen?"showElement":"hideElement"}> 
                <div className="col">
                    <label htmlFor="title">Title</label>
                    <input 
                        name="title" 
                        id="title" 
                        type="text" 
                        ref={(node)=>title=node} 
                        onChange={
                            () =>{
                                widget.title = title.value;
                                updateWidget(widget);
                            }
                    }/>
                </div>
                <div className="col">
                    <label htmlFor="URL">Address</label>
                    <input 
                        className="form-control"
                        ref={node => src = node} 
                        id="URL" 
                        className="control-form"
                        placeholder={`https://www.youtube.com/embed/${widget.src}`}
                        onChange={
                            () =>{
                                let i = src.value.split("/")[3];
                                widget.src = i;
                                updateWidget(widget);
                            }
                    }/>
                </div>
                <div className="col">
                    <button className="btn btn-primary float-right" onClick ={saveWidgets}> Save </button> 
                </div>  
            </div>
        </div>
     
    )
}

export default YoutubeWidget
