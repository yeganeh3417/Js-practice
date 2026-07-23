var university = {
    name: "Isfahan University",

    address: {
        country: "Iran",
        city: "Isfahan",
        postalCode: "12345",
    },

    faculties: [
        {
            name: "Engineering",
            address: "Building A",

            majors: [
                {
                    name: "Computer Engineering",
                    headOfDepartment: "Dr. Mohamadi",

                    students: [
                        {
                            name: "sara",
                            grades: {
                                math: 18,
                                database: 20,
                            }
                        },
                        {
                            name: "ali",
                            grades: {
                                math: 20,
                                database: 18,
                            }
                        }
                    ] 
                },
                {
                    name: "Civil Engineering",
                    headOfDepartment: "Dr. Ahmadi",

                    students: [
                        {
                            name: "mohammad",
                            grades: {
                                statics: 17,
                                physics: 19,
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: "Art",
            address: "Building B",

            majors: [
                {
                    name: "Graphic Design",
                    headOfDepartment: "Dr. Nazari",

                    students: [
                        {
                            name: "Aida",
                            grades: {
                                drawing: 20,
                                history: 18,
                            }
                        }
                    ]
                },
                {
                    name: "Interior Design",
                    headOfDepartment: "Dr. Karimi",

                    students: [
                        {
                            name: "maryam",
                            grades: {
                                sketching: 19,
                                drawing: 20,
                            }
                        }
                    ]
                }
            ]
        }
    ]
};


console.log(university.name);
console.log(university.address.city);
console.log(university.faculties[0].address);
console.log(university.faculties[1].name);
console.log(university.faculties[0].majors[0].headOfDepartment);
console.log(university.faculties[0].majors[0].students[0].name);
console.log(university.faculties[1].majors[1].name);
console.log(university.faculties[0].majors[0].students[0].grades.database);
console.log(university.faculties[1].majors[1].students[0].grades.sketching);