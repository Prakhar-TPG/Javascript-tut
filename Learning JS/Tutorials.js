// Exception Handling

let str= "Prakhar"

if(str!= undefined){
    console.log("This is not undefined")
}
else{
    console.log("This is undefined")
}
// functionfunc();
try {
    console.log("Welcome to Javascipt") 
    functionfunc();   
} catch (error) {
    console.log("How are you");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

//callbacks function

const students= [
    {name: "Prakhar", subject: "Javascipt"},
    {name: "Rohan", subject: "Python"}
]

function enrollStudents(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("Students has benn enroled")
        callback();
    }, 1000)
}

function fetchStudents(){
    setTimeout(function(){
        let string= "";
        students.forEach(function(student){
            string += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML=string;
        console.log("Students have been fetched");
    }, 5000)
}
let newstudent= {name: "Shyam", subject: "Java"} 
enrollStudents(newstudent,fetchStudents)
// fetchStudents()

// Promises

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error= true;
            if(!error){
                console.log("Your promise has been fulfilled");
                resolve();
            }
            else{
                console.log("Your promise has not been resolved");
                reject();
            }
        }, 10000)
    })
}

func1().then(function(){
    console.log("Problem resolved")
}).catch(function(){
    console.log("Problem rejected")
})

// Prototype

let obj={
    name: "Prakhar",
    subject: "Javascript"
}

function Obj(givenName){
    return this.name= givenName
}
Obj.prototype.getName= function(){
    return this.name
}
let obj2= new Obj("Rohan")
console.log(obj2);

//Protype inheritance

//Employee Constructor
function Employee(name, experience, salary){
    this.name=name;
    this.experience=experience;
    this.salary=salary;
}

//slogan
Employee.prototype.slogan= function(){
    return `Best Regards, ${this.name}`;
}

//create an object from this constructor
 let emp= new Employee("Prakhar", 12 , 45684);
 console.log(emp.slogan())

 // Programmer Constructor
function Programmer(name,experience, salary, language) {
    Employee.call(this, name, experience, salary);
    this.language = language;
}

//Inherit the prototype 
Programmer.prototype=Object.create(Employee.prototype)

let study = new Programmer("Rohan", 2, 0, "Javascript");
console.log(study);

export {Programmer};

//class inheritance

class Mentor {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear(){
        return 2022 - this.experience;
    }
}
class Coder extends Mentor{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }
    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }
}
let Clock = new Coder("Prakhar", 1, "QA", "Go", "PrakharTPG")
console.log(Clock)
console.log(Clock.favoriteLanguage())
console.log(Clock.joiningYear())


const arr = ['a', 'b', 'c'];
for (let i in arr) {
    console.log(arr[i]);
  }
for (let a of arr) {
    console.log(a);
  }