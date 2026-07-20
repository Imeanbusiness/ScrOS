
function checkDeviceBattery() {
    const batteryChargings = document.getElementsByClassName("batteryCharging");
    let charging = false;
    const wifiIcons = document.getElementsByClassName("wifiIcon");

    if (navigator.onLine) {
        for (let i = 0; i < wifiIcons.length; i++) {
            wifiIcons[i].src = "Images/Wifi.png";
        }
        wifiMessage = "Network Status: Connected to the internet.";
    } else {
        for (let i = 0; i < wifiIcons.length; i++) {
            wifiIcons[i].src = "Images/noWifi.png";
        }
        wifiMessage = "Network Status: Offline.";
    }

    const batteryCharts = document.getElementsByClassName("batteryChart");
    for (let i = 0; i < batteryChargings.length; i++) {
        batteryChargings[i].style.height = batteryCharts[i].offsetHeight + "px";
        batteryChargings[i].style.width = batteryChargings[i].offsetHeight + "px";
    }

    if ('getBattery' in navigator) {
        let batteryLevel = 100;
        navigator.getBattery().then((battery) => {
            const percentage = battery.level * 100;
            batteryLevel = percentage;
            if (currentBatteryLevel === 100) {
                currentBatteryLevel = percentage;
            }

            for (let i = 0; i < batteryCharts.length; i++) {
                batteryCharts[i].style.width = percentage + "%";
            }
            const batteryPercentages = document.getElementsByClassName("batteryPercentage");
            for (let i = 0; i < batteryPercentages.length; i++) {
                batteryPercentages[i].innerHTML = percentage.toFixed(0) + "%";
            }
        });

        navigator.getBattery().then(function(battery) {
            if (battery.charging) {
                batteryStartLostTime = Date.now();
                charging = true;
                if (batteryLevel !== currentBatteryLevel && batteryCalibrating) {
                    if (batteryLevel - currentBatteryLevel > 1) firstCharge = false;
                    if (firstCharge) {
                        batteryStartGainedTime = Date.now();
                        currentBatteryLevel = batteryLevel;
                    }
                    if (batteryLevel - currentBatteryLevel > 0 && (Date.now() - batteryStartGainedTime) / 1000 > 20 && !firstCharge) {
                        batteryInfo.levelGained += batteryLevel - currentBatteryLevel;
                        batteryInfo.timeGained += (Date.now() - batteryStartGainedTime) / 1000;
                        batteryStartGainedTime = Date.now();
                        currentBatteryLevel = batteryLevel;
                    }
                    firstCharge = false;
                } else if (batteryLevel !== currentBatteryLevel) {
                    currentBatteryLevel = batteryLevel;
                }
                for (let i = 0; i < batteryCharts.length; i++) {
                    batteryCharts[i].style.backgroundColor = "#4BB543";
                    batteryChargings[i].style.display = "block";
                }
            } else {
                batteryStartGainedTime = Date.now();
                if (batteryLevel !== currentBatteryLevel && batteryCalibrating) {
                    if (currentBatteryLevel - batteryLevel > 1) firstDischarge = false;
                    if (firstDischarge) {
                        batteryStartLostTime = Date.now();
                        currentBatteryLevel = batteryLevel;
                    }
                    if (currentBatteryLevel - batteryLevel > 0 && (Date.now() - batteryStartLostTime) / 1000 > 20 && !firstDischarge) {
                        batteryInfo.levelLost += currentBatteryLevel - batteryLevel;
                        batteryInfo.timeLost += (Date.now() - batteryStartLostTime) / 1000;
                        batteryStartLostTime = Date.now();
                        currentBatteryLevel = batteryLevel;
                    }
                    firstDischarge = false;
                } else if (batteryLevel !== currentBatteryLevel) {
                    currentBatteryLevel = batteryLevel;
                }
                for (let i = 0; i < batteryCharts.length; i++) {
                    batteryCharts[i].style.backgroundColor = "#ffffff";
                    batteryChargings[i].style.display = "none";
                }
            }

            batteryMessage = "Run >calibratebat to calibrate.";
            if (batteryInfo.levelGained > 0 && batteryInfo.timeGained > 0 && charging) {
                const batteryHours = Math.floor(((100 - currentBatteryLevel) * batteryInfo.timeGained / batteryInfo.levelGained) / 3600);
                const batteryMinutes = Math.floor((((100 - currentBatteryLevel) * batteryInfo.timeGained / batteryInfo.levelGained) % 3600) / 60);
                batteryMessage = `Full charge estimate time: ${batteryHours}h ${batteryMinutes}m<br>Estimated accuracy: ${Math.ceil((Math.atan(batteryInfo.levelGained / 5) / (Math.PI / 2)) * 100)}%`;
                if (currentBatteryLevel === 100) batteryMessage = "Fully charged.";
            }
            if (batteryInfo.levelLost > 0 && batteryInfo.timeLost > 0 && !charging) {
                const batteryHours = Math.floor(((currentBatteryLevel) * batteryInfo.timeLost / batteryInfo.levelLost) / 3600);
                const batteryMinutes = Math.floor((((currentBatteryLevel) * batteryInfo.timeLost / batteryInfo.levelLost) % 3600) / 60);
                const maxHours = Math.floor(((100) * batteryInfo.timeLost / batteryInfo.levelLost) / 3600);
                const maxMinutes = Math.floor((((100) * batteryInfo.timeLost / batteryInfo.levelLost) % 3600) / 60);
                batteryMessage = `Estimated time left: ${batteryHours}h ${batteryMinutes}m<br>Max: ${maxHours}h ${maxMinutes}m<br>Estimated accuracy: ${Math.ceil((Math.atan(batteryInfo.levelLost / 5) / (Math.PI / 2)) * 100)}%`;
            }
        });
    } else {
        batteryMessage = "Battery stats not supported on this browser or device.";
        const batteryChartsFallback = document.getElementsByClassName("batteryChart");
        for (let i = 0; i < batteryChartsFallback.length; i++) {
            batteryChartsFallback[i].style.width = "0%";
        }
        const batteryPercentages = document.getElementsByClassName("batteryPercentage");
        for (let i = 0; i < batteryPercentages.length; i++) {
            batteryPercentages[i].innerHTML = "N/A";
        }
    }

    localStorage.setItem(SaveKey + "levelGained", batteryInfo.levelGained);
    localStorage.setItem(SaveKey + "timeGained", batteryInfo.timeGained);
    localStorage.setItem(SaveKey + "levelLost", batteryInfo.levelLost);
    localStorage.setItem(SaveKey + "timeLost", batteryInfo.timeLost);
}

function showBatteryTab(tab) {
    const batteryTab = document.getElementById("batteryTab" + tab);
    const batteryMessages = document.getElementsByClassName("batteryMessages");
    batteryTab.style.display = "flex";
    for (let i = 0; i < batteryMessages.length; i++) {
        batteryMessages[i].innerHTML = batteryMessage;
    }
}

function showWifiTab(tab) {
    const batteryTab = document.getElementById("batteryTab" + tab);
    const batteryMessages = document.getElementsByClassName("batteryMessages");
    batteryTab.style.display = "flex";
    for (let i = 0; i < batteryMessages.length; i++) {
        batteryMessages[i].innerHTML = wifiMessage;
    }
}

function hideBatteryTab(tab) {
    document.getElementById("batteryTab" + tab).style.display = "none";
}
