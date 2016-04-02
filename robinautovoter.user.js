// ==UserScript==
// @name         Robin Autovoter
// @namespace    http://jerl.im
// @version      2.0
// @description  Autovotes via text on /r/robin
// @author       /u/keythkatz and /u/xxmarkuski
// @match        https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
var messages = document.getElementsByClassName("robin-message");

function sendMessage(message){
    $("#robinSendMessage > input[type='text']").val(message);
    $("#robinSendMessage > input[type='submit']").click();
}

var config = /** @type {MutationObserverInit} */ ({ attributes: true, childList: true, characterData: true });
new MutationObserver(function callback(param1, param2){
    var shouldInit = false;
        if(messages[messages.length-1].getElementsByClassName("robin-message--message")[0].innerText == "connected!" && messages[messages.length-1].getElementsByClassName("robin-message--from")[0].innerText == "[robin]"){
            shouldInit = true;
    }
    if(shouldInit){
        init();
    }
}).observe(document.getElementById("robinChatMessageList"), config);

function init(){
    sendMessage("/vote grow");
}
