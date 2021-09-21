/*
Por Tag: getElementByTagName()
Por Nome: getElementsByName()
Por Classe: getElementsByClassName()
Por Seletor: querySelector()
*/

let name = document.getElementById("name")
let email = document.querySelector("#email")
let subject = document.querySelector("#subject")
let nameOk
let emailOk
let subjectOk
let map = document.querySelector("#map")

name.style.width = '90%'
email.style.width = '90%'
subject.style.width = '90%'

function nameValidator() {
    let txtValid = document.querySelector("#txtName")
    
    if (name.value.length < 2) {
        txtValid.innerHTML = 'Invalid name'
        txtValid.style.color = 'red'
        nameOk = false
    } else {
        txtValid.innerHTML = 'Valid name'
        txtValid.style.color = 'green'
        nameOk = true
    }
}

function emailValidator() {
    let txtValid = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtValid.innerHTML = "nvalid email"
        txtValid.style.color = 'red'
        emailOk = false
    } else {
        txtValid.innerHTML = "Valid email"
        txtValid.style.color = 'green'
        emailOk = true
    }
}

function sizeSubject() {
    let txtValid = document.querySelector('#txtSubject')

    if (subject.value.length >= 120) {
        txtValid.innerHTML = "Text exceeded 120 characters"
        txtValid.style.color = 'red'
        subjectOk = false
        //txtValid.style.display = 'inline'
    } else {
        txtValid.innerHTML = ""
        subjectOk = true
        //txtValid.style.display = 'none'
    }
}

function send() {
    if (nameOk == true && emailOk == true && subjectOk == true) {
        alert ("Form sent successfully.")
    } else {
        alert ("Fill in the form correctly")
    }
}

function mapZoomIn() {
    map.style.width = '800px'
    map.style.height = '600px'
}

function mapZoomOut() {
    map.style.width = '400px'
    map.style.height = '300px'
}