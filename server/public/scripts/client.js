let myApp = angular.module('myApp', []);
 

myApp.controller('HelloController', function (){
    console.log("controller is running");
    let self = this;
    self.username ='doctorhowser';
    let hello= "hello  not hadar";
    self.greeting = "ouch!";
    

    self.greet = function (name) {
        console.log("hello", name);
    }
    let instructorArray = [{name: 'Chris', pet: 'Charlie', showPet: true}, 
                           {name:'Dane', pet:'thorin', showPet: false}]

    self.instructor = instructorArray;
    let someArray  = ['Chris', 'Ally', 'Dane'];

    self.togglePet - function(instructor) {
        instructor.showPet = !instructor.showPet
    }

})