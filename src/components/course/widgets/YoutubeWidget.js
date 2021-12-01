import React from 'react'

function YoutubeWidget({widget, updateWidget}) {
    let src ;
    return (
        <>
            <div className="col-sm">Type: Youtube Widget </div>
            <div className="col-sm">Title: {widget.title}</div>
            <div className="col-sm form-group">
            <label htmlFor="URL">Address: {`https://www.youtube.com/embed/${widget.src}`}</label>
            <input 
                    className="form-control"
                    ref={node => src = node} 
                    id="URL" 
                    className="control-form"
                    onChange={
                        () =>{
                            let i = src.value.split("/")[3];
                            widget.src = i;
                            updateWidget(widget);
                        }
                    }
                    
                />
            </div>
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
            <div className="col-sm">
                <button></button>
            </div> 
        </>
     
    )
}

export default YoutubeWidget
