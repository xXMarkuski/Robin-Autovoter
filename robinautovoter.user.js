// ==UserScript==
// @name         Robin Autovoter
// @namespace    http://jerl.im
// @version      1.9-nospam
// @description  Autovotes via text on /r/robin
// @author       /u/keythkatz and /u/xxmarkuski
// @match        https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function sendMessage(message){
    $("#robinSendMessage > input[type='text']").val(message);
    $("#robinSendMessage > input[type='submit']").click();
}

setTimeout(function(){
    sendMessage("/vote grow");
    setTimeout(function(){
        window.location.reload();
    }, 300000);
}, 5000);
