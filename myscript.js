function OpenUrl_Window(str) {
    var otherDiv = document.getElementById('urlWindow');
    otherDiv.style.display = "block";
    document.getElementById("iframe").src =str;
  }
  
  function OpenPage(str){
    window.open(str);
    
  }
  
  function CloseUrl_Window() {
  var otherDiv = document.getElementById('urlWindow');
  otherDiv.style.display = "none";
  document.getElementById("iframe").src ="";
  }

  function CloseQuestion() {
    document.getElementById('question').style.display = "none";
    }

//<script src="myscript.js"></script>

//cs.13 (<canvas id="unity-canvas" width=1000 height=600></canvas>)後面
/* <div id="urlWindow" style="display:flex;width:1000px;height:600px;
top: 47.5%;  
left: 50%;
transform: translate(-50%, -51%);
position:absolute;background-color: rgba(0, 0, 0, 0.549);">  
<iframe id="iframe" src="" style="width: 80%;height: 80%;
position: relative;
top: 50%;  
left: 50%;
transform: translate(-50%, -50%);
border: 0;">
</iframe>  
<button id="close" onclick="CloseUrl_Window()"
style="height: 50px; width: 50px;position: absolute;top: 0;right: 0;
border:0;background-color: rgb(255, 126, 126);
color: rgb(0, 0, 0);font-size: 12pt;">close</button>
</div>

//問卷
<div id="question" style="display:flex;width:1000px;height:600px;
top: 47.5%;  
left: 50%;
transform: translate(-50%, -51%);
position:absolute;background-color: rgba(0, 0, 0, 0.549);">  
<iframe id="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSdGBtgKdWBv2frRR7YJ9qFEmh_oc9OhEC4YkABWflUIYRjXiA/viewform?embedded=true" 
style="width: 80%;height: 80%;
position: relative;
top: 50%;  
left: 50%;
transform: translate(-50%, -50%);
border: 0;">載入中…
</iframe>  
<button id="close" onclick="CloseQuestion()"
style="height: 50px; width: 50px;position: absolute;top: 0;right: 0;
border:0;background-color: rgb(255, 126, 126);
color: rgb(0, 0, 0);font-size: 12pt;">close</button>
</div> */

//cs.62
//<div id="unity-build-title">contact me</div>

//cs.151
//document.getElementById('question').style.display="block";


//style.css
//cs.15
//#unity-fullscreen-button { float: right; width: 38px; height: 38px; background: url('../contantMe-09.png') no-repeat center ;background-size: contain;}
