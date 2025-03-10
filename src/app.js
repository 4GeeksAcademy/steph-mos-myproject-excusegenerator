import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let createExcuse = ()=>{
    
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird','My dad'];
    
    let action = ['ate', 'lost', 'crushed', 'broke', 'close'];
    
    let what = ['my homework', 'my phone', 'the car','the house','my bedroom'];
    
    let when = ['before the class', 'while she was at the church', 'while I was exercising', 'during my lunch', 'while I was praying'];
    


    return (who[Math.floor(Math.random()*(who.length))])+" "+(action[Math.floor(Math.random()*(action.length))])+" "+(what[Math.floor(Math.random()*(what.length))])+" "+(when[Math.floor(Math.random()*(when.length))]);
    

    }

    document.getElementById("excuse").innerHTML = createExcuse()
};
