
function persistSettings() {
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
        const sysTheme = document.getElementById("systemTheme").value === "Light" ? "light" : "dark";
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
        const outputValue = document.getElementById("outputFontSize").value;
        if (outputValue >= 8 && outputValue <= 150) {
            Save("outputsize", outputValue);
        }
    } catch (error) {
        console.error("closeSettings: outputFontSize", error);
    }

    try {
        const clockValue = document.getElementById("clockFontSize").value;
        if (clockValue >= 8 && clockValue <= 300) {
            Save("clocksize", clockValue);
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
        const desiredColumns = document.getElementById("complexDockColumns").value;
        if (desiredColumns > 0 && desiredColumns <= 15) {
            complexDockLayout.columns = desiredColumns;
            Save("complexDockLayout", JSON.stringify(complexDockLayout));
        } else {
            console.warn("closeSettings: complexDockColumns value out of range, must be between 1 and 15");
        }
    } catch (error) {
        console.error("closeSettings: complexDockColumns", error);
    }

    try {
        const desiredRows = document.getElementById("complexDockRows").value;
        if (desiredRows > 0 && desiredRows <= 15) {
            complexDockLayout.rows = desiredRows;
            Save("complexDockLayout", JSON.stringify(complexDockLayout));
        } else {
            console.warn("closeSettings: complexDockRows value out of range, must be between 1 and 15");
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
        const complexDockPosValue = parsePosition(document.getElementById("complexDockPos").value);
        if (complexDockPosValue) {
            complexDockPosValue[1] = 100 - complexDockPosValue[1];
            Save("complexDockPos", JSON.stringify(complexDockPosValue));
        }
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
        const maxDenominator = document.getElementById("maxDenominator").value;
        if (maxDenominator > 0 && maxDenominator <= 1000) {
            Save("MaxDenominator", maxDenominator);
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
        const textSpeedValue = document.getElementById("textSpeed").value;
        if (textSpeedValue > 0 && textSpeedValue <= 100) {
            Save("textspeed", textSpeedValue);
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
    } catch (e) {
        console.warn("toggleThemes: toggleSettingThemes failed", e);
    }
    const invertFilter = theme === "light" ? "invert(0%)" : "invert(100%)";
    document.getElementById("settingsButton").style.filter = invertFilter;
    document.getElementById("settingsButton2").style.filter = invertFilter;
    document.getElementById("menuButton").style.filter = invertFilter;
    document.getElementById("menuButton2").style.filter = invertFilter;
}

function toggleSettingThemes() {
    const settingsX = document.getElementsByClassName("systemX");
    const settingsFS = document.getElementsByClassName("systemFS");
    const systemMenus = document.getElementsByClassName("systemMenu");
    const systemTitles = document.getElementsByClassName("systemTitle");
    const settingBars = document.getElementsByClassName("settingBar");

    if (theme === "light") {
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
    const realAppsMenu = document.getElementById("realAppsMenu");
    realAppsMenu.replaceChildren();
    decideZ("appsMenu");

    const menu = document.getElementById("appsMenu");
    menu.style.display = menu.style.display === "grid" ? "none" : "grid";

    const paddingOffset = 20;
    const appWidth = menu.offsetWidth - paddingOffset * 2;
    const appColumns = Math.floor(appWidth / 130);
    const appRows = Math.ceil(supapps.length / appColumns);
    realAppsMenu.style.gridTemplateRows = "130px 40px ".repeat(appRows);
    realAppsMenu.style.gridTemplateColumns = "130px ".repeat(appColumns);
    realAppsMenu.style.rowGap = "15px";

    const tempApps = Array.from(supapps);
    tempApps.sort();
    let appCount = 0;
    let textCount = 0;

    while (textCount < supapps.length) {
        for (let i = 0; i < appColumns; i++) {
            const id = supapps.indexOf(tempApps[appCount]);
            const appId = "appListed" + id;
            const newApp = document.createElement("img");
            newApp.id = appId;
            newApp.src = iconpack + "/" + supapps[id] + ".png";
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
            const id = supapps.indexOf(tempApps[textCount]);
            const newTitle = document.createElement("p");
            let titleText = supapps[id][0].toUpperCase();
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
    toggleSettingThemes();
    const settingsMenu = document.getElementById("settingsMenu");
    if (settingsMenu.style.display === "grid") {
        settingsMenu.style.display = "none";
        return;
    }

    document.getElementById("TerryBgFile").value = Load("TerryBgFile");
    document.getElementById("vbgfile").value = Load("vbgfile");
    const bgtypeValue = Load("bgtype");
    document.getElementById("bgtype").value = bgtypeValue === "video" ? "Video" : "Static";
    document.getElementById("systemTheme").value = Load("theme") === "light" ? "Light" : "Dark";
    document.getElementById("TerryFontColor").value = Load("TerryFontColor");
    document.getElementById("TerryOutlColor").value = Load("TerryOutlColor");
    document.getElementById("outputFontSize").value = Load("outputsize");
    document.getElementById("clockFontSize").value = Load("clocksize");
    document.getElementById("TerryFont").value = Load("TerryFont");
    document.getElementById("iconPack").value = Load("TerryIconPack");
    document.getElementById("appDockPages").value = Load("pages") || "1";
    document.getElementById("dockMode").value = Load("simpledock") === "false" ? "Fluid" : "Simple";

    const dockPosition = Load("dockpos");
    document.getElementById("dockPosition").value = dockPosition === "1" ? "Left" : dockPosition === "3" ? "Right" : "Bottom";
    document.getElementById("lockDock").value = Load("lockeddock") === "true" ? "Locked" : "Fluid";
    document.getElementById("switchDock").value = Load("switchdock") === "true" ? "Switch" : "Normal";
    document.getElementById("complexDock").value = Load("complexDock") === "true" ? "On" : "Off";
    document.getElementById("complexDockColumns").value = Load("complexDockLayout") ? JSON.parse(Load("complexDockLayout")).columns : "3";
    document.getElementById("complexDockRows").value = Load("complexDockLayout") ? JSON.parse(Load("complexDockLayout")).rows : "3";
    document.getElementById("showDock").value = Load("showappdock") === "false" ? "Off" : "On";
    document.getElementById("inputPosition").value = Load("inpos") ? JSON.parse(Load("inpos")).join(",") : "";
    document.getElementById("outputPosition").value = Load("outpos") ? JSON.parse(Load("outpos")).join(",") : "";
    document.getElementById("clockPosition").value = Load("clockpos") ? JSON.parse(Load("clockpos")).join(",") : "";
    const compPos = Load("complexDockPos") ? JSON.parse(Load("complexDockPos")) : [50, 25];
    compPos[1] = 100 - compPos[1];
    document.getElementById("complexDockPos").value = compPos.join(",");
    document.getElementById("dockYOffset").value = Load("docktopoffset") || "";
    document.getElementById("showSeconds").value = Load("showseconds") === "false" ? "Off" : "On";
    document.getElementById("clockHourFormat").value = Load("ClockFormat") === "false" ? "12" : "24";
    document.getElementById("showClock").value = Load("showclock") === "false" ? "Off" : "On";
    document.getElementById("showTerry").value = Load("showTerry") === "false" ? "Off" : "On";
    document.getElementById("maxDenominator").value = Load("MaxDenominator") || "";
    document.getElementById("calculatorAngleMode").value = Load("calcmode") === "true" ? "Degrees" : "Radians";
    document.getElementById("textSpeed").value = Load("textspeed") || "";
    settingsMenu.style.display = "grid";
}

function syncResizedSettings() {
    const settingsMenu = document.getElementById("settingsMenu");
    if (appWindowState.fullscreened[0]) {
        settingsMenu.style.resize = "none";
    } else {
        settingsMenu.style.resize = "both";
    }

    if (settingsMenu.style.display === "none") return;

    const settingsMenuWidth = settingsMenu.offsetWidth;
    const settingsMenuHeight = settingsMenu.offsetHeight;
    document.getElementById("settingsTitle").style.width = settingsMenuWidth + "px";
    document.getElementById("realSettingsMenu").style.height = (settingsMenuHeight - 120) + "px";
    document.getElementById("realSettingsMenu").style.width = settingsMenuWidth + "px";

    for (let i = 0; i < document.getElementsByClassName("settingBar").length; i++) {
        let newLeft = (settingsMenuWidth - 540) / 2;
        if (newLeft < 0) newLeft = 0;
        document.getElementsByClassName("settingBar")[i].style.left = newLeft + "px";
    }
}

function syncResizedAppsMenu() {
    const appsMenu = document.getElementById("appsMenu");
    const realAppsMenu = document.getElementById("realAppsMenu");
    if (appsMenu.offsetWidth === appWindowState.sizes[1][0] && appsMenu.offsetHeight === appWindowState.sizes[1][1]) {
        return;
    } else {
        if (!appWindowState.fullscreened[1]) appWindowState.sizes[1] = [appsMenu.offsetWidth, appsMenu.offsetHeight];
    }

    if (appWindowState.fullscreened[1]) {
        appsMenu.style.resize = "none";
    } else {
        appsMenu.style.resize = "both";
    }

    if (appsMenu.style.display === "none") return;

    document.getElementById("appsTitle").style.width = appsMenu.offsetWidth + "px";
    realAppsMenu.style.height = (appsMenu.offsetHeight - 120) + "px";
    realAppsMenu.style.width = appsMenu.offsetWidth + "px";

    const paddingOffset = 20;
    const appWidth = appsMenu.offsetWidth - paddingOffset * 2;
    const appColumns = Math.floor(appWidth / 130);
    const appRows = Math.ceil(supapps.length / appColumns);
    realAppsMenu.style.gridTemplateRows = "130px 40px ".repeat(appRows);
    realAppsMenu.style.gridTemplateColumns = "130px ".repeat(appColumns);
    realAppsMenu.style.rowGap = "15px";

    const tempApps = Array.from(supapps);
    tempApps.sort();
    let appCount = 0;
    let textCount = 0;

    while (textCount < supapps.length) {
        for (let i = 0; i < appColumns; i++) {
            const id = supapps.indexOf(tempApps[appCount]);
            const appId = "appListed" + id;
            const newApp = document.createElement("img");
            newApp.id = appId;
            newApp.src = iconpack + "/" + supapps[id] + ".png";
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
            const id = supapps.indexOf(tempApps[textCount]);
            const newTitle = document.createElement("p");
            let titleText = supapps[id][0].toUpperCase();
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
    if (terminalMenu.offsetWidth === appWindowState.sizes[3][0] && terminalMenu.offsetHeight === appWindowState.sizes[3][1]) {
        return;
    } else {
        if (!appWindowState.fullscreened[3]) appWindowState.sizes[3] = [terminalMenu.offsetWidth, terminalMenu.offsetHeight];
    }

    const Width = terminalMenu.offsetWidth;
    const Height = terminalMenu.offsetHeight;
    realTerminalMenu.style.gridTemplateRows = (Height - 120 - 50) + "px 50px";
    document.getElementById("terminalInput").style.width = Width + "px";
    document.getElementById("terminalOutput").style.height = (Height - 120 - 50) + "px";
    document.getElementById("terminalOutput").style.width = Width + "px";
}

function syncResized() {
    if (document.getElementById("settingsMenu").style.display === "grid") syncResizedSettings();
    if (document.getElementById("appsMenu").style.display === "grid") syncResizedAppsMenu();

    for (let i = 0; i < appWindowState.names.length; i++) {
        if (appWindowState.names[i] === "settingsMenu" || appWindowState.names[i] === "appsMenu") {
            continue;
        }
        const menu = document.getElementById(appWindowState.names[i]);
        if (menu.style.display === "grid") {
            const MenuWidth = menu.offsetWidth;
            const MenuHeight = menu.offsetHeight;
            const appName = appWindowState.names[i].replace("Menu", "");
            const appTitle = appName[0].toUpperCase() + appName.slice(1);
            document.getElementById(appName + "Title").style.width = MenuWidth + "px";
            document.getElementById("real" + appTitle + "Menu").style.height = (MenuHeight - 120) + "px";
            document.getElementById("real" + appTitle + "Menu").style.width = MenuWidth + "px";
        }
    }

    if (document.getElementById("terminalMenu").style.display === "grid") syncResizedTerminal();
}

function decideZ(id) {
    if (appWindowState.possibleWindows[appWindowState.priorityWindows.indexOf(1)] === id) {
        return;
    }
    for (let i = 0; i < appWindowState.possibleWindows.length; i++) {
        if (appWindowState.possibleWindows[i] !== id) {
            appWindowState.priorityWindows[i]++;
        } else {
            appWindowState.priorityWindows[i] = 1;
        }
        document.getElementById(appWindowState.possibleWindows[i]).style.zIndex = 100 - appWindowState.priorityWindows[i];
    }
}

function fullScreen(app) {
    const appElement = document.getElementById(app);
    const appID = appWindowState.names.indexOf(app);
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
        appElement.style.height = "100%";
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
            appElement.style.height = "100%";
            appElement.style.top = "50%";
            appElement.style.left = "50%";
        }
    }
}

function closeWindow(id) {
    if (id === "settingsMenu") {
        closeSettings();
    } else {
        document.getElementById(id).style.display = "none";
    }
}

function openSystemApp(appID) {
    if (appID === "settingsMenu") {
        openSettings();
    } else if (appID === "appsMenu") {
        openAppsMenu();
    } else {
        document.getElementById(appID).style.display = "grid";
    }
}

function dragElement(elmnt) {
    let appID = appWindowState.names.indexOf(elmnt.id);
    if (appWindowState.fullscreened[appID]) return;

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = document.getElementById(elmnt.id + "Header");
    if (header) {
        header.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        let dy = elmnt.offsetTop - pos2;
        let dx = elmnt.offsetLeft - pos1;
        if (dy < elmnt.offsetHeight / 2) dy = elmnt.offsetHeight / 2;
        if (dx < 0) dx = 0;
        if (dx > clientWidth / BodyZoom) dx = clientWidth / BodyZoom;
        if (dy > clientHeight / BodyZoom) dy = clientHeight / BodyZoom;
        elmnt.style.top = dy + "px";
        elmnt.style.left = dx + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
