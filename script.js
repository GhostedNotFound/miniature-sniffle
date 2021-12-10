javascript: switch (window.prompt("Use a preset from 1 - 8 or press enter.")) {
    case "1":
        document.body.innerHTML = "<h1>404</h1><br><h3>This file doesn't exist</h3>";
        break;
    case "2":
        document.body.innerHTML = "<h2>Unaccessible due to Privacy Policy</h2><br><br><p>Your device's privacy policy prevents us from granting you access to this webpage.<br>This normally happens with managed school devices. Tell your administrator to manage this site.";
        break;
    case "3":
        document.body.innerHTML = "<marquee>You have been selected for a random HTML test.</marquee><br><br><button>CLICK HERE TO REFRESH<button><br><button>FREE CASH AT 7329.3954.5402.1</button>";
        break;
    case "4":
        document.body.innerHTML = "<h1>Please clear your cookies.</h1><br><h3>Data for this website in your browser was detected to be unusable/corrupted.</h3><br>Please refresh <b>NOW.</b>";
        break;
    case "5":
        document.body.innerHTML = "<br><br><br><h2>You are not authorized to view this page.</h2><br><h5>ERR_LOW_PERMISSION_LEVEL</h5>";
        break;
    case "6":
        document.body.innerHTML = "No value contained within this area.";
        break;
    case "7":
        var err1 = window.prompt("Error1 Value \(The detailed part.\)");
        var err2 = window.prompt("Error2 Value \(The error code.\)");
        var url = window.prompt("Leave blank to use default URL.");
        if (url === undefined || url === null || url === "") {
            url = window.location.href;
        }
        document.body.innerHTML = `<h1>An error occurred</h1><br><h3>Whilst trying to load ${url}.<br><h4>Reason: ${err1}</h4><br><br><br><h6>Error Code: ${err2}`;
        break;
    case "8":
        document.body.innerHTML = "";
        break;
    default:
        document.body.innerHTML = window.prompt("What do you want to appear?");
}
