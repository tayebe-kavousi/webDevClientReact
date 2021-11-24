import React, {useState} from 'react';
import Modal from 'react-modal';
import HeadingWidget from './HeadingWidget';
import ListWidget from './ListWidget';
import YoutubeWidget from './YoutubeWidget';
import NewWidget from './NewWidget';
import './newWidgetStyle.css'
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";

function WidgetListComponent({widgets, saveWidgets ,deleteWidget, addWidget, updateWidget}) {
    // const [modalIsOpen,setModalIsOpen] = useState(false);
    // const setModalIsOpenToTrue =()=>{
    //     setModalIsOpen(true)
    // }
    // const setModalIsOpenToFalse =()=>{
    //     setModalIsOpen(false)
    // }
    
    return (
        <div className="container-fluid">
            {/* <div>
                <SiIcons.SiAddthis onClick={setModalIsOpenToTrue} style={{color: "blue" ,width:"40px"}}/>
                <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
                    <AiIcons.AiFillCloseSquare onClick={setModalIsOpenToFalse} style={{color: "blue", width:"40px"}} />
                    <NewWidget addWidget={addWidget}/>
                </Modal>
            </div> */}
            <div className="row">
                <NewWidget addWidget={addWidget}/>
            </div>
            <div className="row">
           <button className="btn btn-primary float-right" onClick = {saveWidgets}> Save </button> 
           </div>
            {widgets.map((widget,index)=>{
                return(
                    <div className="widgets">
                        <div className="row justify-content-md-center"> 
                            {widget.widgetType === 'YOUTUBE' && <YoutubeWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget}/>}
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col">
                                <button className="btn btn-danger float-right" onClick={()=>deleteWidget(widget.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>   
                )})}    
            </div>
    )
}

export default WidgetListComponent
