import {connect} from 'react-redux';
import WidgetListComponent from './WidgetListComponent';
import * as ActionTypes from '../../../actionTypes'


const stateToPropertyMapper = state => (
    {
        widgets: state.widgets
    }
)

const dispatcherToPropertyMapper = dispatch => (
    {
        deleteWidget : widgetId => dispatch({
            type: ActionTypes.DELETE_WIDGET,
            payload: widgetId
        }),
        addWidget : (widget) => dispatch({
            type: ActionTypes.ADD_WIDGET,
            payload: widget
        })
    }
)
const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent);

export default WidgetListContainer
