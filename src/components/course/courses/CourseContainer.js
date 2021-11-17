import {connect} from 'react-redux';
import CourseComponent from './CourseComponent';
import * as ActionTypes from '../../../actionTypes';

const stateToPropertyMapper = state =>{
    courses: state.courses
};
const dispatcherToPropertyMapper = dispatch =>(
    {
        findAllCourses: ()=> dispatch({
            type: ActionTypes.FIND_COURSES,
            payload: {
                courses: courses
            }
        })
    }
);

const CourseContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(CourseComponent);

export default CourseContainer
