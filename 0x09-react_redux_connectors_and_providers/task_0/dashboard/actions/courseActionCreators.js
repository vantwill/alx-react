// import Action Types
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';


export function selectCourse(index) {
    return {
        type: SELECT_COURSE,
        index,
    };
}

export function unSelectCourse(index) {
    return {
        type: UNSELECT_COURSE,
        index,
    };
}

const courseList = [
    {
        id: 1,
        name: "ES6",
        credit: 60
    },
    {
        id: 2,
        name: "Webpack",
        credit: 20
    },
    {
        id: 3,
        name: "React",
        credit: 40
    }
];

// this action expects data to be an [array] of course objects e.g. { id, name, credit }
// This action brings with it a payload of [{object id:1}, {object id:2}, {object id:3}], instantiating it into state
// Every action after can have access to this data after it's fetched into state
export function fetchCourseSuccess() {
    return {
        type: FETCH_COURSE_SUCCESS,
        data: courseList,
    };
}