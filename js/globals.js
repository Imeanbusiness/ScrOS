
const body = document.body;
const SaveKey = "SCR-OS/";
const devmode = false;
const maxpages = 4;
let popupcount = 0;
let openedPopups = [];
let lastTerminalinputs = [];
let terminalInputCount = 0;
let currentBatteryLevel = 100;
let batteryStartLostTime = Date.now();
let batteryStartGainedTime = Date.now();
let batteryMessage = "Calculating...";
let wifiMessage = "Network Status: Connected to the Internet";
let responding = false;
let lastRespondedType = "Resp";

let greets = ["hi", "hello", "hey", "greetings"];
let openapps = ["open", "open up"];
let apps = ["google","spotify","youtube","facebook","instagram","x","tiktok","reddit","github","netflix","gmail","office","linkedin"];
let systemSupapps = ["settings", "help", "terminal"];
let systemSupsites = ["scros://settingsMenu", "scros://helpMenu", "scros://terminalMenu"];
let supapps = ["gmail","spotify","youtube","instagram","facebook","reddit","x", "amazon", "office", "weather", "linkedin","netflix","github", "wikipedia","twitch", "help", "settings", "terminal"];
let supsites = ["https://www.gmail.com", "https://open.spotify.com/","https://www.youtube.com/","https://www.instagram.com/","https://www.facebook.com/","https://www.reddit.com/","https://X.com/", "https://www.amazon.com/", "https://www.office.com/", "https://weather.com/", "https://www.linkedin.com", "https://www.netflix.com/", "https://github.com/", "https://www.wikipedia.org/", "https://www.twitch.tv/","scros://helpMenu","scros://settingsMenu","scros://terminalMenu"];

let apppage1 = ["gmail","spotify","youtube","instagram","facebook","reddit","x", "amazon", "office", "weather"];
let apppage2 = ["linkedin","netflix","github", "wikipedia","twitch", "", "","","","",];
let apppage3 = ["","","","","","","","","",""];
let apppage4 = ["","","","","","","","","",""];
let appsites1 = ["https://www.gmail.com", "https://open.spotify.com/","https://www.youtube.com/","https://www.instagram.com/","https://www.facebook.com/","https://www.reddit.com/","https://X.com/", "https://www.amazon.com/", "https://www.office.com/", "https://weather.com/"];
let appsites2 = ["https://www.linkedin.com", "https://www.netflix.com/", "https://github.com/", "https://www.wikipedia.org/", "https://www.twitch.tv/"];
let appsites3 = ["","","","","","","","","",""];
let appsites4 = ["","","","","","","","","",""];
let sites = ["https://www.google.com/", "https://open.spotify.com/","https://www.youtube.com/","https://www.facebook.com/","https://www.instagram.com/","https://X.com/","https://www.tiktok.com/","https://www.reddit.com/","https://github.com/","https://www.netflix.com/", "https://www.gmail.com", "https://www.office.com/", "https://www.linkedin.com"];

let APIkey;
let learntdataans = ["My Creator, Imeanbusiness, of course!", "I am a chat bot, named Terry!"];
let learntdataquest = ["who made you?", "what are you?"];
let dockrow1 = ["Gmail", "Spotify", "Youtube", "Instagram", "Facebook"];
let batteryInfo = { levelLost: 0, timeLost: 0, levelGained: 0, timeGained: 0 };
let appWindowState = {
    sizes: [ [600, 800], [600, 800], [600, 800], [600, 800] ],
    fullscreened: [false, false, false, false],
    resized: [false, false, false, false],
    positions: [ [50, 50], [50, 50], [50, 50], [50, 50] ],
    names: ["settingsMenu", "appsMenu", "helpMenu", "terminalMenu"],
    possibleWindows: ["settingsMenu", "appsMenu", "helpMenu", "terminalMenu"],
    priorityWindows: [1, 2, 3, 4]
};

let batteryCalibrating = false;
let firstCharge = true;
let firstDischarge = true;
let complexDock = false;
let complexDockPos = [50, 25];
let complexDockLayout = { columns: 5, rows: 2 };
let complexDockPage = ["gmail","spotify","youtube","instagram","facebook","reddit","x", "amazon", "office", "weather"];
let complexDockSites = ["https://www.gmail.com", "https://open.spotify.com/","https://www.youtube.com/","https://www.instagram.com/","https://www.facebook.com/","https://www.reddit.com/","https://X.com/", "https://www.amazon.com/", "https://www.office.com/", "https://weather.com/"];
let currentDockMode = "?";

let dmode = "search";
let pages = 2;
let username = "Guest";
let docklock = "open";
let curpage = 1;
let textspeed = 10;
let calcmode = true;
let MaxDenominator = 500;
let showappdock = true;
let showclock = true;
let lockeddock = false;
let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;
let dockdownlmt = ((clientHeight+130)/clientHeight)*100;
let dockdownchklmt = ((clientHeight-130)/clientHeight);
let dockwidthlmt = ((clientWidth+100)/clientWidth)*100;
let dockwidthchklmt = ((clientWidth-100)/clientWidth);
let iconpack = "AppIcons";
let theme = "light";
let simpledock = true;
let dockpos = 2;
let orgians = "";
let resettypecount = 0;
let feelings = "none";
let showseconds = false;
let bgtype = "image";
let vbgfile = "City.mp4";
let dockloc = "open";
let clockpos = ["50", "97"];
let fclock = false;
let inpos = ["50", "10"];
let initinpos = ["50", "10.001"];
let outpos = ["50", "65"];
let showTerry = true;
let BodyZoom = 1;
let currentapp = 0;
