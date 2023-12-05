var hours = document.getElementById('hours')
var minute = document.getElementById('min')
var second = document.getElementById('sec')
var millsec = document.getElementById('milli')

var interval 

var hour = 0
var min = 0
var sec = 0
var mili = 0
 

function time(){
    mili++;
    millsec.innerHTML = mili;
    if( mili >= 100){
        sec++
        second.innerHTML=sec
        mili = 0
    } 
    if( sec >= 60){
        min++
        minute.innerHTML=min
        sec = 0
    } 
    if( min >= 60){
        hour++
        hours.innerHTML=hour
        min = 0
    } 


}

function start(){
    interval = setInterval(time,10)
    document.getElementById('start').style.display = 'none'
}

function pause(){
    clearInterval(interval)
    document.getElementById('start').style.display =''
}

function reset(){
    pause()
    millsec.innerHTML  ="0"
    second.innerHTML ="0"
    minute.innerHTML= "0"
    hours.innerHTML = '0'
     hour = 0
     min = 0
     sec = 0
     mili = 0

}