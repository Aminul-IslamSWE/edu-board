
let name = prompt('student name');
let roll = prompt('Roll');



let bn = Number(prompt('Bangla'));
let en = Number(prompt('English'));
let math = Number(prompt('Mathmatics'));
let s = Number(prompt('Science'));
let ss = Number(prompt('Social Science'));
let rel = Number(prompt('Religion'));


console.log(

    `
    Student Name : ${name}
    Student Name : ${roll}

    Subject            Marks         GPA                      Grade
    Bangla             ${bn}        ${gpa(bn)}    
    English            ${en}        ${gpa (en)}
    Mathmatics         ${math}      ${gpa (math)}
    science            ${s}         ${ gpa (s)}
    Social science     ${ss}        ${gpa (ss)}
    Religion           ${rel}       ${ gpa (rel)}

             


    `
);



