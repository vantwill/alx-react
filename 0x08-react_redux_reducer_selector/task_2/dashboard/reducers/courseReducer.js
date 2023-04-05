import {
    SELECT_COURSE,
    UNSELECT_COURSE,
    FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes';

const initialState = [];

export function courseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
            console.log(action.data);
            return action.data.map((course) => ({
                id: course.id,
                name: course.name,
                isSelected: false,
                credit: course.credit,
            }));
        }

        case SELECT_COURSE: {
            return state.map((course) => {
                if (course.id === action.index) {
                    return {
                        ...course,
                        isSelected: true,
                    };
                } else return course;
            });
        }

        case UNSELECT_COURSE: {
            return state.map((course) => {
                if (course.id === action.index) {
                    return {
                        ...course,
                        isSelected: false,
                    };
                } else return course;
            })
        }

        default: {
            return state;
        }
    }
}