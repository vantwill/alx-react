import { normalize, schema } from 'normalizr';

const courseSchema = new schema.Entity('courses');

export function coursesNormalizer(data) {
    return normalize(data, [courseSchema]);
}

// This normalizer flattens the course data to a 'normalized dataset

// {
//     entities: { courses: { '1': [Object], '2': [Object], '3': [Object] } },
//     result: [1, 2, 3]
// }