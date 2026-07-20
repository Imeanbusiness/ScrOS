
async function replacedock(checking = true) {
    var menuButton1 = document.getElementById("menuButton");
    var settingsButton1 = document.getElementById("settingsButton");
    var menuButton2 = document.getElementById("menuButton2");
    var settingsButton2 = document.getElementById("settingsButton2");

    var batteryIndicator1 = document.getElementById("batteryIndicator1");
    var batteryIndicator2 = document.getElementById("batteryIndicator2");
    var batteryIndicator3 = document.getElementById("batteryIndicator3");

    var wifiIcon1 = document.getElementById("wifiIcon1");
    var wifiIcon2 = document.getElementById("wifiIcon2");
    var wifiIcon3 = document.getElementById("wifiIcon3");

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
                    var newIcon = document.createElement("a");
                    newIcon.id = "dockclick"+(i+1);
                    document.getElementById("appdock").appendChild(newIcon);
                    var img = document.createElement("img");
                    img.id = "dockpic"+(i+1);
                    img.src = iconpack+"/"+[apppage1[i]]+".png";
                    document.getElementById("dockclick"+(i+1)).appendChild(img);
                    var newText = document.createElement("p");
                    newText.id = "docktext"+(i+1);
                    try {
                        newText.innerHTML = apppage1[i][0].toUpperCase() + apppage1[i].slice(1);
                    } catch {
                        newText.innerHTML = apppage1[i][0].toUpperCase();
                    }
                    if (apppage1[i] == "None") newText.innerHTML = " ";
                    document.getElementById("appdock").appendChild(newText);
                    document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites1[i]+"')");
                    document.getElementById("dockclick"+(i+1)).style.cursor = "pointer";
                }

                var leftarrow = document.createElement("p");
                var rightarrow = document.createElement("p");
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
                document.getElementById("leftarrow").style.gridRow = "1";
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
                    dockloc = "locked";
                    const ZoomFactor = clientHeight/1080;
                    if (!checking) document.getElementById("appdock").style.left = 100-dockwidthlmt+"%";
                    document.getElementById("appdock").style.top = (63*ZoomFactor-localStorage.getItem(SaveKey+"docktopoffset"))+"%";
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
                    document.getElementById("dockclick"+(i+1)).style.gridColumn = (i+2);
                    document.getElementById("dockclick"+(i+1)).style.gridRow = "1";
                    document.getElementById("docktext"+(i+1)).style.gridColumn = (i+2);
                    document.getElementById("docktext"+(i+1)).style.gridRow = "2";
                }
                for (let i = 5; i < 10; i++) {
                    document.getElementById("dockclick"+(i+1)).style.gridColumn = (i+2);
                    document.getElementById("dockclick"+(i+1)).style.gridRow = "1";
                    document.getElementById("docktext"+(i+1)).style.gridColumn = (i+2);
                    document.getElementById("docktext"+(i+1)).style.gridRow = "2";
                }
                dockloc = "locked";
                document.getElementById("appdock").style.height = "50px";
                if (!checking) document.getElementById("appdock").style.top = dockdownlmt + "%";
                document.getElementById("appdock").style.left = "50%";
            }
            if (dockpos == 3) {
                document.getElementById("appdock").style.gridTemplateColumns = "70px";
                document.getElementById("appdock").style.height = "100vh";
                document.getElementById("appdock").style.gridTemplateRows = "25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 55px 25px 25px";
                document.getElementById("leftarrow").style.gridColumn = "1";
                document.getElementById("leftarrow").style.gridRow = "1";
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
                    dockloc = "locked";
                    const ZoomFactor = clientHeight/1080;
                    if (!checking) document.getElementById("appdock").style.left = dockwidthlmt+"%";
                    document.getElementById("appdock").style.top = (63*ZoomFactor-localStorage.getItem(SaveKey+"docktopoffset"))+"%";
                }
            }
            if (lockeddock && !simpledock) {
                if (dockpos == 1) {
                    var settop = (30/clientWidth*100)*BodyZoom;
                    document.getElementById("appdock").style.left = settop  + "%";
                }
                if (dockpos == 2) {
                    var settop = 100-(90/clientHeight*100)*BodyZoom;
                    document.getElementById("appdock").style.top = settop  + "%";
                }
                if (dockpos == 3) {
                    var settop = 100-(30/clientHeight*100)*BodyZoom;
                    document.getElementById("appdock").style.left = settop  + "%";
                }
            }
         } else {
             document.getElementById("appdock").style.zIndex = 5;
                if (currentDockMode != "complex") {
                    document.getElementById("appdock").replaceChildren();
                    for (let i = 0; i < complexDockLayout.columns*complexDockLayout.rows; i++) {
                        if (i >= complexDockPage.length) break;
                        var setRow = (Math.floor(i / complexDockLayout.columns)).toFixed(0) * 2 + 1;
                        var setColumn = ((i % complexDockLayout.columns) + 1).toFixed(0);
                        var newIcon = document.createElement("a");
                        newIcon.id = "dockclick"+(i+1);
                        document.getElementById("appdock").appendChild(newIcon);
                        document.getElementById("dockclick"+(i+1)).style.gridColumn = (setColumn);
                        document.getElementById("dockclick"+(i+1)).style.gridRow = (setRow);
                        var img = document.createElement("img");
                        img.id = "dockpic"+(i+1);
                        img.src = iconpack+"/"+[complexDockPage[i]]+".png";
                        document.getElementById("dockclick"+(i+1)).appendChild(img);
                        var newText = document.createElement("p");
                        newText.id = "docktext"+(i+1);
                        try {
                            newText.innerHTML = complexDockPage[i][0].toUpperCase() + complexDockPage[i].slice(1);
                        } catch {
                            newText.innerHTML = complexDockPage[i][0].toUpperCase();
                        }
                        document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+complexDockSites[i]+"')");
                        if (complexDockPage[i] == "none" || complexDockPage[i] == "None") {
                            document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
                            newText.innerHTML = " ";
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
                var newIcon = document.createElement("a");
                newIcon.id = "dockclick"+(i+1);
                document.getElementById("appdock").appendChild(newIcon);
                var img = document.createElement("img");
                img.id = "dockpic"+(i+1);
                img.src = iconpack+"/"+[apppage1[i]]+".png";
                document.getElementById("dockclick"+(i+1)).appendChild(img);
                var newText = document.createElement("p");
                newText.id = "docktext"+(i+1);
                try {
                    newText.innerHTML = apppage1[i][0].toUpperCase() + apppage1[i].slice(1);
                } catch {
                    newText.innerHTML = apppage1[i][0].toUpperCase();
                }
                if (apppage1[i] == "None") newText.innerHTML = " ";
                document.getElementById("appdock").appendChild(newText);
                document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+appsites1[i]+"')");
                document.getElementById("dockclick"+(i+1)).style.cursor = "pointer";
            }
            var leftarrow = document.createElement("p");
            var rightarrow = document.createElement("p");
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
        localStorage.setItem(SaveKey+"switchdock", JSON.stringify(switchdock));
    }
}

function openApp(appsName) {
    if (appsName.includes("scros://")) {
        openSystemApp(appsName.replace("scros://", ""));
        decideZ(appsName.replace("scros://", ""));
        return;
    }
    var newPopup = window.open(appsName, "mypopup"+popupcount, "width=800,height=600,resizable=yes,scrollbars=yes");
    openedPopups.push(newPopup);
    popupcount++;
}

function changeZoom() {
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
    var WindowPixels = viewportHeight * viewportWidth;
    var intendedWindowSize = 2048 * 1152;
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
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
    var WindowPixels = viewportHeight * viewportWidth;
    var intendedWindowSize = 2048 * 1152;
    BodyZoom = Math.sqrt((WindowPixels / intendedWindowSize)) * 1.2;
    return BodyZoom;
}

async function pagechange(dir) {
    if (dir=="right") {
        curpage +=1;
        if (curpage>pages) {
            curpage = 1;
        }
        await updateDockPage();
    } else if (dir=="left") {
        curpage -=1;
        if (curpage<1) {
            curpage = pages;
        }
        await updateDockPage();
    }
}

async function updateDockPage() {
    var pageData = curpage === 1 ? apppage1 : curpage === 2 ? apppage2 : curpage === 3 ? apppage3 : apppage4;
    var pageSites = curpage === 1 ? appsites1 : curpage === 2 ? appsites2 : curpage === 3 ? appsites3 : appsites4;
    for (let i = 0; i < 10; i++) {
        await sleep(16.666666666666668);
        var itemd = pageData[i] || "none";
        if (itemd === "") itemd = "none";
        itemd = itemd.replace(itemd[0], itemd[0].toUpperCase());
        if (itemd === "None") {
            document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "");
            document.getElementById("dockpic"+(i+1)).src = "Images/None.png";
            document.getElementById("dockclick"+(i+1)).href = "#";
            document.getElementById("docktext"+(i+1)).innerHTML = "";
        } else {
            document.getElementById("dockpic"+(i+1)).src = iconpack+"/"+itemd+".png";
            document.getElementById("dockclick"+(i+1)).href = "#";
            document.getElementById("dockclick"+(i+1)).setAttribute('onclick', "openApp('"+pageSites[i]+"')");
            document.getElementById("docktext"+(i+1)).innerHTML = itemd;
        }
    }
}

async function movedockup() {
    document.getElementById("appdock").style.zIndex = "9999";
    var curtop = parseFloat(document.getElementById("appdock").style.top);
    var spaceNeeded = 10 * Math.sqrt(BodyZoom);
    if (((100 - curtop)) > spaceNeeded) {
        return;
    }
    for (let i =0 ; i < 1000; i++) {
        await sleep(5);
        curtop = parseFloat(document.getElementById("appdock").style.top);
        document.getElementById("appdock").style.top = curtop - (0.05 * BodyZoom) + "%";
        if (((100 - curtop)) > spaceNeeded) {
            break;
        }
    }
}

async function leftmovedockright() {
    if (complexDock) return;
    document.getElementById("appdock").style.zIndex = "9999";
    var curtop = parseFloat(document.getElementById("appdock").style.left);
    var spaceNeeded = 18 * Math.sqrt(BodyZoom);
    if ((curtop/100*clientWidth) > spaceNeeded) {
        return;
    }
    for (let i =0 ; i < 1000; i++) {
        await sleep(5);
        curtop = parseFloat(document.getElementById("appdock").style.left);
        document.getElementById("appdock").style.left = curtop + (0.05 * BodyZoom) + "%";
        if ((curtop/100*clientWidth) > spaceNeeded) {
            break;
        }
    }
}

async function rightmovedockleft() {
    if (complexDock) return;
    document.getElementById("appdock").style.zIndex = "9999";
    var curtop = parseFloat(document.getElementById("appdock").style.left);
    var spaceNeeded = 18 * Math.sqrt(BodyZoom);
    if (((curtop/100)*clientWidth) < clientWidth-spaceNeeded) {
        return;
    }
    for (let i =0 ; i < 1000; i++) {
        await sleep(5);
        curtop = parseFloat(document.getElementById("appdock").style.left);
        document.getElementById("appdock").style.left = curtop - (0.05 * BodyZoom) + "%";
        if (((curtop/100)*clientWidth) < clientWidth-spaceNeeded) {
            break;
        }
    }
}

async function rightmovedockright() {
    if (complexDock) return;
    var curtop = parseFloat(document.getElementById("appdock").style.left);
    if ((curtop/100*clientWidth) > (dockwidthlmt/100*clientWidth)) {
        return;
    }
    for (let i =0 ; i < 1000; i++) {
        await sleep(5);
        curtop = parseFloat(document.getElementById("appdock").style.left);
        document.getElementById("appdock").style.left = curtop + (0.05 * BodyZoom) + "%";
        if ((curtop/100*clientWidth) > (dockwidthlmt/100*clientWidth)) {
            document.getElementById("appdock").style.zIndex = "-9999";
            break;
        }
    }
}

async function leftmovedockleft() {
    if (complexDock) return;
    var curtop = parseFloat(document.getElementById("appdock").style.left);
    if ((curtop/100*clientWidth) < -(dockwidthlmt/100-1)*clientWidth) {
        return;
    }
    for (let i =0 ; i < 1000; i++) {
        await sleep(5);
        curtop = parseFloat(document.getElementById("appdock").style.left);
        document.getElementById("appdock").style.left = curtop - (0.05 * BodyZoom) + "%";
        if ((curtop/100*clientWidth) < -(dockwidthlmt/100-1)*clientWidth) {
            document.getElementById("appdock").style.zIndex = "-9999";
            break;
        }
    }
}

function openAppsMenu() {
    var realAppsMenu = document.getElementById("realAppsMenu");
    realAppsMenu.replaceChildren();
    decideZ("appsMenu");
    if (document.getElementById("appsMenu").style.display == "grid") {
        document.getElementById("appsMenu").style.display = "none";
    } else {
        document.getElementById("appsMenu").style.display = "grid";
    }

    var paddingOffset = 20;
    var appWidth = document.getElementById("appsMenu").offsetWidth - paddingOffset*2;
    var appColumns = Math.floor(appWidth / 130);
    var appRows = Math.ceil(supapps.length / appColumns);
    var appTemplateRows = "130px 40px ".repeat(appRows);
    var appTemplateColumns = "130px ".repeat(appColumns);
    realAppsMenu.style.gridTemplateRows = appTemplateRows;
    realAppsMenu.style.gridTemplateColumns = appTemplateColumns;
    realAppsMenu.style.rowGap = "15px";
    var tempApps = Array.from(supapps);
    tempApps.sort();
    var appCount = 0;
    var textCount = 0;
    while (textCount < supapps.length) {
        for (let i = 0; i < appColumns; i++) {
            var id = supapps.indexOf(tempApps[appCount]);
            var appId = "appListed"+id;
            var newApp = document.createElement("img");
            newApp.id = appId;
            newApp.src = iconpack+"/"+supapps[id]+".png";
            var siteUrl = supsites[id];
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
            var id = supapps.indexOf(tempApps[textCount]);
            var newTitle = document.createElement("p");
            var titleText = supapps[id][0].toUpperCase();
            if (supapps[id].length > 1) titleText += supapps[id].slice(1);
            newTitle.innerHTML = titleText;
            var titleSite = supsites[id];
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

function syncResizedAppsMenu() {
    var appsMenu = document.getElementById("appsMenu");
    var realAppsMenu = document.getElementById("realAppsMenu");
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
    var appsMenuWidth = document.getElementById("appsMenu").offsetWidth;
    var appsMenuHeight = document.getElementById("appsMenu").offsetHeight;
    document.getElementById("appsTitle").style.width = appsMenuWidth + "px";
    realAppsMenu.style.height = (appsMenuHeight-120) + "px";
    realAppsMenu.style.width = appsMenuWidth + "px";
    realAppsMenu.replaceChildren();
    var paddingOffset = 20;
    var appWidth = document.getElementById("appsMenu").offsetWidth - paddingOffset*2;
    var appColumns = Math.floor(appWidth / 130);
    var appRows = Math.ceil(supapps.length / appColumns);
    var appTemplateRows = "130px 40px ".repeat(appRows);
    var appTemplateColumns = "130px ".repeat(appColumns);
    realAppsMenu.style.gridTemplateRows = appTemplateRows;
    realAppsMenu.style.gridTemplateColumns = appTemplateColumns;
    realAppsMenu.style.rowGap = "15px";
    var tempApps = Array.from(supapps);
    tempApps.sort();
    var appCount = 0;
    var textCount = 0;
    while (textCount < supapps.length) {
        for (let i = 0; i < appColumns; i++) {
            var id = supapps.indexOf(tempApps[appCount]);
            var appId = "appListed"+id;
            var newApp = document.createElement("img");
            newApp.id = appId;
            newApp.src = iconpack+"/"+supapps[id]+".png";
            var siteUrl = supsites[id];
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
            var id = supapps.indexOf(tempApps[textCount]);
            var newTitle = document.createElement("p");
            var titleText = supapps[id][0].toUpperCase();
            if (supapps[id].length > 1) titleText += supapps[id].slice(1);
            newTitle.innerHTML = titleText;
            var titleSite = supsites[id];
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
    var terminalMenu = document.getElementById("terminalMenu");
    var realTerminalMenu = document.getElementById("realTerminalMenu");
    if (terminalMenu.offsetWidth == appWindowState.sizes[3][0] && terminalMenu.offsetHeight == appWindowState.sizes[3][1]) {
        return;
    } else {
        if (!appWindowState.fullscreened[3]) appWindowState.sizes[3] = [terminalMenu.offsetWidth, terminalMenu.offsetHeight];
    }
    var Width = terminalMenu.offsetWidth;
    var Height = terminalMenu.offsetHeight;
    realTerminalMenu.style.gridTemplateRows = (Height-120-50) + "px 50px";
    document.getElementById("terminalInput").style.width = Width+"px";
    document.getElementById("terminalOutput").style.height = (Height - 120 - 50) + "px";
    document.getElementById("terminalOutput").style.width = Width+"px";
}

function syncResized() {
    if (document.getElementById("settingsMenu").style.display == "grid") syncResizedSettings();
    if (document.getElementById("appsMenu").style.display == "grid") syncResizedAppsMenu();
    for (let i = 0; i < appWindowState.names.length; i++) {
        if (appWindowState.names[i] == "settingsMenu" || appWindowState.names[i] == "appsMenu") {
            continue;
        }
        if (document.getElementById(appWindowState.names[i]).style.display == "grid") {
            var MenuWidth = document.getElementById(appWindowState.names[i]).offsetWidth;
            var MenuHeight = document.getElementById(appWindowState.names[i]).offsetHeight;
            var appName = appWindowState.names[i].replace("Menu", "");
            var appTitle = appName[0].toUpperCase() + appName.slice(1);
            document.getElementById(appName+"Title").style.width = MenuWidth + "px";
            document.getElementById("real"+appTitle+"Menu").style.height = (MenuHeight-120) + "px";
            document.getElementById("real"+appTitle+"Menu").style.width = MenuWidth + "px";
        }
    }
    if (document.getElementById("terminalMenu").style.display == "grid") syncResizedTerminal();
}
