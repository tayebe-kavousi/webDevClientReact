import React ,{useState} from 'react';
import {Card, CardFooter,CardHeader,CardBody} from 'reactstrap';
import './newWidgetStyle.css';

function YoutubeWidget({widget, updateWidget,deleteWidget}) {
    const [editIsOpen,setEditIsOpen] = useState(false);
    const toggleEditIsOpenToTrue =()=>{
        setEditIsOpen(!editIsOpen)
    }
    let src, title;
    return (
        <Card>
            <CardHeader> 
                <h4>Youtube Widget </h4>
                </CardHeader>
                <CardBody>  
                    <h6>{widget.title}</h6>
                    <iframe 
                        width="560" 
                        height="315" 
                        src= {`https://www.youtube.com/embed/${widget.src}`}
                        title="YouTube video player" 
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </CardBody>
                <CardFooter>
                <div className="col"> 
                    <button className="btn btn-danger float-right" onClick={()=>deleteWidget(widget.timestamp)}>Delete</button>
                    <button className="btn btn-primary" onClick={()=>toggleEditIsOpenToTrue()}> Edit</button>
                </div>
                </CardFooter>
           
            <div className="row" className={editIsOpen?"showElement":"hideElement"}> 
                <div className="col">
                    <label htmlFor="title">Title</label>
                    <input 
                        name="title" 
                        id="title" 
                        type="text" 
                        ref={(node)=>title=node} 
                        placeholder={widget.title}
                        className="form-control"
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
                        placeholder={`https://www.youtube.com/embed/${widget.src}`}
                        onChange={
                            () =>{
                                let i = src.value.split("/")[3];
                                widget.src = i;
                                updateWidget(widget);
                            }
                    }/>
                </div>
            </div>
        </Card>
    )
}

export default YoutubeWidget
