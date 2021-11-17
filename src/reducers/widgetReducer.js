import * as ActionTypes from '../actionTypes';

let initialState = {
    widgets:[
        {title: "widget 1", id:1, widgetType:'WT1'},
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
                            widget.widgetType = action.widget.widgetType;
                            return widget;
                            
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