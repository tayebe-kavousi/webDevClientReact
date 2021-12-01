import React from 'react'

function Preview({widgets}) {
    return (
        <div>
            {
                widgets.map((widget, index) =>{
                    if(widget.widgetType === 'YOUTUBE'){ 
                        return(
                        <iframe 
                            width="560" 
                            height="315" 
                            src= {`https://www.youtube.com/embed/${widget.src}`}
                            title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                        );
                    } else if(widget.widgetType === 'HEADING'){
                        return(
                            <div> 
                                {widget.size === 1 && <h1>{widget.text}</h1> }
                                {widget.size === 2 && <h2>{widget.text}</h2> }
                                {widget.size === 3 && <h3>{widget.text}</h3> }
                                {widget.size === 4 && <h4>{widget.text}</h4> }
                            </div> 
                        );
                    } else if(widget.widgetType === 'LIST'){
                        return(
                            <div>
                                {widget.ordered && <ol>
                                    {widget.listItems.split('\n').map((item, index)=>{
                                        return(<li key={index}>{item}</li>)
                                    })}
                                </ol>}
                                {!widget.ordered && <ul>
                                    {widget.listItems.split('\n').map((item, index)=>{
                                        return(<li key={index}>{item}</li>)
                                    })}
                                </ul>}
                            </div>
                        );
                    }  
                })
            }
        </div>
    )
}

export default Preview
