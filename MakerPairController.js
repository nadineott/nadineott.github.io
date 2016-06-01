//establish module and controller in it
//1st parameter of module is name we're giving it
//2nd parameter is dependencies, for now it's empty
angular.module('MakerPairApp', [])
//controller has 2 inputs, 1st is it's name 2nd function to execute controller once it's loaded
//anything set as property of $scope is accessible from html
   .controller('MakerPairController', function($scope) {
    //set greeting in scope to "hello world"
      $scope.show =1;

      $scope.showPairs = function() {

      //generate array of students from form
      var list = makeStudentsArray();

      if (list.length <= 18) {
            $scope.show = 2;
            $(".tooFewStudents").fadeIn(550);
      }
      else {
        
        //feed this array to sprint generator and return sprints
        generateSprints(list);

        $scope.sprint1 = sprint1;
        $scope.sprint2 = sprint2;
        $scope.sprint3 = sprint3;
        $scope.sprint4 = sprint4;
        $scope.sprint5 = sprint5;
        $scope.sprint6 = sprint6;
        $scope.sprint7 = sprint7;
        $scope.sprint8 = sprint8;
        $scope.sprint9 = sprint9;
        $scope.sprint10 = sprint10;
        $scope.sprint11 = sprint11;
        $scope.sprint12 = sprint12;
        $scope.sprint13 = sprint13;
        $scope.sprint14 = sprint14;
        $scope.sprint15 = sprint15;
        $scope.show = 0;

        //$(".sprint1").fadeOut();
        $(".sprint1").fadeIn(225);
        $(".sprint2").fadeIn(350);
        $(".sprint3").fadeIn(475);
        $(".sprint4").fadeIn(500);
        $(".sprint5").fadeIn(625);
        $(".sprint6").fadeIn(750);
        $(".sprint7").fadeIn(875);
        $(".sprint8").fadeIn(1000);
        $(".sprint9").fadeIn(1125);
        $(".sprint10").fadeIn(1250);
        $(".sprint11").fadeIn(1375);
        $(".sprint12").fadeIn(1500);
        $(".sprint13").fadeIn(1625);
        $(".sprint14").fadeIn(1750);
        $(".sprint15").fadeIn(1875);
      }
 }

//convert all student names entered into array called students
var studentList = new Array;

function makeStudentsArray() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length-1; i++) {
      var student = inputs[i].value;
        if (student !== "") { 
            studentList.push(student);
        }
      }
      return studentList;
    }

var sprint1 = [];
var sprint2 = [];
var sprint3 = [];
var sprint4 = [];
var sprint5 = [];
var sprint6 = [];
var sprint7 = [];
var sprint8 = [];
var sprint9 = [];
var sprint10 = [];
var sprint11 = [];
var sprint12 = [];
var sprint13 = [];
var sprint14 = [];
var sprint15 = [];

var generateSprints = function(studentList) {

var doubleList = function(originalList, emptyList) {
  counter = 0;
  while (counter <=1) {
    for (var i = 0; i < originalList.length; i++) {
      emptyList.push(originalList[i]);
      }
      counter++;
  }
  return emptyList;
}

if (studentList.length%2 !== 0) { 
  studentList.push("Solo");
} 

//split students in half
var firstHalfStudents = [];
var secondHalfStudents= []; 

for (var i = 0; i < studentList.length/2; i++) {
  firstHalfStudents.push(studentList[i]);
};

for (var i = studentList.length/2; i < studentList.length; i++) {
  secondHalfStudents.push(studentList[i]);
};

//double lists

var secondHalfDoubled = [];
doubleList(secondHalfStudents, secondHalfDoubled);

var firstHalfDoubled = [];
doubleList(firstHalfStudents, firstHalfDoubled)

for (var i = 0; i < firstHalfStudents.length; i++) {
  sprint1.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i]);
  sprint2.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+1]);
  sprint3.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+2]);
  sprint4.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+3]);
  sprint5.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+4]);
  sprint6.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+5]);
  sprint7.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+6]);
  sprint8.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+7]);
  sprint9.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+8]);
  sprint10.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+9]);
};

// if half of list is odd number, take last item of list and put at front
if (firstHalfStudents.length %2 !== 0) {
  var lastStudent = secondHalfStudents.pop();
  var oldFirstHalfStudents = firstHalfStudents;
  firstHalfStudents = [];
  firstHalfStudents.push(lastStudent);
  for (var i = 0; i < oldFirstHalfStudents.length; i++) {
    firstHalfStudents.push(oldFirstHalfStudents[i]);
  }
}
// redefine doubles if half is redefined
var secondHalfDoubled = [];
doubleList(secondHalfStudents, secondHalfDoubled);

var firstHalfDoubled = [];
doubleList(firstHalfStudents, firstHalfDoubled)

for (var i = 0; i < firstHalfStudents.length; i++) {
  if (i%2 ===0) {
  sprint11.push(firstHalfStudents[i]+ " and "+ firstHalfDoubled[i+1]);
  sprint12.push(firstHalfStudents[i]+ " and "+ firstHalfDoubled[i+3]);
  sprint13.push(firstHalfStudents[i]+ " and "+ firstHalfDoubled[i+5]);
  sprint14.push(firstHalfStudents[i]+ " and "+ firstHalfDoubled[i+7]);
  sprint15.push(firstHalfStudents[i]+ " and "+ firstHalfDoubled[i+9]);
  }
}

for (var i =0; i < secondHalfStudents.length; i++) {
  if (i%2===0) {
  sprint11.push(secondHalfStudents[i]+ " and "+ secondHalfDoubled[i+1]);
  sprint12.push(secondHalfStudents[i]+ " and "+ secondHalfDoubled[i+3]);
  sprint13.push(secondHalfStudents[i]+ " and "+ secondHalfDoubled[i+5]);
  sprint14.push(secondHalfStudents[i]+ " and "+ secondHalfDoubled[i+7]);
  sprint15.push(secondHalfStudents[i]+ " and "+ secondHalfDoubled[i+9]);
}
}

return (sprint1, sprint2, sprint3, sprint4, sprint5, sprint6, sprint7, sprint8, sprint9, sprint10, sprint11, sprint12, sprint13, sprint14, sprint15);
}
});