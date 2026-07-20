'ops'
'settings'
const body = document.body;
//page
greets = ["hi", "hello", "hey", "greetings"]
openapps = ["open","open up"]
chatmode = false;
apps = ["google","spotify","youtube","facebook","instagram","x","tiktok","reddit","github","netflix","gmail","office", "linkedin"]
const devmode = false;
supapps = ["gmail","spotify","youtube","instagram","facebook","reddit","x", "amazon", "office", "weather", "linkedin","netflix","github", "wikipedia","twitch", "help", "settings", "terminal"]
supsites = ["https://www.gmail.com", "https://open.spotify.com/","https://www.youtube.com/","https://www.instagram.com/","https://www.facebook.com/","https://www.reddit.com/","https://X.com/", "https://www.amazon.com/", "https://www.office.com/", "https://weather.com/", "https://www.linkedin.com", "https://www.netflix.com/", "https://github.com/", "https://www.wikipedia.org/", "https://www.twitch.tv/","scros://helpMenu","scros://settingsMenu","scros://terminalMenu"]
let popupcount = 0;
apppage1 = ["gmail","spotify","youtube","instagram","facebook","reddit","x", "amazon", "office", "weather"]
apppage2 = ["linkedin","netflix","github", "wikipedia","twitch", "", "","","","",]
apppage3 = ["","","","","","","","","",""]
apppage4 = ["","","","","","","","","",""]
appsites1 = ["https://www.gmail.com", "https://open.spotify.com/","https://www.youtube.com/","https://www.instagram.com/","https://www.facebook.com/","https://www.reddit.com/","https://X.com/", "https://www.amazon.com/", "https://www.office.com/", "https://weather.com/"]
appsites2 = ["https://www.linkedin.com", "https://www.netflix.com/", "https://github.com/", "https://www.wikipedia.org/", "https://www.twitch.tv/"]
appsites3 = ["","","","","","","","","",""]
appsites4 = ["","","","","","","","","",""]
let openedPopups = [];
sites = ["https://www.google.com/", "https://open.spotify.com/","https://www.youtube.com/","https://www.facebook.com/","https://www.instagram.com/","https://X.com/","https://www.tiktok.com/","https://www.reddit.com/","https://github.com/","https://www.netflix.com/", "https://www.gmail.com", "https://www.office.com/", "https://www.linkedin.com"]
let APIkey;
const SaveKey = "SCR-OS/"
learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
learntdataquest = ["who made you?", "what are you?"]
dockrow1 = ["Gmail", "Spotify", "Youtube", "Instagram", "Facebook"]

let lastTerminalinputs = [];
let terminalInputCount = 0;

const systemSupapps = ["settings", "help", "terminal"]
const systemSupsites = ["scros://settingsMenu", "scros://helpMenu", "scros://terminalMenu"]

batteryCalibrating = false;
firstCharge = true;
firstDischarge = true;
complexDock = false;
complexDockPos = [50, 25];
complexDockLayout = {
    columns: 5,
    rows: 2
}; //columns, rows

complexDockPage = ["gmail","spotify","youtube","instagram","facebook","reddit","x", "amazon", "office", "weather"]
complexDockSites = ["https://www.gmail.com", "https://open.spotify.com/","https://www.youtube.com/","https://www.instagram.com/","https://www.facebook.com/","https://www.reddit.com/","https://X.com/", "https://www.amazon.com/", "https://www.office.com/", "https://weather.com/"]

currentDockMode = "?";


batteryStartLostTime = Date.now();
batteryStartGainedTime = Date.now();
batteryMessage = "Calculating..."
wifiMessage = "Network Status: Connected to the Internet"

dmode = "search"
pages = 2
username = "Guest"
docklock = "open"
curpage = 1
textspeed = 10;
calcmode = true; // true for degrees, false for radians
switchdock = true; 
MaxDenominator = 500; // Default max denominator for fractions
showappdock = true;
showclock = true;
lockeddock = false; // true for locked dock, false for unlocked dock
let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;
const maxpages = 4;
onealert = false;
dockdownlmt = ((clientHeight+130)/clientHeight)*100;
dockdownchklmt = ((clientHeight-130)/clientHeight);
dockwidthlmt = ((clientWidth+100)/clientWidth)*100;
dockwidthchklmt = ((clientWidth-100)/clientWidth);
iconpack = "AppIcons"
//console.log(dockwidthlmt)

let lastRespondedType = "Resp";


theme = "light";

simpledock = true; // true for simple dock, false for advanced dock
dockpos = 2;
orgians = ""
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
learningstate = false;
resettypecount = 0
feelings = "none"
showseconds = false; // true for showing seconds in clock, false for hiding seconds
bgtype = "image"
vbgfile = "City.mp4"
dockloc = "open"
clockpos = ["50", "97"]
fclock = false;
inpos = ["50", "10"]
const initinpos = ["50", "10.001"]
outpos = ["50", "65"]
//learn
//settings

showTerry = true;

let batteryTimeLost = 0;
let batteryTimeGained = 0;
let currentBatteryLevel = 100;


let batteryInfo = {
    levelLost: 0,
    timeLost: 0,
    levelGained: 0,
    timeGained: 0
}



let appWindowState = {
    sizes: [ [600, 800], [600, 800], [600, 800], [600, 800] ],
    fullscreened: [false, false, false, false],
    resized: [false, false, false, false],
    positions: [ [50, 50], [50, 50], [50, 50], [50, 50] ],
    names: ["settingsMenu", "appsMenu", "helpMenu", "terminalMenu"],
    possibleWindows: ["settingsMenu", "appsMenu", "helpMenu", "terminalMenu"],
    priorityWindows: [1, 2, 3, 4]
};





async function replacedock(checking = true) {

    menuButton1 = document.getElementById("menuButton");
    settingsButton1 = document.getElementById("settingsButton");
    menuButton2 = document.getElementById("menuButton2");
    settingsButton2 = document.getElementById("settingsButton2");

    batteryIndicator1 = document.getElementById("batteryIndicator1");
    batteryIndicator2 = document.getElementById("batteryIndicator2");
    batteryIndicator3 = document.getElementById("batteryIndicator3");

    wifiIcon1 = document.getElementById("wifiIcon1");
    wifiIcon2 = document.getElementById("wifiIcon2");
    wifiIcon3 = document.getElementById("wifiIcon3");


    menuButton1.style.display = "flex";
    settingsButton1.style.display = "flex"; 
    menuButton2.style.display = "none";
    settingsButton2.style.display = "none"; 
    batteryIndicator1.style.display = "none";
    batteryIndicator2.style.display = "none";
    batteryIndicator3.style.display = "none";

    wifiIcon1.style.display = "none";
    wifiIcon2.style.display = "none";
    wifiIcon3.style.display = "none";

    document.getElementById("batteryIndicator"+dockpos).style.display = "grid";
    document.getElementById("wifiIcon"+dockpos).style.display = "block";

    if (dockpos == 3) {

        menuButton2.style.display = "flex";
        settingsButton2.style.display = "flex"; 
        menuButton1.style.display = "none";
        settingsButton1.style.display = "none"; 
    }

    
    if (!simpledock || complexDock) {

        
        
        if (!simpledock && !complexDock) {
             
            if (lockeddock) {
                document.getElementById("appdock").style.zIndex = 4;
            }
            if (currentDockMode != "fluid") {

                document.getElementById("appdock").replaceChildren();

                for (let i = 0; i < 10; i++) {
                    newIcon = document.createElement("a");
                    newIcon.id = "dockclick"+(i+1);
                    document.getElementById("appdock").appendChild(newIcon);
                    newIcon = document.createElement("img");
                    newIcon.id = "dockpic"+(i+1);
                    newIcon.src = iconpack+"/"+[apppage1[i]]+".png";
                    document.getElementById("dockclick"+(i+1)).appendChild(newIcon);
                    newText = document.createElement("p");
                    newText.id = "docktext"+(i+1);
                    try {
                        newText.innerHTML = apppage1[i][0].toUpperCase() + apppage1[i].slice(1);

                    } catch {
                        newText.innerHTML = apppage1[i][0].toUpperCase()
                    }
                    if (apppage1[i] == "None") newText.innerHTML = " "
                    document.getElementById("appdock").appendChild(newText);
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites1[i]+"')");
                    document.getElementById("dockclick"+(i+1)).style.cursor = "pointer";
                }

                leftarrow = document.createElement("p");

                rightarrow = document.createElement("p");

                leftarrow.id = "leftarrow";
                rightarrow.id = "rightarrow";
                
                leftarrow.innerHTML = "◄";
                rightarrow.innerHTML = "►";

                

                document.getElementById("appdock").appendChild(leftarrow);
                document.getElementById("appdock").appendChild(rightarrow);

                document.getElementById("leftarrow").setAttribute("onclick", "pagechange('left')");
                document.getElementById("rightarrow").setAttribute("onclick", "pagechange('right')");
                document.getElementById("leftarrow").style.display = "block";
                document.getElementById("rightarrow").style.display = "block";
                document.getElementById("leftarrow").style.cursor = "pointer";
                document.getElementById("rightarrow").style.cursor = "pointer";

                currentDockMode = "fluid";
            } 


            if (dockpos == 1) {


                
                wifiIcon1.style.display = "block";
                batteryIndicator1.style.display = "grid";
                document.getElementById("appdock").style.gridTemplateColumns = "70px";
                document.getElementById("appdock").style.height = "100vh";
                document.getElementById("appdock").style.gridTemplateRows = "25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 25px";
                document.getElementById("leftarrow").style.gridColumn = "1";
                document.getElementById("leftarrow").style.gridRow = "1"
                document.getElementById("leftarrow").innerHTML = "▲";
                document.getElementById("rightarrow").innerHTML = "▼";
                document.getElementById("appdock").style.width = "70px";
                document.getElementById("rightarrow").style.gridColumn = "1";
                document.getElementById("rightarrow").style.gridRow = "22";
                for (let i = 0; i < 10; i++) {
                    document.getElementById("dockpic"+(i+1)).style.width = "50px";   
                    document.getElementById("dockpic"+(i+1)).style.height = "50px"; 
                    document.getElementById("docktext"+(i+1)).style.fontSize   = "10px";
                    document.getElementById("dockclick"+(i+1)).style.gridColumn = "1";
                    document.getElementById("docktext"+(i+1)).style.gridColumn = "1";
                    document.getElementById("dockclick"+(i+1)).style.gridRow = ((i+1)*2);
                    document.getElementById("docktext"+(i+1)).style.gridRow = ((i+1)*2)+1;
                    dockloc = "locked" 

                    const ZoomFactor = clientHeight/1080;
                    
                    
                    
                    if (!checking) document.getElementById("appdock").style.left = 100-dockwidthlmt+"%";
                    document.getElementById("appdock").style.top = (63*ZoomFactor-localStorage.getItem(SaveKey+"docktopoffset"))+"%";
                    //document.getElementById("appdock").style.top = dockdownlmt/3 + "%";
                }
            }
            if (dockpos == 2) {
                wifiIcon2.style.display = "block";
                batteryIndicator2.style.display = "grid";
                document.getElementById("appdock").style.gridTemplateColumns = "25px 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px 25px";
                document.getElementById("appdock").style.gridTemplateRows = "70px 40px";
                document.getElementById("rightarrow").style.gridColumn = "12";
                document.getElementById("rightarrow").style.gridRow = "1";
                document.getElementById("leftarrow").style.gridRow = "1";
                document.getElementById("leftarrow").innerHTML = "◄";
                document.getElementById("rightarrow").innerHTML = "►";
                for (let i = 0; i < 10; i++) {
                    document.getElementById("dockpic"+(i+1)).style.width = "65px";   
                    document.getElementById("dockpic"+(i+1)).style.height = "65px"; 
                    document.getElementById("docktext"+(i+1)).style.fontSize   = "15px";
                }
                for (let i = 0; i < 5; i++) {
                    //console.log(i)
                    document.getElementById("dockclick"+(i+1)).style.gridColumn = (i+2);
                    document.getElementById("dockclick"+(i+1)).style.gridRow = "1";
                    document.getElementById("docktext"+(i+1)).style.gridColumn = (i+2);
                    document.getElementById("docktext"+(i+1)).style.gridRow = "2";
                }
                for (let i = 5; i < 10; i++) {
                    //console.log(i)
                    document.getElementById("dockclick"+(i+1)).style.gridColumn = (i+2);
                    document.getElementById("dockclick"+(i+1)).style.gridRow = "1";
                    document.getElementById("docktext"+(i+1)).style.gridColumn = (i+2);
                    document.getElementById("docktext"+(i+1)).style.gridRow = "2";
                }

                dockloc = "locked" 
                document.getElementById("appdock").style.height = "50px";
                if (!checking) document.getElementById("appdock").style.top = dockdownlmt + "%";
                document.getElementById("appdock").style.left = "50%";
                
            }
            if (dockpos == 3) {
                
                
                  document.getElementById("appdock").style.gridTemplateColumns = "70px";
                  document.getElementById("appdock").style.height = "100vh";
                  document.getElementById("appdock").style.gridTemplateRows = "25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 25px";
                  document.getElementById("leftarrow").style.gridColumn = "1";
                  document.getElementById("leftarrow").style.gridRow = "1"
                  document.getElementById("leftarrow").innerHTML = "▲";
                  document.getElementById("rightarrow").innerHTML = "▼";
                document.getElementById("appdock").style.width = "70px";
                  document.getElementById("rightarrow").style.gridColumn = "1";
                  document.getElementById("rightarrow").style.gridRow = "22";
                  for (let i = 0; i < 10; i++) {
                      document.getElementById("dockpic"+(i+1)).style.width = "50px";   
                      document.getElementById("dockpic"+(i+1)).style.height = "50px"; 
                      document.getElementById("docktext"+(i+1)).style.fontSize   = "10px";
                      document.getElementById("dockclick"+(i+1)).style.gridColumn = "1";
                      document.getElementById("docktext"+(i+1)).style.gridColumn = "1";
                      document.getElementById("dockclick"+(i+1)).style.gridRow = ((i+1)*2);
                      document.getElementById("docktext"+(i+1)).style.gridRow = ((i+1)*2)+1;
                      dockloc = "locked" 
                      const ZoomFactor = clientHeight/1080;
                      //console.log((100-dockwidthlmt)+"%")
                       if (!checking) document.getElementById("appdock").style.left = dockwidthlmt+"%";
                      document.getElementById("appdock").style.top = (63*ZoomFactor-localStorage.getItem(SaveKey+"docktopoffset"))+"%";
                      //document.getElementById("appdock").style.top = dockdownlmt + "%";
                  }
              }
            if (lockeddock && !simpledock) {
                if (dockpos == 1) {
                    settop = (30/clientWidth*100)*BodyZoom;
                    document.getElementById("appdock").style.left = settop  + "%";
                }
                if (dockpos == 2) {
                    settop = 100-(90/clientHeight*100)*BodyZoom;
                    document.getElementById("appdock").style.top = settop  + "%";
                }
                if (dockpos == 3) {
                    settop = 100-(30/clientHeight*100)*BodyZoom;
                    document.getElementById("appdock").style.left = settop  + "%";
                }
            }   
         } else {
             document.getElementById("appdock").style.zIndex = 5;
                if (currentDockMode != "complex") {
                    console.log("wtf")
                    document.getElementById("appdock").replaceChildren();
                    for (let i = 0; i < complexDockLayout.columns*complexDockLayout.rows; i++) {
                        if (i >= complexDockPage.length) break;
                        setRow = (Math.floor(i / complexDockLayout.columns)).toFixed(0) * 2 + 1;
                        setColumn = ((i % complexDockLayout.columns) + 1).toFixed(0);
                        newIcon = document.createElement("a");
                        newIcon.id = "dockclick"+(i+1);
                        document.getElementById("appdock").appendChild(newIcon);
                        document.getElementById("dockclick"+(i+1)).style.gridColumn = (setColumn);
                        document.getElementById("dockclick"+(i+1)).style.gridRow = (setRow);
                        newIcon = document.createElement("img");
                        newIcon.id = "dockpic"+(i+1);
                        newIcon.src = iconpack+"/"+[complexDockPage[i]]+".png";
                        document.getElementById("dockclick"+(i+1)).appendChild(newIcon);
                        newText = document.createElement("p");
                        newText.id = "docktext"+(i+1);
                        
                        try {
                            newText.innerHTML = complexDockPage[i][0].toUpperCase() + complexDockPage[i].slice(1);
    
                        } catch {
                            newText.innerHTML = complexDockPage[i][0].toUpperCase()
                        }
                        document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+complexDockSites[i]+"')");
                        if (complexDockPage[i] == "none" || complexDockPage[i] == "None") {
                        document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");

                            newText.innerHTML = " " 
                        } 
                        document.getElementById("appdock").appendChild(newText);
                        document.getElementById("dockclick"+(i+1)).style.cursor = "pointer";
                        document.getElementById("docktext"+(i+1)).style.gridColumn = (setColumn);
                        document.getElementById("docktext"+(i+1)).style.gridRow = (setRow+1);
    
                        document.getElementById("dockpic"+(i+1)).style.width = "75px";   
                          document.getElementById("dockpic"+(i+1)).style.height = "75px"; 
                          document.getElementById("docktext"+(i+1)).style.fontSize   = "20px";
                    }





                    currentDockMode = "complex";

                }
                document.getElementById("appdock").style.display = "grid";
                document.getElementById("appdock").style.gridTemplateColumns = "100px ".repeat(complexDockLayout.columns);
                  document.getElementById("appdock").style.height = "50px";
                  document.getElementById("appdock").style.gridTemplateRows = "75px 35px ".repeat(complexDockLayout.rows);
                //document.getElementById("leftarrow").style.display = "none";
                //document.getElementById("rightarrow").style.display = "none";
                document.getElementById("appdock").style.left = complexDockPos[0]+"%";
                document.getElementById("appdock").style.top = complexDockPos[1]+"%";
                return;


                
    
         }

         localStorage.setItem(SaveKey+"dockpos", dockpos);

} else {


    document.getElementById("appdock").style.zIndex = 5;
    if (currentDockMode != "simple") {
       
        document.getElementById("appdock").replaceChildren();

        for (let i = 0; i < 10; i++) {
            newIcon = document.createElement("a");
            newIcon.id = "dockclick"+(i+1);
            document.getElementById("appdock").appendChild(newIcon);
            newIcon = document.createElement("img");
            newIcon.id = "dockpic"+(i+1);
            newIcon.src = iconpack+"/"+[apppage1[i]]+".png";
            document.getElementById("dockclick"+(i+1)).appendChild(newIcon);
             newText = document.createElement("p");
            newText.id = "docktext"+(i+1);
            try {
                newText.innerHTML = apppage1[i][0].toUpperCase() + apppage1[i].slice(1);

            } catch {
                newText.innerHTML = apppage1[i][0].toUpperCase()
            }
            if (apppage1[i] == "None") newText.innerHTML = " "
            document.getElementById("appdock").appendChild(newText);
            document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites1[i]+"')");
            document.getElementById("dockclick"+(i+1)).style.cursor = "pointer";
            
        }

        leftarrow = document.createElement("p");

        rightarrow = document.createElement("p");

        leftarrow.id = "leftarrow";
        rightarrow.id = "rightarrow";
        
        leftarrow.innerHTML = "◄";
        rightarrow.innerHTML = "►";

        

        document.getElementById("appdock").appendChild(leftarrow);
        document.getElementById("appdock").appendChild(rightarrow);

        document.getElementById("leftarrow").setAttribute("onclick", "pagechange('left')");
        document.getElementById("rightarrow").setAttribute("onclick", "pagechange('right')");
        document.getElementById("leftarrow").style.display = "block";
        document.getElementById("rightarrow").style.display = "block";
        document.getElementById("leftarrow").style.cursor = "pointer";
        document.getElementById("rightarrow").style.cursor = "pointer";

        currentDockMode = "simple";
    } 

    

    document.getElementById("appdock").appendChild(leftarrow);
    document.getElementById("appdock").appendChild(rightarrow);

    document.getElementById("leftarrow").setAttribute("onclick", "pagechange('left')");
    document.getElementById("rightarrow").setAttribute("onclick", "pagechange('right')");

     document.getElementById("appdock").style.gridTemplateColumns = "50px 150px 150px 150px 150px 150px 50px";
    document.getElementById("appdock").style.gridTemplateRows = "100px 35px 100px 35px";
    document.getElementById("leftarrow").style.gridRow = "2";
    document.getElementById("leftarrow").style.gridColumn = "1";
    document.getElementById("rightarrow").innerHTML = "";
    document.getElementById("leftarrow").style.gridRow = "";
    document.getElementById("rightarrow").style.gridRow = "2";
    document.getElementById("rightarrow").style.gridColumn = "7";
    document.getElementById("leftarrow").innerHTML = "◄";
    document.getElementById("rightarrow").innerHTML = "►";
    document.getElementById("Resp").style.top = "60%";
    for (let i = 0; i < 10; i++) {
        document.getElementById("dockpic"+(i+1)).style.width = "80px";
        document.getElementById("dockpic"+(i+1)).style.height = "80px";
        document.getElementById("docktext"+(i+1)).style.fontSize = "22px";
        
    }
    for (let i = 0; i <5 ; i++) {
        document.getElementById("dockclick"+(i+1)).style.gridColumn = i+2;
        document.getElementById("dockclick"+(i+1)).style.gridRow = 1;
        document.getElementById("docktext"+(i+1)).style.gridColumn = i+2;
        document.getElementById("docktext"+(i+1)).style.gridRow = 2;
        document.getElementById("dockclick"+(i+6)).style.gridColumn = i+2;
        document.getElementById("dockclick"+(i+6)).style.gridRow = 3;
        document.getElementById("docktext"+(i+6)).style.gridColumn = i+2;
        document.getElementById("docktext"+(i+6)).style.gridRow = 4;
    }
    document.getElementById("appdock").style.height = "50px";
    document.getElementById("Resp").style.top = "90%";
    document.getElementById("appdock").style.top = "53%";
    document.getElementById("appdock").style.left = "50%";
    localStorage.setItem(SaveKey+"switchdock", JSON.stringify(switchdock))
}
}

function Save(Title, Value) {
    localStorage.setItem(SaveKey+Title, Value)
}

function Load(Title) {
    return localStorage.getItem(SaveKey+Title)
}


function updateAlert(alerttext) {
    if (!onealert) {
        alert(alerttext);
        onealert = true;
    }
}




async function checksaved() {
    changeZoom();
    //console.log("Checking saved data...")

    currentDockMode = "?";

    document.getElementById('clock').style.fontSize = "80px";

    try {
        saved = localStorage.getItem(SaveKey+"update2.0");
        if (saved == "lol") {
            theme = localStorage.getItem(SaveKey+"theme");
            batteryInfo.levelGained = parseInt(localStorage.getItem(SaveKey+"levelGained"));
            batteryInfo.timeGained = parseInt(localStorage.getItem(SaveKey+"timeGained"));
            batteryInfo.levelLost = parseInt(localStorage.getItem(SaveKey+"levelLost"));
            batteryInfo.timeLost = parseInt(localStorage.getItem(SaveKey+"timeLost"));

            complexDock = JSON.parse(localStorage.getItem(SaveKey+"complexDock"));
            complexDockPage = JSON.parse(localStorage.getItem(SaveKey+"complexDockPage"));
            complexDockSites = JSON.parse(localStorage.getItem(SaveKey+"complexDockSites"));
            complexDockLayout = JSON.parse(localStorage.getItem(SaveKey+"complexDockLayout"));
            complexDockPos = JSON.parse(localStorage.getItem(SaveKey+"complexDockPos"));

        } else {
            localStorage.setItem(SaveKey+"update2.0", "lol");
            localStorage.setItem(SaveKey+"theme", "light");
            localStorage.setItem(SaveKey+"levelGained", 0);
            localStorage.setItem(SaveKey+"timeGained", 0);
            localStorage.setItem(SaveKey+"levelLost", 0);
            localStorage.setItem(SaveKey+"timeLost", 0);
            localStorage.setItem(SaveKey+"complexDock", JSON.stringify(false));
            localStorage.setItem(SaveKey+"complexDockPage", JSON.stringify(complexDockPage));
            localStorage.setItem(SaveKey+"complexDockSites", JSON.stringify(complexDockSites));
            localStorage.setItem(SaveKey+"complexDockLayout", JSON.stringify(complexDockLayout));
            localStorage.setItem(SaveKey+"complexDockPos", JSON.stringify(complexDockPos));

            updateAlert("Scr-OS has been updated to version 2.0.");
        }
    } catch {
        localStorage.setItem(SaveKey+"update2.0", "lol");
        localStorage.setItem(SaveKey+"theme", "light");
        localStorage.setItem(SaveKey+"levelGained", 0);
        localStorage.setItem(SaveKey+"timeGained", 0);
        localStorage.setItem(SaveKey+"levelLost", 0);
        localStorage.setItem(SaveKey+"timeLost", 0);
        localStorage.setItem(SaveKey+"complexDock", JSON.stringify(false));
        localStorage.setItem(SaveKey+"complexDockPage", JSON.stringify(complexDockPage));
        localStorage.setItem(SaveKey+"complexDockSites", JSON.stringify(complexDockSites));
        localStorage.setItem(SaveKey+"complexDockLayout", JSON.stringify(complexDockLayout));
        localStorage.setItem(SaveKey+"complexDockPos", JSON.stringify(complexDockPos));
        updateAlert("Scr-OS has been updated to version 2.0.");
    }

     try {
        saved = localStorage.getItem(SaveKey+"update1.3.3");
        if (saved == "lol") {
            showTerry = JSON.parse(localStorage.getItem(SaveKey+"showTerry"));
        } else {
            localStorage.setItem(SaveKey+"update1.3.3", "lol");
            localStorage.setItem(SaveKey+"showTerry", JSON.stringify(true));
        }
     } catch {
        localStorage.setItem(SaveKey+"update1.3.3", "lol");
        localStorage.setItem(SaveKey+"showTerry", JSON.stringify(true));
    }

    if (showTerry) {
        document.getElementById("bot").style.display = "block";
    } else {
        document.getElementById("bot").style.display = "none";
    }

    try {
        saved = localStorage.getItem(SaveKey+"update1.3.1");
        if (saved == "lol") {
            clocksize = localStorage.getItem(SaveKey+"clocksize");
            document.getElementById("clock").style.fontSize = clocksize+"px";
            outputsize = localStorage.getItem(SaveKey+"outputsize");
            if (showTerry) {
                document.getElementById("Terry").style.fontSize = outputsize+"px";
            }
            docktopoffset = localStorage.getItem(SaveKey+"docktopoffset");
        } else {
            localStorage.setItem(SaveKey+"update1.3.1", "lol");
            localStorage.setItem(SaveKey+"clocksize", "120");
            localStorage.setItem(SaveKey+"outputsize", "30");
            localStorage.setItem(SaveKey+"docktopoffset", "0");
            updateAlert("Scr-OS has been updated to version 1.3.1.");
        }
    } catch {
        localStorage.setItem(SaveKey+"update1.3.1", "lol");
        localStorage.setItem(SaveKey+"clocksize", "120");
        localStorage.setItem(SaveKey+"outputsize", "30");
        localStorage.setItem(SaveKey+"docktopoffset", "0");
        updateAlert("Scr-OS has been updated to version 1.3.1.")

    }


    try {
        saved = localStorage.getItem(SaveKey+"update1.2.1")
        if (saved=="lol") {
            clockpos = JSON.parse(localStorage.getItem(SaveKey+"clockpos"))
            inpos = JSON.parse(localStorage.getItem(SaveKey+"inpos"))
            outpos = JSON.parse(localStorage.getItem(SaveKey+"outpos"))
            

        } else {
            clockpos = ["50", "95"]
            inpos = ["50", "10"]

            outpos = ["50", "65"]
            Save("update1.2.1", "lol")
            Save("clockpos", JSON.stringify(clockpos))
            Save("inpos", JSON.stringify(inpos))
            Save("outpos", JSON.stringify(outpos))
            if (!onealert) {
                updateAlert("Scr-OS has been updated to version 1.2.1.");
            }
        }
    } catch {
        Save("update1.2.1", "lol")
            Save("clockpos", JSON.stringify(clockpos))
            Save("inpos", JSON.stringify(inpos))
            Save("outpos", JSON.stringify(outpos))
            if (!onealert) {
                updateAlert("Scr-OS has been updated to version 1.2.1.")

            }
        }
        
        document.getElementById("clock").style.left = (clockpos[0])+"%"
        document.getElementById("clock").style.top = (100-clockpos[1])+"%"
        document.getElementById("Resp").style.left = (inpos[0])+"%"
        document.getElementById("Resp").style.top = (100-inpos[1])+"%"

        if (showTerry) {
            document.getElementById("bot").style.left = (outpos[0])+"%"
            document.getElementById("bot").style.top = (100-outpos[1])+"%"

        }
        
    
    
    
    

    try {
        saved = localStorage.getItem(SaveKey+"update1.2");
        if (saved == "lol") {
            showseconds = JSON.parse(localStorage.getItem(SaveKey+"showseconds"));
            dockpos = localStorage.getItem(SaveKey+"dockpos");
            simpledock = JSON.parse(localStorage.getItem(SaveKey+"simpledock"));
            appsites3 = JSON.parse(localStorage.getItem(SaveKey+"appsites3"));
            appsites4 = JSON.parse(localStorage.getItem(SaveKey+"appsites4"))
            apppage3 = JSON.parse(localStorage.getItem(SaveKey+"apppage3"));
            apppage4 = JSON.parse(localStorage.getItem(SaveKey+"apppage4"));
            supapps = JSON.parse(localStorage.getItem(SaveKey+"supapps"));
            supsites = JSON.parse(localStorage.getItem(SaveKey+"supsites"));
            vbgfile = localStorage.getItem(SaveKey+"vbgfile");
            bgtype = localStorage.getItem(SaveKey+"bgtype");
            lockeddock = JSON.parse(localStorage.getItem(SaveKey+"lockeddock"))
            document.getElementById("VidBack").src = "Videos/"+vbgfile;
            if (bgtype == "video") {
                document.getElementById("VidBack").style.display = "block";
            } else {
                document.getElementById("VidBack").style.display = "none";
            }
            
        } else {
            localStorage.setItem(SaveKey+"update1.2","lol")
            localStorage.setItem(SaveKey+"showseconds", JSON.stringify(showseconds));
            localStorage.setItem(SaveKey+"dockpos", dockpos);
            localStorage.setItem(SaveKey+"simpledock", JSON.stringify(true));
            localStorage.setItem(SaveKey+"appsites3", JSON.stringify(appsites3));
            localStorage.setItem(SaveKey+"appsites4", JSON.stringify(appsites4));
            localStorage.setItem(SaveKey+"apppage3", JSON.stringify(apppage3));
            localStorage.setItem(SaveKey+"apppage4", JSON.stringify(apppage4));
            localStorage.setItem(SaveKey+"supapps", JSON.stringify(supapps))
            localStorage.setItem(SaveKey+"supsites", JSON.stringify(supsites))
            localStorage.setItem(SaveKey+"vbgfile", vbgfile);
            localStorage.setItem(SaveKey+"bgtype", bgtype);
            localStorage.setItem(SaveKey+"lockeddock", JSON.stringify(false))
            if (bgtype == "video") {
                document.getElementById("VidBack").style.display = "block";
                //console.log("hi")
            } else {
                //console.log("bye")
                document.getElementById("VidBack").style.display = "none";
            }
            
            if (!onealert) {
                updateAlert("Scr-OS has been updated to version 1.2.0.")
            }
        }
    } catch {
        localStorage.setItem(SaveKey+"update1.2","lol")
        localStorage.setItem(SaveKey+"showseconds", JSON.stringify(showseconds));
        localStorage.setItem(SaveKey+"dockpos", dockpos);
        localStorage.setItem(SaveKey+"simpledock", JSON.stringify(true));
        localStorage.setItem(SaveKey+"appsites3", JSON.stringify(appsites3));
        localStorage.setItem(SaveKey+"appsites4", JSON.stringify(appsites4));
        localStorage.setItem(SaveKey+"apppage3", JSON.stringify(apppage3));
        localStorage.setItem(SaveKey+"apppage4", JSON.stringify(apppage4));
        localStorage.setItem(SaveKey+"supapps", JSON.stringify(supapps))
        localStorage.setItem(SaveKey+"supsites", JSON.stringify(supsites))
        localStorage.setItem(SaveKey+"lockeddock", JSON.stringify(false))
        localStorage.setItem(SaveKey+"vbgfile", vbgfile);
        localStorage.setItem(SaveKey+"bgtype", bgtype);
        if (bgtype == "video") {
            document.getElementById("VidBack").style.display = "block";
            //console.log("hi")
        } else {
            //console.log("bye")
            document.getElementById("VidBack").style.display = "none";
        }
        
        if (!onealert) {
            updateAlert("Scr-OS has been updated to version 1.2.0.")
        }
    }
   
    
    
    try {
        saved = localStorage.getItem(SaveKey+"update1.1.3");
        //console.log(saved)
        if (saved=="lol") {
            showclock = JSON.parse(localStorage.getItem(SaveKey+"showclock"));
            showappdock = JSON.parse(localStorage.getItem(SaveKey+"showappdock"));
            switchdock = JSON.parse(localStorage.getItem(SaveKey+"switchdock"));
            if (showclock) {
                document.getElementById("clock").style.display = "block";
            } else {
                document.getElementById("clock").style.display = "none";
            }
            if (!showappdock) {
                document.getElementById("appdock").style.display = "none";
            } else {
                document.getElementById("appdock").style.display = "grid";
            }
            if (switchdock && dockloc=="locked" &&  inpos[0] == initinpos[0] && inpos[1] == initinpos[1]) {
                document.getElementById("Resp").style.top = "80%";
            } else if ( inpos[0] == initinpos[0] && inpos[1] == initinpos[1]) {
                document.getElementById("Resp").style.top = "60%";
            }
            if (switchdock && dockloc != "locked" &&  inpos[0] == initinpos[0] && inpos[1] == initinpos[1]) {
                document.getElementById("appdock").style.top = "53%";
                document.getElementById("Resp").style.top = "90%";
            } else if (dockloc != "locked" &&  inpos[0] == initinpos[0] && inpos[1] == initinpos[1]) {
                document.getElementById("appdock").style.top = "70%";
                document.getElementById("Resp").style.top = "60%";
            }
            
        } else {
            localStorage.setItem(SaveKey+"update1.1.3","lol")
            localStorage.setItem(SaveKey+"showclock", JSON.stringify(showclock));
            localStorage.setItem(SaveKey+"showappdock", JSON.stringify(showappdock));
            localStorage.setItem(SaveKey+"switchdock", JSON.stringify(switchdock));
            if (!onealert) {
                updateAlert("Scr-OS has been updated to version 1.1.3.")

            }
        }
    } catch {
        localStorage.setItem(SaveKey+"update1.1.3","lol")
        localStorage.setItem(SaveKey+"showclock", JSON.stringify(showclock));
        localStorage.setItem(SaveKey+"showappdock", JSON.stringify(showappdock));
        localStorage.setItem(SaveKey+"switchdock", JSON.stringify(switchdock));
        if (!onealert) {
            updateAlert("Scr-OS has been updated to version 1.1.3.")
        }
    }
    
    
    
    try {
        saved = localStorage.getItem(SaveKey+"update1.1.2");
        if (saved=="lol") {
            MaxDenominator = localStorage.getItem(SaveKey+"MaxDenominator");
            calcmode = JSON.parse(localStorage.getItem(SaveKey+"calcmode"));
        } else {
            localStorage.setItem(SaveKey+"update1.1.2","lol")
            localStorage.setItem(SaveKey+"MaxDenominator", MaxDenominator);
            localStorage.setItem(SaveKey+"calcmode", JSON.stringify(calcmode));
            if (!onealert) {
                updateAlert("Scr-OS has been updated to version 1.1.2.")
            }
        }
    } catch {
        localStorage.setItem(SaveKey+"update1.1.2","lol")
        localStorage.setItem(SaveKey+"MaxDenominator", MaxDenominator);
        localStorage.setItem(SaveKey+"calcmode", JSON.stringify(calcmode));
        if (!onealert) {
            alert("Scr-OS has been updated to version 1.1.2.")
            onealert = true;
        }
    }
    
    
    
    try {
        APIkey = localStorage.getItem(SaveKey+"APIkey");
        if (APIkey == null) {
            APIkey = prompt("Please enter your Google Custom Search API key. You can get one from https://developers.google.com/custom-search/v1/overview");
            localStorage.setItem(SaveKey+"APIkey", APIkey)
        }
    } catch {
        APIkey = prompt("Please enter your Google Custom Search API key. You can get one from https://developers.google.com/custom-search/v1/overview");
        localStorage.setItem(SaveKey+"APIkey", APIkey)
    }
    
    
    
    
    try {
        saved = localStorage.getItem(SaveKey+"update1.1");
        if (saved == "lol") {
            appsites1 = JSON.parse(localStorage.getItem(SaveKey+"appsites1"))
            appsites2 = JSON.parse(localStorage.getItem(SaveKey+"appsites2"))
            apppage1 = JSON.parse(localStorage.getItem(SaveKey+"apppage1"))
            apppage2 = JSON.parse(localStorage.getItem(SaveKey+"apppage2"))
            dmode = localStorage.getItem(SaveKey+"defaultmode")
            pages = localStorage.getItem(SaveKey+"pages")
            iconpack = localStorage.getItem(SaveKey+"TerryIconPack")
            textspeed = localStorage.getItem(SaveKey+"textspeed")
            
            
            if (dmode == "search") {
                chatmode = false;
            } else {
                chatmode = true;
            }
        }
        else {
            localStorage.setItem(SaveKey+"update1.1","lol")
            localStorage.setItem(SaveKey+"appsites1", JSON.stringify(appsites1))
            localStorage.setItem(SaveKey+"appsites2", JSON.stringify(appsites2))
            localStorage.setItem(SaveKey+"apppage1", JSON.stringify(apppage1))
            localStorage.setItem(SaveKey+"apppage2", JSON.stringify(apppage2))
            localStorage.setItem(SaveKey+"defaultmode", dmode)
            localStorage.setItem(SaveKey+"pages", 2)
            localStorage.setItem(SaveKey+"textspeed", textspeed)
            if (!onealert) {
                alert("Scr-OS has been updated to version 1.1.0.")
                onealert = true;
            }
        }
    } catch {
        localStorage.setItem(SaveKey+"update1.1","lol")
        localStorage.setItem(SaveKey+"appsites1", JSON.stringify(appsites1))
        localStorage.setItem(SaveKey+"appsites2", JSON.stringify(appsites2))
        localStorage.setItem(SaveKey+"apppage1", JSON.stringify(apppage1))
        localStorage.setItem(SaveKey+"apppage2", JSON.stringify(apppage2))
        localStorage.setItem(SaveKey+"defaultmode", dmode)
        localStorage.setItem(SaveKey+"pages", 2)
        localStorage.setItem(SaveKey+"textspeed", textspeed)
        if (!onealert) {
            alert("Scr-OS has been updated to version 1.1.0.")
            onealert = true;
        }
    }
    
    
    
    try {
        saved = localStorage.getItem(SaveKey+"savedd");
        if (saved == "lol") {
            bgfile = localStorage.getItem(SaveKey+"TerryBgFile");
            document.getElementById("mainbg").style.backgroundImage = "url(\"Images/"+bgfile+"\")";
            username = localStorage.getItem(SaveKey+"TerryUsername");
            document.body.style.color = localStorage.getItem(SaveKey+"TerryFontColor")
            learntdataquest = JSON.parse(localStorage.getItem(SaveKey+"TerryQuestData"))
            learntdataans = JSON.parse(localStorage.getItem(SaveKey+"TerryAnsData"))
            colorchange = localStorage.getItem(SaveKey+"TerryOutlColor")
            document.body.style.webkitTextStroke = colorchange;
            fclock = JSON.parse(localStorage.getItem(SaveKey+"ClockFormat"))
            fontchange = localStorage.getItem(SaveKey+"TerryFont")
            document.body.style.fontFamily = fontchange;
            iconpack = localStorage.getItem(SaveKey+"TerryIconPack")
            
            
        } else {
            localStorage.setItem(SaveKey+"savedd","lol")
            localStorage.setItem(SaveKey+"TerryBgFile", "bg4.jpg")
            localStorage.setItem(SaveKey+"TerryUsername", "Guest")
            saved = localStorage.getItem(SaveKey+"savedd");
            localStorage.setItem(SaveKey+"TerryFontColor", "#ffffff")
            localStorage.setItem(SaveKey+"TerryOutlColor", "#ffffff")
            localStorage.setItem(SaveKey+"TerryQuestData", "who made you?")
            localStorage.setItem(SaveKey+"TerryAnsData", "My Creator, Imeanbusiness, of course!")
            learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
            learntdataquest = ["who made you?", "what are you?"]
            localStorage.setItem(SaveKey+"TerryQuestData", JSON.stringify(learntdataquest))
            localStorage.setItem(SaveKey+"TerryAnsData", JSON.stringify(learntdataans))
            localStorage.setItem(SaveKey+"ClockFormat", JSON.stringify(true))
            localStorage.setItem(SaveKey+"TerryFont", "Poppins")
            localStorage.setItem(SaveKey+"TerryIconPack", "AppIcons")
            flclock = true;
            //console.log(saved)
        }
        
    } catch {
        localStorage.setItem(SaveKey+"savedd","lol")
        localStorage.setItem(SaveKey+"TerryBgFile", "bg4.jpg")
        localStorage.setItem(SaveKey+"TerryUsername", "Guest")
        saved = localStorage.getItem(SaveKey+"savedd");
        localStorage.setItem(SaveKey+"TerryFontColor", "#ffffff")
        localStorage.setItem(SaveKey+"TerryOutlColor", "#ffffff")
        localStorage.setItem(SaveKey+"TerryQuestData", "who made you?")
        localStorage.setItem(SaveKey+"TerryAnsData", "My Creator, Imeanbusiness, of course!")
        learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
        learntdataquest = ["who made you?", "what are you?"]
        localStorage.setItem(SaveKey+"TerryQuestData", JSON.stringify(learntdataquest))
        localStorage.setItem(SaveKey+"TerryAnsData", JSON.stringify(learntdataans))
        localStorage.setItem(SaveKey+"ClockFormat", JSON.stringify(true))
        localStorage.setItem(SaveKey+"TerryFont", "Poppins")
        localStorage.setItem(SaveKey+"TerryIconPack", "AppIcons")
        flclock = true;
        //console.log(saved)
        
    }
   
    toggleThemes();



    if (systemSupapps.every(element => supapps.includes(element))) {
        
      } else {
        supapps = supapps.concat(systemSupapps.filter(element => !supapps.includes(element)));
        localStorage.setItem(SaveKey+"supapps", JSON.stringify(supapps));
        supsites = supsites.concat(systemSupsites.filter(element => !supsites.includes(element)));
        localStorage.setItem(SaveKey+"supsites", JSON.stringify(supsites));
      }


       replacedock(false);




}

setInterval(changeZoom, 200);
setInterval(replacedock, 1000);

function openApp(appsName) {

    if (appsName.includes("scros://")) {
        openSystemApp(appsName.replace("scros://", ""));
        decideZ(appsName.replace("scros://", ""));
        return;
    }

    let newPopopup = window.open(appsName, "mypopup"+popupcount, "width=800,height=600,resizable=yes,scrollbars=yes");
    openedPopups.push(newPopopup);
    popupcount++;
}

function changeZoom() {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    WindowPixels = viewportHeight * viewportWidth;
    intendedWindowSize = 2048 * 1152;

    

    BodyZoom = Math.sqrt((WindowPixels / intendedWindowSize)) * 1.2;

    dockdownlmt = ((clientHeight+130)/clientHeight)*100;
    dockdownchklmt = ((clientHeight-150 * (clientHeight / 1080))/clientHeight);
    dockwidthlmt = ((clientWidth+100)/clientWidth)*100;
    dockwidthchklmt = ((clientWidth-100* (clientHeight / 1080))/clientWidth);

    body.style.width = viewportWidth/BodyZoom + "px";
    body.style.height = viewportHeight/BodyZoom + "px";




    document.body.style.zoom = BodyZoom;
    document.body.backgroundSize = "cover";
}

function calcZoom() {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    WindowPixels = viewportHeight * viewportWidth;
    intendedWindowSize = 2048 * 1152;

    //console.log("Viewport Size: " + viewportWidth + "x" + viewportHeight);
    //console.log(Math.sqrt((WindowPixels / intendedWindowSize)));
    

    BodyZoom = Math.sqrt((WindowPixels / intendedWindowSize)) * 1.2;
    return BodyZoom;
}


window.onload = checksaved();


async function pagechange(dir) {
    if (dir=="right") {
        curpage +=1 
        if (curpage>pages) {
            curpage = 1
        }
        if (curpage == 1) {
            
            for (let i = 0; i < 10; i++) {
                await sleep(16.666666666666668);
                
                itemd = apppage1[i];
                if (itemd == "") {
                    itemd ="none"
                }
                //console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                //console.log(itemd)
                //console.log(iconpack+"/"+itemd+".png")

                if (itemd == "None") {
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites1[i]+"')");
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
              
            }

        } else if (curpage == 2) {

            for (let i = 0; i < 10; i++) {
                 await sleep(16.666666666666668);
                itemd = apppage2[i];
                if (itemd == "") {
                    itemd ="none"
                }
                //console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                //console.log(itemd)
                //console.log(iconpack+"/"+itemd+".png")

                

                if (itemd == "None") {
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites2[i]+"')");
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
              
            }

        } else if (curpage == 3) {

            for (let i = 0; i < 10; i++) {
                 await sleep(16.666666666666668);
                itemd = apppage3[i];
                if (itemd == "") {
                    itemd ="none"
                }
                //console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                //console.log(itemd)
                //console.log(iconpack+"/"+itemd+".png")

                

                if (itemd == "None") {
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites3[i]+"')");
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
              
            }

        } else if (curpage == 4) {

            for (let i = 0; i < 10; i++) {
                 await sleep(16.666666666666668);
                itemd = apppage4[i];
                if (itemd == "") {
                    itemd ="none"
                }
                //console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                //console.log(itemd)
                //console.log(iconpack+"/"+itemd+".png")

                

                if (itemd == "None") {
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites4[i]+"')");
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
              
            }

        }
    } else if (dir=="left") {
        
        curpage -=1 
        if (curpage<1) {
            curpage = pages
        }
        if (curpage == 1) {

            for (let i = 0; i < 10; i++) {
                 await sleep(16.666666666666668);
                itemd = apppage1[i];
                
                if (itemd == "") {
                    itemd ="none"
                }

                //console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                //console.log(itemd)
                //console.log(iconpack+"/"+itemd+".png")

                if (itemd == "None") {
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites1[i]+"')");
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
            }

        } else if (curpage == 2) {

            for (let i = 0; i < 10; i++) {
                 await sleep(16.666666666666668);
                itemd = apppage2[i];
                if (itemd == "") {
                    itemd ="none"
                }
                //console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                //console.log(itemd)
                //console.log(iconpack+"/"+itemd+".png")

                

                if (itemd == "None") {
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites2[i]+"')");
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
              
            }

        } else if (curpage == 3) {

            for (let i = 0; i < 10; i++) {
                 await sleep(16.666666666666668);
                itemd = apppage3[i];
                if (itemd == "") {
                    itemd ="none"
                }
                //console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                //console.log(itemd)
                //console.log(iconpack+"/"+itemd+".png")

                

                if (itemd == "None") {
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites3[i]+"')");
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
              
            }

        } else if (curpage == 4) {

            for (let i = 0; i < 10; i++) {
                 await sleep(16.666666666666668);
                itemd = apppage4[i];
                if (itemd == "") {
                    itemd ="none"
                }
                //console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                //console.log(itemd)
                //console.log(iconpack+"/"+itemd+".png")

                

                if (itemd == "None") {
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                    
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites4[i]+"')");
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
              
            }

        }
    }
}





async function replywith(x) {
    
    if (lastRespondedType == "Resp") {
        if (!showTerry) {
            responding = false;
            return;
        }
    
        v=""
        msg = "Thinking..."
    
        for (let i = 0; i < msg.length; i++) {
            v = v+msg[i]
            document.getElementById("Terry").innerHTML = v;
            await sleep(textspeed)
        
    
        }
        await sleep(200)
        v=""
        for (let i = 0; i < x.length; i++) {
            v = v+x[i]
            document.getElementById("Terry").innerHTML = v;
            await sleep(textspeed)
         
    
        }
        responding = false;

    } else {
        document.getElementById("terminalOutput").innerHTML += "SYSTEM: "+ x+"<br>";
        responding = false;
    }

}

function randint(i) {
    return Math.floor((Math.random()*i)+1);
}


function greetings() {
    replies = ["Hello "+username+"! I am Terry. I am your personal assistant!", "Hey, how's it going, "+username+"? I am your personal assistant Terry.","Well hello "+username+"! I'm Terry, your personal assistant!"]
    i = randint(2)
    reply = replies[i];
    replywith(reply);
}

function appOpen(rep) {
    x = false;
    i = 0
    while (i < 10) {
        if (rep.includes(apps[i])) {
            x = true 
            jaz = i
            i = 12
            
        }
        i++
    }
    if (x==true) {
        rep = apps[jaz]
        replies = [`Sure thing. Opening ${rep}`, `Absolutely. Opening ${rep} up.`,`Yep! Opening ${rep} now!`]
            i = randint(2)
            reply = replies[i];
            replywith(reply);
            sleep(1500).then(() => {
                openApp(sites[jaz])
            });

            

            return;
    }
    googlesearch(rep)
    return;
}


currentquest = ""


//no



async function terrylearn(query) {
    const API_KEY = APIkey;
    const CX = "a2bf692e8cf3748d9";
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    if (data.items && data.items.length > 0) {
        replywith(data.items[0].snippet);
    } else {
        replywith("Error: API Key missing.");
    }
}

function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'.",
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${Number(newExponent) + exp}`);
}

// Decimal round
const round10 = (value, exp) => decimalAdjust("round", value, exp);


function command(repl) {
    if (repl.includes(">gs ")) {
        sit = repl.replace(">gs ","")
        replywith("Searching for your query.")
        sleep(150).then(() => {
            let newPopup = window.open("https://www.google.com/search?q="+sit, "mypopup", "width=800,height=600,resizable=yes,scrollbars=yes")
            openedPopups.push(newPopup)
            popupcount++;
        });
        haha = true
    } else if (repl.includes(">ts ")) {
        que = repl.replace("ts ", "")
        haha = true
        terrylearn(que)

    }   
    else if (repl.includes(">help")) {
        replywith("Opening the Scr-OS help menu for you.")
        openSystemApp('helpMenu');
        decideZ('helpMenu');
        haha = true
        responding = false;
    } else if (repl.includes(">kill")) {
        close()
    } else if (repl.includes(">mode")) {
        chatmode = !chatmode;
        if (chatmode) {
            replywith("Switched to chat mode. Hello "+username+". I am Terry. What do you need?")

        } else {
            replywith("Switched to search mode. Hello "+username+". I am Terry. What do you need?")
        }
        haha = true;
    } else if (repl.includes(">api")){
        APIkey = prompt("Please enter your Google Custom Search API key. You can get one from https://developers.google.com/custom-search/v1/overview");
        localStorage.setItem(SaveKey+"APIkey", APIkey)
        haha = true;
        responding = false;

    } else if (repl.includes(">bgc ")) {
        sit = orgians.replace(">bgc ","")
        localStorage.setItem(SaveKey+"TerryBgFile",sit)
        replywith("Set successfully.")
        document.getElementById("mainbg").style.backgroundImage = "url(\"Images/"+sit+"\")";
        haha = true
    
    } else if (repl.includes(">vbgc ")) {
        sit = orgians.replace(">vbgc ","")
        //console.log(sit)
        localStorage.setItem(SaveKey+"vbgfile",sit)
        document.getElementById("VidBack").src = "Videos/"+sit;
        replywith('Set successfully.')
        haha = true;
        


    } else if (repl.includes(">inpos ")) {
        try {
            moved = repl.replace(">inpos ", "")
            //find X
            xp = ""
            //console.log(moved)
            
            for (let i = 0; i < moved.length; i++) {
                //console.log(moved[i])
                if (moved[i]==" ") {
                    break
                }
                xp += moved[i]
            }
            //console.log(xp)

            moved = moved.replace(xp, "")
            //find Y
            yp = moved
            yp = yp/1
            xp = xp/1
            Math.floor(yp)
            Math.floor(xp)



            if (xp > 0 && xp < 101 && yp > 0 && yp < 101) {
                document.getElementById("Resp").style.top = (100-yp)+"%"
                document.getElementById("Resp").style.left = (xp)+"%"
                replywith("Changed the Input's position to ("+xp+", "+yp+"). Warning: Moving it somewhere inaccessable may require a reset to restore functionality. ")
                Save("inpos", JSON.stringify([xp, yp]))
            } else {
                replywith("Error: X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>inpos <Xvalue> <Yvalue>)")
            }
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.  X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>inpos <Xvalue> <Yvalue>)")
            haha = true;
        }


    } else if (repl.includes(">clockpos ")) {
        try {
            moved = repl.replace(">clockpos ", "")
            //find X
            xp = ""
            //console.log(moved)
            
            for (let i = 0; i < moved.length; i++) {
                //console.log(moved[i])
                if (moved[i]==" ") {
                    break
                }
                xp += moved[i]
            }
            //console.log(xp)

            moved = moved.replace(xp, "")
            //find Y
            yp = moved
            yp = yp/1
            xp = xp/1
            Math.floor(yp)
            Math.floor(xp)



            if (xp > 0 && xp < 101 && yp > 0 && yp < 101) {
                document.getElementById("clock").style.top = (100-yp)+"%"
                document.getElementById("clock").style.left = (xp)+"%"
                replywith("Changed the clock's position to ("+xp+", "+yp+"). Warning: Moving it somewhere inaccessable may require a reset to restore functionality. ")
                 Save("clockpos", JSON.stringify([xp, yp]))
            } else {
                replywith("Error: X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>clockpos <Xvalue> <Yvalue>)")
            }
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.  X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>clockpos <Xvalue> <Yvalue>)")
            haha = true;
        }


    }  else if (repl.includes(">outpos ")) {
        try {
            moved = repl.replace(">outpos ", "")
            //find X
            xp = ""
            //console.log(moved)
            
            for (let i = 0; i < moved.length; i++) {
                //console.log(moved[i])
                if (moved[i]==" ") {
                    break
                }
                xp += moved[i]
            }
            //console.log(xp)

            moved = moved.replace(xp, "")
            //find Y
            yp = moved
            yp = yp/1
            xp = xp/1
            Math.floor(yp)
            Math.floor(xp)



            if (xp > 0 && xp < 101 && yp > 0 && yp < 101) {
                if (showTerry) {
                document.getElementById("bot").style.top = (100-yp)+"%"
                document.getElementById("bot").style.left = (xp)+"%"
                replywith("Changed the output's position to ("+xp+", "+yp+"). Warning: Moving it somewhere inaccessable may require a reset to restore functionality. ")
                Save("outpos", JSON.stringify([xp, yp]))
                }
            } else {
                replywith("Error: X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>outpos <Xvalue> <Yvalue>)")
            }
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.  X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>outpos <Xvalue> <Yvalue>)")
            haha = true;
        }


    } else if (repl.includes(">resetpos")) {
            clockpos = ["50", "95"]
            inpos = ["50", "10"]

            outpos = ["50", "65"]
       
            Save("clockpos", JSON.stringify(clockpos))
            Save("inpos", JSON.stringify(inpos))
            Save("outpos", JSON.stringify(outpos))
            replywith("Reset the positions to default.")
            checksaved()
            haha = true;
    } else if (repl.includes(">bgmode")) {
        if (bgtype=="video") {
            replywith("Switched background type to image. Set your background image with '>bgc (image_file)'")
            bgtype = "image"
        } else {
            replywith("Switched background type to video. Set your background video with '>vbgc (video_file)'")
            bgtype = "video" 
        }
        if (bgtype == "video") {
                document.getElementById("VidBack").style.display = "block";
                //console.log("hi")
        } else {
                //console.log("bye")
                document.getElementById("VidBack").style.display = "none";
        }
        haha = true;
        localStorage.setItem(SaveKey+"bgtype", bgtype)

    } else if (repl.includes(">ops ")) {

        sit = repl.replace(">ops ","")
        replywith("Yes, opening now.")
        sleep(150).then(() => {
            let newPopup = window.open("https://"+sit, "mypopup", "width=800,height=600,resizable=yes,scrollbars=yes")
            openedPopups.push(newPopup)
            popupcount++;
        });
        haha = true
    } else if (repl.includes(">gh")) {
        replywith("Opening my github.")
        let newPopup = window.open("https://github.com/Imeanbusiness/TerryBot2.0", "mypopup", "width=800,height=600,resizable=yes,scrollbars=yes")
        openedPopups.push(newPopup)
        popupcount++;
        haha = true
    } else if (repl.includes(">status")) {
        try {
            replywith("Systems: Normal. Version: 1.4 (Fenestra)")
        } catch {
            replywith("Systems: Abnormal. Version: 1.4 (Fenestra) Reload with >reload.")
        }
        haha = true
        
    } else if (repl.includes(">ms")) {
        sit = repl.replace(">ms ","")
        replywith("Searching for your query on Spotify.")
        sleep(150).then(() => {
            let newPopup = window.open("https://open.spotify.com/search/"+sit, "mypopup", "width=800,height=600,resizable=yes,scrollbars=yes")
            openedPopups.push(newPopup)
            popupcount++;
        });
        haha = true

    }  else if (repl.includes(">dmode")) {
        //console.log("dmding")
        
        if (dmode == "search") {
            dmode = "chat"
        } else {
            dmode = "search"
        }
        //console.log(dmode)

        replywith("Switched default mode to "+dmode+" mode.")
        localStorage.setItem(SaveKey+"defaultmode", dmode)
        haha = true;

    } else if (repl.includes(">toggleterry")) {
        showTerry = !showTerry;
        if (showTerry) {
            document.getElementById("bot").style.display = "block";
            document.getElementById("bot").style.left = (outpos[0])+"%"
            document.getElementById("bot").style.top = (100-outpos[1])+"%"
        } else {
            document.getElementById("bot").style.display = "none";
            if (lastRespondedType == "Resp") responding = false;
        }
        if (showTerry) replywith("Terry is now shown on the desktop.");
        if (!showTerry) replywith("Terry is now hidden. You can toggle this back with '>toggleterry'.")
        localStorage.setItem(SaveKey+"showTerry", JSON.stringify(showTerry));
        haha = true;
    } else if (repl.includes(">pgs")) {
        try {
        
            pages = repl.replace(">pgs ","")
        
            pages = pages/1
            
            pages = Math.floor(pages)
            //console.log(pages)
            if (pages > maxpages) {
                pages = maxpages
            } else if (pages <  1) {
                pages = 1
            }
            replywith("Set app dock pages to "+pages+".")
            localStorage.setItem(SaveKey+"pages", pages)
        } catch {
            replywith("Error: Not a valid value.")
        }


        haha = true;
    }  else if (repl.includes(">yt")) {
        sit = repl.replace(">yt ","")
        replywith("Searching for your query on Youtube.")
        sleep(150).then(() => {
            let newPopup = window.open("https://www.youtube.com/results?search_query="+sit, "mypopup", "width=800,height=600,resizable=yes,scrollbars=yes")
            openedPopups.push(newPopup)
            popupcount++;
        });
        haha = true

    } else if (repl.includes(">calc ")) {
        cuc = repl.replace(">calc ", "")
        
        sleep(300).then(() => {
             try {
                
                listoffunct = ["sin", "cos", "tan", "asin", "acos", "atan", "sinh", "cosh", "tanh", "log", "ln", "exp", "sqrt", "abs", "round", "ceil", "floor", "max", "min", "pi", "e"];
                //console.log("Evaluating: " + cuc);

                for (let i = 0; i < listoffunct.length; i++) {
                    let f = listoffunct[i];
                    if (cuc.includes(f)) {
                        //console.log("Replacing: " + f);
                        if (f === "pi") {
                            cuc = cuc.replaceAll(f, "Math.PI");
                        } else if (f === "e") {
                            cuc = cuc.replaceAll(f, "Math.E");
                        } else if (["sin", "cos", "tan", "asin", "acos", "atan", "sinh", "cosh", "tanh"].includes(f) && calcmode === true) {
                            cuc = cuc.replaceAll(new RegExp(`${f}\\(([^)]+)\\)`, 'g'), `Math.${f}((\$1)*Math.PI/180)`);
                        } else {
                            cuc = cuc.replaceAll(f, "Math." + f);
                        }
                    }
                }
                //console.log("Evaluating: " + cuc);
                
                

                ans = round10(eval(cuc), -8);
                
                //console.log("Answer: " + ans);
                found = false;
                for (let i = 2; i < MaxDenominator; i++) {
                    if (ans%1 == 0) {
                                    break
                    }
                    for (let j = 1; j < i; j++) {
                        comp = round10(j/i, -8);    
                   
                        if (ans%comp == 0 || Number.isInteger(ans-comp)) {
                            
                            //console.log(comp)
                  
                                //console.log("Found: " + j + "/" + i);
                                if (Number.isInteger(ans-comp)) {
                                    j = j+((ans-comp)*i)
                                    mixed = j + "/" + i;
                                    ans = mixed;
                                    //console.log ("Actually found: "+ans);
                                } else {
                                    j = j*Math.floor(ans/comp);
    
    
                                    //console.log ("Actually found: " + j + "/" + i);
    
                                    ans = j + "/" + i;

                                }
                           
    

    
    
    
                    
    
                                found = true;
                                break;
                                




                        
                        }

                    }
                    if (found) {
                        break
                    }


                }
                //console.log("Result: " + ans);
                replywith("Result: " + ans);
            } catch {
                //console.log("Error: Invalid expression");
                replywith("Error: Invalid expression");
                return;
            }
        });
        haha = true

    } else if (repl.includes(">calcds ")) {
        try {
            num = repl.replace(">calcds ", "")
            num = num/1
            num = Math.floor(num)

            if  (isNaN(num)) {
                replywith("Error: Invalid syntax. Please enter a value between 1 and 1000.")
                haha = true;
                return;
            }
            if (num <  1 || num > 1000) {
                replywith("Error: Invalid syntax. Please enter a value between 1 and 1000.")
            } else {
                MaxDenominator = num;
                replywith("Max denominator set to " + MaxDenominator + ".")
                localStorage.setItem(SaveKey+"MaxDenominator", MaxDenominator);
            }
        } catch {
            replywith("Error: Invalid syntax. Please enter a value between 1 and 1000.")
        }
        haha = true


    }  else if (repl.includes(">calcmode")) {
        calcmode = !calcmode;
        if (calcmode) {
            replywith("Switched to degrees mode. Calculations will now return degrees.")
        } else {
            replywith("Switched to radians mode. Calculations will now return radians.")
        }
        localStorage.setItem(SaveKey+"calcmode", JSON.stringify(calcmode))
        haha = true;

    }  else if (repl.includes(">toggletheme")) {
        if (theme == "light") {
            theme = "dark";
            replywith("Switched System UI to dark theme.")
        } else {
            theme = "light";
            replywith("Switched System UI to light theme.")
        }
        localStorage.setItem(SaveKey+"theme", JSON.stringify(theme))
        toggleThemes()
        haha = true;
    } else if (repl.includes(">calcmode")) {
        calcmode = !calcmode;
        if (calcmode) {
            replywith("Switched to degrees mode. Calculations will now return degrees.")
        } else {
            replywith("Switched to radians mode. Calculations will now return radians.")
        }
        localStorage.setItem(SaveKey+"calcmode", JSON.stringify(calcmode))
        haha = true;

    } else if (repl.includes(">clocksize ")) {
        try {
            clocksize = repl.replace(">clocksize ", "");
            if (clocksize < 8 || clocksize > 300) {
                replywith("Error: Invalid syntax. Please enter a value between 8 and 300. This will be the font size of the clock in pixels.")
            } else {
                replywith("Clock font size set to "+clocksize+"px.")
                Save("clocksize", clocksize);
                document.getElementById("clock").style.fontSize = clocksize+"px";
            }
        } catch {
                replywith("Error: Invalid syntax. Please enter a value between 8 and 300. This will be the font size of the clock in pixels.")
        }
        haha = true;

    } else if (repl.includes(">outputsize ")) {
        try {
            outputsize = repl.replace(">outputsize ", "");
            if (outputsize < 8 || outputsize > 150) {
                replywith("Error: Invalid syntax. Please enter a value between 8 and 150. This will be the font size of the output in pixels.")
            } else {
                replywith("Output font size set to "+outputsize+"px.")
                Save("outputsize", outputsize);
                if (showTerry) {
                    document.getElementById("Terry").style.fontSize = outputsize+"px";
                }
            }
        } catch {
                replywith("Error: Invalid syntax. Please enter a value between 8 and 150. This will be the font size of the output in pixels.")
        }
        haha = true;
    } else if (repl.includes(">docktopoffset ")) {
        try {
            docktopoffset = repl.replace(">docktopoffset ", "");
            if (docktopoffset < -50 || docktopoffset > 50) {
                replywith("Error: Invalid syntax. Please enter a value between -50 and 50. This will be the % offset of the dock's vertical placement.")
            } else {
                replywith("docktop font offset set to "+docktopoffset+"px.")
                Save("docktopoffset", docktopoffset);
                replacedock(false);
            }
        } catch {
                replywith("Error: Invalid syntax. Please enter a value between -50 and 50. This will be the % offset of the dock's vertical placement.")
        }
        haha = true;
     } else if (repl.includes(">textms")) { 
        try {
            speed = repl.replace(">textms ", "")
            speed = speed/1
            if (speed < 0) {
                speed = 0
            } else if (speed > 100) {
                speed = 100
            }
            replywith("Text speed set to "+speed+"ms.")

            textspeed = speed;
        } catch {
            replywith("Error: Not a valid value. Please enter a number between 0 and 100.")
        }
        haha = true
        localStorage.setItem(SaveKey+"textspeed", textspeed)


    } else if (repl.includes(">remove")) {
        try {
            item = repl.replace(">remove ", "")
            item = item/1 
            item = Math.floor(item)
            if (item < 1) {
                item = 1
            } else if (item > 10) {
                item = 10
            }
            if (curpage == 1) {
                returned = apppage1[item-1]
                apppage1[item-1] = ""
                document.getElementById("dockpic"+item).src = "Images/None.png";
                document.getElementById("dockclick"+item).href = "#";
                document.getElementById("docktext"+item).innerHTML = "";
            } else if (curpage == 2) {
                returned = apppage2[item-1]
                apppage2[item-1] = ""
                document.getElementById("dockpic"+item).src = "Images/None.png";
                document.getElementById("dockclick"+item).href = "#";
                document.getElementById("docktext"+item).innerHTML = "";
            } else if (curpage == 3) {
                returned = apppage3[item-1]
                apppage3[item-1] = ""
                document.getElementById("dockpic"+item).src = "Images/None.png";
                document.getElementById("dockclick"+item).href = "#";
                document.getElementById("docktext"+item).innerHTML = "";
            } else if (curpage == 4) {
                returned = apppage4[item-1]
                apppage4[item-1] = ""
                document.getElementById("dockpic"+item).src = "Images/None.png";
                document.getElementById("dockclick"+item).href = "#";
                document.getElementById("docktext"+item).innerHTML = "";
            }
            localStorage.setItem(SaveKey+"apppage1", JSON.stringify(apppage1))
            localStorage.setItem(SaveKey+"apppage2", JSON.stringify(apppage2))
            localStorage.setItem(SaveKey+"appsites1", JSON.stringify(appsites1))
            localStorage.setItem(SaveKey+"appsites2", JSON.stringify(appsites2))
            localStorage.setItem(SaveKey+"apppage3", JSON.stringify(apppage3))
            localStorage.setItem(SaveKey+"appsites3", JSON.stringify(appsites3))
            localStorage.setItem(SaveKey+"apppage4", JSON.stringify(apppage4))
            localStorage.setItem(SaveKey+"appsites4", JSON.stringify(appsites4))

            replywith("Removed "+returned+" from the dock.")
        } catch {
            replywith("Error: Not a valid value. Please enter a number between 1 and 10.")
            return;
        }
        haha = true

    } else if (repl.includes(">showclock")) {
        showclock = !showclock;
        if (showclock) {
            document.getElementById("clock").style.display = "block";
            replywith("Clock is now visible.")
        } else {
            document.getElementById("clock").style.display = "none";
            replywith("Clock is now hidden.")
        }
        localStorage.setItem(SaveKey+"showclock", showclock)
        haha = true;

    }  else if (repl.includes(">showseconds")) {
        showseconds = !showseconds;
        if (showseconds) {
            localStorage.setItem(SaveKey+"showseconds", JSON.stringify(showseconds))
            replywith("Seconds are now visible.")
        } else {
            localStorage.setItem(SaveKey+"showseconds", JSON.stringify(showseconds))
            replywith("Seconds are now hidden.")
        }
        localStorage.setItem(SaveKey+"showclock", showclock)
        haha = true;

    } else if (repl.includes(">showdock")) {
        showappdock = !showappdock;
        if (showappdock) {
            document.getElementById("appdock").style.display = "grid";
            replywith("App dock is now visible.")
        } else {
            document.getElementById("appdock").style.display = "none";
            replywith("App dock is now hidden.")
        }
        localStorage.setItem(SaveKey+"showappdock", showappdock)
        haha = true;





    } else if (repl.includes("switchdock")) {
        switchdock = !switchdock;

        if (dockloc == "locked") {
            if (switchdock) {

                document.getElementById("Resp").style.top = "80%";
                replywith("Switched dock and input. The input is now at the bottom of the screen.")
            } else {

                document.getElementById("Resp").style.top = "60%";
                replywith("Switched dock and input. The input is now at the top of the screen.")
            }
            localStorage.setItem(SaveKey+"switchdock", JSON.stringify(switchdock))
            haha = true;
            return;
        }
        
        if (switchdock) {
            document.getElementById("appdock").style.top = "53%";
            document.getElementById("Resp").style.top = "90%";
            replywith("Switched dock and input. The app dock is now at the top of the screen.")
        } else {
            document.getElementById("appdock").style.top = "70%";
            document.getElementById("Resp").style.top = "60%";
            replywith("Switched dock and input. The app dock is now at the bottom of the screen.")
        }
        localStorage.setItem(SaveKey+"switchdock", JSON.stringify(switchdock))
        haha = true;

    } else if (repl.includes(">appadd ")) {
        try {
            item = repl.replace(">appadd ", "")
            itemsite = prompt("Please enter the full site address for the app.");
            //console.log(itemsite)
            supapps.push(item);
            supsites.push(itemsite);
            localStorage.setItem(SaveKey+"supapps", JSON.stringify(supapps))
            localStorage.setItem(SaveKey+"supsites", JSON.stringify(supsites))
            replywith("Added "+item+" to the list of supported apps.")
            
            haha = true;
            
        } catch {
            replywith("Error: Invalid syntax.")
            haha = true;

        }

    } else if (repl.includes(">appremove ")) { 
        try {
            item = repl.replace(">appremove ", "")
            for (let i = 0; i < supapps.length; i++) {
                if (supapps[i].includes(item)) {
                    supapps.splice(i, 1);
                    supsites.splice(i, 1);
                    localStorage.setItem(SaveKey+"supapps", JSON.stringify(supapps))
                    localStorage.setItem(SaveKey+"supsites", JSON.stringify(supsites))
                    replywith("Removed "+item+" from the list of supported apps.")
                    haha = true;
                    return;
                }
            }
            replywith("Error: App not found in the list of supported apps.")
            localStorage.setItem(SaveKey+"supapps", JSON.stringify(supapps))
            localStorage.setItem(SaveKey+"supsites", JSON.stringify(supsites))
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.")
            haha = true;
        }
    } else if (repl.includes(">lockdock")) {
        if (simpledock) {
            replywith("Error: I am unable to lock the dock at this time. Ensure that you have simple dock disabled by using >dockmode.")
            haha = true;
            return;
        } else {
            lockeddock = !lockeddock;
            if (lockeddock) {
                
                replywith("Dock is now locked. You cannot move it.")
            } else {
                
                replywith("Dock is now unlocked. You can move it.")
            }           
            if (lockeddock) {
            if (lockeddock && !simpledock) {
                    if (dockpos == 1) {
                        settop = 25/clientWidth*100 *BodyZoom;
                        document.getElementById("appdock").style.left = settop  + "%";
                    }
                    if (dockpos == 2) {
                        settop = 100-(90/clientHeight*100) *BodyZoom;
                        document.getElementById("appdock").style.top = settop  + "%";
                    }
                    if (dockpos == 3) {
                        settop = 100-(25/clientHeight*100) *BodyZoom;
                        document.getElementById("appdock").style.left = settop  + "%";
                    }
                   }   
            }
            localStorage.setItem(SaveKey+"lockeddock", lockeddock)
            haha = true;
        }


    } else if (repl.includes(">dockmode")) {
        complexDock = false;
        simpledock = !simpledock;
        if (!simpledock) {
            dockpos = 2;
            replacedock(false);
            replywith("Switched to dock mode. The dock is now on one of the sides of the screen and is animated.")
        } else {
            replacedock(false);
            replywith("Switched to simple dock mode. The dock is now at the center of the screen.")
            dockloc = "open"
            haha = true;
            switchdock = true;
            localStorage.setItem(SaveKey+"switchdock", JSON.stringify(switchdock))

            
        }
        localStorage.setItem(SaveKey+"simpledock", simpledock)
        haha = true;




    } else if (repl.includes(">complexdockreplace ")) {
       
        //remove
        try {
            item = repl.replace(">complexdockreplace ", "")
            let itemd = "";
            let appName = "";
            if (item.length > 0) {
                let i = 0
                while (item[i] != " ") {
                    itemd += item[i].toString();
                    i++;
                    if (i == item.length) break;
                    console.log(itemd);
                    console.log("Item length: "+item.length);
                }

                if (i == item.length) {
                    appName = "none";
                } else {
                    appName = item.replace(itemd+" ", "");

                }


                
                console.log(item)

            } else {
                replywith("Error: Invalid syntax. Please use '>replace (number) (appname)'.")
                haha = true;
                return;
            }


            
            itemd = itemd/1
            itemd = Math.floor(itemd)
            
            if (itemd > complexDockLayout.columns * complexDockLayout.rows) {
                itemd = 1
            } 
            if (itemd < 1) {
                itemd = 1
            }


                if (itemd <= complexDockLayout.columns * complexDockLayout.rows && itemd > 0) {
                    complexDockPage[itemd-1] = appName;
                    complexDockSites[itemd-1] = "https://"+supsites[supapps.indexOf(appName)];

                    if (systemSupapps.includes(appName)) {
                        complexDockSites[itemd-1] = "scros://"+appName+"Menu";
                        console.log("Set "+complexDockSites[itemd-1]+" to open with ScrOS protocol.")
                    }
                   
                    replacedock(false);
                    if (complexDock) {

                        
                        document.getElementById("docktext"+itemd).innerHTML = appName[0].toUpperCase() + appName.slice(1);
                        document.getElementById("dockclick"+itemd).setAttribute('onclick', "openApp('"+complexDockSites[itemd-1]+"')");

                        if (appName == "none") {
                             document.getElementById("docktext"+itemd).innerHTML = "";
                            document.getElementById("dockclick"+itemd).setAttribute('onclick', "");
                            complexDockSites[itemd-1] = "none";
                        }   
  
                        try {

                            document.getElementById("dockpic"+itemd).src = iconpack +"/" + appName[0].toUpperCase() + appName.slice(1)+".png";
                        } catch {
                            document.getElementById("dockpic"+itemd).src = iconpack + "/" + appName[0].toUpperCase() +".png";

                        }
                    }
                    replywith("Replaced index "+itemd+" of the complex dock with "+appName+".")
                    haha = true;
                     localStorage.setItem(SaveKey+"complexDockPage", JSON.stringify(complexDockPage))
                    localStorage.setItem(SaveKey+"complexDockSites", JSON.stringify(complexDockSites))
                }
        } catch {
            replywith("Error: Invalid syntax. Please use '>replace (number) (appname)'.")
            haha = true;
        }

            item = item.replace(itemd, "")
    } else if (repl.includes(">complexdockpos")) {

        try {
            moved = repl.replace(">complexdockpos ", "")
            //find X
            xp = ""
            //console.log(moved)
            
            for (let i = 0; i < moved.length; i++) {
                //console.log(moved[i])
                if (moved[i]==" ") {
                    break
                }
                xp += moved[i]
            }
            //console.log(xp)

            moved = moved.replace(xp, "")
            //find Y
            yp = moved
            yp = yp/1
            xp = xp/1
            Math.floor(yp)
            Math.floor(xp)

            

            if (xp > -1 && xp < 101 && yp > -1 && yp < 101) {
                if (complexDock) {
                    document.getElementById("appdock").style.top = (100-yp)+"%"
                    document.getElementById("appdock").style.left = (xp)+"%"

                }
                replywith("Changed the complex dock's position to ("+xp+", "+yp+").")
                complexDockPos = [xp, (100-yp)];
                localStorage.setItem(SaveKey+"complexDockPos", JSON.stringify(complexDockPos))
                //Save("inpos", JSON.stringify([xp, yp]))
            } else {
                replywith("Error: X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>complexdockpos <Xvalue> <Yvalue>)")
            }
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.  X and Y values must be between 0 and 100. These values are based on % of your current screen. The syntax is (>inpos <Xvalue> <Yvalue>)")
            haha = true;
        }

    } else if (repl.includes(">complexdocklayout")) {
       
        try {
            moved = repl.replace(">complexdocklayout ", "")
            //find X
            columns = ""
            //console.log(moved)
            
            for (let i = 0; i < moved.length; i++) {
                //console.log(moved[i])
                if (moved[i]==" ") {
                    break
                }
                columns += moved[i]
            }
            //console.log(columns)

            moved = moved.replace(columns, "")
            //find Y
            rows = moved
            rows = rows/1
            columns = columns/1
            Math.floor(rows)
            Math.floor(columns)

            

            if (columns > 0 && columns <= 15 && rows > 0 && rows <= 15) {

                replywith("Changed the complex dock's layout to "+columns+" columns and "+rows+" rows.")
                complexDockLayout.columns = columns;
                complexDockLayout.rows = rows;
                currentDockMode = "?";
                //Save("inpos", JSON.stringify([columns, rows]))
                if (complexDockPage.length < columns * rows) {
                    for (i = complexDockPage.length; i < columns * rows; i++) {
                        complexDockPage.push("None");
                        complexDockSites.push("");
                    }
                }
                localStorage.setItem(SaveKey+"complexDockPage", JSON.stringify(complexDockPage));
                localStorage.setItem(SaveKey+"complexDockSites", JSON.stringify(complexDockSites));
                localStorage.setItem(SaveKey+"complexDockLayout", JSON.stringify(complexDockLayout));
                replacedock(false);
            } else {
                replywith("Error: X and Y values must be between 1 and 15. The syntax is (>complexdocklayout <Columns> <Rows>)")
            }
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.  X and Y values must be between 1 and 15. The syntax is (>complexdocklayout <Columns> <Rows>)")
            haha = true;
        }

    } else if (repl.includes(">complexdock")) {
        complexDock = !complexDock;
        if (complexDock) {
            replywith("Complex dock mode enabled. Position the dock anywhere on screen, and set yout own grid layout. To change the grid layout, use >complexdocklayout. To change the dock position, use >complexdockpos.")
        } else {
            replywith("Complex dock mode disabled.")
        }
        localStorage.setItem(SaveKey+"complexDock", JSON.stringify(complexDock))
        replacedock(false);
        haha = true;
    } else if (repl.includes(">dockpos ")) {

            try {
                tempdockpos = repl.replace(">dockpos ", "")
                tempdockpos = tempdockpos/1
                tempdockpos = Math.floor(tempdockpos)
                if (tempdockpos < 1 || tempdockpos > 3) {
                    replywith("Error: Invalid dock position. Please enter a number between 1 and 3. (1 for left, 2 for bottom, 3 for right)")
                    haha = true;
                } else {
                    dockpos = tempdockpos
                }
                
                if (dockpos == 1) {
                    replacedock(false); 
                    replywith("Dock position set to left. The dock is now on the left side of the screen.")
                    haha = true;
                } else if (dockpos == 2) {
                    replacedock(false);
                    replywith("Dock position set to bottom. The dock is now on the bottom side of the screen.")
                    haha = true;
                } else if (dockpos == 3) {
                    replacedock(false);
                    replywith("Dock position set to right. The dock is now on the right side of the screen.")
                    haha = true;
                }
                localStorage.setItem(SaveKey+"dockpos", dockpos)
            } catch {
                replywith("Error: Invalid dock position. Please enter a number between 1 and 3. (1 for left, 2 for bottom, 3 for right)")
                haha = true;
                return;
            }
        


    }  else if (repl.includes(">replace ")) {
        //remove
        try {
            item = repl.replace(">replace ", "")
            item[0] = item[0]/1
            item[0] = Math.floor(item[0])
            itemd = item[0]
            
            if (item[1] == "0") {
                itemd = 10
            } 
            if (itemd < 1) {
                itemd = 1
            }

            item = item.replace(itemd, "")
            //console.log(item)
                //remove
                //console.log(supapps)
                //console.log(item)
                item = item.slice(1)
                
                if (supapps.includes(item)) {
                    i =0
                    appti = 0;
                    
                    
                    
                    for (appti = 0; appti < supapps.length-1; appti++) {
                        appchk = supapps[appti]
                        //console.log(appti)
                        if (appchk == item) {
                            //console.log("phil has no friends")
                            break;
                        }
                    }
                    
                    item = item.replace(item[0], item[0].toUpperCase());
              
                    //console.log(appti)

                    if (curpage == 1) {
                        returned = apppage1[itemd-1]
                        apppage1[itemd-1] = item[1]
                        document.getElementById("dockpic"+itemd).src = iconpack+"/"+item+".png";
                        document.getElementById("dockclick"+itemd).href = "#";
                        document.getElementById("dockclick"+itemd).setAttribute('onclick', "openApp('"+supsites[appti]+"')");
                        document.getElementById("docktext"+itemd).innerHTML = item;
                        apppage1[itemd-1] = item;
                        appsites1[itemd-1] = supsites[appti];
                        localStorage.setItem(SaveKey+"apppage1", JSON.stringify(apppage1))
                        localStorage.setItem(SaveKey+"apppage2", JSON.stringify(apppage2))
                        localStorage.setItem(SaveKey+"appsites1", JSON.stringify(appsites1))
                        localStorage.setItem(SaveKey+"appsites2", JSON.stringify(appsites2))
                    } else if (curpage == 2) {
                        returned = apppage2[itemd-1]
                        apppage2[itemd-1] = item[1]
                        document.getElementById("dockpic"+itemd).src = iconpack+"/"+item+".png";
                        document.getElementById("dockclick"+itemd).href = "#";
                        document.getElementById("dockclick"+itemd).setAttribute('onclick', "openApp('"+supsites[appti]+"')");
                        document.getElementById("docktext"+itemd).innerHTML = item;
                        apppage2[itemd-1] = item;
                        appsites2[itemd-1] = supsites[appti];
                        localStorage.setItem(SaveKey+"apppage1", JSON.stringify(apppage1))
                        localStorage.setItem(SaveKey+"apppage2", JSON.stringify(apppage2))
                        localStorage.setItem(SaveKey+"appsites1", JSON.stringify(appsites1))
                        localStorage.setItem(SaveKey+"appsites2", JSON.stringify(appsites2))
                    } else if (curpage == 3) {
                        returned = apppage3[itemd-1]
                        apppage3[itemd-1] = item[1]
                        document.getElementById("dockpic"+itemd).src = iconpack+"/"+item+".png";
                        document.getElementById("dockclick"+itemd).href = "#";
                        document.getElementById("dockclick"+itemd).setAttribute('onclick', "openApp('"+supsites[appti]+"')");
                        document.getElementById("docktext"+itemd).innerHTML = item;
                        apppage3[itemd-1] = item;
                        appsites3[itemd-1] = supsites[appti];
                        localStorage.setItem(SaveKey+"apppage3", JSON.stringify(apppage3))
      
                        localStorage.setItem(SaveKey+"appsites3", JSON.stringify(appsites3))
                    }
                    else if (curpage == 4) {
                        returned = apppage4[itemd-1]
                        apppage4[itemd-1] = item[1]
                        document.getElementById("dockpic"+itemd).src = iconpack+"/"+item+".png";
                        document.getElementById("dockclick"+itemd).href = "#";
                        document.getElementById("dockclick"+itemd).setAttribute('onclick', "openApp('"+supsites[appti]+"')");
                        document.getElementById("docktext"+itemd).innerHTML = item;
                        apppage4[itemd-1] = item;
                        appsites4[itemd-1] = supsites[appti];
                        localStorage.setItem(SaveKey+"apppage4", JSON.stringify(apppage4))
      
                        localStorage.setItem(SaveKey+"appsites4", JSON.stringify(appsites4))
                   
                    }
                    replywith("Replaced slot "+itemd+" with "+item+" on page "+curpage+".")
                    
                 

                } else {
                    replywith("Error: Not a valid app. Please use '>replace (number) (appname)'.")
                    haha = true;
                }
                haha = true;
 
 
            } catch {
                replywith("Error: Invalid syntax. Please use '>replace (number) (appname)'.")
                haha = true;
            }


    } else if (repl.includes(">settings")) {
        if (lastRespondedType == "terminalInput") {
            replywith(`<br>Scr-OS Settings<br>
----------------<br>
Username: ${username}<br>
Background: ${localStorage.getItem(SaveKey+"TerryBgFile")}<br>
Video Background: ${localStorage.getItem(SaveKey+"vbgfile")}<br>
Background Type: ${bgtype}<br>
Font Color: ${localStorage.getItem(SaveKey+"TerryFontColor")}<br>
Outline Color: ${localStorage.getItem(SaveKey+"TerryOutlColor")}<br>
Font: ${localStorage.getItem(SaveKey+"TerryFont")}<br>
Clock Format: ${fclock ? "24-hour" : "12-hour"}<br>
Icon Pack: ${localStorage.getItem(SaveKey+"TerryIconPack")}<br>
Default Mode: ${dmode}<br>
App Dock Pages: ${pages}<br>
Text Speed: ${textspeed}ms<br>
Google API key: ${APIkey}<br>
Calculation Mode: ${calcmode ? "Degrees" : "Radians"}<br>
Max Denominator: ${MaxDenominator}<br>
Dock Mode: ${simpledock ? "Simple Dock" : "Fluid Dock"}<br>
Locked Dock: ${lockeddock ? "Locked" : "Unlocked"}<br>
User-set Input Position: ${inpos[0] == initinpos[0] && inpos[1] == initinpos[1] ? "Default" : inpos}<br>
User-set Output Position: ${outpos}<br>
User-set Clock Position: ${clockpos}<br>
Clock Size: ${clocksize}px<br>
Output Size: ${outputsize}px<br>
Dock Top Offset: ${docktopoffset}%<br>
Theme: ${theme}<br>
Complex Dock Mode: ${complexDock ? "Enabled" : "Disabled"}<br>
Complex Dock Layout: ${complexDockLayout.columns} columns, ${complexDockLayout.rows} rows<br>
Complex Dock Position: (${complexDockPos[0]}, ${100-complexDockPos[1]})<br>
----------------`)
        } else if (lastRespondedType == "Resp") {
            alert(`Scr-OS Settings
    ----------------
    Username: ${username}
    Background: ${localStorage.getItem(SaveKey+"TerryBgFile")}
    Video Background: ${localStorage.getItem(SaveKey+"vbgfile")}
    Background Type: ${bgtype}
    Font Color: ${localStorage.getItem(SaveKey+"TerryFontColor")}
    Outline Color: ${localStorage.getItem(SaveKey+"TerryOutlColor")}
    Font: ${localStorage.getItem(SaveKey+"TerryFont")}
    Clock Format: ${fclock ? "24-hour" : "12-hour"}
    Icon Pack: ${localStorage.getItem(SaveKey+"TerryIconPack")}
    Default Mode: ${dmode}
    App Dock Pages: ${pages}
    Text Speed: ${textspeed}ms
    Google API key: ${APIkey}
    Calculation Mode: ${calcmode ? "Degrees" : "Radians"}
    Max Denominator: ${MaxDenominator}
    Dock Mode: ${simpledock ? "Simple Dock" : "Fluid Dock"}
    Locked Dock: ${lockeddock ? "Locked" : "Unlocked"}`)
            alert(`Your Apps: ${supapps}
    Linked Sites to Respective Apps: ${supsites}
    User-set Input Position: ${inpos[0] == initinpos[0] && inpos[1] == initinpos[1] ? "Default" : inpos}
    User-set Output Position: ${outpos}
    User-set Clock Position: ${clockpos}
    Clock Size: ${clocksize}px
    Output Size: ${outputsize}px
    Dock Top Offset: ${docktopoffset}%
    Theme: ${theme}
    ----------------`)

        }
        haha = true
        responding = false;

    } else if (repl.includes(">compchk")) {
        //console.log("Checking number");
        numb = repl.replace(">compchk ", "");
        //console.log(numb);
        var anslist = ["(1"];
        try{
            numb = numb/1
            anslist.push(" "+numb+")");
            n = 2
            rpt = false;
            if (numb%2== 0) {
                anslist.push(" (2");
                anslist.push(" "+(numb/2)+")");
            }
            initva = 10^1-Math.floor((numb.length+0.1/2))
            while (true) {
                
                rpt = true;
                for (let i = n+1; i < Math.floor(Math.sqrt(numb))+1; i++) {
                    //console.log(i)
                    if (numb % i == 0 && !anslist.includes(" ("+i)) {
                        if (!anslist.includes(" "+i+")")) {
                                anslist.push(" ("+i);
                                anslist.push(" "+(numb/i)+")");
                                n = i;
                                rpt = false;
                                break;
                        }
                    
                    
                    }
                }
                if (rpt) {
                    break;
                }
            }   
            //console.log(anslist)
            var anslength = anslist.length;
            var prime = "Prime";
            if (anslength > 2) {
                prime ="Composite";
            }
            replywith("Factors: "+anslist+" Total factors: " + anslength+" Prime: " + prime);
        } catch {
            //console.log("Error: Not a number");
            replywith("Error: Not a number");
            return;
        }
        haha = true

    } else if (repl.includes(">resetbattery")) {
        batteryInfo.levelGained = 0;
        batteryInfo.levelLost = 0;
        batteryInfo.timeGained = 0;
        batteryInfo.timeLost = 0;
        replywith("Battery stats have been reset.");
        haha = true;
        localStorage.setItem(SaveKey+"levelGained", batteryInfo.levelGained);
        localStorage.setItem(SaveKey+"levelLost", batteryInfo.levelLost);
        localStorage.setItem(SaveKey+"timeGained", batteryInfo.timeGained);
        localStorage.setItem(SaveKey+"timeLost", batteryInfo.timeLost);
    } else if (repl.includes(">reset")) {
        resettypecount+=1;
        if (resettypecount < 2) {
            replywith("Are you sure? Run the commad one more time to reset.");
        } else {
            apppage1 = ["gmail","spotify","youtube","instagram","facebook","reddit","x", "amazon", "office", "weather"]
            apppage2 = ["linkedin","netflix","github", "wikipedia","twitch", "", "","","","",]
            appsites1 = ["https://www.gmail.com", "https://open.spotify.com/","https://www.youtube.com/","https://www.instagram.com/","https://www.facebook.com/","https://www.reddit.com/","https://X.com/", "https://www.amazon.com/", "https://www.office.com/", "https://weather.com/"]
            appsites2 = ["https://www.linkedin.com", "https://www.netflix.com/", "https://github.com/", "https://www.wikipedia.org/", "https://www.twitch.tv/"]
            sites = ["https://www.google.com/", "https://open.spotify.com/","https://www.youtube.com/","https://www.facebook.com/","https://www.instagram.com/","https://X.com/","https://www.tiktok.com/","https://www.reddit.com/","https://github.com/","https://www.netflix.com/", "https://www.gmail.com", "https://www.office.com/", "https://www.linkedin.com"]
            let APIkey;
            const SaveKey = "SCR-OS/"
            learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
            learntdataquest = ["who made you?", "what are you?"]
            dockrow1 = ["Gmail", "Spotify", "Youtube", "Instagram", "Facebook"]
            dmode = "search"
            pages = 2
            username = "Guest"
            curpage = 1
            textspeed = 10;
            calcmode = true; // true for degrees, false for radians
            MaxDenominator = 500; // Default max denominator for fractions
            showappdock = true;
            orgians = ""
            replywith ("Succesful.")
            localStorage.setItem(SaveKey+"savedd","lol")
            localStorage.setItem(SaveKey+"TerryBgFile", "bg4.jpg")
            localStorage.setItem(SaveKey+"TerryUsername", "Guest")
            saved = localStorage.getItem(SaveKey+"savedd");
            localStorage.setItem(SaveKey+"TerryFontColor", "#ffffff")
            localStorage.setItem(SaveKey+"TerryQuestData", "who made you?")
            localStorage.setItem(SaveKey+"TerryAnsData", "My Creator, Imeanbusiness, of course!")
            learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
            learntdataquest = ["who made you?", "what are you?"]
            localStorage.setItem(SaveKey+"TerryQuestData", JSON.stringify(learntdataquest))
            localStorage.setItem(SaveKey+"TerryAnsData", JSON.stringify(learntdataans))
            localStorage.setItem(SaveKey+"ClockFormat", JSON.stringify(true))
            localStorage.setItem(SaveKey+"TerryFont", "Poppins")
            localStorage.setItem(SaveKey+"TerryIconPack", "AppIcons")
            flclock = true;
            localStorage.setItem(SaveKey+"update1.1","lol")
            localStorage.setItem(SaveKey+"appsites1", JSON.stringify(appsites1))
            localStorage.setItem(SaveKey+"appsites2", JSON.stringify(appsites2))
            localStorage.setItem(SaveKey+"apppage1", JSON.stringify(apppage1))
            localStorage.setItem(SaveKey+"apppage2", JSON.stringify(apppage2))
            localStorage.setItem(SaveKey+"defaultmode", dmode)
            localStorage.setItem(SaveKey+"pages", 2)
            localStorage.setItem(SaveKey+"textspeed", textspeed)
            localStorage.setItem(SaveKey+"update1.1.2","lol")
            localStorage.setItem(SaveKey+"MaxDenominator", MaxDenominator);
            localStorage.setItem(SaveKey+"calcmode", JSON.stringify(calcmode));
            localStorage.setItem(SaveKey+"APIkey", "");
            localStorage.setItem(SaveKey+"dmode", "search");
            localStorage.setItem(SaveKey+"update1.1.3","lol")
            localStorage.setItem(SaveKey+"showclock", JSON.stringify(true));
            localStorage.setItem(SaveKey+"showappdock", JSON.stringify(true));
            localStorage.setItem(SaveKey+"switchdock", JSON.stringify(true));
            localStorage.setItem(SaveKey+"update1.2","lol")
            localStorage.setItem(SaveKey+"showseconds", JSON.stringify(false));
            localStorage.setItem(SaveKey+"dockpos", dockpos);
            localStorage.setItem(SaveKey+"simpledock", JSON.stringify(true));
            localStorage.setItem(SaveKey+"appsites3", JSON.stringify(appsites3));
            localStorage.setItem(SaveKey+"appsites4", JSON.stringify(appsites4));
            localStorage.setItem(SaveKey+"apppage3", JSON.stringify(apppage3));
            localStorage.setItem(SaveKey+"apppage4", JSON.stringify(apppage4));
            localStorage.setItem(SaveKey+"supapps", JSON.stringify(supapps))
            localStorage.setItem(SaveKey+"supsites", JSON.stringify(supsites))
            localStorage.setItem(SaveKey+"vbgfile", "City.mp4");
            localStorage.setItem(SaveKey+"bgtype", "image");
            localStorage.setItem(SaveKey+"lockeddock", false)
            localStorage.setItem(SaveKey+"update1.3.1", "lol");
            localStorage.setItem(SaveKey+"clocksize", "120");
            localStorage.setItem(SaveKey+"outputsize", "30");
            localStorage.setItem(SaveKey+"docktopoffset", "0");
            localStorage.setItem(SaveKey+"update2.0", "lol");
            localStorage.setItem(SaveKey+"theme", "light");
            clockpos = ["50", "97"]
            inpos = ["50", "10"]
            
            outpos = ["50", "65"]
            Save("update1.2.1", "lol")
            Save("clockpos", JSON.stringify(clockpos))
            Save("inpos", JSON.stringify(inpos))
            Save("outpos", JSON.stringify(outpos))
            
            window.location.reload();    

            checksaved();





            //console.log(saved)


        }
        haha = true

    } else if (repl.includes(">reload")) {
        window.location.reload();
    } else if (repl.includes(">fontcolor")) {
        colorchange = repl.replace(">fontcolor ", "")
        document.body.style.color = colorchange;
        localStorage.setItem(SaveKey+"TerryFontColor", colorchange) 
        haha = true
        replywith("Success! Font color changed to "+colorchange+".")
    } else if (repl.includes(">outlcolor")) {
        colorchange = repl.replace(">outlcolor ", "")
        clr = colorchange;
        clr = "0.2px "+colorchange;
        if (clr.includes("none")) {
            clr = "0px"
        }
        //console.log(clr)
        document.body.style.webkitTextStroke = clr;
        localStorage.setItem(SaveKey+"TerryOutlColor", clr) 
        haha = true
        replywith("Success! Outline color changed to "+colorchange+".")
    } else if (repl.includes("calibratebat")) {
        batteryCalibrating = true;
        batteryStartLostTime = Date.now();
        batteryStartGainedTime = Date.now();
        replywith("Battery calibration started. Proceed to work as usual but keep this tab open! Return after you drain / charge your battery at least 15% for accuracy. Restart to complete the calibration process.");
        haha = true;
    } else if (repl.includes(">font")){
        fontchange = repl.replace(">font ", "")
        document.body.style.fontFamily = fontchange;
        localStorage.setItem(SaveKey+"TerryFont", fontchange) 
        haha = true
        replywith("Success! Font changed to "+fontchange+".")

    }  else if (repl.includes(">fclock")) {
        fclock = !fclock;
        localStorage.setItem(SaveKey+"ClockFormat", JSON.stringify(fclock)) 
        if (fclock) {
            replywith("Switched to 24-hour clock format.")
        } else {
            replywith("Switched to 12-hour clock format.")
        }
        //console.log(fclock)
        haha = true
        
    } else if (repl.includes(">iconpack")) {
        iconpack = repl.replace(">iconpack ", "")
        for (let i = 0; i < 10; i++) {
                
                
                itemd = apppage1[i];
                if (itemd == "") {
                    itemd ="none"
                }
                
                //console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                //console.log(itemd)
                //console.log(iconpack+"/"+itemd+".png")


                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";

              
            }


            if (curpage == 1) {

            for (let i = 0; i < 10; i++) {
                itemd = apppage1[i];
                
                if (itemd == "") {
                    itemd ="none"
                }

                //console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                //console.log(itemd)
                //console.log(iconpack+"/"+itemd+".png")

                if (itemd == "None") {
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = appsites1[i];
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
            }

        } else if (curpage == 2) {

            for (let i = 0; i < 10; i++) {
                itemd = apppage2[i];
                if (itemd == "") {
                    itemd ="none"
                }
                //console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                //console.log(itemd)
                //console.log(iconpack+"/"+itemd+".png")

                

                if (itemd == "None") {
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "#";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = appsites2[i];
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
              
            }

        }
        



        replywith("Icon pack changed to "+iconpack+".")
        localStorage.setItem(SaveKey+"TerryIconPack", iconpack)
        haha = true
    }
    if (!repl.includes(">reset")) {
        resettypecount = 0;
    }
}

function responses(arr, type) {
    if (learningstate) {
        terrylearn(arr);
        return;
    }
    if (arr.includes(">")) {
        haha = false
        command(arr)
        if (haha == true) {
            return;
        }
    }
    if (!arr.includes(">")) {
        resettypecount = 0
        if (type == "terminalInput") {
            replywith("Sorry, I don't understand that command. If you need help, type '>help' for a list of commands.");
            haha = true;
            return;
            
        }
    } 
    if (!chatmode) {
        if (type == "terminalInput") {
            replywith("Sorry, I don't understand that command. If you need help, type '>help' for a list of commands.");
            haha = true;
            return;
            
        }
        googlesearch(arr)
        
    } else {

        if (type == "terminalInput") {
            replywith("Sorry, I don't understand that command. If you need help, type '>help' for a list of commands.");
            haha = true;
            return;
            
        }

        ansucc = false;
        feelings = "none"
        if (feelings!="none") {
            for (i = 0; i < 6; i++) {
                if (arr.includes(feelingsDone[i])) {
                    ansucc = true;
                    replies = "Alright. Thank you for sharing with me! Remember, in the end I am still only a bot, and don't forget to talk to other people too!"
                    
                    reply = replies;
                    replywith(reply);
                    feelings = "none"
                    return;
                }
            }
            
            if (feelings == "neg") {
                ansucc = true;
                replies = ["I understand and I am sorry. Is there anything more? (Reply with 'that's all' if you are finished)", "Oh... I see. Do you want to keep going? (Reply with 'that's all' if you are finished)","I'm really sorry. Do you have more you want to say? (Reply with 'that's all' if you are finished)"]
                i = randint(2)
                reply = replies[i];
                replywith(reply);
            } else if (feelings == "good") {
                ansucc = true;
                replies = ["I see, that's awesome! Do you have anything more to add? (Reply with 'that's all' if you are finished)", "Oh I see! Very cool! Do you want to keep going? (Reply with 'that's all' if you are finished)","That's great!! I'm verry happy for you Do you have more you want to say? (Reply with 'that's all' if you are finished)"]
                i = randint(2)
                reply = replies[i];
                replywith(reply);
                
            } else if (feelings == "neut") {
            ansucc = true;
            replies = ["Cool. Do you have anything more to add? (Reply with 'that's all' if you are finished)", "I see. Do you want to keep going? (Reply with 'that's all' if you are finished)","Nice! Do you have more you want to say? (Reply with 'that's all' if you are finished)"]
            i = randint(2)
            reply = replies[i];
            replywith(reply);
        }
    } else {
        for (i = 0; i < 4; i++) {
            if (arr.includes(greets[i])) {
                ansucc = true;
                
                greetings();
                //console.log("Ew")
                j = true;
                return;
            }
        }
        
        for (i=0; i < 2; i++) {
            if (arr.includes(openapps[i])) {
                ansucc = true;
                
                appOpen(arr);
                //console.log("LOL")
                j = true;
                return;
            }
        }
        if (arr.includes("my name is ")|| arr.includes("my name's ") || arr.includes("i am ")) {
            ansucc = true;
            username = arr.replace("my name is ","")
            username = arr.replace("my name's ","")
            username = arr.replace("i am ","")
            sit = username[0].toUpperCase();
            username = username.replace(username[0], sit);
            localStorage.setItem(SaveKey+"TerryUsername",username);
            replywith("Hi "+username+", nice to meet you!");
        }
        //console.log(ansucc)
        for (i=0; i < learntdataquest.length; i++) {
            //console.log(learntdataquest[i])
            if (arr.includes(learntdataquest[i])) {
                //console.log(learntdataans)
                replywith(learntdataans[i])
                ansucc = true;
            }
            
        }
            if (!ansucc) {
                terrylearn(arr)
            }
        }
    }

   
}


window.onfocus = function() {
  for (let i = 0; i < openedPopups.length; i++) {
    if (openedPopups[i] && !openedPopups[i].closed) {
      openedPopups[i].focus();
    }
  }
};

function googlesearch(i) {
    replies = [`I will google ${i}. `, `Opening google to find "${i}". `]
    x = randint(1)
    //console.log("Should work")
    reply = replies[x]
    replywith(reply)
    sleep(100).then(() => {
        let newPopup = window.open("https://www.google.com/search?q="+i, "mypopup"+popupcount, "width=800,height=600,resizable=yes,scrollbars=yes")
        openedPopups.push(newPopup);
        popupcount++;
    });
    popupcount++;
    
}
responding = false;
orgians;
function respond(type) {
    if (responding) {
        return;
    }
    responding = true; 
    ans = document.getElementById(type);
    ans = ans.value;
    orgians = ans;
    if (!ans.includes("/bgc ")) {
        ans = ans.toLowerCase();
    }
   
    j = false;
    lastRespondedType = type;
    document.getElementById(type).value = "";
    if (type == "terminalInput") {
        
        document.getElementById("terminalOutput").innerHTML += "USER: "+orgians+"<br>";
        document.getElementById("terminalOutput").scrollTop = document.getElementById("terminalOutput").scrollHeight;
        //console.log("balls")
        document.getElementById(type).value = ">";
        lastTerminalinputs.push(orgians);
        terminalInputCount = lastTerminalinputs.length;
    }
    responses(ans, type);



    
}

//status


async function movedockup() {

    document.getElementById("appdock").style.zIndex = "9999";

    curtop = document.getElementById("appdock").style.top;
    curtop = parseFloat(curtop);

    spaceNeeded = 10 * Math.sqrt(BodyZoom);
    
    
    if (((100 -curtop)) > spaceNeeded) {
        return;
    }
    
    for (let i =0 ; i < 1000; i++) {
        await sleep(5);
        curtop = document.getElementById("appdock").style.top;
        curtop = parseFloat(curtop);
        document.getElementById("appdock").style.top = curtop - (0.05 * BodyZoom) + "%";
        
        if (((100 - curtop)) > spaceNeeded) {
            break;
        }
    }
    
}
async function leftmovedockright() {
    if (complexDock) return;
    document.getElementById("appdock").style.zIndex = "9999";
    curtop = document.getElementById("appdock").style.left;
    curtop = parseFloat(curtop);
    spaceNeeded = 18 * Math.sqrt(BodyZoom);
    
    if ((curtop/100*clientWidth) > spaceNeeded) {
        
        return;
    }
    
    for (let i =0 ; i < 1000; i++) {
        //console.log(curtop)
        await sleep(5);
        curtop = document.getElementById("appdock").style.left;
        curtop = parseFloat(curtop);
        document.getElementById("appdock").style.left = curtop + (0.05 * BodyZoom) + "%";
        
        if ((curtop/100*clientWidth) > spaceNeeded) {
            break;
        }
    }
    
}

async function rightmovedockleft() {
    if (complexDock) return;
    document.getElementById("appdock").style.zIndex = "9999";
    curtop = document.getElementById("appdock").style.left;
    curtop = parseFloat(curtop);

    spaceNeeded = 18 * Math.sqrt(BodyZoom);
    
    if (((curtop/100)*clientWidth) < clientWidth-spaceNeeded) {
        
        return;
    }
    
    for (let i =0 ; i < 1000; i++) {
        
        await sleep(5);
        curtop = document.getElementById("appdock").style.left;
        curtop = parseFloat(curtop);
        document.getElementById("appdock").style.left = curtop - (0.05 * BodyZoom) + "%";
        
        if (((curtop/100)*clientWidth) < clientWidth-spaceNeeded) {
            break;
        }
    }
    
}

async function rightmovedockright() {
    if (complexDock) return;
    curtop = document.getElementById("appdock").style.left;
    curtop = parseFloat(curtop);
    
    
    if ((curtop/100*clientWidth) > (dockwidthlmt/100*clientWidth)) {
        
        return;
    }
    
    for (let i =0 ; i < 1000; i++) {
        //console.log(dockwidthlmt)
        await sleep(5);
        curtop = document.getElementById("appdock").style.left;
        curtop = parseFloat(curtop);
        document.getElementById("appdock").style.left = curtop + (0.05 * BodyZoom) + "%";
        
        if ((curtop/100*clientWidth) > (dockwidthlmt/100*clientWidth)) {
            document.getElementById("appdock").style.zIndex = "-9999";
            break;
        }
    }
    
}

async function leftmovedockleft() {
    if (complexDock) return;
    curtop = document.getElementById("appdock").style.left;
    curtop = parseFloat(curtop);
    
    
    if ((curtop/100*clientWidth) < -(dockwidthlmt/100-1)*clientWidth) {
        
        return;
    }
    
    for (let i =0 ; i < 1000; i++) {
        //console.log(curtop)
        await sleep(5);
        curtop = document.getElementById("appdock").style.left;
        curtop = parseFloat(curtop);
        document.getElementById("appdock").style.left = curtop - (0.05 * BodyZoom) + "%";
        
        if ((curtop/100*clientWidth) < -(dockwidthlmt/100-1)*clientWidth) {
            document.getElementById("appdock").style.zIndex = "-9999";
            break;
        }
    }
    
}

async function movedockdown() {
    if (complexDock) return;
    curtop = document.getElementById("appdock").style.top;
    curtop = parseFloat(curtop);
    
    
    if (curtop >= dockdownlmt) {
        return;
    }
    
    for (let i =0 ; i < 1000; i++) {
        await sleep(5);
        curtop = document.getElementById("appdock").style.top;
        curtop = parseFloat(curtop);
        document.getElementById("appdock").style.top = curtop + (0.05 * BodyZoom) + "%";
        
        if (curtop >= dockdownlmt) {
            document.getElementById("appdock").style.zIndex = "-9999";
            break;
        }
    }
    
}



document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    ////console.log(`Mouse position: X=${mouseX}, Y=${mouseY}`);
    if ((mouseY/clientHeight) > dockdownchklmt && dockpos == 2 && !simpledock && !lockeddock) {
        movedockup();
    }
    if ((mouseY/clientHeight) < 4*dockdownchklmt/5 && dockpos == 2 && !simpledock && !lockeddock) {
        movedockdown();
    }
    if ((mouseX/clientWidth) < (1-dockwidthchklmt) && dockpos == 1 && !simpledock && !lockeddock) {
        
        
        leftmovedockright();
    }
    if ((mouseX/clientWidth) > (1-dockwidthchklmt) && dockpos == 1 && !simpledock && !lockeddock) {
        leftmovedockleft();
    }
    if ((mouseX/clientWidth) > (dockwidthchklmt) && dockpos == 3 && !simpledock && !lockeddock) {
        rightmovedockleft();
    }
    if ((mouseX/clientWidth) < (dockwidthchklmt) && dockpos == 3 && !simpledock && !lockeddock) {
        rightmovedockright();
    }
    
});

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    document.addEventListener('keydown', event => {
        var key = event.key.toLowerCase();
        if (key == "enter") { 
            if (document.getElementById("Resp") == document.activeElement) respond("Resp");
            if (document.getElementById("terminalInput") == document.activeElement) respond("terminalInput");
        }
        if (key === "arrowup") {
            if (document.getElementById("terminalInput") == document.activeElement) {
                if (lastTerminalinputs.length > 0 && lastTerminalinputs != null) {
                    //console.log("up!")
                    terminalInputCount--;
                    if (terminalInputCount < 0) {
                        terminalInputCount = 0;
                    }
                    document.getElementById("terminalInput").value = lastTerminalinputs[terminalInputCount];
                }
            }
        }

        if (key === "arrowdown") {
            if (document.getElementById("terminalInput") == document.activeElement) {
                if (lastTerminalinputs.length > 0 && lastTerminalinputs != null) {
                    //console.log("down!")
                    terminalInputCount++;
                    if (terminalInputCount >= lastTerminalinputs.length) {
                        terminalInputCount = lastTerminalinputs.length;
                        document.getElementById("terminalInput").value = ">";
                    } else {
                        document.getElementById("terminalInput").value = lastTerminalinputs[terminalInputCount];
                        
                    }
                    //terminalInputCount = 0;
                }
            }
        }

        
    });
});

const targetElement = document;
currentapp = 0



/*targetElement.addEventListener('wheel', (event) => {

    if (document.getElementById("settingsMenu").style.display != "grid") {
        if (event.deltaY < 0) {
    
                pagechange("left")
        } else {
            // User scrolled down
            pagechange("right")
        }

    }
});*/

dragElement(document.getElementById("settingsMenu"));
dragElement(document.getElementById("appsMenu"));
dragElement(document.getElementById("helpMenu"));
dragElement(document.getElementById("terminalMenu"));

function dragElement(elmnt) {

    const appElement = elmnt.id;
    let appID = 0;

    try {
        appID = appWindowState.names.indexOf(elmnt.id);

    } catch (e) {

    }

    if (appWindowState.fullscreened[appID]) {
        return;
    }






  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    // if present, the Header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:

    dy = elmnt.offsetTop - pos2;
    dx = elmnt.offsetLeft - pos1;
    if (dy < elmnt.offsetHeight/2) dy = elmnt.offsetHeight/2;
    if (dx < 0) dx = 0;

    if (dx > clientWidth / BodyZoom) dx = clientWidth / BodyZoom;
    if (dy > clientHeight / BodyZoom) dy = clientHeight / BodyZoom;
    elmnt.style.top = (dy) + "px";
    elmnt.style.left = (dx) + "px";
    
    console.log("a", dy, dx)
    console.log("b", e.clientX, e.clientY)
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function persistSettings() {

    function parsePosition(value) {
        const parts = value.split(",").map(part => part.trim()).filter(part => part !== "");
        if (parts.length !== 2) {
            return null;
        }
        const [x, y] = parts;
        if (isNaN(x) || isNaN(y)) {
            return null;
        }
        return [x, y];
    }


    try {
        const bgFile = document.getElementById("TerryBgFile").value;
        Save("TerryBgFile", bgFile);
    } catch (error) {
        console.error("closeSettings: TerryBgFile", error);
    }

    try {
        const videoFile = document.getElementById("vbgfile").value;
        Save("vbgfile", videoFile);
    } catch (error) {
        console.error("closeSettings: vbgfile", error);
    }

    try {
        const bgType = document.getElementById("bgtype").value === "Video" ? "video" : "image";
        Save("bgtype", bgType);
    } catch (error) {
        console.error("closeSettings: bgtype", error);
    }

     try {
        const sysTheme = document.getElementById("systemTheme").value == "Light" ? "light" : "dark";
        Save("theme", sysTheme);
        theme = sysTheme;
        toggleThemes();
    } catch (error) {
        console.error("closeSettings: theme", error);
    }

    try {
        Save("TerryFontColor", document.getElementById("TerryFontColor").value);
    } catch (error) {
        console.error("closeSettings: TerryFontColor", error);
    }

    try {
        Save("TerryOutlColor", document.getElementById("TerryOutlColor").value);
    } catch (error) {
        console.error("closeSettings: TerryOutlColor", error);
    }

    try {

        if (document.getElementById("outputFontSize").value >= 8 && document.getElementById("outputFontSize").value <= 150) {
            Save("outputsize", document.getElementById("outputFontSize").value);
        }
    } catch (error) {
        console.error("closeSettings: outputFontSize", error);
    }

    try {
        if (document.getElementById("clockFontSize").value >= 8 && document.getElementById("clockFontSize").value <= 300) {
            Save("clocksize", document.getElementById("clockFontSize").value);
        }
    } catch (error) {
        console.error("closeSettings: clockFontSize", error);
    }

    try {
        Save("TerryFont", document.getElementById("TerryFont").value);
    } catch (error) {
        console.error("closeSettings: TerryFont", error);
    }

    try {
        Save("TerryIconPack", document.getElementById("iconPack").value);
    } catch (error) {
        console.error("closeSettings: iconPack", error);
    }

    try {
        Save("pages", document.getElementById("appDockPages").value);
    } catch (error) {
        console.error("closeSettings: appDockPages", error);
    }

    try {
        Save("simpledock", JSON.stringify(document.getElementById("dockMode").value !== "Fluid"));
    } catch (error) {
        console.error("closeSettings: dockMode", error);
    }

    try {
        const dockPositionValue = document.getElementById("dockPosition").value;
        let dockPosition = "2";
        if (dockPositionValue === "Left") dockPosition = "1";
        if (dockPositionValue === "Right") dockPosition = "3";
        Save("dockpos", dockPosition);
    } catch (error) {
        console.error("closeSettings: dockPosition", error);
    }

    try {
        Save("lockeddock", JSON.stringify(document.getElementById("lockDock").value === "Locked"));
    } catch (error) {
        console.error("closeSettings: lockDock", error);
    }

    try {
        Save("switchdock", JSON.stringify(document.getElementById("switchDock").value === "Switch"));
    } catch (error) {
        console.error("closeSettings: switchDock", error);
    }

    try {
        Save("complexDock", JSON.stringify(document.getElementById("complexDock").value === "On"));
    } catch (error) {
        console.error("closeSettings: complexDock", error);
    }

    try {
        Save("complexDock", JSON.stringify(document.getElementById("complexDock").value === "On"));
    } catch (error) {
        console.error("closeSettings: complexDock", error);
    }

    try {
        const desiredColumns = document.getElementById("complexDockColumns").value;
        if (desiredColumns <= 0 || desiredColumns > 15) {
            console.warn("closeSettings: complexDockColumns value out of range, must be between 1 and 15");
        } else {
            complexDockLayout.columns = desiredColumns;
            Save("complexDockLayout", JSON.stringify(complexDockLayout));
            if (complexDockPage.length < complexDockLayout.columns * complexDockLayout.rows) {
                    for (i = complexDockPage.length; i < complexDockLayout.columns * complexDockLayout.rows; i++) {
                        complexDockPage.push("None");
                        complexDockSites.push("");
                    }
                    localStorage.setItem(SaveKey+"complexDockPage", JSON.stringify(complexDockPage));
                }
        }

    } catch (error) {
        console.error("closeSettings: complexDockColumns", error);
    }

    try {
        const desiredRows = document.getElementById("complexDockRows").value;
        if (desiredRows <= 0 || desiredRows > 15) {
            console.warn("closeSettings: complexDockRows value out of range, must be between 1 and 15");
        } else {
            complexDockLayout.rows = desiredRows;
            Save("complexDockLayout", JSON.stringify(complexDockLayout));
            if (complexDockPage.length < complexDockLayout.columns * complexDockLayout.rows) {
                    for (i = complexDockPage.length; i < complexDockLayout.columns * complexDockLayout.rows; i++) {
                        complexDockPage.push("None");
                        complexDockSites.push("");
                    }
                    localStorage.setItem(SaveKey+"complexDockPage", JSON.stringify(complexDockPage));
                }

        }

    } catch (error) {
        console.error("closeSettings: complexDockRows", error);
    }

    try {
        Save("showappdock", JSON.stringify(document.getElementById("showDock").value === "On"));
    } catch (error) {
        console.error("closeSettings: showDock", error);
    }

    try {
        const inPos = parsePosition(document.getElementById("inputPosition").value);
        if (inPos) Save("inpos", JSON.stringify(inPos));
    } catch (error) {
        console.error("closeSettings: inputPosition", error);
    }

    try {
        const outPos = parsePosition(document.getElementById("outputPosition").value);
        if (outPos) Save("outpos", JSON.stringify(outPos));
    } catch (error) {
        console.error("closeSettings: outputPosition", error);
    }

    try {
        const clockPos = parsePosition(document.getElementById("clockPosition").value);
        if (clockPos) Save("clockpos", JSON.stringify(clockPos));
    } catch (error) {
        console.error("closeSettings: clockPosition", error);
    }

    try {
        const complexDockPos = parsePosition(document.getElementById("complexDockPos").value);
        complexDockPos[1] = (100 - complexDockPos[1]);
        if (complexDockPos) Save("complexDockPos", JSON.stringify(complexDockPos));
    } catch (error) {
        console.error("closeSettings: complexDockPos", error);
    }

    try {
        Save("docktopoffset", document.getElementById("dockYOffset").value);
    } catch (error) {
        console.error("closeSettings: dockYOffset", error);
    }

    try {
        Save("showseconds", JSON.stringify(document.getElementById("showSeconds").value === "On"));
    } catch (error) {
        console.error("closeSettings: showSeconds", error);
    }

    try {
        Save("ClockFormat", JSON.stringify(document.getElementById("clockHourFormat").value !== "12"));
    } catch (error) {
        console.error("closeSettings: clockHourFormat", error);
    }

    try {
        Save("showclock", JSON.stringify(document.getElementById("showClock").value === "On"));
    } catch (error) {
        console.error("closeSettings: showClock", error);
    }

    try {
        Save("showTerry", JSON.stringify(document.getElementById("showTerry").value === "On"));
    } catch (error) {
        console.error("closeSettings: showTerry", error);
    }

    try {

        if (document.getElementById("maxDenominator").value > 0 && document.getElementById("maxDenominator").value <= 1000) {
            Save("MaxDenominator", document.getElementById("maxDenominator").value);
        }
    } catch (error) {
        console.error("closeSettings: maxDenominator", error);
    }

    try {
        Save("calcmode", JSON.stringify(document.getElementById("calculatorAngleMode").value === "Degrees"));
    } catch (error) {
        console.error("closeSettings: calculatorAngleMode", error);
    }

    try {
        if (document.getElementById("textSpeed").value > 0 && document.getElementById("textSpeed").value<= 100) {
            Save("textspeed", document.getElementById("textSpeed").value);
        }
    } catch (error) {
        console.error("closeSettings: textSpeed", error);
    }

    checksaved();

}


function closeSettings() {

    
    document.getElementById("settingsMenu").style.display = "none";
    persistSettings();
}


function toggleThemes() {




    try {
        toggleSettingThemes();
    } catch {

    }

    document.getElementById("settingsButton").style.filter = (theme == "light") ? "invert(0%)" : "invert(100%)";
    document.getElementById("settingsButton2").style.filter = (theme == "light") ? "invert(0%)" : "invert(100%)";
    document.getElementById("menuButton").style.filter = (theme == "light") ? "invert(0%)" : "invert(100%)";
    document.getElementById("menuButton2").style.filter = (theme == "light") ? "invert(0%)" : "invert(100%)";

    
}

function toggleSettingThemes() {
    settingsX = document.getElementsByClassName("systemX");
    settingsFS = document.getElementsByClassName("systemFS");
    systemMenus = document.getElementsByClassName("systemMenu");
    systemTitles = document.getElementsByClassName("systemTitle");



    if (theme == "light") {
        settingBars = document.getElementsByClassName("settingBar");
        for (let i = 0; i < settingBars.length; i++) {
            settingBars[i].style.backgroundColor = "#F0F0F0";
        }
        for (let i = 0; i < systemMenus.length; i++) {
            systemMenus[i].style.color = "#171717";
            systemMenus[i].style.backgroundColor = "#EEEEEE";
        }
        for (let i = 0; i < systemTitles.length; i++) {
            systemTitles[i].style.backgroundColor = "#F0F0F0";
        }
        for (let i = 0; i < settingsX.length; i++) {
            settingsX[i].style.filter = "invert(0%)";
        }
        for (let i = 0; i < settingsFS.length; i++) {
            settingsFS[i].style.filter = "invert(0%)";
        }
    } else {
        settingBars = document.getElementsByClassName("settingBar");
        for (let i = 0; i < settingBars.length; i++) {
            settingBars[i].style.backgroundColor = "#272727";
        }
        for (let i = 0; i < systemMenus.length; i++) {
            systemMenus[i].style.color = "#EEEEEE";
            systemMenus[i].style.backgroundColor = "#2F2F2F";
        }
        for (let i = 0; i < systemTitles.length; i++) {
            systemTitles[i].style.backgroundColor = "#272727";
        }
        for (let i = 0; i < settingsX.length; i++) {
            settingsX[i].style.filter = "invert(100%)";
        }
        for (let i = 0; i < settingsFS.length; i++) {
            settingsFS[i].style.filter = "invert(100%)";
        }

    }
}



function openAppsMenu() {


    let realAppsMenu = document.getElementById("realAppsMenu");
    realAppsMenu.replaceChildren();

    decideZ("appsMenu");
    if (document.getElementById("appsMenu").style.display == "grid") {
        document.getElementById("appsMenu").style.display = "none";
    } else {
        document.getElementById("appsMenu").style.display = "grid";
    }


    const paddingOffset = 20;

    let appWidth = document.getElementById("appsMenu").offsetWidth - paddingOffset*2;


    appColumns = Math.floor(appWidth / 130);
    //appsSidePadding = appWidth % 130;
    appRows = Math.ceil(supapps.length / appColumns);
    let appTemplateRows = "130px 40px ".repeat(appRows);
    let appTemplateColumns = "130px ".repeat(appColumns);
    
    //console.log("App Row Template: "+appTemplateRows);
    realAppsMenu.style.gridTemplateRows = appTemplateRows;
    realAppsMenu.style.gridTemplateColumns = appTemplateColumns;

    //realAppsMenu.style.paddingLeft = (paddingOffset + appsSidePadding/2) + "px";
    //realAppsMenu.style.paddingRight = (paddingOffset + appsSidePadding/2) + "px";
    realAppsMenu.style.rowGap = "15px";

    //supapps

    tempApps = Array.from(supapps);
    tempApps.sort();


    appCount = 0;
    textCount = 0
    while (textCount < supapps.length) {
        
        for (let i = 0; i < appColumns; i++) {

            

            let id = supapps.indexOf(tempApps[appCount]);
            let appId = "appListed"+id;

            const newApp = document.createElement("img");

            newApp.id = appId;
            newApp.src = iconpack+"/"+supapps[id]+".png";
            const siteUrl = supsites[id];
            newApp.onclick = function() {
                if (siteUrl) openApp(siteUrl);
            };

            if (appCount >= supapps.length) {
                    newApp.src = "Images/None.png";
  
            } else {
                newApp.style.cursor = "pointer";
            }
            newApp.width = 100;
            newApp.height = 100;
            newApp.style.justifySelf = "center";
            newApp.style.padding = "15px";
            

            realAppsMenu.appendChild(newApp);
            appCount++;

        }

            for (let i = 0; i < appColumns; i++) {
            let id = supapps.indexOf(tempApps[textCount]);
            const newTitle = document.createElement("p");

            titleText = supapps[id][0].toUpperCase();

            if (supapps[id].length > 1) titleText += supapps[id].slice(1);

            newTitle.innerHTML = titleText;
            const titleSite = supsites[id];
            newTitle.onclick = function() {
                if (titleSite) openApp(titleSite);
            };
            newTitle.style.margin = 0;
            newTitle.style.cursor = "pointer";

            textCount++;

            realAppsMenu.appendChild(newTitle);

        }
        



    }

    
} 




function openSettings() {
    decideZ("settingsMenu");

    toggleSettingThemes()



    if (document.getElementById("settingsMenu").style.display == "grid") {
        document.getElementById("settingsMenu").style.display = "none";
        return;
    }

    document.getElementById("TerryBgFile").value = Load("TerryBgFile");
    document.getElementById("vbgfile").value = Load("vbgfile");

    switch (Load("bgtype")) {
        case "image":
            document.getElementById("bgtype").value = "Static";
            break;
        case "video":
            document.getElementById("bgtype").value = "Video";
            break;
    }

    document.getElementById("systemTheme").value = Load("theme")  == "light" ? "Light" : "Dark";

    document.getElementById("TerryFontColor").value = Load("TerryFontColor");
    document.getElementById("TerryOutlColor").value = Load("TerryOutlColor");
    document.getElementById("outputFontSize").value = Load("outputsize");
    document.getElementById("clockFontSize").value = Load("clocksize");
    document.getElementById("TerryFont").value = Load("TerryFont");

    document.getElementById("iconPack").value = Load("TerryIconPack");
    document.getElementById("appDockPages").value = Load("pages") || "1";
    document.getElementById("dockMode").value = Load("simpledock") === "false" ? "Fluid" : "Simple";

    const dockPosition = Load("dockpos");
    if (dockPosition === "1") {
        document.getElementById("dockPosition").value = "Left";
    } else if (dockPosition === "3") {
        document.getElementById("dockPosition").value = "Right";
    } else {
        document.getElementById("dockPosition").value = "Bottom";
    }

    document.getElementById("lockDock").value = Load("lockeddock") === "true" ? "Locked" : "Fluid";
    document.getElementById("switchDock").value = Load("switchdock") === "true" ? "Switch" : "Normal";
    document.getElementById("complexDock").value = Load("complexDock") === "true" ? "On" : "Off";
    document.getElementById("complexDockColumns").value = Load("complexDockLayout") ? JSON.parse(Load("complexDockLayout")).columns : "3";
    document.getElementById("complexDockRows").value = Load("complexDockLayout") ? JSON.parse(Load("complexDockLayout")).rows : "3";
    document.getElementById("showDock").value = Load("showappdock") === "false" ? "Off" : "On";

    document.getElementById("inputPosition").value = Load("inpos") ? JSON.parse(Load("inpos")).join(",") : "";
    document.getElementById("outputPosition").value = Load("outpos") ? JSON.parse(Load("outpos")).join(",") : "";
    document.getElementById("clockPosition").value = Load("clockpos") ? JSON.parse(Load("clockpos")).join(",") : "";
    compPos = JSON.parse(Load("complexDockPos"));
    compPos[1] = 100 - compPos[1];
    document.getElementById("complexDockPos").value = Load("complexDockPos") ? compPos.join(",") : "";
    document.getElementById("dockYOffset").value = Load("docktopoffset") || "";

    document.getElementById("showSeconds").value = Load("showseconds") === "false" ? "Off" : "On";
    document.getElementById("clockHourFormat").value = Load("ClockFormat") === "false" ? "12" : "24";
    document.getElementById("showClock").value = Load("showclock") === "false" ? "Off" : "On";
    document.getElementById("showTerry").value = Load("showTerry") === "false" ? "Off" : "On";

    document.getElementById("maxDenominator").value = Load("MaxDenominator") || "";
    document.getElementById("calculatorAngleMode").value = Load("calcmode") === "true" ? "Degrees" : "Radians";
    document.getElementById("textSpeed").value = Load("textspeed") || "";

    //console.log("iefbiabfvid")
    document.getElementById("settingsMenu").style.display = "grid";
}

function syncResizedSettings() {

    if (appWindowState.fullscreened[0]) {
        document.getElementById("settingsMenu").style.resize = "none";
    } else {
        document.getElementById("settingsMenu").style.resize = "both";
    }

    if (document.getElementById("settingsMenu").style.display == "none") return;


    const settingsMenuWidth = document.getElementById("settingsMenu").offsetWidth;
    const settingsMenuHeight = document.getElementById("settingsMenu").offsetHeight;
    

    document.getElementById("settingsTitle").style.width = settingsMenuWidth + "px";
    document.getElementById("realSettingsMenu").style.height = (settingsMenuHeight-120) + "px";
    document.getElementById("realSettingsMenu").style.width = settingsMenuWidth + "px";

    for (let i = 0; i < document.getElementsByClassName("settingBar").length; i++) {

        newLeft = (settingsMenuWidth- 540) / 2;

        if (newLeft < 0) {
            newLeft = 0;
        }


        document.getElementsByClassName("settingBar")[i].style.left = newLeft + "px";

    }
}

function syncResizedAppsMenu() {

    const appsMenu = document.getElementById("appsMenu");
    const realAppsMenu = document.getElementById("realAppsMenu");




    if (appsMenu.offsetWidth == appWindowState.sizes[1][0] && appsMenu.offsetHeight == appWindowState.sizes[1][1]) {
        return;
    } else {
        if (!appWindowState.fullscreened[1]) appWindowState.sizes[1] = [appsMenu.offsetWidth, appsMenu.offsetHeight];
    }

    if (appWindowState.fullscreened[1] && document.getElementById("appsMenu").style.resize == "none") return;


    if (appWindowState.fullscreened[1]) {
        document.getElementById("appsMenu").style.resize = "none";
    } else {
        document.getElementById("appsMenu").style.resize = "both";
    }

    if (document.getElementById("appsMenu").style.display == "none") return;


    const appsMenuWidth = document.getElementById("appsMenu").offsetWidth;
    const appsMenuHeight = document.getElementById("appsMenu").offsetHeight;
    

    document.getElementById("appsTitle").style.width = appsMenuWidth + "px";
    document.getElementById("realAppsMenu").style.height = (appsMenuHeight-120) + "px";
    document.getElementById("realAppsMenu").style.width = appsMenuWidth + "px";

    

    realAppsMenu.replaceChildren();


    const paddingOffset = 20;

    let appWidth = document.getElementById("appsMenu").offsetWidth - paddingOffset*2;




    appColumns = Math.floor(appWidth / 130);
    appRows = Math.ceil(supapps.length / appColumns);
    //console.log("App Rows: "+appRows);
    let appTemplateRows = "130px 40px ".repeat(appRows);
    let appTemplateColumns = "130px ".repeat(appColumns);

    realAppsMenu.style.gridTemplateRows = appTemplateRows;
    realAppsMenu.style.gridTemplateColumns = appTemplateColumns;

    //realAppsMenu.style.paddingLeft = (paddingOffset + appsSidePadding/2) + "px";
    //realAppsMenu.style.paddingRight = (paddingOffset + appsSidePadding/2) + "px";
    realAppsMenu.style.rowGap = "15px";

    //supapps

    tempApps = Array.from(supapps);
    tempApps.sort();


    appCount = 0;
    textCount = 0
    while (textCount < supapps.length) {
        
        for (let i = 0; i < appColumns; i++) {

            

            let id = supapps.indexOf(tempApps[appCount]);
            let appId = "appListed"+id;

            const newApp = document.createElement("img");

            newApp.id = appId;
            newApp.src = iconpack+"/"+supapps[id]+".png";
            const siteUrl = supsites[id];
            newApp.onclick = function() {
                if (siteUrl) openApp(siteUrl);
            };

            if (appCount >= supapps.length) {
                    newApp.src = "Images/None.png";
  
            } else {
                newApp.style.cursor = "pointer";
            }
            newApp.width = 100;
            newApp.height = 100;
            newApp.style.justifySelf = "center";
            newApp.style.padding = "15px";
            

            realAppsMenu.appendChild(newApp);
            appCount++;

        }

            for (let i = 0; i < appColumns; i++) {
            let id = supapps.indexOf(tempApps[textCount]);
            const newTitle = document.createElement("p");

            titleText = supapps[id][0].toUpperCase();

            if (supapps[id].length > 1) titleText += supapps[id].slice(1);

            newTitle.innerHTML = titleText;
            const titleSite = supsites[id];
            newTitle.onclick = function() {
                if (titleSite) openApp(titleSite);
            };
            newTitle.style.margin = 0;
            newTitle.style.cursor = "pointer";

            textCount++;

            realAppsMenu.appendChild(newTitle);

        }
        



    }

    

}

function syncResizedTerminal() {
    const terminalMenu = document.getElementById("terminalMenu");
    const realTerminalMenu = document.getElementById("realTerminalMenu");




    if (terminalMenu.offsetWidth == appWindowState.sizes[3][0] && terminalMenu.offsetHeight == appWindowState.sizes[3][1]) {
        return;
    } else {
        if (!appWindowState.fullscreened[3]) appWindowState.sizes[3] = [terminalMenu.offsetWidth, terminalMenu.offsetHeight];
    }

    Width = terminalMenu.offsetWidth;
    Height = terminalMenu.offsetHeight;


    realTerminalMenu.style.gridTemplateRows = (Height-120-50) + "px 50px";
    document.getElementById("terminalInput").style.width = Width+"px";
    document.getElementById("terminalOutput").style.height = (Height - 120 - 50) + "px";
    document.getElementById("terminalOutput").style.width = Width+"px";
    

}

syncResizedSettings();


function syncResized() {

    if (document.getElementById("settingsMenu").style.display == "grid") syncResizedSettings();
    if (document.getElementById("appsMenu").style.display == "grid") syncResizedAppsMenu();


    for (let i = 0; i < appWindowState.names.length; i++) {

        if (appWindowState.names[i] == "settingsMenu" || appWindowState.names[i] == "appsMenu") {
            continue;
        }
        if (document.getElementById(appWindowState.names[i]).style.display == "grid") {
            const MenuWidth = document.getElementById(appWindowState.names[i]).offsetWidth;
            const MenuHeight = document.getElementById(appWindowState.names[i]).offsetHeight;
    
            const appName = appWindowState.names[i].replace("Menu", "");
            const appTitle = appName[0].toUpperCase() + appName.slice(1);
        document.getElementById(appName+"Title").style.width = MenuWidth + "px";
        document.getElementById("real"+appTitle+"Menu").style.height = (MenuHeight-120) + "px";
        document.getElementById("real"+appTitle+"Menu").style.width = MenuWidth + "px";
        }
    }

    if (document.getElementById("terminalMenu").style.display == "grid") syncResizedTerminal();


}




setInterval(syncResized, 8);

checksaved();


function decideZ(id) {


    if (appWindowState.possibleWindows[(appWindowState.priorityWindows.indexOf(1))] == id) {
        return;
    }

    for (let i = 0; i < appWindowState.possibleWindows.length; i++) {
        if (appWindowState.possibleWindows[i] != id) {
            appWindowState.priorityWindows[i]++;
        } else {
            appWindowState.priorityWindows[i] = 1;
        }
        document.getElementById(appWindowState.possibleWindows[i]).style.zIndex = 100 - appWindowState.priorityWindows[i];
    }

}



function fullScreen(app) {

    const appElement = document.getElementById(app);
    let appID = 0;

    try {
        appID = appWindowState.names.indexOf(app);

    } catch (e) {

    }

    if (appWindowState.fullscreened[appID]) {
        appElement.style.width = appWindowState.sizes[appID][0] + "px";
        appElement.style.height = appWindowState.sizes[appID][1] + "px";
        appElement.style.top = appWindowState.positions[appID][0] + "px";
        appElement.style.left = appWindowState.positions[appID][1] + "px";
        appWindowState.fullscreened[appID] = false;

    } else {
        appWindowState.sizes[appID] = [appElement.offsetWidth, appElement.offsetHeight];
        appWindowState.positions[appID] = [parseFloat(appElement.style.top), parseFloat(appElement.style.left)];
        appElement.style.width = "100%";
        appElement.style.height = "100%"
        appElement.style.top = "50%";
        appElement.style.left = "50%";
        appWindowState.fullscreened[appID] = true;
    }


}

function checkFullScreened() {
    for (let i = 0; i < appWindowState.names.length; i++) {
        if (appWindowState.fullscreened[i]) {
            const appElement = document.getElementById(appWindowState.names[i]);
        appElement.style.width = "100%";
        appElement.style.height = "100%"
        appElement.style.top = "50%";
        appElement.style.left = "50%";
        }
    }
}

setInterval(checkFullScreened, 8);

function closeWindow(id) {

    if (id == "settingsMenu") {
        closeSettings();
    } else document.getElementById(id).style.display = "none";

}

function openSystemApp(appID) {
    if (appID == "settingsMenu") {
        openSettings();
    } else if (appID == "appsMenu") {
        openAppsMenu();
    } else {
        document.getElementById(appID).style.display = "grid";
    }
}

//openApp()

function checkDeviceBattery() {

    let batteryChargings = document.getElementsByClassName("batteryCharging");

    let charging = false;

    let wifiIcons = document.getElementsByClassName("wifiIcon");

    if (navigator.onLine) {
        //console.log('You are online!');
        for (let i = 0; i < wifiIcons.length; i++) {
            wifiIcons[i].src = "Images/Wifi.png";
        }
        wifiMessage = "Network Status: Connected to the internet."
    } else {
       // console.log('You are offline.');
        for (let i = 0; i < wifiIcons.length; i++) {
            wifiIcons[i].src = "Images/noWifi.png";
        }
        wifiMessage = "Network Status: Offline."
    }
    

    batteryCharts = document.getElementsByClassName("batteryChart");

    for (let i = 0; i < batteryChargings.length; i++) {
        batteryChargings[i].style.height = batteryCharts[i].offsetHeight + "px";
        batteryChargings[i].style.width = batteryChargings[i].offsetHeight + "px";
    }

    if ('getBattery' in navigator) {


        batteryLevel = 100;

        navigator.getBattery().then((battery) => {
            
            const percentage = battery.level * 100;
            batteryLevel = percentage;
            if (currentBatteryLevel == 100) {
                currentBatteryLevel = percentage;
            }

            



            //console.log(`Last Recorded Battery level: ${currentBatteryLevel}%`);
            batteryCharts = document.getElementsByClassName("batteryChart");
            for (let i = 0; i < batteryCharts.length; i++) {
                 batteryCharts[i].style.width = percentage + "%";
            }
            batteryPercentages = document.getElementsByClassName("batteryPercentage");
            for (let i = 0; i < batteryPercentages.length; i++) {
                batteryPercentages[i].innerHTML = percentage.toFixed(0) + "%";
            }
        });

        navigator.getBattery().then(function(battery) {
            if (battery.charging) {
                
                batteryStartLostTime = Date.now();
            //console.log("The device is currently charging.");
            charging = true;
            //console.log(charging)


                if (batteryLevel != currentBatteryLevel && batteryCalibrating) {

                    if (batteryLevel - currentBatteryLevel > 1) firstCharge = false;


                    if (firstCharge) {
                        batteryStartGainedTime = Date.now();
                        currentBatteryLevel = batteryLevel;
                    }

                    if (batteryLevel - currentBatteryLevel > 0 && (Date.now() - batteryStartGainedTime) /1000 > 20 && !firstCharge ) {
                        batteryInfo.levelGained += batteryLevel - currentBatteryLevel;
                        batteryInfo.timeGained += (Date.now() - batteryStartGainedTime) /1000;
                        batteryStartGainedTime = Date.now();
                        currentBatteryLevel = batteryLevel;
                    }
                    firstCharge = false;
                } else if (batteryLevel != currentBatteryLevel) {
                    currentBatteryLevel = batteryLevel;
                }


            batteryCharts = document.getElementsByClassName("batteryChart");
            for (let i = 0; i < batteryCharts.length; i++) {
                 batteryCharts[i].style.backgroundColor = "#4BB543";
                 batteryChargings[i].style.display = "block";
            }
                /*if (theme == "light") {

                    for (let i = 0; i < batteryCharts.length; i++) {
                        batteryCharts[i].style.backgroundColor = "#AD43B5";
                    }
                }*/
            } else {

                batteryStartGainedTime = Date.now();

                if (batteryLevel != currentBatteryLevel && batteryCalibrating) {

                    console.log("should work")

                    if (currentBatteryLevel - batteryLevel > 1) firstDischarge = false;

                    if (firstDischarge) {
                        batteryStartLostTime = Date.now();
                        currentBatteryLevel = batteryLevel;
                    }

                    if (currentBatteryLevel - batteryLevel > 0 && (Date.now() - batteryStartLostTime) /1000 > 20 && !firstDischarge) {
                        batteryInfo.levelLost += currentBatteryLevel - batteryLevel;
                        batteryInfo.timeLost += (Date.now() -batteryStartLostTime) /1000;
                        batteryStartLostTime = Date.now();
                        currentBatteryLevel = batteryLevel;
                    }
                    firstDischarge = false;
                } else if (batteryLevel != currentBatteryLevel) {
                    currentBatteryLevel = batteryLevel;
                }



            //console.log("The device is not charging.");
            for (let i = 0; i < batteryCharts.length; i++) {
                 batteryCharts[i].style.backgroundColor = "#ffffff";
                 batteryChargings[i].style.display = "none";
            }
            }
            
            batteryMessage = "Run >calibratebat to calibrate.";
            if (batteryInfo.levelGained > 0 && batteryInfo.timeGained > 0 && charging) {
                //console.log("Battery charge estimate time:" + ((100-currentBatteryLevel) * batteryInfo.timeGained / batteryInfo.levelGained));
                batteryHours = Math.floor(((100-currentBatteryLevel) * batteryInfo.timeGained / batteryInfo.levelGained) / 3600);
                batteryMinutes = Math.floor((((100-currentBatteryLevel) * batteryInfo.timeGained / batteryInfo.levelGained) % 3600) / 60);
                batteryMessage = "Full charge estimate time: "+batteryHours+"h "+batteryMinutes+"m<br>Estimated accuracy: "+Math.ceil((Math.atan(batteryInfo.levelGained/5) / (Math.PI/2))*100)+"%"
                if (currentBatteryLevel == 100) batteryMessage = "Fully charged."
            }
            
            //console.log(charging)
            if (batteryInfo.levelLost > 0 && batteryInfo.timeLost > 0 && !charging) {
                //console.log("Battery life estimate time:" + ((currentBatteryLevel) * batteryInfo.timeLost / batteryInfo.levelLost));
                batteryHours = Math.floor(((currentBatteryLevel) * batteryInfo.timeLost / batteryInfo.levelLost) / 3600);
                batteryMinutes = Math.floor((((currentBatteryLevel) * batteryInfo.timeLost / batteryInfo.levelLost) % 3600) / 60);
                maxHours = Math.floor(((100) * batteryInfo.timeLost / batteryInfo.levelLost) / 3600);
                maxMinutes = Math.floor((((100) * batteryInfo.timeLost / batteryInfo.levelLost) % 3600) / 60);
                batteryMessage = "Estimated time left: "+batteryHours+"h "+batteryMinutes+"m"+"<br>Max: "+maxHours+"h "+maxMinutes+"m<br>Estimated accuracy: "+Math.ceil((Math.atan(batteryInfo.levelLost/5) / (Math.PI/2))*100)+"%";
                 
            }
            //console.log(batteryMessage);
            

        });




        



    } else {
        batteryMessage = "Battery stats not supported on this browser or device.";
        batteryCharts = document.getElementsByClassName("batteryChart");
        for (let i = 0; i < batteryCharts.length; i++) {
            batteryCharts[i].style.width = "0%";
        }
        batteryPercentages = document.getElementsByClassName("batteryPercentage");
        for (let i = 0; i < batteryPercentages.length; i++) {
            batteryPercentages[i].innerHTML = "N/A";
        }
    }

    localStorage.setItem(SaveKey+"levelGained", batteryInfo.levelGained);
    localStorage.setItem(SaveKey+"timeGained", batteryInfo.timeGained);
    localStorage.setItem(SaveKey+"levelLost", batteryInfo.levelLost);
    localStorage.setItem(SaveKey+"timeLost", batteryInfo.timeLost);

    /*if (theme == "light") {
                batteryIndicators = document.getElementsByClassName("batteryIndicator");
                for (let i = 0; i < batteryIndicators.length; i++) {
                    batteryIndicators[i].style.filter = "invert(100%)";
                }

                batteryChargings = document.getElementsByClassName("batteryCharging");

            } else {
                batteryIndicators = document.getElementsByClassName("batteryIndicator");
                for (let i = 0; i < batteryIndicators.length; i++) {
                    batteryIndicators[i].style.filter = "invert(0%)";
                }
            }*/

}








function showBatteryTab(tab) {
    batteryTab = document.getElementById("batteryTab"+tab);
    batteryMessages = document.getElementsByClassName("batteryMessages");
    batteryTab.style.display = "flex";
    for (let i = 0; i < batteryMessages.length; i++) {
            batteryMessages[i].innerHTML = batteryMessage;
    }
    //console.log(batteryMessage)
}

function showWifiTab(tab) {
    batteryTab = document.getElementById("batteryTab"+tab);
    batteryMessages = document.getElementsByClassName("batteryMessages");
    batteryTab.style.display = "flex";
    for (let i = 0; i < batteryMessages.length; i++) {
            batteryMessages[i].innerHTML = wifiMessage;
    }
    //console.log(batteryMessage)
}


function hideBatteryTab(tab) {
    batteryTab = document.getElementById("batteryTab"+tab);
    batteryTab.style.display = "none";
}

checkDeviceBattery();  

setInterval(checkDeviceBattery, 1000);


const settingInputs = document.getElementsByClassName("settingUserInput");
for (let i = 0; i < settingInputs.length; i++) {
    settingInputs[i].addEventListener('blur', () => {
        console.log('Element is unfocused!');
        persistSettings();
    });
}

const smallSettingInputs = document.getElementsByClassName("smallSettingUserInput");
for (let i = 0; i < smallSettingInputs.length; i++) {
    smallSettingInputs[i].addEventListener('change', () => {
        console.log('Element is unfocused!');
        persistSettings();
    });
}

//sleep(2000).then(replacedock(false));

