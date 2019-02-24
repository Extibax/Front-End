var boxes = document.getElementsByTagName('div');
/* var boxes = document.getElementsByClassName('box'); */
var firstBox = document.getElementById('first-box');

/* firstBox.textContent = 'Hello World';
firstBox.innerHTML = '<u>Hello World</u>'; */

//Creating nodes

//1.Create the element
var box = document.createElement('div');
//2.Create one text node
var content = document.createTextNode('Extibax Programmer');
//3.Add the text node to the element
box.appendChild(content);
//4.Add attributes to the box
box.setAttribute('class', 'box orange');

//5.Add the element to the document
var container = document.getElementById('container');
container.appendChild(box);

//Modifying the class or id of an element
box.id = 'first';
box.className = 'box orange';

var father = boxes[0].parentNode;

/* father.insertBefore(box, boxes[2]); */

father.replaceChild(box, boxes[2]);

father.removeChild(boxes[3]);