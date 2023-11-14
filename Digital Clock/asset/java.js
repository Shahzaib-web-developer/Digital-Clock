function clock(){
    let monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      let dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ];  
      let today = new Date();
      document.getElementById("Date").innerHTML = (dayNames[today.getDay()] +" "+ today.getDate()+" "+
      monthNames[today.getMonth()]+" "+ today.getFullYear());

let h = today.getHours();    
let m = today.getMinutes();
let s = today.getSeconds();
let day = "AM";
if (h >= 12){
    day = "PM" ;
};
if(h > 12){
    h = h - 12;
}
 
 
h = h<10 ? "0" + h: h;
m = m<10 ? "0" + m: m;
s = s<10 ? "0" + s: s;

document.getElementById('hours').innerHTML = h;
document.getElementById('mins').innerHTML = m;
document.getElementById('secs').innerHTML = s;
document.getElementById('GTM').innerHTML = day;
}let inter = setInterval(clock, 1000);