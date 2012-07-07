// Copyright 2012 The Obvious Corporation.

/*
 * This simply fetches the designated prebuilt version of Plovr.
 */

/*
 * Modules used
 */

"use strict";

var fs   = require("fs");
var http = require("http");
var path = require("path");
var url  = require("url");


/*
 * Variable definitions
 */

var PLOVR_BASE_URL = "http://plovr.googlecode.com/files/";
var PLOVR_VERSION = "4b3caf2b7d84";

var FULL_URL = PLOVR_BASE_URL + "plovr-" + PLOVR_VERSION + ".jar";
var OUTPUT_FILE = __dirname + "/lib/plovr.jar";

/*
 * Main script
 */

function mkdirs(name) {
    mkdirs0(path.dirname(name));

    function mkdirs0(dir) {
        if (!fs.existsSync(dir)) {
            mkdirs(path.dirname(dir));
            fs.mkdirSync(dir);
        }
    }
}

function fetchIt() {
    mkdirs(OUTPUT_FILE);

    var client = http.get(url.parse(FULL_URL), onResponse);
    var outFile = fs.openSync(OUTPUT_FILE, "w");
    var notifiedCount = 0;
    var count = 0;

    console.log("Requesting " + FULL_URL);

    function onResponse(response) {
	var status = response.statusCode;
        console.log("Receiving...");
        
	if (status === 200) {
            response.addListener("data", onData);
            response.addListener("end", onEnd);
	} else {
            console.log("Error with http request", response.headers);
	    httpRequest.abort();
            process.exit(1);
        }
    }
    
    function onData(data) {
        fs.writeSync(outFile, data, 0, data.length, null);
        count += data.length;
        if ((count - notifiedCount) > 800000) {
            console.log("Recieved " + Math.floor(count / 1024) + "K...");
            notifiedCount = count;
        }
    }

    function onEnd() {
        console.log("Recieved " + Math.floor(count / 1024) + "K total.");
        fs.closeSync(outFile);
    }
}

fetchIt();
