// -------DOM-------//

// ------Ques # 1
var mainContent = document.getElementById("main-content");
console.log(mainContent);


// ------Ques # 2
console.log(mainContent.children);


// ------Ques # 3
var render = document.getElementsByClassName("render")
render.innerHTML = "HEllo"
console.log(render.innerHTML)


// ------Ques # 4
var input = document.getElementById("first-name")
input.value = "Helloo Sir"
console.log(input.value)

// ------Ques # 5
var lastName = document.getElementById("last-name")
lastName.value = "Enter your last name"
console.log(lastName.value)

// Ques 2 Start-
// ------Ques # 1
var form = document.getElementById("form-content")
console.log(form.nodeType)


// ------Ques # 2
var lstName = document.getElementById("lastName")
console.log(lstName.childNodes)


// ------Ques # 3
lstName.childNodes[1].innerHTML = "Talha";
console.log(lstName.childNodes[1].innerHTML)


// ------Ques # 4
console.log(mainContent.firstElementChild);
console.log(mainContent.lastElementChild);


// ------Ques # 5
console.log(lstName.nextElementSibling);
console.log(lstName.previousElementSibling);

// ------Ques # 6
var emailPapa = document.getElementById("email")
console.log(emailPapa.parentNode);
