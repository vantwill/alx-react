import {
    SELECT_COURSE,
    UNSELECT_COURSE,
    FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';
const initialState = Map([]);

export function courseReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_COURSE_SUCCESS: {
            const courseData = action.data.map((course) => ({
                id: course.id,
                name: course.name,
                isSelected: false,
                credit: course.credit,
            }));
            const courses = coursesNormalizer(courseData);
            return state.merge(courses);
        }

        case SELECT_COURSE: {
            // set, in entities -> courses -> index, the 'isSelected' key to true
            return state.setIn(['entities', 'courses', action.index.toString(), 'isSelected'], true);
        }

        case UNSELECT_COURSE: {
            // set, in entities -> courses -> index, the 'isSelected' key to true
            return state.setIn([ 'entities', 'courses', action.index.toString(), 'isSelected' ], false);
        }

        default: {
            return state;
        }
    }
}