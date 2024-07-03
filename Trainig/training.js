const todos= [
    {
        id: 1,
        text: 'Take out trash',
        iscompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        iscompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appt',
        iscompleted: false,
    }                    
];

const todoJSON  = JSON.stringify(todos);
console.log(todoJSON);

//For
for(let i = 0; i <= 10; i++){
    console.log(`This is number: ${i}`);
}

//While

