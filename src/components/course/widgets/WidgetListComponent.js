import React, {useState} from 'react';
import Modal from 'react-modal';
import HeadingWidget from './HeadingWidget';
import ListWidget from './ListWidget';
import WidgetType1 from './WidgetType1';
import WidgetType2 from './WidgetType2';
import WidgetType3 from './WidgetType3';
import YoutubeWidget from './YoutubeWidget';
import NewWidget from './NewWidget';
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";

function WidgetListComponent({widgets, saveWidgets ,deleteWidget, addWidget, updateWidget}) {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return (
        <div>
            <div>
                <SiIcons.SiAddthis onClick={setModalIsOpenToTrue} style={{color: "blue" ,width:"40px"}}/>
                <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
                    <AiIcons.AiFillCloseSquare onClick={setModalIsOpenToFalse} style={{color: "blue", width:"40px"}} />
                    <NewWidget addWidget={addWidget}/>
                </Modal>
            </div>
            <button 
                className="btn btn-primary float-right"
                onClick = {saveWidgets}
            >Save</button>
            <div>
                <ul>
                    {widgets.map((widget, index)=>
                    <li key={index} className="list-group-item">
                        <button className="btn btn-danger float-right" onClick={()=>deleteWidget(widget.id)}>
                            Delete
                        </button>
                        <div>
                            {widget.widgetType === 'YOUTUBE' && <YoutubeWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT1' && <WidgetType1 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT2' && <WidgetType2 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT3' && <WidgetType3 widget={widget} updateWidget={updateWidget}/>}
                        </div>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default WidgetListComponent
