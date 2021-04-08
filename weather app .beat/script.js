var botton = document.querySelector('.btn')
var inputvalue = document.querySelector('.inputvalue')
var temp = document.getElementById("temp")
var date = document.getElementById("date")
var feeling =document.getElementById("feel")
var feelvalue=document.getElementById("feeling")
var d = new Date();
var month =d.getMonth()+1;
var day= d.getDate();
var year= d.getFullYear();
botton .addEventListener('click',function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputvalue.value+"&appid=1c0b2d564cdc7d94a1f04e5ea9d7e45d")
   
   
    .then(response => response.json())
    
    .then(data=>{ console.log(data.main.temp)
   
     var temvalue=Math.floor(data.main.temp)-273;
    temp.innerHTML=temvalue;
    feeling.innerHTML = feelvalue.value;
    date.innerHTML=day+"/"+month+"/"+year;
    
})
})
