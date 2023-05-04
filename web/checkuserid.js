var xhr;

function init() {
    useridField = document.getElementById("userid");
    statusField = document.getElementById("status");
}

function doChecking() {
    var url = "checkuserid?userid=" + escape(useridField.value);
    xhr = createXHRObject();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = callback;
    xhr.send(null);
}

function createXHRObject() {
    var xhrObject;
    try {
        xhrObject = new XMLHttpRequest();
    } catch (e) {
        try {
            xhrObject = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xhrObject = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Your Browser broke");
                return false;
            }
        }
    }
    return xhrObject;
}

function callback() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            setMessage(xhr.responseXML);
        }
    }
}

function setMessage(responseXML) {
    var statusElement = responseXML.getElementsByTagName("status")[0];
    var status = statusElement.childNodes[0].nodeValue;
    if (status == "Not Available") {
        statusField.innerHTML = "<font color=red>This userId is Already in use.Please Choose some other userid.</font>"
    } else {
        statusField.innerHTML = "<font color=green>You can use this use this user id</font>"
    }
}


