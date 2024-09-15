 enum Role {ADMIN,READ_ONLY,AUTHOR};
// enum Role {ADMIN=5,READ_ONLY,AUTHOR};
const person={
    name: 'Arun',
    age: 30,
    hobbies:['Sports','Cooking'],
    // role: [2,'author']
    role:Role.ADMIN
};


for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if(person.role==Role.ADMIN){
    console.log("The Person is an Admin")
}