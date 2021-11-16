import * as ActionTypes from '../actionTypes';

let initialState = {
    widgets:[
        {title: "widget 1", id:1},
        {title: "widget 2", id:2},
        {title: "widget 3", id:3},
        {title: "widget 4", id:4}
    ]
};

const widgetReducer  = (state=initialState, action)=>{
    switch(action.type){
        case ActionTypes.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.payload)
            };
        case ActionTypes.ADD_WIDGET:
            return {
                widgets: [
                    action.payload,
                    ...state.widgets
                ]
            };
        default:
            return state;
    }
}
export default widgetReducer;