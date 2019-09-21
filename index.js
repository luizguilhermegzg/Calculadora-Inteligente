const readline = require('readline-sync')
function start(){
console.log('github: https://github.com/luizguilhermegzg')
console.log('repository: https://github.com/luizguilhermegzg/Calculadora-Inteligente')
chooseOperation()
function chooseOperation(){
var mathOperations = ['Somar','Subtrair','Multiplicar','Dividir'] 
var mathChose= readline.keyInSelect(mathOperations,'\nEscolha uma operação: ')
if (mathChose == 0){
  sum()
}
if(mathChose == 1){
  subtract()
}
if(mathChose == 2){
  multiply()
}
if(mathChose ==  3){
  divide()
}
if(mathChose == -1){
  readline.keyInPause("\nPressione qualquer tecla para sair...")
}
}
}

function sum(){
var xAndY = [readline.questionFloat('x = '),readline.questionFloat('y = ')]
var calc = xAndY[0] + xAndY[1]
console.log(xAndY[0]+" + "+xAndY[1]+" = "+calc)
if(readline.keyInYN("\nDeseja reiniciar o programa: ")){
	start()
}
else{
	console.log("Goodbye!")
}
}
function multiply(){
var xAndY = [readline.questionFloat('x = '),readline.questionFloat('y = ')]
var calc = xAndY[0] * xAndY[1]
console.log(xAndY[0]+" * "+xAndY[1]+" = "+calc)
if(readline.keyInYN("\nDeseja reiniciar o programa: ")){
	start()
}
else{
	console.log("Goodbye!")
}
}
function divide(){
var xAndY = [readline.questionFloat('x = '),readline.questionFloat('y = ')]
var calc = xAndY[0] / xAndY[1]
console.log(xAndY[0]+" / "+xAndY[1]+" = "+calc)
if(readline.keyInYN("\nDeseja reiniciar o programa: ")){
	start()
}
else{
	console.log("Goodbye!")
}
}
function subtract(){
var xAndY = [readline.questionFloat('x = '),readline.questionFloat('y = ')]
var calc = xAndY[0] - xAndY[1]
console.log(xAndY[0]+" - "+xAndY[1]+" = "+calc)
if(readline.keyInYN("\nDeseja reiniciar o programa: ")){
	start()
}
else{
	console.log("Goodbye!")
}
}
start()
