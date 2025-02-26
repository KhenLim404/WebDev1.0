function findGrade(student) {
    let highgrade = student[0].grade;
    let lowgrade = student[0].grade;

    for (let ii = 1; ii < student.length; ii++) {
        if (student[ii].grade > highgrade) {
            highgrade = student[ii];
        }
        if (student[ii].grade < lowgrade) {
            lowgrade = student[ii];

        }
    }

    console.log('Highest Grade:', highgrade);
    console.log('Lowest Grade:', lowgrade);
}

const student = [
    { id: 1, name: 'Nathaniel', grade: 85 },
    { id: 2, name: 'Khen', grade: 92 },
    { id: 3, name: 'David', grade: 78 },
    { id: 4, name: 'Zeus', grade: 88 },
    { id: 5, name: 'Szofia', grade: 95 },
    { id: 6, name: 'Sean', grade: 72 },
    { id: 7, name: 'Fern', grade: 90 },
    { id: 8, name: 'Wayne', grade: 81 },
    { id: 9, name: 'Bryan', grade: 93 },
    { id: 10, name: 'Mauris', grade: 79 }
];


findGrade(student);