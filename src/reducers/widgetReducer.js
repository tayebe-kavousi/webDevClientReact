import * as ActionTypes from '../actionTypes';
import {WIDGET_API_URL} from '../URL';

let initialState = {
    widgets:[
        {title: "Youtube Widget", id:6, widgetType:'YOUTUBE', src:"wA_whMl_psA"},
        {title: "List Widget", id:5, widgetType:'LIST', listItems:"item1\nitem2\nitem3", ordered:true},
        {title: "Heading meow Widget", id:1, widgetType:'HEADING', text:"my little lovely Venice", size:2, },
    ]
};

const widgetReducer  = (state=initialState, action)=>{
    switch(action.type){
        case ActionTypes.SAVE_WIDGETS:
            fetch(WIDGET_API_URL , {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(state.widgets)
            })
        case ActionTypes.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };
        case ActionTypes.ADD_WIDGET:
            return {
                widgets: [
                    action.widget,
                    ...state.widgets
                ]
            };
            case ActionTypes.UPDATE_WIDGET:
                return{
                    widgets: state.widgets.map(widget =>{
                        if(widget.id === action.widget.id){
                            return action.widget;
                            
                        }else{
                            return widget;
                        }
                    })
                }
        default:
            return state;
    }
}
export default widgetReducer;