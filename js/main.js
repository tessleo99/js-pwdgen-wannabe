//VALORI DA FAR SCEGLIERE ALL'UTENTE
const firstname = prompt("Inserisci il tuo nome:");
const lastname = prompt("Inserisci il tuo cognome:");
const favouritecolor = prompt("Qual è il tuo colore preferito?");

let number1 = prompt("Scegli un numero tra 0 e 100"); //PRIMO NUMERO DA CHIEDERE ALL'UTENTE
number1 = parseInt(number1);
let number2 = prompt("Quanti anni hai?"); //SECONDO NUMERO DA CHIEDERE ALL'UTENTE
number2= parseInt(number2);
let divison = number1 / number2; //DIVISIONE TRA I DUE NUMERI

let random = Math.floor(Math.random() * 10) + 1; //GENERARE UN NMERO RANDOMICO 1<x<10

let password_generation = (firstname + lastname + favouritecolor + divison + random); //GENERARE LA PASSWORD
console.log(password_generation); //STAMPARE LA PASSWORD IN CONSOLE