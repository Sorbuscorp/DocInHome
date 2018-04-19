/*Здесь будут какие-то скрипты */
//этот конкретно кусок вызыват форму регистрации при нажатии на слово зарегистрироваться
function showLogBox(){
    document.getElementById("Reg").style.display="block";
}

onload=function(){
    var forma= document.getElementById("Reg");
    forma.style.display="none";
    document.getElementById("registration").onclick=showLogBox;
    
}

makesomething=function(){
    alert("something");
}

