interface Timetable {
    day: string;
    slotNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    subjectId: number;
}

interface SubjectFacultyMappingInfo {
    subjectId: number;
    facultyName: string;
}

interface ClassDetails {
    classId: number;
    className: string;
    academicYear: number;
    facultyDetailsList: SubjectFacultyMappingInfo[];
    timetableList: Timetable[];
}

interface SubjectDetails {
    subjectId: number;
    subjectCode: string;
    subjectName: string;
    subjectType: string;
}

interface SubjectAttandanceInfo {
    subjectId: number;
    attandancePercentage: number;
}

interface StudentInfo {
    studentId: string;
    classId: number;
    departmentName: string;
    attandanceDetailsList: SubjectAttandanceInfo[];
}

export const timetableList: Timetable[] = [
    {
        day: 'Monday',
        slotNumber: 1,
        subjectId: 4,
    },
    {
        day: 'Monday',
        slotNumber: 2,
        subjectId: 1,
    },
    {
        day: 'Monday',
        slotNumber: 3,
        subjectId: 7,
    },
    {
        day: 'Monday',
        slotNumber: 4,
        subjectId: 7,
    },
    {
        day: 'Monday',
        slotNumber: 5,
        subjectId: 7,
    },
    {
        day: 'Monday',
        slotNumber: 6,
        subjectId: 5,
    },
    {
        day: 'Monday',
        slotNumber: 7,
        subjectId: 2,
    },
    {
        day: 'Monday',
        slotNumber: 8,
        subjectId: 14,
    },

////////////////////////////////////////////////////////////////////////////////////////

    {
        day: 'Tuesday',
        slotNumber: 1,
        subjectId: 6,
    },
    {
        day: 'Tuesday',
        slotNumber: 2,
        subjectId: 5,
    },
    {
        day: 'Tuesday',
        slotNumber: 3,
        subjectId: 3,
    },
    {
        day: 'Tuesday',
        slotNumber: 4,
        subjectId: 2,
    },
    {
        day: 'Tuesday',
        slotNumber: 5,
        subjectId: 4,
    },
    {
        day: 'Tuesday',
        slotNumber: 6,
        subjectId: 1,
    },
    {
        day: 'Tuesday',
        slotNumber: 7,
        subjectId: 12,
    },
    {
        day: 'Tuesday',
        slotNumber: 8,
        subjectId: 12,
    },

////////////////////////////////////////////////////////////////////////////////////////

    {
        day: 'Wednesday',
        slotNumber: 1,
        subjectId: 3,
    },
    {
        day: 'Wednesday',
        slotNumber: 2,
        subjectId: 11,
    },
    {
        day: 'Wednesday',
        slotNumber: 3,
        subjectId: 11,
    },
    {
        day: 'Wednesday',
        slotNumber: 4,
        subjectId: 1,
    },
    {
        day: 'Wednesday',
        slotNumber: 5,
        subjectId: 4,
    },
    {
        day: 'Wednesday',
        slotNumber: 6,
        subjectId: 6,
    },
    {
        day: 'Wednesday',
        slotNumber: 7,
        subjectId: 9,
    },
    {
        day: 'Wednesday',
        slotNumber: 8,
        subjectId: 9,
    },

////////////////////////////////////////////////////////////////////////////////////////

    {
        day: 'Thursday',
        slotNumber: 1,
        subjectId: 5,
    },
    {
        day: 'Thursday',
        slotNumber: 2,
        subjectId: 4,
    },
    {
        day: 'Thursday',
        slotNumber: 3,
        subjectId: 13,
    },
    {
        day: 'Thursday',
        slotNumber: 4,
        subjectId: 13,
    },
    {
        day: 'Thursday',
        slotNumber: 5,
        subjectId: 2,
    },
    {
        day: 'Thursday',
        slotNumber: 6,
        subjectId: 6,
    },
    {
        day: 'Thursday',
        slotNumber: 7,
        subjectId: 15,
    },
    {
        day: 'Thursday',
        slotNumber: 8,
        subjectId: 15,
    },

////////////////////////////////////////////////////////////////////////////////////////

    {
        day: 'Friday',
        slotNumber: 1,
        subjectId: 1,
    },
    {
        day: 'Friday',
        slotNumber: 2,
        subjectId: 3,
    },
    {
        day: 'Friday',
        slotNumber: 3,
        subjectId: 10,
    },
    {
        day: 'Friday',
        slotNumber: 4,
        subjectId: 10,
    },
    {
        day: 'Friday',
        slotNumber: 5,
        subjectId: 2,
    },
    {
        day: 'Friday',
        slotNumber: 6,
        subjectId: 5,
    },
    {
        day: 'Friday',
        slotNumber: 7,
        subjectId: 8,
    },
    {
        day: 'Friday',
        slotNumber: 8,
        subjectId: 8,
    },
];

export const subjectDetailsList: SubjectDetails[] = [
    {
        subjectId: 1,
        subjectCode: 'CS23401',
        subjectName: 'Database Management Systems',
        subjectType: 'Theory',
    },
    {
        subjectId: 2,
        subjectCode: 'CS23402',
        subjectName: 'Computer Networks',
        subjectType: 'Theory',
    },
    {
        subjectId: 3,
        subjectCode: 'CS23403',
        subjectName: 'Operating Systems',
        subjectType: 'Theory',
    },
    {
        subjectId: 4,
        subjectCode: 'CS23404',
        subjectName: 'Algorithms',
        subjectType: 'Theory',
    },
    {
        subjectId: 5,
        subjectCode: 'CS23405',
        subjectName: 'Theory of Computation',
        subjectType: 'Theory',
    },
    {
        subjectId: 6,
        subjectCode: 'GE23402',
        subjectName: 'Environmental Science and Sustainability',
        subjectType: 'Theory',
    },
    {
        subjectId: 7,
        subjectCode: 'LCS23401',
        subjectName: 'Database Management Systems Laboratory',
        subjectType: 'Laboratory',
    },
    {
        subjectId: 8,
        subjectCode: 'CS23402',
        subjectName: 'Computer Networks Laboratory',
        subjectType: 'Laboratory',
    },
    {
        subjectId: 9,
        subjectCode: 'CS23403',
        subjectName: 'Operating Systems',
        subjectType: 'Laboratory',
    },
    {
        subjectId: 10,
        subjectCode: 'CS23404',
        subjectName: 'Algorithms',
        subjectType: 'Laboratory',
    },
    {
        subjectId: 11,
        subjectCode: 'EEC23401',
        subjectName: 'Advanced Aptitude Skills',
        subjectType: 'Activity',
    },
    {
        subjectId: 12,
        subjectCode: 'MC23401',
        subjectName: 'NPTEL',
        subjectType: 'Activity',
    },
    {
        subjectId: 13,
        subjectCode: 'EEC23402',
        subjectName: 'Mini Project - 1',
        subjectType: 'Activity',
    },
    {
        subjectId: 14,
        subjectCode: 'LIBRARY',
        subjectName: 'Library',
        subjectType: 'Activity',
    },
    {
        subjectId: 15,
        subjectCode: 'SPORTS',
        subjectName: 'Sports',
        subjectType: 'Activity',
    },
]

export const classDetailsList: ClassDetails[] = [
    {
        classId: 1,
        className: 'CSE-A',
        academicYear: 2,
        facultyDetailsList: [
            {
                subjectId: 1,
                facultyName: 'Ms. Raziya Begum',
            },
            {
                subjectId: 2,
                facultyName: 'Ms. S. Bhuvana (Cyber Security)',
            },
            {
                subjectId: 3,
                facultyName: 'Ms. Avanthika Varshini',
            },
            {
                subjectId: 4,
                facultyName: 'Mrs. S. Pavithra',
            },
            {
                subjectId: 5,
                facultyName: 'Ms. R. Vaishnavi',
            },
            {
                subjectId: 6,
                facultyName: 'Dr. R. Prabakaran (Chemistry)',
            },
            {
                subjectId: 7,
                facultyName: 'Ms. Raziya Begum / Mrs. B. Gunasundari',
            },
            {
                subjectId: 8,
                facultyName: 'Ms. S. Bhuvana / Mr. I. Benjamin Jebaraj',
            },
            {
                subjectId: 9,
                facultyName: 'Ms. Avanthika / Mr. I. Benjamin Jebaraj',
            },
            {
                subjectId: 10,
                facultyName: 'Mrs. S. Pavithra / Ms. R. Lavanya',
            },
            {
                subjectId: 11,
                facultyName: 'Ms. Metilda Therbos / Mr. Vairavasamy',
            },
            {
                subjectId: 12,
                facultyName: 'Ms. T. Dharanika / Ms. S. Pavithra',
            },
            {
                subjectId: 13,
                facultyName: 'Mrs. S. Pavithra',
            },
            {
                subjectId: 14,
                facultyName: 'Ms. Raziya Begum',
            },
            {
                subjectId: 15,
                facultyName: 'Physical Dept. / Ms. S. Pavithra',
            },
        ],
        timetableList: [
            {
                day: 'Monday',
                slotNumber: 1,
                subjectId: 4,
            },
            {
                day: 'Monday',
                slotNumber: 2,
                subjectId: 1,
            },
            {
                day: 'Monday',
                slotNumber: 3,
                subjectId: 7,
            },
            {
                day: 'Monday',
                slotNumber: 4,
                subjectId: 7,
            },
            {
                day: 'Monday',
                slotNumber: 5,
                subjectId: 7,
            },
            {
                day: 'Monday',
                slotNumber: 6,
                subjectId: 5,
            },
            {
                day: 'Monday',
                slotNumber: 7,
                subjectId: 2,
            },
            {
                day: 'Monday',
                slotNumber: 8,
                subjectId: 14,
            },
            {
                day: 'Tuesday',
                slotNumber: 1,
                subjectId: 6,
            },
            {
                day: 'Tuesday',
                slotNumber: 2,
                subjectId: 5,
            },
            {
                day: 'Tuesday',
                slotNumber: 3,
                subjectId: 3,
            },
            {
                day: 'Tuesday',
                slotNumber: 4,
                subjectId: 2,
            },
            {
                day: 'Tuesday',
                slotNumber: 5,
                subjectId: 4,
            },
            {
                day: 'Tuesday',
                slotNumber: 6,
                subjectId: 1,
            },
            {
                day: 'Tuesday',
                slotNumber: 7,
                subjectId: 12,
            },
            {
                day: 'Tuesday',
                slotNumber: 8,
                subjectId: 12,
            },
            {
                day: 'Wednesday',
                slotNumber: 1,
                subjectId: 3,
            },
            {
                day: 'Wednesday',
                slotNumber: 2,
                subjectId: 11,
            },
            {
                day: 'Wednesday',
                slotNumber: 3,
                subjectId: 11,
            },
            {
                day: 'Wednesday',
                slotNumber: 4,
                subjectId: 1,
            },
            {
                day: 'Wednesday',
                slotNumber: 5,
                subjectId: 4,
            },
            {
                day: 'Wednesday',
                slotNumber: 6,
                subjectId: 6,
            },
            {
                day: 'Wednesday',
                slotNumber: 7,
                subjectId: 9,
            },
            {
                day: 'Wednesday',
                slotNumber: 8,
                subjectId: 9,
            },
            {
                day: 'Thursday',
                slotNumber: 1,
                subjectId: 5,
            },
            {
                day: 'Thursday',
                slotNumber: 2,
                subjectId: 4,
            },
            {
                day: 'Thursday',
                slotNumber: 3,
                subjectId: 13,
            },
            {
                day: 'Thursday',
                slotNumber: 4,
                subjectId: 13,
            },
            {
                day: 'Thursday',
                slotNumber: 5,
                subjectId: 2,
            },
            {
                day: 'Thursday',
                slotNumber: 6,
                subjectId: 6,
            },
            {
                day: 'Thursday',
                slotNumber: 7,
                subjectId: 15,
            },
            {
                day: 'Thursday',
                slotNumber: 8,
                subjectId: 15,
            },
            {
                day: 'Friday',
                slotNumber: 1,
                subjectId: 1,
            },
            {
                day: 'Friday',
                slotNumber: 2,
                subjectId: 3,
            },
            {
                day: 'Friday',
                slotNumber: 3,
                subjectId: 10,
            },
            {
                day: 'Friday',
                slotNumber: 4,
                subjectId: 10,
            },
            {
                day: 'Friday',
                slotNumber: 5,
                subjectId: 2,
            },
            {
                day: 'Friday',
                slotNumber: 6,
                subjectId: 5,
            },
            {
                day: 'Friday',
                slotNumber: 7,
                subjectId: 8,
            },
            {
                day: 'Friday',
                slotNumber: 8,
                subjectId: 8,
            },
        ],
    }
]

export const studentsInfoList: StudentInfo[] = [
    {
        studentId: '11142301CS04169',
        classId: 1,
        departmentName: 'CSE',
        attandanceDetailsList: [
            {
                subjectId: 1,
                attandancePercentage: 82,
            },
            {
                subjectId: 2,
                attandancePercentage: 92,
            },
            {
                subjectId: 3,
                attandancePercentage: 76,
            },
            {
                subjectId: 4,
                attandancePercentage: 72,
            },
            {
                subjectId: 5,
                attandancePercentage: 60,
            },
            {
                subjectId: 6,
                attandancePercentage: 90,
            },
            {
                subjectId: 7,
                attandancePercentage: 89,
            },
            {
                subjectId: 8,
                attandancePercentage: 86,
            },
            {
                subjectId: 9,
                attandancePercentage: 89,
            },
            {
                subjectId: 10,
                attandancePercentage: 95,
            },
            {
                subjectId: 11,
                attandancePercentage: 80,
            },
            {
                subjectId: 12,
                attandancePercentage: 76,
            },
            {
                subjectId: 13,
                attandancePercentage: 70,
            },
            {
                subjectId: 14,
                attandancePercentage: 92,
            },
            {
                subjectId: 15,
                attandancePercentage: 85,
            },
        ]
    }
]

const formattedTimetableList = timetableList.map(timetable => {
    const { subjectId } = timetable

    const subjectDetails = subjectDetailsList.find(eachSubject => {
        return (eachSubject.subjectId === subjectId)
    }) 

    if (subjectDetails == undefined) {
        throw new Error('Subject details not found')
    }

    const attandanceInfo = studentsInfoList[0].attandanceDetailsList.find(eachSubject => {
        return (eachSubject.subjectId === subjectId)
    })

    if (attandanceInfo == undefined) {
        throw new Error('Attendance information not found')
    }

    const { attandancePercentage } = attandanceInfo

    return ({
        ...timetable,
        ...subjectDetails,
        attandancePercentage
    })
})

export default formattedTimetableList;