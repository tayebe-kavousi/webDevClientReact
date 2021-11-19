import React from 'react'

function YoutubeWidget({widget, updateWidget}) {
    let src ;
    return (
        <div>
            <h3>youtube widget</h3>
            <input 
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
            <h4>preview</h4>
            <iframe 
                width="560" 
                height="315" 
                src= {`https://www.youtube.com/embed/${widget.src}`}
                title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default YoutubeWidget
