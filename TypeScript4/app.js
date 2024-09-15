// const ADMIN ='ADMIN';
// const READ_ONLY='READ_ONLY';
// enum Role {ADMIN,READ_ONLY,AUTHOR};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
var person 
//:{
//     name: string;
//     age: number;
// }
// const person
= {
    name: 'Arun',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // role: [2,'author']
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] =10;
// let favoriteActivities: string[];
// favoriteActivities =['Sports'];
// console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role == 5) {
    console.log("The Person is an Admin");
}
