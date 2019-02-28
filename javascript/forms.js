var form = document.getElementById('form');
var name = form.name;
var gender = form.gender;
var terms = form.terms;

function validate() {
    document.write(name.value);
}

form.addEventListener('submit', validate);