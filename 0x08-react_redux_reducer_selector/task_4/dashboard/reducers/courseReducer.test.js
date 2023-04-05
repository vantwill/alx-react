// import action types
import {
    SELECT_COURSE,
    UNSELECT_COURSE,
    FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes';
// import action creators
import {
    fetchCourseSuccess,
    selectCourse,
    unSelectCourse,
} from '../actions/courseActionCreators';
import { courseReducer } from './courseReducer';
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map([]);

const courseList = Map(coursesNormalizer([
    {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
    },
    {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
    },
    {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
    }
]));

const selectedCourseList = Map(coursesNormalizer([
    {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
    },
    {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
    },
    {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
    }
]));

describe('courseReducer', () => {
    it('returns initial state when no actions have been recorded and an unknown action is passed in.', () => {
        const actual = courseReducer(initialState, "");
        const expected = initialState;
        expect(actual).toEqual(actual);
    });

    it('verifies that FETCH_COURSE_SUCCESS returns the data passed', () => {
        // Expected state is the fetched courseList
        const expected = courseList;

        // create the FETCH_COURSE_SUCCESS action
        const fetch = fetchCourseSuccess();

        // generate the courseList into state
        const actual = courseReducer(initialState, fetch);
        expect(actual).toEqual(expected);
    });

    it('verifies that the action SELECT_COURSE updates the state appropriately', () => {
        // Selected course is #2
        const expected = selectedCourseList;
        // Create the SELECT_COURSE action
        const select = selectCourse(2);
        // Dispatch action
        const actual = courseReducer(courseList, select);

        expect(actual).toEqual(expected);
    });

    it('verifies that the action UNSELECT_COURSE updates the state appropriately', () => {
        // Return the state to all unselected objects
        const expected = courseList;
        // Create the UNSELECT_COURSE action
        const unselect = unSelectCourse(2);
        // Dispatch Action
        const actual = courseReducer(courseList, unselect);

        expect(actual).toEqual(expected);
    });
});