let json_map = "";
let selected = "null";
let train_json = null;
let refresh_time = 0;


map_json = "assets/Lignes/"+localStorage.getItem("ligne select")+".json";
train_Selecte2();

function train_Selecte2() {
    // get the json file
  var rawFile = new XMLHttpRequest();
  var reload = 0;
  rawFile.open("get",map_json, true);
  rawFile.onreadystatechange = function() {
    reload++;
    if (rawFile.readyState === 4) {
      var allText = rawFile.responseText;
    }
    if (reload == 3 ) {
      
      if (allText == "Error 404, file not found.") {
        alert("error ! | sorry no train asset found")
      } else {
        json_map = JSON.parse(allText);
        map_element()
      }
    }
  }
  rawFile.send();
}

function map_element() {
  var Y = 0;
  var element = 0;
  var P = 0;
  var feux = {
    value: 0,
    spawn: 0
  }
  document.getElementById("train element").style.top = '100px'
  document.getElementById("bg").style.height = json_map.maps.trajet[json_map.maps.trajet.length - 1][2].distance+ 50 +'px'
  
  for (var i = 0; i < json_map.maps.trajet[json_map.maps.trajet.length - 1][2].distance && json_map.maps.trajet.length - 1 >= element; i++) {
    var verifed = false;
    
    feux.value++;
    if (feux.value >= 2) {
      feux.value = 0;
      
      var f = document.createElement("img");
      document.getElementById('train element').appendChild(f);
      
      f.style.position = "absolute";
      f.style.left = "450px"
      f.style.scale = 0.4
      f.style.top = ""+ Y * 70+ "px";
      f.src = 'images/feux/XOO.png'
    }
    
    if (json_map.maps.trajet[element][2].distance >= Y) {
      var div = document.createElement("a");
      document.getElementById('train element').appendChild(div);
      div.style.position = "absolute";
      div.style.left = "300px"
      div.style.top = ""+ json_map.maps.trajet[element][2].distance + "px";
      div.innerText = json_map.maps.trajet[element][0];
      div.style.color = "white"
      verifed = true;
      // style
      if (div.innerText == "speed") {
        div.style.backgroundColor = "red";
        div.style.opacity = 0.5;
        
        var div2 = document.createElement("a");
        document.getElementById('train element').appendChild(div2);
        div2.style.position = "absolute";
        div2.innerText = json_map.maps.trajet[element][1];
        div2.script = "alert('he')";
        if (json_map.maps.trajet[element][2].pre_release == true) {
          div2.style.color = "orange"
        } else {
          div2.style.color = "white"
        }
        
        if (json_map.maps.trajet[element][2].hide == true) {
          div2.style.color = "#7A7A7A"
          div2.style.left = "270px"
        } else {
          div2.opacity = 0.5;
          div2.style.left = "270px"
        }
        div2.style.top = ""+ json_map.maps.trajet[element][2].distance + "px";
      }
      
      if (div.innerText == "station") {
        div.style.backgroundColor = "blue";
        div.style.zIndex = 1;
        div.style.height = "70px"
        div.innerText = "station";
        div.style.top = ""+ json_map.maps.trajet[element][2].distance - 55 + P + "px";
        verifed = true;
        var div2 = document.createElement("a");
        document.getElementById('train element').appendChild(div2);
        div2.style.position = "absolute";
        div2.style.left = "370px"
        div2.style.color = "white"
        div2.style.backgroundColor = "#FFFFFF40"
        div2.style.top = ""+ json_map.maps.trajet[element][2].distance - 35 + P + "px";
        div2.innerText = json_map.maps.trajet[element][1];
      }
      
      if (div.innerText == "BG anim") {
        div.remove()
      }
      
      
      // console.log(json_map.maps.trajet[element][2].distance * 0.05,Y)
      element++;
    }
    Y += 1;
  }
}

function fresh() {
  document.getElementById("train element").remove();
  
  var div = document.createElement("div");
  div.id = "train element";
  document.body.appendChild(div);
  // yeah , it really bad xd
  
  refresh_time++;
  train_Selecte2()
}

setInterval(() => {
  document.getElementById("train element").style.top = "-"+localStorage.getItem("meter")+"px";
},0)

let i2 = 0
localStorage.setItem("mini Gui",false);

document.onclick = function () {
  if (i2 == 1) {
    i2 = 0;
    localStorage.setItem("mini Gui",false)
  } else {
    i2 = 1;
    localStorage.setItem("mini Gui",true)
  }
}