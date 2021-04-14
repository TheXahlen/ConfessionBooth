
function detectPRESENCE(){

var listit = localStorage.getItem('confessions');
var numbergenned = localStorage.getItem('numbergenned');
var brenderit = localStorage.getItem('brenderlist');
var setit = localStorage.getItem('browserid');
var firstrun = localStorage.getItem('FIRSTRUN');
var cyclenum = localStorage.getItem('numcycled');
var dataload = localStorage.getItem('dataload');

if (listit !== null || numbergenned !== null || brenderit !== null || firstrun !== null || dataload !== null || cyclenum !== null){
  document.getElementById('listdata').innerHTML =  "TRUE";
  } else{
  document.getElementById('listdata').innerHTML =  "FALSE";
  }
if (setit == null){
  document.getElementById('browserid').innerHTML =  "NULL"
  }else{
  document.getElementById('browserid').innerHTML =  setit;
}}

function removeData(){
localStorage.removeItem('browserid');
detectPRESENCE()
}
 
function removelistData(){
localStorage.removeItem('brenderlist');
localStorage.removeItem('confessions');
localStorage.removeItem('numbergenned');
localStorage.removeItem('FIRSTRUN');
localStorage.removeItem('numcycled');
localStorage.removeItem('dataload');
detectPRESENCE()
}

