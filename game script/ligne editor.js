let json_map = "";
let selected = "null";
let train_json = null;
let refresh_time = 0;


function train_Selecte1(param) {
  map_json = "assets/Lignes/"+document.getElementById("I").value+".json";
  train_Selecte2();
}

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
        document.getElementById("I").remove()
        document.getElementById("B").remove()
      }
    }
  }
  rawFile.send();
}

function map_element() {
  var Y = 0;
  var element = 0;
  document.getElementById("train element").style.top = '100px'
  document.getElementById("bg").style.height = json_map.maps.trajet[json_map.maps.trajet.length - 1][2].distance+ 50 +'px'
  localStorage.setItem("can_scroll",true)
  
  for (var i = 0; i < json_map.maps.trajet[json_map.maps.trajet.length - 1][2].distance && json_map.maps.trajet.length - 1 >= element; i++) {
    
    if (json_map.maps.trajet[element][2].distance >= Y) {
      var div = document.createElement("a");
      document.getElementById('train element').appendChild(div);
      div.style.position = "absolute";
      div.style.left = "300px"
      div.style.top = ""+ json_map.maps.trajet[element][2].distance + "px";
      div.innerText = json_map.maps.trajet[element][0];
      div.style.color = "white"
      
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
        
        var div2 = document.createElement("a");
        document.getElementById('train element').appendChild(div2);
        div2.style.position = "absolute";
        div2.style.left = "370px"
        div2.style.color = "white"
        div2.style.backgroundColor = "#FFFFFF40"
        div2.style.top = ""+ json_map.maps.trajet[element][2].distance + "px";
        div2.innerText = json_map.maps.trajet[element][1];
      }
      
      if (div.innerText == "BG anim") {
        div.remove()
      }
      
      console.log(json_map.maps.trajet[element][2].distance * 0.05,Y)
      element++;
    }
    Y++;
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