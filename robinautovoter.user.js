// ==UserScript==
// @name         Robin Autovoter
// @namespace    http://jerl.im
// @version      1.92
// @description  Autovotes via text on /r/robin
// @author       /u/keythkatz and /u/xxmarkuski
// @match        https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
var PREFIX = "......................";

var COMMANDO_SPAMMER = PREFIX + "I should be the one";
var COMMANDO_SOMEONEELETAKEOVER = PREFIX + "Reloading, ";
var messages = document.getElementsByClassName("robin-message");

function sendMessage(message){
    $("#robinSendMessage > input[type='text']").val(message);
    $("#robinSendMessage > input[type='submit']").click();
}

var config = /** @type {MutationObserverInit} */ ({ attributes: true, childList: true, characterData: true });
new MutationObserver(function callback(param1, param2){if(messages.length == 4){init();}}).observe(document.getElementById("robinChatMessageList"), config);

function init(){
    sendMessage("/vote grow");
    var shouldMessage = true;
    var i;
    for (i = 0; i < messages.length; i++) {
        if(messages[i].getElementsByClassName("robin-message--message")[0].innerText == COMMANDO_SPAMMER){
            shouldMessage = false;
            break;
        }
    }
    if(shouldMessage){
        sendMessage("");
    }
    setTimeout(function(){
        window.location.reload();
    }, 300000);
}
