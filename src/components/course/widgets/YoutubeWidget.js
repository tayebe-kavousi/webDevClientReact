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
                    onChange={
                        () =>{
                            let i = src.value.split("/")[3];
                            console.log(i);
                            widget.src = i;
                            updateWidget(widget);
                        }
                    }
                    id="URL" 
                    className="control-form"
                />
            </div>
            <div className="col-sm">  
                <iframe 
                    width="560" 
                    height="315" 
                    src= {`https://www.youtube.com/embed/${widget.src}`}
                    title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                </div>
                {/*  */}  
        </>
     
    )
}

export default YoutubeWidget
