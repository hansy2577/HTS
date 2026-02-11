 
  localStorage.setItem("can_scroll",false)
  let mainjson = null
  
  var rawFile = new XMLHttpRequest();
  var reload = 0;
  rawFile.open("get","/main/assets/data.json", true);
  rawFile.onreadystatechange = function() {
    reload++;
    if (rawFile.readyState === 4) {
      var allText = rawFile.responseText;
    }
    if (reload == 3 ) {
      
      if (allText == "Error 404, file not found.") {
        alert("error ! | sorry no data asset found")
        document.boremove()
      } else {
        mainjson = JSON.parse(allText);
        setbutton()
      }
    }
  }
  rawFile.send();
  
  
  function start(){
    localStorage.setItem("ligne select",document.getElementById("ligne").value);
    localStorage.setItem("map select",document.getElementById("map").value);
    localStorage.setItem("train select",document.getElementById("train").value);
    window.location = 'game.html';
  }
  
  function setbutton(){
    for (var i = 0; i < mainjson["all train"].length; i++) {
      var elemente = document.createElement("option");
      document.getElementById("train").appendChild(elemente);
      
      elemente.innerText = mainjson["all train"][i];
    }
    
    for (var i = 0; i < mainjson["all map"].length; i++) {
      var elemente = document.createElement("option");
      document.getElementById("map").appendChild(elemente);
  
      elemente.innerText = mainjson["all map"][i];
    }
    
    for (var i2 = 0; i2 < mainjson["all ligne"][document.getElementById("map").value].length; i2++) {
      var elemente = document.createElement("option");
      document.getElementById("ligne").appendChild(elemente);
  
      elemente.innerText = mainjson["all ligne"][document.getElementById("map").value][i2];
    }
    document.getElementById('bannier').src = "assets/Maps/"+document.getElementById("map").value+"/miniature.png"
  }
  
function load_ligne(m) {
  if (m == "m" || m == "l") {
    document.getElementById('bannier').src = "assets/Maps/"+document.getElementById("map").value+"/miniature.png"
  }
  
  if (m == "t") {
    document.getElementById('bannier').src = "assets/Trains/" + document.getElementById("train").value + "/miniature.png"
  }
  
  document.getElementById("ligne").remove();
  
  var l = document.createElement("select");
  l.id = "ligne";
  l.style.backgroundColor = "white"; 
  l.style.position = "absolute"; 
  l.style.left = "300px"; 
  l.style.top = "41px";
  document.body.appendChild(l);
  
  if (document.getElementById("ligne").value !== null) {
    for (var i2 = 0; i2 < mainjson["all ligne"][document.getElementById("map").value].length; i2++) {
      var elemente = document.createElement("option");
      document.getElementById("ligne").appendChild(elemente);
    
      elemente.innerText = mainjson["all ligne"][document.getElementById("map").value][i2];
    }
  }
}
