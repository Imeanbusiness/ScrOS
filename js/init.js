
async function checksaved() {
    changeZoom();
    currentDockMode = "?";
    document.getElementById('clock').style.fontSize = "80px";

    try {
        let saved = localStorage.getItem(SaveKey + "update2.0");
        if (saved === "lol") {
            theme = localStorage.getItem(SaveKey + "theme");
            batteryInfo.levelGained = parseInt(localStorage.getItem(SaveKey + "levelGained"));
            batteryInfo.timeGained = parseInt(localStorage.getItem(SaveKey + "timeGained"));
            batteryInfo.levelLost = parseInt(localStorage.getItem(SaveKey + "levelLost"));
            batteryInfo.timeLost = parseInt(localStorage.getItem(SaveKey + "timeLost"));
            complexDock = JSON.parse(localStorage.getItem(SaveKey + "complexDock"));
            complexDockPage = JSON.parse(localStorage.getItem(SaveKey + "complexDockPage"));
            complexDockSites = JSON.parse(localStorage.getItem(SaveKey + "complexDockSites"));
            complexDockLayout = JSON.parse(localStorage.getItem(SaveKey + "complexDockLayout"));
            complexDockPos = JSON.parse(localStorage.getItem(SaveKey + "complexDockPos"));
        } else {
            localStorage.setItem(SaveKey + "update2.0", "lol");
            localStorage.setItem(SaveKey + "theme", "light");
            localStorage.setItem(SaveKey + "levelGained", 0);
            localStorage.setItem(SaveKey + "timeGained", 0);
            localStorage.setItem(SaveKey + "levelLost", 0);
            localStorage.setItem(SaveKey + "timeLost", 0);
            localStorage.setItem(SaveKey + "complexDock", JSON.stringify(false));
            localStorage.setItem(SaveKey + "complexDockPage", JSON.stringify(complexDockPage));
            localStorage.setItem(SaveKey + "complexDockSites", JSON.stringify(complexDockSites));
            localStorage.setItem(SaveKey + "complexDockLayout", JSON.stringify(complexDockLayout));
            localStorage.setItem(SaveKey + "complexDockPos", JSON.stringify(complexDockPos));
            updateAlert("Scr-OS has been updated to version 2.0.");
        }
    } catch {
        localStorage.setItem(SaveKey + "update2.0", "lol");
        localStorage.setItem(SaveKey + "theme", "light");
        localStorage.setItem(SaveKey + "levelGained", 0);
        localStorage.setItem(SaveKey + "timeGained", 0);
        localStorage.setItem(SaveKey + "levelLost", 0);
        localStorage.setItem(SaveKey + "timeLost", 0);
        localStorage.setItem(SaveKey + "complexDock", JSON.stringify(false));
        localStorage.setItem(SaveKey + "complexDockPage", JSON.stringify(complexDockPage));
        localStorage.setItem(SaveKey + "complexDockSites", JSON.stringify(complexDockSites));
        localStorage.setItem(SaveKey + "complexDockLayout", JSON.stringify(complexDockLayout));
        localStorage.setItem(SaveKey + "complexDockPos", JSON.stringify(complexDockPos));
        updateAlert("Scr-OS has been updated to version 2.0.");
    }

    try {
        let saved = localStorage.getItem(SaveKey + "update1.3.3");
        if (saved === "lol") {
            showTerry = JSON.parse(localStorage.getItem(SaveKey + "showTerry"));
        } else {
            localStorage.setItem(SaveKey + "update1.3.3", "lol");
            localStorage.setItem(SaveKey + "showTerry", JSON.stringify(true));
        }
    } catch {
        localStorage.setItem(SaveKey + "update1.3.3", "lol");
        localStorage.setItem(SaveKey + "showTerry", JSON.stringify(true));
    }

    if (showTerry) {
        document.getElementById("bot").style.display = "block";
    } else {
        document.getElementById("bot").style.display = "none";
    }

    try {
        let saved = localStorage.getItem(SaveKey + "update1.3.1");
        if (saved === "lol") {
            const clocksize = localStorage.getItem(SaveKey + "clocksize");
            document.getElementById("clock").style.fontSize = clocksize + "px";
            const outputsize = localStorage.getItem(SaveKey + "outputsize");
            if (showTerry) document.getElementById("Terry").style.fontSize = outputsize + "px";
            docktopoffset = localStorage.getItem(SaveKey + "docktopoffset");
        } else {
            localStorage.setItem(SaveKey + "update1.3.1", "lol");
            localStorage.setItem(SaveKey + "clocksize", "120");
            localStorage.setItem(SaveKey + "outputsize", "30");
            localStorage.setItem(SaveKey + "docktopoffset", "0");
            updateAlert("Scr-OS has been updated to version 1.3.1.");
        }
    } catch {
        localStorage.setItem(SaveKey + "update1.3.1", "lol");
        localStorage.setItem(SaveKey + "clocksize", "120");
        localStorage.setItem(SaveKey + "outputsize", "30");
        localStorage.setItem(SaveKey + "docktopoffset", "0");
        updateAlert("Scr-OS has been updated to version 1.3.1.");
    }

    try {
        let saved = localStorage.getItem(SaveKey + "update1.2.1");
        if (saved === "lol") {
            clockpos = JSON.parse(localStorage.getItem(SaveKey + "clockpos"));
            inpos = JSON.parse(localStorage.getItem(SaveKey + "inpos"));
            outpos = JSON.parse(localStorage.getItem(SaveKey + "outpos"));
        } else {
            clockpos = ["50", "95"];
            inpos = ["50", "10"];
            outpos = ["50", "65"];
            Save("update1.2.1", "lol");
            Save("clockpos", JSON.stringify(clockpos));
            Save("inpos", JSON.stringify(inpos));
            Save("outpos", JSON.stringify(outpos));
            if (!onealert) updateAlert("Scr-OS has been updated to version 1.2.1.");
        }
    } catch {
        clockpos = ["50", "95"];
        inpos = ["50", "10"];
        outpos = ["50", "65"];
        Save("update1.2.1", "lol");
        Save("clockpos", JSON.stringify(clockpos));
        Save("inpos", JSON.stringify(inpos));
        Save("outpos", JSON.stringify(outpos));
        if (!onealert) updateAlert("Scr-OS has been updated to version 1.2.1.");
    }

    document.getElementById("clock").style.left = clockpos[0] + "%";
    document.getElementById("clock").style.top = (100 - clockpos[1]) + "%";
    document.getElementById("Resp").style.left = inpos[0] + "%";
    document.getElementById("Resp").style.top = (100 - inpos[1]) + "%";
    if (showTerry) {
        document.getElementById("bot").style.left = outpos[0] + "%";
        document.getElementById("bot").style.top = (100 - outpos[1]) + "%";
    }

    try {
        let saved = localStorage.getItem(SaveKey + "update1.2");
        if (saved === "lol") {
            showseconds = JSON.parse(localStorage.getItem(SaveKey + "showseconds"));
            dockpos = localStorage.getItem(SaveKey + "dockpos");
            simpledock = JSON.parse(localStorage.getItem(SaveKey + "simpledock"));
            appsites3 = JSON.parse(localStorage.getItem(SaveKey + "appsites3"));
            appsites4 = JSON.parse(localStorage.getItem(SaveKey + "appsites4"));
            apppage3 = JSON.parse(localStorage.getItem(SaveKey + "apppage3"));
            apppage4 = JSON.parse(localStorage.getItem(SaveKey + "apppage4"));
            supapps = JSON.parse(localStorage.getItem(SaveKey + "supapps"));
            supsites = JSON.parse(localStorage.getItem(SaveKey + "supsites"));
            vbgfile = localStorage.getItem(SaveKey + "vbgfile");
            bgtype = localStorage.getItem(SaveKey + "bgtype");
            lockeddock = JSON.parse(localStorage.getItem(SaveKey + "lockeddock"));
            document.getElementById("VidBack").src = "Videos/" + vbgfile;
            document.getElementById("VidBack").style.display = bgtype === "video" ? "block" : "none";
        } else {
            localStorage.setItem(SaveKey + "update1.2", "lol");
            localStorage.setItem(SaveKey + "showseconds", JSON.stringify(showseconds));
            localStorage.setItem(SaveKey + "dockpos", dockpos);
            localStorage.setItem(SaveKey + "simpledock", JSON.stringify(true));
            localStorage.setItem(SaveKey + "appsites3", JSON.stringify(appsites3));
            localStorage.setItem(SaveKey + "appsites4", JSON.stringify(appsites4));
            localStorage.setItem(SaveKey + "apppage3", JSON.stringify(apppage3));
            localStorage.setItem(SaveKey + "apppage4", JSON.stringify(apppage4));
            localStorage.setItem(SaveKey + "supapps", JSON.stringify(supapps));
            localStorage.setItem(SaveKey + "supsites", JSON.stringify(supsites));
            localStorage.setItem(SaveKey + "vbgfile", vbgfile);
            localStorage.setItem(SaveKey + "bgtype", bgtype);
            localStorage.setItem(SaveKey + "lockeddock", JSON.stringify(false));
            document.getElementById("VidBack").style.display = bgtype === "video" ? "block" : "none";
            if (!onealert) updateAlert("Scr-OS has been updated to version 1.2.0.");
        }
    } catch {
        localStorage.setItem(SaveKey + "update1.2", "lol");
        localStorage.setItem(SaveKey + "showseconds", JSON.stringify(showseconds));
        localStorage.setItem(SaveKey + "dockpos", dockpos);
        localStorage.setItem(SaveKey + "simpledock", JSON.stringify(true));
        localStorage.setItem(SaveKey + "appsites3", JSON.stringify(appsites3));
        localStorage.setItem(SaveKey + "appsites4", JSON.stringify(appsites4));
        localStorage.setItem(SaveKey + "apppage3", JSON.stringify(apppage3));
        localStorage.setItem(SaveKey + "apppage4", JSON.stringify(apppage4));
        localStorage.setItem(SaveKey + "supapps", JSON.stringify(supapps));
        localStorage.setItem(SaveKey + "supsites", JSON.stringify(supsites));
        localStorage.setItem(SaveKey + "lockeddock", JSON.stringify(false));
        localStorage.setItem(SaveKey + "vbgfile", vbgfile);
        localStorage.setItem(SaveKey + "bgtype", bgtype);
        document.getElementById("VidBack").style.display = bgtype === "video" ? "block" : "none";
        if (!onealert) updateAlert("Scr-OS has been updated to version 1.2.0.");
    }

    try {
        let saved = localStorage.getItem(SaveKey + "update1.1.3");
        if (saved === "lol") {
            showclock = JSON.parse(localStorage.getItem(SaveKey + "showclock"));
            showappdock = JSON.parse(localStorage.getItem(SaveKey + "showappdock"));
            switchdock = JSON.parse(localStorage.getItem(SaveKey + "switchdock"));
            document.getElementById("clock").style.display = showclock ? "block" : "none";
            document.getElementById("appdock").style.display = showappdock ? "grid" : "none";
            if (switchdock && dockloc === "locked" && inpos[0] === initinpos[0] && inpos[1] === initinpos[1]) {
                document.getElementById("Resp").style.top = "80%";
            } else if (inpos[0] === initinpos[0] && inpos[1] === initinpos[1]) {
                document.getElementById("Resp").style.top = "60%";
            }
            if (switchdock && dockloc !== "locked" && inpos[0] === initinpos[0] && inpos[1] === initinpos[1]) {
                document.getElementById("appdock").style.top = "53%";
                document.getElementById("Resp").style.top = "90%";
            } else if (dockloc !== "locked" && inpos[0] === initinpos[0] && inpos[1] === initinpos[1]) {
                document.getElementById("appdock").style.top = "70%";
                document.getElementById("Resp").style.top = "60%";
            }
        } else {
            localStorage.setItem(SaveKey + "update1.1.3", "lol");
            localStorage.setItem(SaveKey + "showclock", JSON.stringify(showclock));
            localStorage.setItem(SaveKey + "showappdock", JSON.stringify(showappdock));
            localStorage.setItem(SaveKey + "switchdock", JSON.stringify(switchdock));
            if (!onealert) updateAlert("Scr-OS has been updated to version 1.1.3.");
        }
    } catch {
        localStorage.setItem(SaveKey + "update1.1.3", "lol");
        localStorage.setItem(SaveKey + "showclock", JSON.stringify(showclock));
        localStorage.setItem(SaveKey + "showappdock", JSON.stringify(showappdock));
        localStorage.setItem(SaveKey + "switchdock", JSON.stringify(switchdock));
        if (!onealert) updateAlert("Scr-OS has been updated to version 1.1.3.");
    }

    try {
        let saved = localStorage.getItem(SaveKey + "update1.1.2");
        if (saved === "lol") {
            MaxDenominator = localStorage.getItem(SaveKey + "MaxDenominator");
            calcmode = JSON.parse(localStorage.getItem(SaveKey + "calcmode"));
        } else {
            localStorage.setItem(SaveKey + "update1.1.2", "lol");
            localStorage.setItem(SaveKey + "MaxDenominator", MaxDenominator);
            localStorage.setItem(SaveKey + "calcmode", JSON.stringify(calcmode));
            if (!onealert) updateAlert("Scr-OS has been updated to version 1.1.2.");
        }
    } catch {
        localStorage.setItem(SaveKey + "update1.1.2", "lol");
        localStorage.setItem(SaveKey + "MaxDenominator", MaxDenominator);
        localStorage.setItem(SaveKey + "calcmode", JSON.stringify(calcmode));
        if (!onealert) {
            alert("Scr-OS has been updated to version 1.1.2.");
            onealert = true;
        }
    }

    try {
        APIkey = localStorage.getItem(SaveKey + "APIkey");
        if (APIkey == null) {
            APIkey = prompt("Please enter your Google Custom Search API key. You can get one from https://developers.google.com/custom-search/v1/overview");
            localStorage.setItem(SaveKey + "APIkey", APIkey);
        }
    } catch {
        APIkey = prompt("Please enter your Google Custom Search API key. You can get one from https://developers.google.com/custom-search/v1/overview");
        localStorage.setItem(SaveKey + "APIkey", APIkey);
    }

    try {
        let saved = localStorage.getItem(SaveKey + "update1.1");
        if (saved === "lol") {
            appsites1 = JSON.parse(localStorage.getItem(SaveKey + "appsites1"));
            appsites2 = JSON.parse(localStorage.getItem(SaveKey + "appsites2"));
            apppage1 = JSON.parse(localStorage.getItem(SaveKey + "apppage1"));
            apppage2 = JSON.parse(localStorage.getItem(SaveKey + "apppage2"));
            dmode = localStorage.getItem(SaveKey + "defaultmode");
            pages = localStorage.getItem(SaveKey + "pages");
            iconpack = localStorage.getItem(SaveKey + "TerryIconPack");
            textspeed = localStorage.getItem(SaveKey + "textspeed");
            chatmode = dmode !== "search";
        } else {
            localStorage.setItem(SaveKey + "update1.1", "lol");
            localStorage.setItem(SaveKey + "appsites1", JSON.stringify(appsites1));
            localStorage.setItem(SaveKey + "appsites2", JSON.stringify(appsites2));
            localStorage.setItem(SaveKey + "apppage1", JSON.stringify(apppage1));
            localStorage.setItem(SaveKey + "apppage2", JSON.stringify(apppage2));
            localStorage.setItem(SaveKey + "defaultmode", dmode);
            localStorage.setItem(SaveKey + "pages", 2);
            localStorage.setItem(SaveKey + "textspeed", textspeed);
            if (!onealert) {
                alert("Scr-OS has been updated to version 1.1.0.");
                onealert = true;
            }
        }
    } catch {
        localStorage.setItem(SaveKey + "update1.1", "lol");
        localStorage.setItem(SaveKey + "appsites1", JSON.stringify(appsites1));
        localStorage.setItem(SaveKey + "appsites2", JSON.stringify(appsites2));
        localStorage.setItem(SaveKey + "apppage1", JSON.stringify(apppage1));
        localStorage.setItem(SaveKey + "apppage2", JSON.stringify(apppage2));
        localStorage.setItem(SaveKey + "defaultmode", dmode);
        localStorage.setItem(SaveKey + "pages", 2);
        localStorage.setItem(SaveKey + "textspeed", textspeed);
        if (!onealert) {
            alert("Scr-OS has been updated to version 1.1.0.");
            onealert = true;
        }
    }

    try {
        let saved = localStorage.getItem(SaveKey + "savedd");
        if (saved === "lol") {
            const bgfile = localStorage.getItem(SaveKey + "TerryBgFile");
            document.getElementById("mainbg").style.backgroundImage = `url("Images/${bgfile}")`;
            username = localStorage.getItem(SaveKey + "TerryUsername");
            document.body.style.color = localStorage.getItem(SaveKey + "TerryFontColor");
            learntdataquest = JSON.parse(localStorage.getItem(SaveKey + "TerryQuestData"));
            learntdataans = JSON.parse(localStorage.getItem(SaveKey + "TerryAnsData"));
            const colorchange = localStorage.getItem(SaveKey + "TerryOutlColor");
            document.body.style.webkitTextStroke = colorchange;
            fclock = JSON.parse(localStorage.getItem(SaveKey + "ClockFormat"));
            const fontchange = localStorage.getItem(SaveKey + "TerryFont");
            document.body.style.fontFamily = fontchange;
            iconpack = localStorage.getItem(SaveKey + "TerryIconPack");
        } else {
            localStorage.setItem(SaveKey + "savedd", "lol");
            localStorage.setItem(SaveKey + "TerryBgFile", "bg4.jpg");
            localStorage.setItem(SaveKey + "TerryUsername", "Guest");
            localStorage.setItem(SaveKey + "TerryFontColor", "#ffffff");
            localStorage.setItem(SaveKey + "TerryOutlColor", "#ffffff");
            localStorage.setItem(SaveKey + "TerryQuestData", JSON.stringify(learntdataquest));
            localStorage.setItem(SaveKey + "TerryAnsData", JSON.stringify(learntdataans));
            localStorage.setItem(SaveKey + "ClockFormat", JSON.stringify(true));
            localStorage.setItem(SaveKey + "TerryFont", "Poppins");
            localStorage.setItem(SaveKey + "TerryIconPack", "AppIcons");
            fclock = true;
        }
    } catch {
        localStorage.setItem(SaveKey + "savedd", "lol");
        localStorage.setItem(SaveKey + "TerryBgFile", "bg4.jpg");
        localStorage.setItem(SaveKey + "TerryUsername", "Guest");
        localStorage.setItem(SaveKey + "TerryFontColor", "#ffffff");
        localStorage.setItem(SaveKey + "TerryOutlColor", "#ffffff");
        localStorage.setItem(SaveKey + "TerryQuestData", JSON.stringify(learntdataquest));
        localStorage.setItem(SaveKey + "TerryAnsData", JSON.stringify(learntdataans));
        localStorage.setItem(SaveKey + "ClockFormat", JSON.stringify(true));
        localStorage.setItem(SaveKey + "TerryFont", "Poppins");
        localStorage.setItem(SaveKey + "TerryIconPack", "AppIcons");
        fclock = true;
    }

    toggleThemes();
    if (systemSupapps.every(element => supapps.includes(element))) {
        // already present
    } else {
        supapps = supapps.concat(systemSupapps.filter(element => !supapps.includes(element)));
        localStorage.setItem(SaveKey + "supapps", JSON.stringify(supapps));
        supsites = supsites.concat(systemSupsites.filter(element => !supsites.includes(element)));
        localStorage.setItem(SaveKey + "supsites", JSON.stringify(supsites));
    }

    replacedock(false);
}

function initScrOS() {
    checksaved();
    setInterval(changeZoom, 200);
    setInterval(replacedock, 1000);
    setInterval(syncResized, 8);
    setInterval(checkDeviceBattery, 1000);
    setInterval(checkFullScreened, 8);

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        if (key === "enter") {
            if (document.getElementById("Resp") === document.activeElement) respond("Resp");
            if (document.getElementById("terminalInput") === document.activeElement) respond("terminalInput");
        }
        if (key === "arrowup") {
            if (document.getElementById("terminalInput") === document.activeElement) {
                if (lastTerminalinputs.length > 0) {
                    terminalInputCount--;
                    if (terminalInputCount < 0) {
                        terminalInputCount = 0;
                    }
                    document.getElementById("terminalInput").value = lastTerminalinputs[terminalInputCount];
                }
            }
        }
        if (key === "arrowdown") {
            if (document.getElementById("terminalInput") === document.activeElement) {
                if (lastTerminalinputs.length > 0) {
                    terminalInputCount++;
                    if (terminalInputCount >= lastTerminalinputs.length) {
                        terminalInputCount = lastTerminalinputs.length;
                        document.getElementById("terminalInput").value = ">";
                    } else {
                        document.getElementById("terminalInput").value = lastTerminalinputs[terminalInputCount];
                    }
                }
            }
        }
    });

    dragElement(document.getElementById("settingsMenu"));
    dragElement(document.getElementById("appsMenu"));
    dragElement(document.getElementById("helpMenu"));
    dragElement(document.getElementById("terminalMenu"));

    const settingInputs = document.getElementsByClassName("settingUserInput");
    for (let i = 0; i < settingInputs.length; i++) {
        settingInputs[i].addEventListener('blur', persistSettings);
    }

    const smallSettingInputs = document.getElementsByClassName("smallSettingUserInput");
    for (let i = 0; i < smallSettingInputs.length; i++) {
        smallSettingInputs[i].addEventListener('change', persistSettings);
    }
}

window.addEventListener('load', initScrOS);
