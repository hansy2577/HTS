let json_train = "";
let json_train_link = "";
let selected = "null";
let train_json = null;
let refresh_time = 0;

function getElement(name) {
  return document.getElementById(name)
}

function train_Selecte1(param) {
  train_json = "assets/Trains/"+document.getElementById("input1").value+"/main.json";
  json_train_link = "assets/Trains/"+document.getElementById("input1").value+"/";
  train_Selecte2();
}

function train_Selecte2() {
    // get the json file
  var rawFile = new XMLHttpRequest();
  var reload = 0;
  rawFile.open("get",train_json, true);
  rawFile.onreadystatechange = function() {
    reload++;
    if (rawFile.readyState === 4) {
      var allText = rawFile.responseText;
    }
    if (reload == 3 ) {
      
      if (allText == "Error 404, file not found.") {
        alert("error ! | sorry no train asset found")
      } else {
        json_train = JSON.parse(allText);
        train_element()
        
        if (refresh_time == 0) {
          getElement("input1").remove()
          getElement("button1").remove()
        }
      }
    }
  }
  rawFile.send();
}

function train_element() {

  for (var i = 0; i < json_train["body"]["body"].length; i++) {
    var body1 = document.createElement("img")
    document.getElementById("train element").appendChild(body1);
    
    var id = json_train["body"]["body"][i];
    console.log(id[0]+" add")
    body1.style.position = "absolute";
    body1.src = json_train_link + id[0] + ".png";
    body1.style.left = id[1] + "px";
    body1.style.top = id[2] + "px";
    body1.style.zIndex = "0";
    body1.style.scale = id[3];
    body1.onclick = function() {
      
    }
  }

  if (json_train.body.button["pre-closing doors"] !== false) {
    let doors4 = document.createElement("img")
    document.getElementById("train element").appendChild(doors4);
    
    var id = json_train.body.button["pre-closing doors"]
    console.log(id[0]+" add")
    doors4.style.position = "absolute";
    doors4.src = json_train_link + id[0] + ".png";
    doors4.style.left = id[1] + "px";
    doors4.style.top = id[2] + "px";
    doors4.style.zIndex = "0";
    doors4.style.scale = id[3];
    doors4.onclick = function() {
      button_click()
    }
  }

  if (json_train.body.button["tension up"] !== false) {
    let tensionup = document.createElement("img")
    document.getElementById("train element").appendChild(tensionup);
    
    
    var id = json_train.body.button["tension up"]
    console.log(id[0] + " add")
    tensionup.style.position = "absolute";
    tensionup.src = json_train_link + id[0] + ".png";
    tensionup.style.left = id[1] + "px";
    tensionup.style.top = id[2] + "px";
    tensionup.style.zIndex = "0";
    tensionup.style.scale = id[3];
    tensionup.onclick = function() {
      button_click()
      if (train.tension_up == false && train.power == true) {
        train.tension_up = true;
        tensionup.style.opacity = 0.5
      } else {
        train.tension_up = false;
        tensionup.style.opacity = 1
      }
    }
  }
  
  if (json_train.body.button["tension dows"] !== false) {
    let tensiondows = document.createElement("img")
    document.getElementById("train element").appendChild(tensiondows);
    
    
    var id = json_train.body.button["tension dows"]
    console.log(id[0]+" add")
    tensiondows.style.position = "absolute";
    tensiondows.src = json_train_link + id[0] + ".png";
    tensiondows.style.left = id[1] + "px";
    tensiondows.style.top = id[2] + "px";
    tensiondows.style.zIndex = "0";
    tensiondows.style.scale = id[3];
    tensiondows.onclick = function() {
      button_click()
      if (train.tension_dows == false) {
        train.tension_dows = true;
        tensiondows.style.opacity = 0.5
      } else {
        train.tension_dows = false;
        tensiondows.style.opacity = 1
      }
    }
  }
  
  if (json_train.body.button["horn1"] !== false) {
    let horn1 = document.createElement("img")
    document.getElementById("train element").appendChild(horn1);
    
    var id = json_train.body.button["horn1"]
    console.log(id[0]+" add")
    horn1.style.position = "absolute";
    horn1.src = json_train_link + id[0] + ".png";
    horn1.style.left = id[1] + "px";
    horn1.style.top = id[2] + "px";
    horn1.style.zIndex = "0";
    horn1.style.scale = id[3];
    horn1.onclick = function() {
      button_click()
    }
  }
  
  if (json_train.body.button["horn2"] !== false) {
    let horn2 = document.createElement("img")
    document.getElementById("train element").appendChild(horn2);
    
    var id = json_train.body.button["horn2"]
    console.log(id[0]+" add")
    horn2.style.position = "absolute";
    horn2.src = json_train_link + id[0] + ".png";
    horn2.style.left = id[1] + "px";
    horn2.style.top = id[2] + "px";
    horn2.style.zIndex = "0";
    horn2.style.scale = id[3];
    horn2.onclick = function() {
      button_click()
    }
  }
  
  if (json_train.body.button["doors open/close"][0] !== false) {
    let door1 = document.createElement("img")
    document.getElementById("train element").appendChild(door1);
    
    var id2 = json_train.body.button["doors open/close"][0]
    console.log(id2[0]+" add")
    door1.style.position = "absolute";
    door1.src = json_train_link + id2[0] + ".png";
    door1.style.left = id2[1] + "px";
    door1.style.top = id2[2] + "px";
    door1.style.zIndex = "0";
    door1.style.scale = id2[3];
    door1["id"] = "button_opendoors"
    door1.onclick = function() {
      button_click()
      
      if (train.speed <= 1) {
        doors("open");
      }
    }
  }
  
  if (json_train.body.button["doors open/close"][1] !== false) {
    let door2 = document.createElement("img")
    document.getElementById("train element").appendChild(door2);
    
    var id2 = json_train.body.button["doors open/close"][1]
    console.log(id2[0]+" add")
    door2["id"] = "button_closedoors";
    door2.style.position = "absolute";
    door2.src = json_train_link + id2[0] + ".png";
    door2.style.left = id2[1] + "px";
    door2.style.top = id2[2] + "px";
    door2.style.zIndex = "0";
    door2.style.scale = id2[3];
  
    door2.onclick = function() {
      button_click()
      
      doors("close");
    }
  }
  
  if (json_train.body.button["light1"] !== false) {
    let light1 = document.createElement("img")
    document.getElementById("train element").appendChild(light1);
    
    var id = json_train.body.button["light1"]
    console.log(id[0]+" add")
    light1.style.position = "absolute";
    light1.src = json_train_link + id[0] + ".png";
    light1.style.left = id[1] + "px";
    light1.style.top = id[2] + "px";
    light1.style.zIndex = "0";
    light1.style.scale = id[3];
    light1.onclick = function() {
      button_click()
    }
  }
  
  if (json_train.body.button["light2"] !== false) {
    let light2 = document.createElement("img")
    document.getElementById("train element").appendChild(light2);
    
    var id = json_train.body.button["light2"]
    console.log(id[0]+" add")
    light2.style.position = "absolute";
    light2.src = json_train_link + id[0] + ".png";
    light2.style.left = id[1] + "px";
    light2.style.top = id[2] + "px";
    light2.style.zIndex = "0";
    light2.style.scale = id[3];
    light2.onclick = function() {
      button_click()
    }
  }
  
  if (json_train.body.button["light3"] !== false) {
    let light3 = document.createElement("img")
    document.getElementById("train element").appendChild(light3);
    
    var id = json_train.body.button["light3"]
    console.log(id[0]+" add")
    light3.style.position = "absolute";
    light3.src = json_train_link + id[0] + ".png";
    light3.style.left = id[1] + "px";
    light3.style.top = id[2] + "px";
    light3.style.scale = id[3];
    light3.style.zIndex = "0";
    light3.onclick = function() {
      button_click()
    }
  }
  
  if (json_train.body.button["interior light"] !== false) {
    let interior_light = document.createElement("img")
    document.getElementById("train element").appendChild(interior_light);
    
    var id = json_train.body.button["interior light"]
    console.log(id[0] + " add")
    interior_light.style.position = "absolute";
    interior_light.src = json_train_link + id[0] + ".png";
    interior_light.style.left = id[1] + "px";
    interior_light.style.top = id[2] + "px";
    interior_light.style.scale = id[3];
    interior_light.style.zIndex = "0";
    interior_light.onclick = function() {
      button_click()
    }
  }
  
  if (json_train.body["speed counter"] !== false) {
    let guispeed = document.createElement("a")
    document.getElementById("train element").appendChild(guispeed);
    
    var id = json_train.body["speed counter"];
    console.log("speed counter" + " add")
    guispeed.style.position = "absolute";
    guispeed.style.left = id[1].x + "px";
    guispeed.style.top = id[1].y + "px";
    guispeed.style.scale = id[1].scale;
    guispeed.innerText = "50 km/h";
    guispeed.style.color = "white"
    guispeed.style.backgroundColor = "black"
    guispeed.style.zIndex = "2";
    guispeed.id = "guispeed";
  }
  
  if (json_train.body.button["AWS"] !== false) {
    let AWS = document.createElement("img")
    document.getElementById("train element").appendChild(AWS);
    
    var id = json_train.body.button["AWS"]
    console.log(id[0]+" add")
    AWS.style.position = "absolute";
    AWS.src = json_train_link + id[0] + ".png";
    AWS.style.left = id[1].x + "px";
    AWS.style.top = id[1].y + "px";
    AWS.style.scale = id[1].scale;
    AWS.style.zIndex = "0";
    AWS.id = "aws";
    AWS.onclick = function() {
      button_click()
      if (train.speed <= game.popup1.speed_limit + 4) {
        train.AWS.on = false;
        document.getElementById("aws").style.filter = "brightness("+100+"%)";
      }
    }
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