greets = ["hi", "hello", "hey", "greetings"]
openapps = ["open","open up"]
chatmode = false;
apps = ["google","spotify","youtube","facebook","instagram","x","tiktok","reddit","github","netflix","gmail","office"]
sites = ["https://www.google.com/", "https://open.spotify.com/","https://www.youtube.com/","https://www.facebook.com/","https://www.instagram.com/","https://twitter.com/","https://www.tiktok.com/","https://www.reddit.com/","https://github.com/","https://www.netflix.com/", "https://www.gmail.com", "https://www.office.com/"]
const APIkey = "AIzaSyD0nVj7f7BjOr-s3EJc-wdyCChKvWzn-aA"
const SaveKey = "SCR-OS/"
learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
learntdataquest = ["who made you?", "what are you?"]
dockrow1 = ["Gmail", "Spotify", "Youtube", "Instagram", "Facebook"]



orgians = ""
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
learningstate = false;
resettypecount = 0
feelings = "none"
//learn
function checksaved() {
    
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
            document.getElementById("dockpic1").src = iconpack+"/Gmail.png";
            document.getElementById("dockpic2").src = iconpack+"/Spotify.png";
            document.getElementById("dockpic3").src = iconpack+"/Youtube.png";
            document.getElementById("dockpic4").src = iconpack+"/Instagram.png";  
            document.getElementById("dockpic5").src = iconpack+"/Facebook.png";
            document.getElementById("dockpic6").src = iconpack+"/Reddit.png";
            document.getElementById("dockpic7").src = iconpack+"/Twitter.png";
            document.getElementById("dockpic8").src = iconpack+"/Amazon.png";
            document.getElementById("dockpic9").src = iconpack+"/Office.png";
            document.getElementById("dockpic10").src = iconpack+"/Weather.png";

        } else {
            localStorage.setItem(SaveKey+"savedd","lol")
            localStorage.setItem(SaveKey+"TerryBgFile", "BG.png")
            localStorage.setItem(SaveKey+"TerryUsername", "Guest")
            localStorage.setItem(SaveKey+"TerryFontColor", "#000000")
            localStorage.setItem(SaveKey+"TerryOutlColor", "#000000")
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
        console.log(saved)

    }
}

window.onload = checksaved()


function replywith(x) {
    document.getElementById("Terry").innerHTML = x;
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
    const API_KEY = "AIzaSyD0nVj7f7BjOr-s3EJc-wdyCChKvWzn-aA";
    const CX = "a7997a360dbeb4aea";
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

function command(repl) {
    if (repl.includes(">help")) {
        alert(
`Scr-OS Manual
--------------
Welcome to the Scr-OS documentation.

Customization:
>bgc (filename)  – Set background (image must be in Images folder)
>fontcolor (val) – Change font color
>outlcolor (val) – Change outline color
>iconpack (foldername) – Change icon pack (all files must follow app.png naming convention except "Twitter")

Assistance:
>help            – Show this help menu
>kill            – Quit Scr-OS
>ms (query)      – Search Spotify
>yt (query)      – Search YouTube
>gh              – Open Scr-OS GitHub
>gs (query)      – Google Search
>ops (site)      – Open website quickly

Productivity:
>calc (expr)     – Evaluate math expression
>compchk (int)   – Find factors (Composite Check)
>status          – Check Scr-OS status
>fclock          – Change clock format (12/24 hour)
>font (fontname) – Change font family
>reset           – Reset Scr-OS (run twice to confirm)`
    );
        haha = true
    } else if (repl.includes("kill")) {
        close()
    } else if (repl.includes("mode")) {
        chatmode = !chatmode;
        if (chatmode) {
            replywith("Switched to chat mode. Hello "+username+". I am Terry. What do you need?")

        } else {
            replywith("Switched to search mode. Hello "+username+". I am Terry. What do you need?")
        }
        haha = true;
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
    } else if (repl.includes(">gs ")) {
        sit = repl.replace(">gs ","")
        replywith("Searching for your query.")
        sleep(150).then(() => {
            window.open("https://www.google.com/search?q="+sit)
        });
        haha = true
    } else if (repl.includes(">gh")) {
        replywith("Opening my github.")
        window.open("https://github.com/Imeanbusiness/TerryBot2.0")
        haha = true
    } else if (repl.includes(">status")) {
        try {
            replywith("Systems: Normal. Version: 1.1.0 (OS Update)")
        } catch {
            replywith("Systems: Abnormal. Version: 1.1.0 (OS Update) Restart recommended.")
        }
        haha = true
        
    } else if (repl.includes(">ms")) {
        sit = repl.replace(">ms ","")
        replywith("Searching for your query on Spotify.")
        sleep(150).then(() => {
            window.open("https://open.spotify.com/search/"+sit)
        });
        haha = true

    }  else if (repl.includes(">yt")) {
        sit = repl.replace(">yt ","")
        replywith("Searching for your query on Youtube.")
        sleep(150).then(() => {
            window.open("https://www.youtube.com/results?search_query="+sit)
        });
        haha = true

    } else if (repl.includes(">calc")) {
        cuc = repl.replace(">calc ", "")
        replywith("Calculating your query.")
        
        sleep(300).then(() => {
             try {
                
                listoffunct = ["sin", "cos", "tan", "log", "ln", "exp", "sqrt", "abs", "round", "ceil", "floor", "max", "min", "asin", "acos", "atan", "sinh", "cosh", "tanh", "pi", "e"];
                console.log("Evaluating: " + cuc);
                for (let i =0; i < 21; i++) {
                    console.log("Checking: " + listoffunct[i]);
                    if (cuc.includes(listoffunct[i])) {
                        console.log("Replacing: " + listoffunct[i]);
                        if (listoffunct[i] == "pi") {
                            cuc = cuc.replace(listoffunct[i], "Math.PI");
                        } else if (listoffunct[i] == "e") {
                            cuc = cuc.replace(listoffunct[i], "Math.E");
                        } else {
                            cuc = cuc.replace(listoffunct[i], "Math." + listoffunct[i]);

                        }
                        

                    }
                }
                console.log("Evaluating: " + cuc);
                ans = eval(cuc);
                console.log("Result: " + ans);
                replywith("Result: " + ans);
            } catch {
                console.log("Error: Invalid expression");
                replywith("Error: Invalid expression");
                return;
            }
        });
        haha = true

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
            localStorage.setitem(SaveKey+"TerryFontColor", "#000000")
            document.body.style.color = "#000000"
            saved = localStorage.getItem(SaveKey+"savedd");
            console.log(saved)
            bgfile = localStorage.getItem(SaveKey+"TerryBgFile");
            document.getElementById("mainbg").style.backgroundImage = "url(\"Images/"+bgfile+"\")";
            username = localStorage.getItem(SaveKey+"TerryUsername");
            learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"]
            learntdataquest = ["who made you?", "what are you?"]
            localStorage.setItem(SaveKey+"TerryQuestData", JSON.stringify(learntdataquest))
            localStorage.setItem(SaveKey+"TerryAnsData", JSON.stringify(learntdataans))
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
        document.getElementById("dockpic1").src = iconpack+"/Gmail.png";
        document.getElementById("dockpic2").src = iconpack+"/Spotify.png";
        document.getElementById("dockpic3").src = iconpack+"/Youtube.png";
        document.getElementById("dockpic4").src = iconpack+"/Instagram.png";  
        document.getElementById("dockpic5").src = iconpack+"/Facebook.png";
        document.getElementById("dockpic6").src = iconpack+"/Reddit.png";
        document.getElementById("dockpic7").src = iconpack+"/Twitter.png";
        document.getElementById("dockpic8").src = iconpack+"/Amazon.png";
        document.getElementById("dockpic9").src = iconpack+"/Office.png";
        document.getElementById("dockpic10").src = iconpack+"/Weather.png";
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
orgians;
function respond() {
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






















