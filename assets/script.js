////VARIABLES
var instructionsButton = $("#instructions-button");
var projectDisplay = $("#project-display");

var userInputProjectName = $("#new-project-modal #project-name-input");
var userInputProjectType = $("#project-type-input");
var userInputDueDate = $("#project-date-input");

var submitProjectButton = $("#submit-project-button");
var arrayOfObjects = [];

var buttonSmallX = $(".unique");

//DATES
var date = $("#date-unique");
var today = dayjs();
var dateToday = $('#1a').text(today.format('MMM D, YYYY'));
date.text(new Date());
//FUNCTION

function addToStorage(event){
    event.preventDefault();
    // event.stopPropagation();
    var element = event.target;
    if (element.matches("button")){
        var newProject = {
            name: userInputProjectName.val(),
            type: userInputProjectType.val(),
            duedate: userInputDueDate.val(), 
            index: 0
            
        }
        
        if (localStorage.getItem("projects")===null) {

            localStorage.setItem("projects" , JSON.stringify([newProject]));
            console.log(newProject);
            
        }else{
            var temp = JSON.parse(localStorage.getItem("projects"));
            newProject.index = temp.length;
            temp.push(newProject);
            localStorage.setItem("projects", JSON.stringify(temp))
             
        }

        addToList();
    
    }
}

function addToList(){
    var storageOfProjects = JSON.parse(localStorage.getItem("projects"));
    
    var tr1 = $('<tr>');
    var td1 = $('<td>');
    var td2 = $('<td>');
    var td3 = $('<td>');
    var td4 = $('<td>');
    var removeButton = $('<button>');

    projectDisplay.append(tr1);
    tr1.append(td1);
    tr1.append(td2);
    tr1.append(td3);
    tr1.append(td4);
    td4.append(removeButton);
    td1.text(storageOfProjects[storageOfProjects.length-1].name);
    td2.text(storageOfProjects[storageOfProjects.length-1].type);
    td3.text(storageOfProjects[storageOfProjects.length-1].duedate);
    removeButton.text("X");
    removeButton.addClass('unique');
    
    }
    
//DATE AND TIME


// function displayProjects(){
//     if (localStorage.getItem("projects")!==null){
//     var storageOfProjects = JSON.parse(localStorage.getItem("projects"));
//     for (var x = 0; x<storageOfProjects.length;x++){
//     var tr1 = $('<tr>');
//     var td1 = $('<td>');
//     var td2 = $('<td>');
//     var td3 = $('<td>');
//     var td4 = $('<td>');
//     var removeButton = $('<button>');

//     projectDisplay.append(tr1);
//     tr1.append(td1);
//     tr1.append(td2);
//     tr1.append(td3);
//     tr1.append(td4);
//     td4.append(removeButton);
//     td1.text(storageOfProjects[x].name);
//     td2.text(storageOfProjects[x].type);
//     td3.text(storageOfProjects[x].duedate);
//     removeButton.text("X");
//     removeButton.addClass('btn btn-sm');
//     }
// }
// }

// function removeItem(event){
//     event.preventDefault();
//     event.stopPropagation();
//     var element = event.target;
    
//        console.log(5);
//         var yay = JSON.parse(localStorage.getItem("projects"));
//         for (var x = 0; x<yay.length; x++) {
//             console.log(element.parent().prev().prev().prev());
            
//             if(element.parent().prev().prev().prev() === yay.name) {
//                 var deleteThisIndex = x;
//             }
//         }

//         yay.splice(deleteThisIndex, 1)
//         localStorage.setItem("projects", yay);
    
// }

//EVENT LISTENER
submitProjectButton.on("click", addToStorage)

buttonSmallX.on("click", function(){
    console.log("hello");
})


//CALLS
