function myFunction(){
    alert("hello CSMJU");

    console.log("สวัสดี JavaScript");

    console.log(document.getElementById("header1" ).innerText);
    
    document.getElementById("header1").innerHTML = "Change...";
    document.getElementById("header1").style.color = "#F22033";

     var x=8;
     var y=20;
     var z=3;
     
     document.getElementById("header2").innerHTML = ((x+y+z)/3).toFixed(2);

}
function LikeFunction(){
    var gg = parseInt(document.getElementById('result').innerText);
    document.getElementById('result').innerHTML=gg+1;

}

function LoveFunction(){
    //เพื่ม conten 10
    // ปรับขนาดตัวอักษรฯ เพื่มขึ้น 5
    var gg = parseFloat(document.getElementById('result').innerText);
    document.getElementById('result').innerHTML=gg+10;

    
}
function sadFunction(){
    var gg = parseFloat(document.getElementById('hrk').innerText);
    document.getElementById('hrk').style.fontSize=10+Counter;



}