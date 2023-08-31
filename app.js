/*
* @Author: Milagros_Deshire
* @Date:   2019-10-10 13:52:07
* @Last Modified by:   Milagros_Deshire
* @Last Modified time: 2019-10-10 14:09:01
*/
var age = parseInt(prompt("cual es tu edad")) ; //18
//conviertiendo en edad a segundos

var ageInseconds =  age*365*24*60*60;
// console.log(ageInseconds);

//mostrando mi edad en la web
document.write("Edad es "+ age +" y en segundos "+ ageInseconds);