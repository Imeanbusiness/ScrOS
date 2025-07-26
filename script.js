'ops'
'chatmode'
greets = ["hi", "hello", "hey", "greetings"]
openapps = ["open","open up"]
chatmode = false;
apps = ["google","spotify","youtube","facebook","instagram","x","tiktok","reddit","github","netflix","gmail","office", "linkedin"]

supapps = ["gmail","spotify","youtube","instagram","facebook","reddit","x", "amazon", "office", "weather", "linkedin","netflix","github", "wikipedia","twitch"]
supsites = ["https://www.gmail.com", "https://open.spotify.com/","https://www.youtube.com/","https://www.instagram.com/","https://www.facebook.com/","https://www.reddit.com/","https://X.com/", "https://www.amazon.com/", "https://www.office.com/", "https://weather.com/", "https://www.linkedin.com", "https://www.netflix.com/", "https://github.com/", "https://www.wikipedia.org/", "https://www.twitch.tv/"]

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
orgians = ""
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
learningstate = false;
resettypecount = 0
feelings = "none"
//learn
//settings
async function checksaved() {

        try {
            saved = localStorage.getItem(SaveKey+"update1.1.2");
            if (saved=="lol") {
                MaxDenominator = localStorage.getItem(SaveKey+"MaxDenominator");
                calcmode = JSON.parse(localStorage.getItem(SaveKey+"calcmode"));
            } else {
                localStorage.setItem(SaveKey+"update1.1.2","lol")
                localStorage.setItem(SaveKey+"MaxDenominator", MaxDenominator);
                localStorage.setItem(SaveKey+"calcmode", JSON.stringify(calcmode));
                 alert("Scr-OS has been updated to version 1.1.1.")
            }
        } catch {
                localStorage.setItem(SaveKey+"update1.1.2","lol")
                localStorage.setItem(SaveKey+"MaxDenominator", MaxDenominator);
                localStorage.setItem(SaveKey+"calcmode", JSON.stringify(calcmode));
                alert("Scr-OS has been updated to version 1.1.1.")
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
            alert("Scr-OS has been updated to version 1.1.0.")
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
            alert("Scr-OS has been updated to version 1.1.0.")
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
            localStorage.setItem(SaveKey+"TerryBgFile", "bg3.jpg")
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
            localStorage.setItem(SaveKey+"TerryFont", "Nunito")
            localStorage.setItem(SaveKey+"TerryIconPack", "AppIcons")
            flclock = true;
            console.log(saved)
        }

    } catch {
        localStorage.setItem(SaveKey+"savedd","lol")
        localStorage.setItem(SaveKey+"TerryBgFile", "bg3.jpg")
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
        localStorage.setItem(SaveKey+"TerryFont", "Nunito")
        localStorage.setItem(SaveKey+"TerryIconPack", "AppIcons")
        flclock = true;
        console.log(saved)

    }
    for (let i = 0; i < 10; i++) {
                
                
                itemd = apppage1[i];
                if (itemd == "") {
                    itemd ="none"
                }
                
                console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                console.log(itemd)
                console.log(iconpack+"/"+itemd+".png")


                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "scros.html";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";

              
            }
    for (let i = 0; i < 10; i++) {
                await sleep(16.666666666666668);
                
                itemd = apppage1[i];
                if (itemd == "") {
                    itemd ="none"
                }
                
                console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                console.log(itemd)
                console.log(iconpack+"/"+itemd+".png")

                if (itemd == "None") {
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "scros.html";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = appsites1[i];
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
              
            }
}

window.onload = checksaved()

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
                console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                console.log(itemd)
                console.log(iconpack+"/"+itemd+".png")

                if (itemd == "None") {
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "scros.html";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = appsites1[i];
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
                console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                console.log(itemd)
                console.log(iconpack+"/"+itemd+".png")

                

                if (itemd == "None") {
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "scros.html";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = appsites2[i];
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

                console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                console.log(itemd)
                console.log(iconpack+"/"+itemd+".png")

                if (itemd == "None") {
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "scros.html";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = appsites1[i];
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
                console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                console.log(itemd)
                console.log(iconpack+"/"+itemd+".png")

                

                if (itemd == "None") {
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "scros.html";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
                    document.getElementById("dockclick"+(i+1)).href = appsites2[i];
                    document.getElementById("docktext"+(i+1)).innerHTML = itemd;
                }
              
            }

        }
    }
}





async function replywith(x) {
    
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
                window.open(sites[jaz])
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
            window.open("https://www.google.com/search?q="+sit)
        });
        haha = true
    } else if (repl.includes(">ts ")) {
        que = repl.replace("ts ", "")
        haha = true
        terrylearn(que)

    }   
    else if (repl.includes(">help")) {
        alert(`Check the documentation for a list of commands and features. It is called README.md and is in the root directory of Scr-OS.`);
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
    
    } else if (repl.includes(">ops ")) {
        
        sit = repl.replace(">ops ","")
        replywith("Yes, opening now.")
        sleep(150).then(() => {
            window.open("https://"+sit)
        });
        haha = true
    } else if (repl.includes(">gh")) {
        replywith("Opening my github.")
        window.open("https://github.com/Imeanbusiness/TerryBot2.0")
        haha = true
    } else if (repl.includes(">status")) {
        try {
            replywith("Systems: Normal. Version: 1.1.2 (Calc improvements)")
        } catch {
            replywith("Systems: Abnormal. Version: 1.1.2 (Calc improvements) Restart recommended.")
        }
        haha = true
        
    } else if (repl.includes(">ms")) {
        sit = repl.replace(">ms ","")
        replywith("Searching for your query on Spotify.")
        sleep(150).then(() => {
            window.open("https://open.spotify.com/search/"+sit)
        });
        haha = true

    }  else if (repl.includes(">dmode")) {
        console.log("dmding")
        
        if (dmode == "search") {
            dmode = "chat"
        } else {
            dmode = "search"
        }
        console.log(dmode)

        replywith("Switched default mode to "+dmode+" mode.")
        localStorage.setItem(SaveKey+"defaultmode", dmode)
        haha = true;
    } else if (repl.includes(">pgs")) {
        try {
        
            pages = repl.replace(">pgs ","")
        
            pages = pages/1
            
            pages = Math.floor(pages)
            console.log(pages)
            if (pages > 2) {
                pages = 2
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
            window.open("https://www.youtube.com/results?search_query="+sit)
        });
        haha = true

    } else if (repl.includes(">calc ")) {
        cuc = repl.replace(">calc ", "")
        
        sleep(300).then(() => {
             try {
                
                listoffunct = ["sin", "cos", "tan", "asin", "acos", "atan", "sinh", "cosh", "tanh", "log", "ln", "exp", "sqrt", "abs", "round", "ceil", "floor", "max", "min", "pi", "e"];
                console.log("Evaluating: " + cuc);

                for (let i = 0; i < listoffunct.length; i++) {
                    let f = listoffunct[i];
                    if (cuc.includes(f)) {
                        console.log("Replacing: " + f);
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
                console.log("Evaluating: " + cuc);
                
                

                ans = round10(eval(cuc), -8);
                
                console.log("Answer: " + ans);
                found = false;
                for (let i = 2; i < MaxDenominator; i++) {
                    if (ans%1 == 0) {
                                    break
                    }
                    for (let j = 1; j < i; j++) {
                        comp = round10(j/i, -8);    
                        console.log(ans%comp)
                        if (ans%comp == 0) {
                            
                            console.log(comp)
                  
                                console.log("Found: " + j + "/" + i);

                                j = j*Math.floor(ans/comp);


                                console.log ("Actually found: " + j + "/" + i);

                                ans = j + "/" + i;
                                console.log(j%i)
    

    
    
    
                    
    
                                found = true;
                                break;
                                




                        
                        }

                    }
                    if (found) {
                        break
                    }


                }
                console.log("Result: " + ans);
                replywith("Result: " + ans);
            } catch {
                console.log("Error: Invalid expression");
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
                document.getElementById("dockclick"+item).href = "scros.html";
                document.getElementById("docktext"+item).innerHTML = "";
            } else if (curpage == 2) {
                returned = apppage2[item-1]
                apppage2[item-1] = ""
                document.getElementById("dockpic"+item).src = "Images/None.png";
                document.getElementById("dockclick"+item).href = "scros.html";
                document.getElementById("docktext"+item).innerHTML = "";
            }
            localStorage.setItem(SaveKey+"apppage1", JSON.stringify(apppage1))
            localStorage.setItem(SaveKey+"apppage2", JSON.stringify(apppage2))
            localStorage.setItem(SaveKey+"appsites1", JSON.stringify(appsites1))
            localStorage.setItem(SaveKey+"appsites2", JSON.stringify(appsites2))

            replywith("Removed "+returned+" from the dock.")
        } catch {
            replywith("Error: Not a valid value. Please enter a number between 1 and 10.")
            return;
        }
        haha = true

    } else if (repl.includes(">replace")) {
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
            console.log(item)
                //item = repl.replace(" ", "")
                console.log(supapps)
                console.log(item)
                item = item.slice(1)
                
                if (supapps.includes(item)) {
                    i =0
                    appti = 0;
                    
                    
                    
                    for (appti = 0; appti < supapps.length-1; appti++) {
                        appchk = supapps[appti]
                        console.log(appti)
                        if (appchk == item) {
                            console.log("phil has no friends")
                            break;
                        }
                    }
                    
                    item = item.replace(item[0], item[0].toUpperCase());
              
                    console.log(appti)

                    if (curpage == 1) {
                        returned = apppage1[itemd-1]
                        apppage1[itemd-1] = item[1]
                        document.getElementById("dockpic"+itemd).src = iconpack+"/"+item+".png";
                        document.getElementById("dockclick"+itemd).href = supsites[appti];
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
                        document.getElementById("dockclick"+itemd).href = supsites[appti];
                        document.getElementById("docktext"+itemd).innerHTML = item;
                        apppage2[itemd-1] = item;
                        appsites2[itemd-1] = supsites[appti];
                        localStorage.setItem(SaveKey+"apppage1", JSON.stringify(apppage1))
                        localStorage.setItem(SaveKey+"apppage2", JSON.stringify(apppage2))
                        localStorage.setItem(SaveKey+"appsites1", JSON.stringify(appsites1))
                        localStorage.setItem(SaveKey+"appsites2", JSON.stringify(appsites2))
                    }
                    replywith("Replaced slot "+itemd+" with "+item+" on page "+curpage+".")
                } else if (item == "0") {
                    if (curpage == 1) {
                        returned = apppage1[itemd-1]
                        apppage1[itemd-1] = ""
                        document.getElementById("dockpic"+itemd).src = "Images/None.png";
                        document.getElementById("dockclick"+itemd).href = supsites[appti];
                        document.getElementById("docktext"+itemd).innerHTML = "";
                        apppage1[itemd-1] = item;
                        appsites1[itemd-1] = supsites[appti];
                        localStorage.setItem(SaveKey+"apppage1", JSON.stringify(apppage1))
                        localStorage.setItem(SaveKey+"apppage2", JSON.stringify(apppage2))
                        localStorage.setItem(SaveKey+"appsites1", JSON.stringify(appsites1))
                        localStorage.setItem(SaveKey+"appsites2", JSON.stringify(appsites2))
                    } else if (curpage == 2) {
                        returned = apppage2[itemd-1]
                        apppage2[itemd-1] = ""
                        document.getElementById("dockpic"+itemd).src = "Images/None.png";
                        document.getElementById("dockclick"+itemd).href = supsites[appti];
                        document.getElementById("docktext"+itemd).innerHTML = "";
                        apppage2[itemd-1] = item;
                        appsites2[itemd-1] = supsites[appti];
                        localStorage.setItem(SaveKey+"apppage1", JSON.stringify(apppage1))
                        localStorage.setItem(SaveKey+"apppage2", JSON.stringify(apppage2))
                        localStorage.setItem(SaveKey+"appsites1", JSON.stringify(appsites1))
                        localStorage.setItem(SaveKey+"appsites2", JSON.stringify(appsites2))
                    }
                    replywith("Removed "+returned+" from the dock.")

                } else {
                    replywith("Error: Not a valid app. Please use '>replace (number) (appname)' or '>replace (number) 0' to remove the app.")
                    haha = true;
                }
                haha = true;
 
 
            } catch {
                replywith("Error: Invalid syntax. Please use '>replace (number) (appname)' or '>replace (number) 0' to remove the app.")
                haha = true;
            }


    } else if (repl.includes(">settings")) {
        alert(`Scr-OS Settings
----------------
Username: ${username}
Background: ${localStorage.getItem(SaveKey+"TerryBgFile")}
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
----------------`)
        haha = true
        responding = false;

    } else if (repl.includes(">compchk")) {
        console.log("Checking number");
        numb = repl.replace(">compchk ", "");
        console.log(numb);
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
                    console.log(i)
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
            console.log(anslist)
            var anslength = anslist.length;
            var prime = "Prime";
            if (anslength > 2) {
                prime ="Composite";
            }
            replywith("Factors: "+anslist+" Total factors: " + anslength+" Prime: " + prime);
        } catch {
            console.log("Error: Not a number");
            replywith("Error: Not a number");
            return;
        }
        haha = true
    } else if (repl.includes(">reset")) {
        resettypecount+=1;
        if (resettypecount < 2) {
            replywith("Are you sure? Run the commad one more time to reset.");
        } else {
            replywith ("Succesful.")
            localStorage.setItem(SaveKey+"savedd","lol")
            localStorage.setItem(SaveKey+"TerryBgFile", "BG.png")
            localStorage.setItem(SaveKey+"TerryUsername", "Guest")
            saved = localStorage.getItem(SaveKey+"savedd");
            localStorage.setitem(SaveKey+"TerryFontColor", "#000000")
            localStorage.setItem(SaveKey+"TerryQuestData", "who made you?")
            localStorage.setItem(SaveKey+"TerryAnsData", "My Creator, Imeanbusiness, of course!")
            learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
            learntdataquest = ["who made you?", "what are you?"]
            localStorage.setItem(SaveKey+"TerryQuestData", JSON.stringify(learntdataquest))
            localStorage.setItem(SaveKey+"TerryAnsData", JSON.stringify(learntdataans))
            localStorage.setItem(SaveKey+"ClockFormat", JSON.stringify(true))
            localStorage.setItem(SaveKey+"TerryFont", "Nunito")
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





            console.log(saved)


        }
        haha = true
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
        console.log(clr)
        document.body.style.webkitTextStroke = clr;
        localStorage.setItem(SaveKey+"TerryOutlColor", clr) 
        haha = true
        replywith("Success! Outline color changed to "+colorchange+".")
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
        console.log(fclock)
        haha = true
        
    } else if (repl.includes(">iconpack")) {
        iconpack = repl.replace(">iconpack ", "")
        for (let i = 0; i < 10; i++) {
                
                
                itemd = apppage1[i];
                if (itemd == "") {
                    itemd ="none"
                }
                
                console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                console.log(itemd)
                console.log(iconpack+"/"+itemd+".png")


                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "scros.html";
                    
                    document.getElementById("docktext"+(i+1)).innerHTML = "";

              
            }


            if (curpage == 1) {

            for (let i = 0; i < 10; i++) {
                itemd = apppage1[i];
                
                if (itemd == "") {
                    itemd ="none"
                }

                console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                console.log(itemd)
                console.log(iconpack+"/"+itemd+".png")

                if (itemd == "None") {
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "scros.html";
                    
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
                console.log(itemd[0].toUpperCase())
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                console.log(itemd)
                console.log(iconpack+"/"+itemd+".png")

                

                if (itemd == "None") {
                    document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
                    document.getElementById("dockclick"+(i+1)).href = "scros.html";
                    
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

function responses(arr) {
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
    } 
    if (!chatmode) {
        googlesearch(arr)
        
    } else {
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
                console.log("Ew")
                j = true;
                return;
            }
        }
        
        for (i=0; i < 2; i++) {
            if (arr.includes(openapps[i])) {
                ansucc = true;
                
                appOpen(arr);
                console.log("LOL")
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
        console.log(ansucc)
        for (i=0; i < learntdataquest.length; i++) {
            console.log(learntdataquest[i])
            if (arr.includes(learntdataquest[i])) {
                console.log(learntdataans)
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


function googlesearch(i) {
    replies = [`I will google ${i}. `, `Opening google to find "${i}". `]
    x = randint(1)
    console.log("Should work")
    reply = replies[x]
    replywith(reply)
    sleep(100).then(() => {
        window.open("https://www.google.com/search?q="+i)
    });

    
}
responding = false;
orgians;
function respond() {
    if (responding) {
        return;
    }
    responding = true; 
    ans = document.getElementById("Resp");
    ans = ans.value;
    orgians = ans;
    if (!ans.includes("/bgc ")) {
        ans = ans.toLowerCase();
    }
   
    j = false;
    responses(ans);
    

    document.getElementById("Resp").value = "";
    
}

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    document.addEventListener('keydown', event => {
        var key = event.key.toLowerCase();
        if (key == "enter") { 
            respond()
        }

        
    });
});
//status





















