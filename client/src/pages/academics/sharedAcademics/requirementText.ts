import { AllRequirementsType } from './RequirementType';

const allRequirements: AllRequirementsType[] = [
    {
        id: 1,
        sectionName: 'Overall Requirements',
        sectionList: [
            {
                main: '30 hours earned in residence at UVA-Wise in Fall and Spring semesters.',
            },
            {
                main: '3.0 overall GPA, with no grade below C- (minimum grade policy goes into effect for the 2024-2025 year).',
            },
        ],
    },
    {
        id: 2,
        sectionName: 'UVA Wise Course Requirements',
        sectionList: [
            {
                main: 'SEM 1010—(1 s.h.) Freshman Seminar. This is required of all students.',
            },
            {
                main: 'HUM 1850—(3 s.h.) Introduction to Appalachian Studies.',
                note: [
                    'Taught virtually in Summer II. If taken in summer, the course counts toward the program requirement, but not toward the 30 hours to complete the program.',
                ],
            },
            {
                main: 'Upper-level Appalachia course',
                note: [
                    'In Fall, Appalachian Poetry and Prose is usually offered and available to those who took HUM 1850 in Summer II',
                    'In Spring, several options are regularly taught including, but not exclusively: (HIS) History of Appalachia, (ENG) Appalachian Poetry and Prose, (BIO) Medicinal Plants',
                ],
            },
        ],
    },
    {
        id: 3,
        sectionName: 'General Tips',
        sectionList: [
            {
                main: 'ENG 1030, FRE 1030, and SPA 1030 are accelerated classes. They are 3 credit classes, but if you complete the course with a C or better, you will receive 6 hours of UVA-Wise credit. UVA will only give you 3 hours for these courses',
            },
            {
                main: 'ENG 1010/1020 or ENG 1030 satisfies UVA’s First Writing Requirement',
            },
            {
                main: 'If interested in music lessons, you should consider taking a one credit lesson while at UVA-Wise. These credits do transfer to UVA.',
            },
        ],
    },
    {
        id: 4,
        sectionName: 'Curriculum Transition',
        sectionList: [
            {
                main: 'YiW students will enter UVA under the Traditional Curriculum',
            },
            {
                main: 'Prof. McKnight has taken the Traditional Curriculum and translated it to the needs of YiW students taking classes at UVA-Wise',
            },
        ],
    },
];

export default allRequirements;
