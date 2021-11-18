import * as ActionTypes from '../actionTypes';

let initialState = {
    widgets:[
        {title: "Youtube Widget", id:6, widgetType:'YOUTUBE', src:"wA_whMl_psA"},
        {title: "List Widget", id:5, widgetType:'LIST', listItems:"item1\nitem2\nitem3", ordered:true},
        {title: "Heading meow Widget", id:1, widgetType:'HEADING'},
        {title: "widget 2", id:2, widgetType:'WT2'},
        {title: "widget 3", id:3, widgetType:'WT3'},
        {title: "widget 4", id:4, widgetType:'WT1'}
    ]
};

const widgetReducer  = (state=initialState, action)=>{
    switch(action.type){
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