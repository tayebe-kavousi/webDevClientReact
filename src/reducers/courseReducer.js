import * as ActionTypes from '../actionTypes';
import CourseService from '../services/CourseService';

const courseService = CourseService.instanse;
const courses1 = courseService.findAllCourses();
export const courseReducer = (state = {
    courses =[]
    }, action) => {
        switch(action.type){
            case ActionTypes.FIND_COURSES:
                return ({
                    courses: courses1
                });
            default :
                return state;
        }
    }

