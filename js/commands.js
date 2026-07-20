
async function replywith(x) {
    if (lastRespondedType === "Resp") {
        if (!showTerry) {
            responding = false;
            return;
        }

        let v = "";
        const msg = "Thinking...";

        for (let i = 0; i < msg.length; i++) {
            v += msg[i];
            document.getElementById("Terry").innerHTML = v;
            await sleep(textspeed);
        }

        await sleep(200);
        v = "";

        for (let i = 0; i < x.length; i++) {
            v += x[i];
            document.getElementById("Terry").innerHTML = v;
            await sleep(textspeed);
        }

        responding = false;
    } else {
        document.getElementById("terminalOutput").innerHTML += "SYSTEM: " + x + "<br>";
        responding = false;
    }
}

function greetings() {
    const replies = [
        `Hello ${username}! I am Terry. I am your personal assistant!`,
        `Hey, how's it going, ${username}? I am your personal assistant Terry.`,
        `Well hello ${username}! I'm Terry, your personal assistant!`
    ];
    const i = randint(2);
    const reply = replies[i];
    replywith(reply);
}

function appOpen(rep) {
    let matched = false;
    let jaz = 0;

    for (let i = 0; i < apps.length; i++) {
        if (rep.includes(apps[i])) {
            matched = true;
            jaz = i;
            break;
        }
    }

    if (matched) {
        rep = apps[jaz];
        const replies = [
            `Sure thing. Opening ${rep}`,
            `Absolutely. Opening ${rep} up.`,
            `Yep! Opening ${rep} now!`
        ];
        const i = randint(2);
        const reply = replies[i];
        replywith(reply);
        sleep(1500).then(() => {
            openApp(sites[jaz]);
        });
        return;
    }

    googlesearch(rep);
}

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

function command(repl) {
    let haha = false;

    if (repl.includes(">gs ")) {
        const sit = repl.replace(">gs ", "");
        replywith("Searching for your query.");
        sleep(150).then(() => {
            const newPopup = window.open("https://www.google.com/search?q=" + sit, "mypopup", "width=800,height=600,resizable=yes,scrollbars=yes");
            openedPopups.push(newPopup);
            popupcount++;
        });
        haha = true;
    } else if (repl.includes(">ts ")) {
        const que = repl.replace("ts ", "");
        haha = true;
        terrylearn(que);
    } else if (repl.includes(">help")) {
        replywith("Opening the Scr-OS help menu for you.");
        openSystemApp('helpMenu');
        decideZ('helpMenu');
        haha = true;
        responding = false;
    } else if (repl.includes(">kill")) {
        close();
    } else if (repl.includes(">mode")) {
        chatmode = !chatmode;
        if (chatmode) {
            replywith(`Switched to chat mode. Hello ${username}. I am Terry. What do you need?`);
        } else {
            replywith(`Switched to search mode. Hello ${username}. I am Terry. What do you need?`);
        }
        haha = true;
    } else if (repl.includes(">api")) {
        APIkey = prompt("Please enter your Google Custom Search API key. You can get one from https://developers.google.com/custom-search/v1/overview");
        localStorage.setItem(SaveKey + "APIkey", APIkey);
        haha = true;
        responding = false;
    } else if (repl.includes(">bgc ")) {
        const sit = orgians.replace(">bgc ", "");
        localStorage.setItem(SaveKey + "TerryBgFile", sit);
        replywith("Set successfully.");
        document.getElementById("mainbg").style.backgroundImage = `url("Images/${sit}")`;
        haha = true;
    } else if (repl.includes(">vbgc ")) {
        const sit = orgians.replace(">vbgc ", "");
        localStorage.setItem(SaveKey + "vbgfile", sit);
        document.getElementById("VidBack").src = "Videos/" + sit;
        replywith('Set successfully.');
        haha = true;
    } else if (repl.includes(">inpos ")) {
        try {
            let moved = repl.replace(">inpos ", "");
            let xp = "";
            for (let i = 0; i < moved.length; i++) {
                if (moved[i] === " ") break;
                xp += moved[i];
            }
            moved = moved.replace(xp, "");
            let yp = moved / 1;
            xp = xp / 1;
            Math.floor(yp);
            Math.floor(xp);
            if (xp > 0 && xp < 101 && yp > 0 && yp < 101) {
                document.getElementById("Resp").style.top = (100 - yp) + "%";
                document.getElementById("Resp").style.left = xp + "%";
                replywith(`Changed the Input's position to (${xp}, ${yp}). Warning: Moving it somewhere inaccessable may require a reset to restore functionality. `);
                Save("inpos", JSON.stringify([xp, yp]));
            } else {
                replywith("Error: X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>inpos <Xvalue> <Yvalue>)");
            }
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.  X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>inpos <Xvalue> <Yvalue>)");
            haha = true;
        }
    } else if (repl.includes(">clockpos ")) {
        try {
            let moved = repl.replace(">clockpos ", "");
            let xp = "";
            for (let i = 0; i < moved.length; i++) {
                if (moved[i] === " ") break;
                xp += moved[i];
            }
            moved = moved.replace(xp, "");
            let yp = moved / 1;
            xp = xp / 1;
            Math.floor(yp);
            Math.floor(xp);
            if (xp > 0 && xp < 101 && yp > 0 && yp < 101) {
                document.getElementById("clock").style.top = (100 - yp) + "%";
                document.getElementById("clock").style.left = xp + "%";
                replywith(`Changed the clock's position to (${xp}, ${yp}). Warning: Moving it somewhere inaccessable may require a reset to restore functionality. `);
                Save("clockpos", JSON.stringify([xp, yp]));
            } else {
                replywith("Error: X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>clockpos <Xvalue> <Yvalue>)");
            }
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.  X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>clockpos <Xvalue> <Yvalue>)");
            haha = true;
        }
    } else if (repl.includes(">outpos ")) {
        try {
            let moved = repl.replace(">outpos ", "");
            let xp = "";
            for (let i = 0; i < moved.length; i++) {
                if (moved[i] === " ") break;
                xp += moved[i];
            }
            moved = moved.replace(xp, "");
            let yp = moved / 1;
            xp = xp / 1;
            Math.floor(yp);
            Math.floor(xp);
            if (xp > 0 && xp < 101 && yp > 0 && yp < 101) {
                if (showTerry) {
                    document.getElementById("bot").style.top = (100 - yp) + "%";
                    document.getElementById("bot").style.left = xp + "%";
                    replywith(`Changed the output's position to (${xp}, ${yp}). Warning: Moving it somewhere inaccessable may require a reset to restore functionality. `);
                    Save("outpos", JSON.stringify([xp, yp]));
                }
            } else {
                replywith("Error: X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>outpos <Xvalue> <Yvalue>)");
            }
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.  X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>outpos <Xvalue> <Yvalue>)");
            haha = true;
        }
    } else if (repl.includes(">resetpos")) {
        clockpos = ["50", "95"];
        inpos = ["50", "10"];
        outpos = ["50", "65"];
        Save("clockpos", JSON.stringify(clockpos));
        Save("inpos", JSON.stringify(inpos));
        Save("outpos", JSON.stringify(outpos));
        replywith("Reset the positions to default.");
        checksaved();
        haha = true;
    } else if (repl.includes(">bgmode")) {
        if (bgtype === "video") {
            replywith("Switched background type to image. Set your background image with '>bgc (image_file)'");
            bgtype = "image";
        } else {
            replywith("Switched background type to video. Set your background video with '>vbgc (video_file)'");
            bgtype = "video";
        }
        if (bgtype === "video") {
            document.getElementById("VidBack").style.display = "block";
        } else {
            document.getElementById("VidBack").style.display = "none";
        }
        haha = true;
        localStorage.setItem(SaveKey + "bgtype", bgtype);
    } else if (repl.includes(">ops ")) {
        const sit = repl.replace(">ops ", "");
        replywith("Yes, opening now.");
        sleep(150).then(() => {
            const newPopup = window.open("https://" + sit, "mypopup", "width=800,height=600,resizable=yes,scrollbars=yes");
            openedPopups.push(newPopup);
            popupcount++;
        });
        haha = true;
    } else if (repl.includes(">gh")) {
        replywith("Opening my github.");
        const newPopup = window.open("https://github.com/Imeanbusiness/TerryBot2.0", "mypopup", "width=800,height=600,resizable=yes,scrollbars=yes");
        openedPopups.push(newPopup);
        popupcount++;
        haha = true;
    } else if (repl.includes(">status")) {
        try {
            replywith("Systems: Normal. Version: 2.0 (Fenestra)");
        } catch {
            replywith("Systems: Abnormal. Version: 2.0 (Fenestra) Reload with >reload.");
        }
        haha = true;
    } else if (repl.includes(">ms")) {
        const sit = repl.replace(">ms ", "");
        replywith("Searching for your query on Spotify.");
        sleep(150).then(() => {
            const newPopup = window.open("https://open.spotify.com/search/" + sit, "mypopup", "width=800,height=600,resizable=yes,scrollbars=yes");
            openedPopups.push(newPopup);
            popupcount++;
        });
        haha = true;
    } else if (repl.includes(">dmode")) {
        dmode = dmode === "search" ? "chat" : "search";
        replywith(`Switched default mode to ${dmode} mode.`);
        localStorage.setItem(SaveKey + "defaultmode", dmode);
        haha = true;
    } else if (repl.includes(">toggleterry")) {
        showTerry = !showTerry;
        if (showTerry) {
            document.getElementById("bot").style.display = "block";
            document.getElementById("bot").style.left = outpos[0] + "%";
            document.getElementById("bot").style.top = (100 - outpos[1]) + "%";
            replywith("Terry is now shown on the desktop.");
        } else {
            document.getElementById("bot").style.display = "none";
            if (lastRespondedType === "Resp") responding = false;
            replywith("Terry is now hidden. You can toggle this back with '>toggleterry'.");
        }
        localStorage.setItem(SaveKey + "showTerry", JSON.stringify(showTerry));
        haha = true;
    } else if (repl.includes(">pgs")) {
        try {
            pages = Math.floor(repl.replace(">pgs ", "") / 1);
            if (pages > maxpages) pages = maxpages;
            else if (pages < 1) pages = 1;
            replywith(`Set app dock pages to ${pages}.`);
            localStorage.setItem(SaveKey + "pages", pages);
        } catch {
            replywith("Error: Not a valid value.");
        }
        haha = true;
    } else if (repl.includes(">yt")) {
        const sit = repl.replace(">yt ", "");
        replywith("Searching for your query on Youtube.");
        sleep(150).then(() => {
            const newPopup = window.open("https://www.youtube.com/results?search_query=" + sit, "mypopup", "width=800,height=600,resizable=yes,scrollbars=yes");
            openedPopups.push(newPopup);
            popupcount++;
        });
        haha = true;
    } else if (repl.includes(">calc ")) {
        const cucOriginal = repl.replace(">calc ", "");
        sleep(300).then(() => {
            try {
                let cuc = cucOriginal;
                const listoffunct = ["sin", "cos", "tan", "asin", "acos", "atan", "sinh", "cosh", "tanh", "log", "ln", "exp", "sqrt", "abs", "round", "ceil", "floor", "max", "min", "pi", "e"];
                for (let i = 0; i < listoffunct.length; i++) {
                    const f = listoffunct[i];
                    if (cuc.includes(f)) {
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
                const ans = round10(eval(cuc), -8);
                let found = false;
                let result = ans;
                for (let i = 2; i < MaxDenominator; i++) {
                    if (result % 1 === 0) break;
                    for (let j = 1; j < i; j++) {
                        const comp = round10(j / i, -8);
                        if (result % comp === 0 || Number.isInteger(result - comp)) {
                            if (Number.isInteger(result - comp)) {
                                const mixed = j + '/' + i;
                                result = mixed;
                            } else {
                                const value = j * Math.floor(result / comp);
                                result = value + '/' + i;
                            }
                            found = true;
                            break;
                        }
                    }
                    if (found) break;
                }
                replywith("Result: " + result);
            } catch {
                replywith("Error: Invalid expression");
            }
        });
        haha = true;
    } else if (repl.includes(">calcds ")) {
        try {
            let num = Math.floor(repl.replace(">calcds ", "") / 1);
            if (isNaN(num) || num < 1 || num > 1000) {
                replywith("Error: Invalid syntax. Please enter a value between 1 and 1000.");
            } else {
                MaxDenominator = num;
                replywith("Max denominator set to " + MaxDenominator + ".");
                localStorage.setItem(SaveKey + "MaxDenominator", MaxDenominator);
            }
        } catch {
            replywith("Error: Invalid syntax. Please enter a value between 1 and 1000.");
        }
        haha = true;
    } else if (repl.includes(">calcmode")) {
        calcmode = !calcmode;
        if (calcmode) {
            replywith("Switched to degrees mode. Calculations will now return degrees.");
        } else {
            replywith("Switched to radians mode. Calculations will now return radians.");
        }
        localStorage.setItem(SaveKey + "calcmode", JSON.stringify(calcmode));
        haha = true;
    } else if (repl.includes(">toggletheme")) {
        theme = theme === "light" ? "dark" : "light";
        replywith(theme === "light" ? "Switched System UI to light theme." : "Switched System UI to dark theme.");
        localStorage.setItem(SaveKey + "theme", JSON.stringify(theme));
        toggleThemes();
        haha = true;
    } else if (repl.includes(">clocksize ")) {
        try {
            const clocksize = repl.replace(">clocksize ", "") / 1;
            if (clocksize < 8 || clocksize > 300) {
                replywith("Error: Invalid syntax. Please enter a value between 8 and 300. This will be the font size of the clock in pixels.");
            } else {
                replywith("Clock font size set to " + clocksize + "px.");
                Save("clocksize", clocksize);
                document.getElementById("clock").style.fontSize = clocksize + "px";
            }
        } catch {
            replywith("Error: Invalid syntax. Please enter a value between 8 and 300. This will be the font size of the clock in pixels.");
        }
        haha = true;
    } else if (repl.includes(">outputsize ")) {
        try {
            const outputsize = repl.replace(">outputsize ", "") / 1;
            if (outputsize < 8 || outputsize > 150) {
                replywith("Error: Invalid syntax. Please enter a value between 8 and 150. This will be the font size of the output in pixels.");
            } else {
                replywith("Output font size set to " + outputsize + "px.");
                Save("outputsize", outputsize);
                if (showTerry) document.getElementById("Terry").style.fontSize = outputsize + "px";
            }
        } catch {
            replywith("Error: Invalid syntax. Please enter a value between 8 and 150. This will be the font size of the output in pixels.");
        }
        haha = true;
    } else if (repl.includes(">docktopoffset ")) {
        try {
            const docktopoffsetValue = repl.replace(">docktopoffset ", "") / 1;
            if (docktopoffsetValue < -50 || docktopoffsetValue > 50) {
                replywith("Error: Invalid syntax. Please enter a value between -50 and 50. This will be the % offset of the dock's vertical placement.");
            } else {
                replywith("docktop font offset set to " + docktopoffsetValue + "px.");
                Save("docktopoffset", docktopoffsetValue);
                replacedock(false);
            }
        } catch {
            replywith("Error: Invalid syntax. Please enter a value between -50 and 50. This will be the % offset of the dock's vertical placement.");
        }
        haha = true;
    } else if (repl.includes(">textms")) {
        try {
            let speed = repl.replace(">textms ", "") / 1;
            if (speed < 0) speed = 0;
            else if (speed > 100) speed = 100;
            replywith("Text speed set to " + speed + "ms.");
            textspeed = speed;
        } catch {
            replywith("Error: Not a valid value. Please enter a number between 0 and 100.");
        }
        haha = true;
        localStorage.setItem(SaveKey + "textspeed", textspeed);
    } else if (repl.includes(">remove")) {
        try {
            let item = Math.floor((repl.replace(">remove ", "") / 1));
            if (item < 1) item = 1;
            else if (item > 10) item = 10;
            let returned = "";
            if (curpage === 1) {
                returned = apppage1[item - 1];
                apppage1[item - 1] = "";
            } else if (curpage === 2) {
                returned = apppage2[item - 1];
                apppage2[item - 1] = "";
            } else if (curpage === 3) {
                returned = apppage3[item - 1];
                apppage3[item - 1] = "";
            } else if (curpage === 4) {
                returned = apppage4[item - 1];
                apppage4[item - 1] = "";
            }
            document.getElementById("dockpic" + item).src = "Images/None.png";
            document.getElementById("dockclick" + item).href = "#";
            document.getElementById("docktext" + item).innerHTML = "";
            localStorage.setItem(SaveKey + "apppage1", JSON.stringify(apppage1));
            localStorage.setItem(SaveKey + "apppage2", JSON.stringify(apppage2));
            localStorage.setItem(SaveKey + "appsites1", JSON.stringify(appsites1));
            localStorage.setItem(SaveKey + "appsites2", JSON.stringify(appsites2));
            localStorage.setItem(SaveKey + "apppage3", JSON.stringify(apppage3));
            localStorage.setItem(SaveKey + "appsites3", JSON.stringify(appsites3));
            localStorage.setItem(SaveKey + "apppage4", JSON.stringify(apppage4));
            localStorage.setItem(SaveKey + "appsites4", JSON.stringify(appsites4));
            replywith("Removed " + returned + " from the dock.");
        } catch {
            replywith("Error: Not a valid value. Please enter a number between 1 and 10.");
            return;
        }
        haha = true;
    } else if (repl.includes(">showclock")) {
        showclock = !showclock;
        if (showclock) {
            document.getElementById("clock").style.display = "block";
            replywith("Clock is now visible.");
        } else {
            document.getElementById("clock").style.display = "none";
            replywith("Clock is now hidden.");
        }
        localStorage.setItem(SaveKey + "showclock", showclock);
        haha = true;
    } else if (repl.includes(">showseconds")) {
        showseconds = !showseconds;
        localStorage.setItem(SaveKey + "showseconds", JSON.stringify(showseconds));
        replywith(showseconds ? "Seconds are now visible." : "Seconds are now hidden.");
        localStorage.setItem(SaveKey + "showclock", showclock);
        haha = true;
    } else if (repl.includes(">showdock")) {
        showappdock = !showappdock;
        if (showappdock) {
            document.getElementById("appdock").style.display = "grid";
            replywith("App dock is now visible.");
        } else {
            document.getElementById("appdock").style.display = "none";
            replywith("App dock is now hidden.");
        }
        localStorage.setItem(SaveKey + "showappdock", JSON.stringify(showappdock));
        haha = true;
    } else if (repl.includes("switchdock")) {
        switchdock = !switchdock;
        if (dockloc === "locked") {
            if (switchdock) {
                document.getElementById("Resp").style.top = "80%";
                replywith("Switched dock and input. The input is now at the bottom of the screen.");
            } else {
                document.getElementById("Resp").style.top = "60%";
                replywith("Switched dock and input. The input is now at the top of the screen.");
            }
            localStorage.setItem(SaveKey + "switchdock", JSON.stringify(switchdock));
            haha = true;
            return;
        }
        if (switchdock) {
            document.getElementById("appdock").style.top = "53%";
            document.getElementById("Resp").style.top = "90%";
            replywith("Switched dock and input. The app dock is now at the top of the screen.");
        } else {
            document.getElementById("appdock").style.top = "70%";
            document.getElementById("Resp").style.top = "60%";
            replywith("Switched dock and input. The app dock is now at the bottom of the screen.");
        }
        localStorage.setItem(SaveKey + "switchdock", JSON.stringify(switchdock));
        haha = true;
    } else if (repl.includes(">appadd ")) {
        try {
            const item = repl.replace(">appadd ", "");
            const itemsite = prompt("Please enter the full site address for the app.");
            supapps.push(item);
            supsites.push(itemsite);
            localStorage.setItem(SaveKey + "supapps", JSON.stringify(supapps));
            localStorage.setItem(SaveKey + "supsites", JSON.stringify(supsites));
            replywith("Added " + item + " to the list of supported apps.");
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.");
            haha = true;
        }
    } else if (repl.includes(">appremove ")) {
        try {
            const item = repl.replace(">appremove ", "");
            for (let i = 0; i < supapps.length; i++) {
                if (supapps[i].includes(item)) {
                    supapps.splice(i, 1);
                    supsites.splice(i, 1);
                    localStorage.setItem(SaveKey + "supapps", JSON.stringify(supapps));
                    localStorage.setItem(SaveKey + "supsites", JSON.stringify(supsites));
                    replywith("Removed " + item + " from the list of supported apps.");
                    haha = true;
                    return;
                }
            }
            replywith("Error: App not found in the list of supported apps.");
            localStorage.setItem(SaveKey + "supapps", JSON.stringify(supapps));
            localStorage.setItem(SaveKey + "supsites", JSON.stringify(supsites));
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.");
            haha = true;
        }
    } else if (repl.includes(">lockdock")) {
        if (simpledock) {
            replywith("Error: I am unable to lock the dock at this time. Ensure that you have simple dock disabled by using >dockmode.");
            haha = true;
            return;
        }
        lockeddock = !lockeddock;
        if (lockeddock) {
            replywith("Dock is now locked. You cannot move it.");
        } else {
            replywith("Dock is now unlocked. You can move it.");
        }
        if (lockeddock && !simpledock) {
            if (dockpos === 1) {
                const settop = (30 / clientWidth * 100) * BodyZoom;
                document.getElementById("appdock").style.left = settop + "%";
            }
            if (dockpos === 2) {
                const settop = 100 - (90 / clientHeight * 100) * BodyZoom;
                document.getElementById("appdock").style.top = settop + "%";
            }
            if (dockpos === 3) {
                const settop = 100 - (25 / clientHeight * 100) * BodyZoom;
                document.getElementById("appdock").style.left = settop + "%";
            }
        }
        localStorage.setItem(SaveKey + "lockeddock", lockeddock);
        haha = true;
    } else if (repl.includes(">dockmode")) {
        complexDock = false;
        simpledock = !simpledock;
        if (!simpledock) {
            dockpos = 2;
            replacedock(false);
            replywith("Switched to dock mode. The dock is now on one of the sides of the screen and is animated.");
        } else {
            replacedock(false);
            replywith("Switched to simple dock mode. The dock is now at the center of the screen.");
            dockloc = "open";
            switchdock = true;
            localStorage.setItem(SaveKey + "switchdock", JSON.stringify(switchdock));
        }
        localStorage.setItem(SaveKey + "simpledock", simpledock);
        haha = true;
    } else if (repl.includes(">complexdockreplace ")) {
        try {
            let item = repl.replace(">complexdockreplace ", "");
            let itemd = "";
            let appName = "";
            if (item.length > 0) {
                let i = 0;
                while (item[i] !== " " && i < item.length) {
                    itemd += item[i];
                    i++;
                }
                appName = i === item.length ? "none" : item.replace(itemd + " ", "");
            } else {
                replywith("Error: Invalid syntax. Please use '>replace (number) (appname)'.");
                haha = true;
                return;
            }
            itemd = Math.floor(itemd / 1);
            if (item[1] === "0") itemd = 10;
            if (itemd < 1) itemd = 1;
            if (itemd <= complexDockLayout.columns * complexDockLayout.rows && itemd > 0) {
                complexDockPage[itemd - 1] = appName;
                complexDockSites[itemd - 1] = "https://" + supsites[supapps.indexOf(appName)];
                if (systemSupapps.includes(appName)) {
                    complexDockSites[itemd - 1] = "scros://" + appName + "Menu";
                }
                replacedock(false);
                if (complexDock) {
                    document.getElementById("docktext" + itemd).innerHTML = appName[0].toUpperCase() + appName.slice(1);
                    document.getElementById("dockclick" + itemd).setAttribute('onclick', "openApp('" + complexDockSites[itemd - 1] + "')");
                    if (appName === "none") {
                        document.getElementById("docktext" + itemd).innerHTML = "";
                        document.getElementById("dockclick" + itemd).setAttribute('onclick', "");
                        complexDockSites[itemd - 1] = "none";
                    }
                    try {
                        document.getElementById("dockpic" + itemd).src = iconpack + "/" + appName[0].toUpperCase() + appName.slice(1) + ".png";
                    } catch {
                        document.getElementById("dockpic" + itemd).src = iconpack + "/" + appName[0].toUpperCase() + ".png";
                    }
                }
                replywith(`Replaced index ${itemd} of the complex dock with ${appName}.`);
                haha = true;
                localStorage.setItem(SaveKey + "complexDockPage", JSON.stringify(complexDockPage));
                localStorage.setItem(SaveKey + "complexDockSites", JSON.stringify(complexDockSites));
            }
        } catch {
            replywith("Error: Invalid syntax. Please use '>replace (number) (appname)'.");
            haha = true;
        }
    } else if (repl.includes(">complexdockpos")) {
        try {
            let moved = repl.replace(">complexdockpos ", "");
            let xp = "";
            for (let i = 0; i < moved.length; i++) {
                if (moved[i] === " ") break;
                xp += moved[i];
            }
            moved = moved.replace(xp, "");
            let yp = moved / 1;
            xp = xp / 1;
            Math.floor(yp);
            Math.floor(xp);
            if (xp > -1 && xp < 101 && yp > -1 && yp < 101) {
                if (complexDock) {
                    document.getElementById("appdock").style.top = (100 - yp) + "%";
                    document.getElementById("appdock").style.left = xp + "%";
                }
                replywith(`Changed the complex dock's position to (${xp}, ${yp}).`);
                complexDockPos = [xp, (100 - yp)];
                localStorage.setItem(SaveKey + "complexDockPos", JSON.stringify(complexDockPos));
            } else {
                replywith("Error: X and Y values must be between 1 and 100. These values are based on % of your current screen. The syntax is (>complexdockpos <Xvalue> <Yvalue>)");
            }
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.  X and Y values must be between 0 and 100. These values are based on % of your current screen. The syntax is (>complexdockpos <Xvalue> <Yvalue>)");
            haha = true;
        }
    } else if (repl.includes(">complexdocklayout")) {
        try {
            let moved = repl.replace(">complexdocklayout ", "");
            let columns = "";
            for (let i = 0; i < moved.length; i++) {
                if (moved[i] === " ") break;
                columns += moved[i];
            }
            moved = moved.replace(columns, "");
            let rows = moved / 1;
            columns = columns / 1;
            Math.floor(rows);
            Math.floor(columns);
            if (columns > 0 && columns < 15 && rows > 0 && rows < 15) {
                replywith(`Changed the complex dock's layout to ${columns} columns and ${rows} rows.`);
                complexDockLayout.columns = columns;
                complexDockLayout.rows = rows;
                currentDockMode = "?";
                if (complexDockPage.length < columns * rows) {
                    for (let i = complexDockPage.length; i < columns * rows; i++) {
                        complexDockPage.push("None");
                        complexDockSites.push("");
                    }
                }
                localStorage.setItem(SaveKey + "complexDockPage", JSON.stringify(complexDockPage));
                localStorage.setItem(SaveKey + "complexDockSites", JSON.stringify(complexDockSites));
                localStorage.setItem(SaveKey + "complexDockLayout", JSON.stringify(complexDockLayout));
                replacedock(false);
            } else {
                replywith("Error: X and Y values must be between 1 and 15. The syntax is (>complexdocklayout <Columns> <Rows>)");
            }
            haha = true;
        } catch {
            replywith("Error: Invalid syntax.  X and Y values must be between 1 and 15. The syntax is (>complexdocklayout <Columns> <Rows>)");
            haha = true;
        }
    } else if (repl.includes(">complexdock")) {
        complexDock = !complexDock;
        replywith(complexDock ? "Complex dock mode enabled. Position the dock anywhere on screen, and set yout own grid layout. To change the grid layout, use >complexdocklayout. To change the dock position, use >complexdockpos." : "Complex dock mode disabled.");
        localStorage.setItem(SaveKey + "complexDock", JSON.stringify(complexDock));
        replacedock(false);
        haha = true;
    } else if (repl.includes(">dockpos ")) {
        try {
            let tempdockpos = Math.floor(repl.replace(">dockpos ", "") / 1);
            if (tempdockpos < 1 || tempdockpos > 3) {
                replywith("Error: Invalid dock position. Please enter a number between 1 and 3. (1 for left, 2 for bottom, 3 for right)");
                haha = true;
            } else {
                dockpos = tempdockpos;
                replacedock(false);
                if (dockpos === 1) {
                    replywith("Dock position set to left. The dock is now on the left side of the screen.");
                } else if (dockpos === 2) {
                    replywith("Dock position set to bottom. The dock is now on the bottom side of the screen.");
                } else if (dockpos === 3) {
                    replywith("Dock position set to right. The dock is now on the right side of the screen.");
                }
                localStorage.setItem(SaveKey + "dockpos", dockpos);
                haha = true;
            }
        } catch {
            replywith("Error: Invalid dock position. Please enter a number between 1 and 3. (1 for left, 2 for bottom, 3 for right)");
            haha = true;
        }
    } else if (repl.includes(">replace ")) {
        try {
            let item = repl.replace(">replace ", "");
            let itemd = item[0] / 1;
            itemd = Math.floor(itemd);
            if (item[1] === "0") itemd = 10;
            if (itemd < 1) itemd = 1;
            item = item.replace(itemd, "");
            item = item.slice(1);
            if (supapps.includes(item)) {
                let appIndex = supapps.indexOf(item);
                item = item.replace(item[0], item[0].toUpperCase());
                if (curpage === 1) {
                    apppage1[itemd - 1] = item;
                    document.getElementById("dockpic" + itemd).src = iconpack + "/" + item + ".png";
                    document.getElementById("dockclick" + itemd).href = "#";
                    document.getElementById("dockclick" + itemd).setAttribute('onclick', "openApp('" + supsites[appIndex] + "')");
                    document.getElementById("docktext" + itemd).innerHTML = item;
                    appsites1[itemd - 1] = supsites[appIndex];
                } else if (curpage === 2) {
                    apppage2[itemd - 1] = item;
                    document.getElementById("dockpic" + itemd).src = iconpack + "/" + item + ".png";
                    document.getElementById("dockclick" + itemd).href = "#";
                    document.getElementById("dockclick" + itemd).setAttribute('onclick', "openApp('" + supsites[appIndex] + "')");
                    document.getElementById("docktext" + itemd).innerHTML = item;
                    appsites2[itemd - 1] = supsites[appIndex];
                } else if (curpage === 3) {
                    apppage3[itemd - 1] = item;
                    document.getElementById("dockpic" + itemd).src = iconpack + "/" + item + ".png";
                    document.getElementById("dockclick" + itemd).href = "#";
                    document.getElementById("dockclick" + itemd).setAttribute('onclick', "openApp('" + supsites[appIndex] + "')");
                    document.getElementById("docktext" + itemd).innerHTML = item;
                    appsites3[itemd - 1] = supsites[appIndex];
                } else if (curpage === 4) {
                    apppage4[itemd - 1] = item;
                    document.getElementById("dockpic" + itemd).src = iconpack + "/" + item + ".png";
                    document.getElementById("dockclick" + itemd).href = "#";
                    document.getElementById("dockclick" + itemd).setAttribute('onclick', "openApp('" + supsites[appIndex] + "')");
                    document.getElementById("docktext" + itemd).innerHTML = item;
                    appsites4[itemd - 1] = supsites[appIndex];
                }
                localStorage.setItem(SaveKey + "apppage1", JSON.stringify(apppage1));
                localStorage.setItem(SaveKey + "apppage2", JSON.stringify(apppage2));
                localStorage.setItem(SaveKey + "appsites1", JSON.stringify(appsites1));
                localStorage.setItem(SaveKey + "appsites2", JSON.stringify(appsites2));
                if (curpage === 3) {
                    localStorage.setItem(SaveKey + "apppage3", JSON.stringify(apppage3));
                    localStorage.setItem(SaveKey + "appsites3", JSON.stringify(appsites3));
                }
                if (curpage === 4) {
                    localStorage.setItem(SaveKey + "apppage4", JSON.stringify(apppage4));
                    localStorage.setItem(SaveKey + "appsites4", JSON.stringify(appsites4));
                }
                replywith(`Replaced slot ${itemd} with ${item} on page ${curpage}.`);
            } else {
                replywith("Error: Not a valid app. Please use '>replace (number) (appname)'.");
                haha = true;
            }
            haha = true;
        } catch {
            replywith("Error: Invalid syntax. Please use '>replace (number) (appname)'.");
            haha = true;
        }
    } else if (repl.includes(">settings")) {
        if (lastRespondedType === "terminalInput") {
            replywith(`<br>Scr-OS Settings<br>
----------------<br>
Username: ${username}<br>
Background: ${localStorage.getItem(SaveKey + "TerryBgFile")}<br>
Video Background: ${localStorage.getItem(SaveKey + "vbgfile")}<br>
Background Type: ${bgtype}<br>
Font Color: ${localStorage.getItem(SaveKey + "TerryFontColor")}<br>
Outline Color: ${localStorage.getItem(SaveKey + "TerryOutlColor")}<br>
Font: ${localStorage.getItem(SaveKey + "TerryFont")}<br>
Clock Format: ${fclock ? "24-hour" : "12-hour"}<br>
Icon Pack: ${localStorage.getItem(SaveKey + "TerryIconPack")}<br>
Default Mode: ${dmode}<br>
App Dock Pages: ${pages}<br>
Text Speed: ${textspeed}ms<br>
Google API key: ${APIkey}<br>
Calculation Mode: ${calcmode ? "Degrees" : "Radians"}<br>
Max Denominator: ${MaxDenominator}<br>
Dock Mode: ${simpledock ? "Simple Dock" : "Fluid Dock"}<br>
Locked Dock: ${lockeddock ? "Locked" : "Unlocked"}<br>
----------------`);
        } else if (lastRespondedType === "Resp") {
            alert(`Scr-OS Settings
----------------
Username: ${username}
Background: ${localStorage.getItem(SaveKey + "TerryBgFile")}
Video Background: ${localStorage.getItem(SaveKey + "vbgfile")}
Background Type: ${bgtype}
Font Color: ${localStorage.getItem(SaveKey + "TerryFontColor")}
Outline Color: ${localStorage.getItem(SaveKey + "TerryOutlColor")}
Font: ${localStorage.getItem(SaveKey + "TerryFont")}
Clock Format: ${fclock ? "24-hour" : "12-hour"}
Icon Pack: ${localStorage.getItem(SaveKey + "TerryIconPack")}
Default Mode: ${dmode}
App Dock Pages: ${pages}
Text Speed: ${textspeed}ms
Google API key: ${APIkey}
Calculation Mode: ${calcmode ? "Degrees" : "Radians"}
Max Denominator: ${MaxDenominator}
Dock Mode: ${simpledock ? "Simple Dock" : "Fluid Dock"}
Locked Dock: ${lockeddock ? "Locked" : "Unlocked"}`);
            alert(`Your Apps: ${supapps}
Linked Sites to Respective Apps: ${supsites}
User-set Input Position: ${inpos[0] == initinpos[0] && inpos[1] == initinpos[1] ? "Default" : inpos}
User-set Output Position: ${outpos}
User-set Clock Position: ${clockpos}
Clock Size: ${clocksize}px
Output Size: ${outputsize}px
Dock Top Offset: ${docktopoffset}%
Theme: ${theme}
----------------`);
        }
        haha = true;
        responding = false;
    } else if (repl.includes(">compchk")) {
        try {
            const numb = repl.replace(">compchk ", "") / 1;
            const anslist = ["(1"];
            if (numb % 2 === 0) {
                anslist.push(" (2", " " + (numb / 2) + ")");
            }
            let n = 2;
            let rpt = false;
            while (true) {
                rpt = true;
                for (let i = n + 1; i < Math.floor(Math.sqrt(numb)) + 1; i++) {
                    if (numb % i === 0 && !anslist.includes(" (" + i)) {
                        if (!anslist.includes(" " + i + ")")) {
                            anslist.push(" (" + i, " " + (numb / i) + ")");
                            n = i;
                            rpt = false;
                            break;
                        }
                    }
                }
                if (rpt) break;
            }
            const prime = anslist.length > 2 ? "Composite" : "Prime";
            replywith("Factors: " + anslist + " Total factors: " + anslist.length + " Prime: " + prime);
        } catch {
            replywith("Error: Not a number");
            return;
        }
        haha = true;
    } else if (repl.includes(">resetbattery")) {
        batteryInfo.levelGained = 0;
        batteryInfo.levelLost = 0;
        batteryInfo.timeGained = 0;
        batteryInfo.timeLost = 0;
        replywith("Battery stats have been reset.");
        haha = true;
        localStorage.setItem(SaveKey + "levelGained", batteryInfo.levelGained);
        localStorage.setItem(SaveKey + "levelLost", batteryInfo.levelLost);
        localStorage.setItem(SaveKey + "timeGained", batteryInfo.timeGained);
        localStorage.setItem(SaveKey + "timeLost", batteryInfo.timeLost);
    } else if (repl.includes(">reset")) {
        resettypecount += 1;
        if (resettypecount < 2) {
            replywith("Are you sure? Run the commad one more time to reset.");
        } else {
            apppage1 = ["gmail", "spotify", "youtube", "instagram", "facebook", "reddit", "x", "amazon", "office", "weather"];
            apppage2 = ["linkedin", "netflix", "github", "wikipedia", "twitch", "", "", "", "", "",];
            appapps1 = ["https://www.gmail.com", "https://open.spotify.com/", "https://www.youtube.com/", "https://www.instagram.com/", "https://www.facebook.com/", "https://www.reddit.com/", "https://X.com/", "https://www.amazon.com/", "https://www.office.com/", "https://weather.com/"];
            appsites2 = ["https://www.linkedin.com", "https://www.netflix.com/", "https://github.com/", "https://www.wikipedia.org/", "https://www.twitch.tv/"];
            sites = ["https://www.google.com/", "https://open.spotify.com/", "https://www.youtube.com/", "https://www.facebook.com/", "https://www.instagram.com/", "https://X.com/", "https://www.tiktok.com/", "https://www.reddit.com/", "https://github.com/", "https://www.netflix.com/", "https://www.gmail.com", "https://www.office.com/", "https://www.linkedin.com"];
            APIkey = undefined;
            learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"];
            learntdataquest = ["who made you?", "what are you?"];
            dockrow1 = ["Gmail", "Spotify", "Youtube", "Instagram", "Facebook"];
            dmode = "search";
            pages = 2;
            username = "Guest";
            curpage = 1;
            textspeed = 10;
            calcmode = true;
            MaxDenominator = 500;
            showappdock = true;
            orgians = "";
            replywith("Succesful.");
            localStorage.setItem(SaveKey + "savedd", "lol");
            localStorage.setItem(SaveKey + "TerryBgFile", "bg4.jpg");
            localStorage.setItem(SaveKey + "TerryUsername", "Guest");
            localStorage.setItem(SaveKey + "TerryFontColor", "#ffffff");
            localStorage.setItem(SaveKey + "TerryQuestData", "who made you?");
            localStorage.setItem(SaveKey + "TerryAnsData", "My Creator, Imeanbusiness, of course!");
            localStorage.setItem(SaveKey + "ClockFormat", JSON.stringify(true));
            localStorage.setItem(SaveKey + "TerryFont", "Poppins");
            localStorage.setItem(SaveKey + "TerryIconPack", "AppIcons");
            localStorage.setItem(SaveKey + "update1.1", "lol");
            localStorage.setItem(SaveKey + "appsites1", JSON.stringify(appsites1));
            localStorage.setItem(SaveKey + "appsites2", JSON.stringify(appsites2));
            localStorage.setItem(SaveKey + "apppage1", JSON.stringify(apppage1));
            localStorage.setItem(SaveKey + "apppage2", JSON.stringify(apppage2));
            localStorage.setItem(SaveKey + "defaultmode", dmode);
            localStorage.setItem(SaveKey + "pages", 2);
            localStorage.setItem(SaveKey + "textspeed", textspeed);
            localStorage.setItem(SaveKey + "update1.1.2", "lol");
            localStorage.setItem(SaveKey + "MaxDenominator", MaxDenominator);
            localStorage.setItem(SaveKey + "calcmode", JSON.stringify(calcmode));
            localStorage.setItem(SaveKey + "APIkey", "");
            localStorage.setItem(SaveKey + "dmode", "search");
            localStorage.setItem(SaveKey + "update1.1.3", "lol");
            localStorage.setItem(SaveKey + "showclock", JSON.stringify(true));
            localStorage.setItem(SaveKey + "showappdock", JSON.stringify(true));
            localStorage.setItem(SaveKey + "switchdock", JSON.stringify(true));
            localStorage.setItem(SaveKey + "update1.2", "lol");
            localStorage.setItem(SaveKey + "showseconds", JSON.stringify(false));
            localStorage.setItem(SaveKey + "dockpos", dockpos);
            localStorage.setItem(SaveKey + "simpledock", JSON.stringify(true));
            localStorage.setItem(SaveKey + "appsites3", JSON.stringify(appsites3));
            localStorage.setItem(SaveKey + "appsites4", JSON.stringify(appsites4));
            localStorage.setItem(SaveKey + "apppage3", JSON.stringify(apppage3));
            localStorage.setItem(SaveKey + "apppage4", JSON.stringify(apppage4));
            localStorage.setItem(SaveKey + "supapps", JSON.stringify(supapps));
            localStorage.setItem(SaveKey + "supsites", JSON.stringify(supsites));
            localStorage.setItem(SaveKey + "vbgfile", "City.mp4");
            localStorage.setItem(SaveKey + "bgtype", "image");
            localStorage.setItem(SaveKey + "lockeddock", false);
            localStorage.setItem(SaveKey + "update1.3.1", "lol");
            localStorage.setItem(SaveKey + "clocksize", "120");
            localStorage.setItem(SaveKey + "outputsize", "30");
            localStorage.setItem(SaveKey + "docktopoffset", "0");
            localStorage.setItem(SaveKey + "update2.0", "lol");
            localStorage.setItem(SaveKey + "theme", "light");
            clockpos = ["50", "97"];
            inpos = ["50", "10"];
            outpos = ["50", "65"];
            Save("update1.2.1", "lol");
            Save("clockpos", JSON.stringify(clockpos));
            Save("inpos", JSON.stringify(inpos));
            Save("outpos", JSON.stringify(outpos));
            window.location.reload();
            checksaved();
        }
        haha = true;
    } else if (repl.includes(">reload")) {
        window.location.reload();
    } else if (repl.includes(">fontcolor")) {
        const colorchange = repl.replace(">fontcolor ", "");
        document.body.style.color = colorchange;
        localStorage.setItem(SaveKey + "TerryFontColor", colorchange);
        haha = true;
        replywith("Success! Font color changed to " + colorchange + ".");
    } else if (repl.includes(">outlcolor")) {
        let colorchange = repl.replace(">outlcolor ", "");
        let clr = `0.2px ${colorchange}`;
        if (clr.includes("none")) clr = "0px";
        document.body.style.webkitTextStroke = clr;
        localStorage.setItem(SaveKey + "TerryOutlColor", clr);
        haha = true;
        replywith("Success! Outline color changed to " + colorchange + ".");
    } else if (repl.includes(">font")) {
        const fontchange = repl.replace(">font ", "");
        document.body.style.fontFamily = fontchange;
        localStorage.setItem(SaveKey + "TerryFont", fontchange);
        haha = true;
        replywith("Success! Font changed to " + fontchange + ".");
    } else if (repl.includes(">fclock")) {
        fclock = !fclock;
        localStorage.setItem(SaveKey + "ClockFormat", JSON.stringify(fclock));
        replywith(fclock ? "Switched to 24-hour clock format." : "Switched to 12-hour clock format.");
        haha = true;
    } else if (repl.includes(">iconpack")) {
        iconpack = repl.replace(">iconpack ", "");
        for (let i = 0; i < 10; i++) {
            let itemd = apppage1[i] || "none";
            itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
            document.getElementById("dockpic" + (i + 1)).src = "Images/None.png";
            document.getElementById("dockclick" + (i + 1)).href = "#";
            document.getElementById("docktext" + (i + 1)).innerHTML = "";
        }
        if (curpage === 1) {
            for (let i = 0; i < 10; i++) {
                let itemd = apppage1[i] || "none";
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                if (itemd === "None") {
                    document.getElementById("dockclick" + (i + 1)).setAttribute('onclick', "");
                    document.getElementById("dockpic" + (i + 1)).src = "Images/None.png";
                    document.getElementById("dockclick" + (i + 1)).href = "#";
                    document.getElementById("docktext" + (i + 1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic" + (i + 1)).src = iconpack + "/" + itemd + ".png";
                    document.getElementById("dockclick" + (i + 1)).href = appsites1[i];
                    document.getElementById("docktext" + (i + 1)).innerHTML = itemd;
                }
            }
        } else if (curpage === 2) {
            for (let i = 0; i < 10; i++) {
                let itemd = apppage2[i] || "none";
                itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
                if (itemd === "None") {
                    document.getElementById("dockclick" + (i + 1)).setAttribute('onclick', "");
                    document.getElementById("dockpic" + (i + 1)).src = "Images/None.png";
                    document.getElementById("dockclick" + (i + 1)).href = "#";
                    document.getElementById("docktext" + (i + 1)).innerHTML = "";
                } else {
                    document.getElementById("dockpic" + (i + 1)).src = iconpack + "/" + itemd + ".png";
                    document.getElementById("dockclick" + (i + 1)).href = appsites2[i];
                    document.getElementById("docktext" + (i + 1)).innerHTML = itemd;
                }
            }
        }
        replywith("Icon pack changed to " + iconpack + ".");
        localStorage.setItem(SaveKey + "TerryIconPack", iconpack);
        haha = true;
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
        command(arr);
        return;
    }

    if (!arr.includes(">")) {
        resettypecount = 0;
        if (type === "terminalInput") {
            replywith("Sorry, I don't understand that command. If you need help, type '>help' for a list of commands.");
            return;
        }
    }

    if (!chatmode) {
        if (type === "terminalInput") {
            replywith("Sorry, I don't understand that command. If you need help, type '>help' for a list of commands.");
            return;
        }
        googlesearch(arr);
    } else {
        if (type === "terminalInput") {
            replywith("Sorry, I don't understand that command. If you need help, type '>help' for a list of commands.");
            return;
        }

        let ansucc = false;
        if (feelings !== "none") {
            for (let i = 0; i < 6; i++) {
                if (arr.includes(feelingsDone[i])) {
                    ansucc = true;
                    const replies = "Alright. Thank you for sharing with me! Remember, in the end I am still only a bot, and don't forget to talk to other people too!";
                    replywith(replies);
                    feelings = "none";
                    return;
                }
            }
            if (feelings === "neg") {
                ansucc = true;
                const replies = [
                    "I understand and I am sorry. Is there anything more? (Reply with 'that's all' if you are finished)",
                    "Oh... I see. Do you want to keep going? (Reply with 'that's all' if you are finished)",
                    "I'm really sorry. Do you have more you want to say? (Reply with 'that's all' if you are finished)"
                ];
                const i = randint(2);
                replywith(replies[i]);
            } else if (feelings === "good") {
                ansucc = true;
                const replies = [
                    "I see, that's awesome! Do you have anything more to add? (Reply with 'that's all' if you are finished)",
                    "Oh I see! Very cool! Do you want to keep going? (Reply with 'that's all' if you are finished)",
                    "That's great!! I'm verry happy for you Do you have more you want to say? (Reply with 'that's all' if you are finished)"
                ];
                const i = randint(2);
                replywith(replies[i]);
            } else if (feelings === "neut") {
                ansucc = true;
                const replies = [
                    "Cool. Do you have anything more to add? (Reply with 'that's all' if you are finished)",
                    "I see. Do you want to keep going? (Reply with 'that's all' if you are finished)",
                    "Nice! Do you have more you want to say? (Reply with 'that's all' if you are finished)"
                ];
                const i = randint(2);
                replywith(replies[i]);
            }
        } else {
            for (let i = 0; i < greets.length; i++) {
                if (arr.includes(greets[i])) {
                    greetings();
                    return;
                }
            }
            for (let i = 0; i < openapps.length; i++) {
                if (arr.includes(openapps[i])) {
                    appOpen(arr);
                    return;
                }
            }
            if (arr.includes("my name is ") || arr.includes("my name's ") || arr.includes("i am ")) {
                ansucc = true;
                username = arr.replace("my name is ", "");
                username = username.replace("my name's ", "");
                username = username.replace("i am ", "");
                username = username.replace(username[0], username[0].toUpperCase());
                localStorage.setItem(SaveKey + "TerryUsername", username);
                replywith("Hi " + username + ", nice to meet you!");
            }
            for (let i = 0; i < learntdataquest.length; i++) {
                if (arr.includes(learntdataquest[i])) {
                    replywith(learntdataans[i]);
                    ansucc = true;
                }
            }
            if (!ansucc) {
                terrylearn(arr);
            }
        }
    }
}

function respond(type) {
    if (responding) return;
    responding = true;
    let ans = document.getElementById(type).value;
    orgians = ans;
    if (!ans.includes("/bgc ")) {
        ans = ans.toLowerCase();
    }
    lastRespondedType = type;
    document.getElementById(type).value = "";
    if (type === "terminalInput") {
        document.getElementById("terminalOutput").innerHTML += "USER: " + orgians + "<br>";
        document.getElementById("terminalOutput").scrollTop = document.getElementById("terminalOutput").scrollHeight;
        document.getElementById(type).value = ">";
        lastTerminalinputs.push(orgians);
        terminalInputCount = lastTerminalinputs.length;
    }
    responses(ans, type);
}

function googlesearch(i) {
    const replies = [`I will google ${i}. `, `Opening google to find "${i}". `];
    const x = randint(1);
    const reply = replies[x];
    replywith(reply);
    sleep(100).then(() => {
        const newPopup = window.open("https://www.google.com/search?q=" + i, "mypopup" + popupcount, "width=800,height=600,resizable=yes,scrollbars=yes");
        openedPopups.push(newPopup);
        popupcount++;
    });
}

window.onfocus = function() {
    for (let i = 0; i < openedPopups.length; i++) {
        if (openedPopups[i] && !openedPopups[i].closed) {
            openedPopups[i].focus();
        }
    }
};
