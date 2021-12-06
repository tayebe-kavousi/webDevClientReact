import React, {useState} from 'react';
import {Modal,ModalBody, ModalHeader,Row} from 'reactstrap';
import HeadingWidget from './HeadingWidget';
import ListWidget from './ListWidget';
import YoutubeWidget from './YoutubeWidget';
import NewWidget from './NewWidget';
import Preview from './Preview';
import './newWidgetStyle.css'
import * as FaIcons from "react-icons/fa";

function WidgetListComponent({widgets, saveWidgets ,deleteWidget, addWidget, updateWidget}) {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    
    return (
        <div className="container-fluid">
            <NewWidget addWidget={addWidget}/>
            <div>
                <button onClick={setModalIsOpenToTrue} className="btn btn-primary" >Preview</button>
                <Modal size="lg" style={{maxWidth: '700px', width: '90%'}} isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
                    <ModalHeader>
                        <FaIcons.FaWindowClose onClick={setModalIsOpenToFalse} style={{color: "blue" ,width:"40px"}}/>
                    </ModalHeader>
                    <ModalBody>
                        <Preview widgets={widgets} className="previewModal"/>
                    </ModalBody>
                </Modal>
            </div>
            <div className="row">
            {widgets.map((widget)=>{
                return(
                    <div className="col-sm-3" style={{width:"33%"}}>
                        {widget.widgetType === 'YOUTUBE' && <YoutubeWidget widget={widget} updateWidget={updateWidget} saveWidgets={saveWidgets} deleteWidget={deleteWidget}/>}
                        {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget} saveWidgets={saveWidgets} deleteWidget={deleteWidget}/>}
                        {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget} saveWidgets={saveWidgets} deleteWidget={deleteWidget}/>} 
                    </div>     
                )})}    
            </div>
            </div>
    )
}

export default WidgetListComponent
