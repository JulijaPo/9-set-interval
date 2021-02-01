/*
reikalavimai
-rasti vieta/elementa
-istraukti skaiciu
-kas sekunde ta skaiciu mazinti iki nuolio
-pasiekus nuli - parasyti FINITO

*/

function counter (selector){
    const DOM = document.querySelector(selector)
    let number = parseInt(DOM.innerText)
    const timer = setInterval(function (){ 
       DOM.innerText = number
        number--;
        if(number === -1){
        clearInterval(timer)
        DOM.innerText = 'FINITO'
        }

    }, 1000)

}



 export { counter }