// ==UserScript==
// @name         Bilibili Dynamic to Flarum Post
// @namespace    https://bbs.mughome.top/
// @version      0.1
// @description  Make a Bilibili dyanamic into Flarum Post content.
// @author       MMINO
// @match        https://t.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let content = null;
    let q = setInterval(() => {
        content = document.querySelector(".content-full");
        if (content !== null) {
            let text = content.innerText;
            clearInterval(q);
            let imgs = document.querySelectorAll(".img-content");
            for (let img of imgs) {
                let reg = /(\/\/.*)@/;
                let imgLink = reg.exec(img.style.backgroundImage)[1];
                text += "\n![动态配图](" + imgLink + ")";
            }
            text += "\n\n> 转载自[" + document.title + "](" + location.href + ")";
            console.log(text);

            let btn = document.createElement("button");
            let parent = document.querySelector(".main-content");
            btn.innerHTML = "点击生成Flarum文章";
            btn.style.padding = "3px";
            btn.onclick = () => {
                let generated = document.createElement("div");
                generated.innerText = text;
                generated.style.backgroundColor = "#B8BFD8";
                generated.style.marginRight = "32px";
                generated.style.marginTop = "10px";
                generated.style.padding = "16px";
                generated.style.wordWrap = "break-all";
                generated.style.wordBreak = "normal";
                parent.appendChild(generated);
            }
            parent.appendChild(btn);
        }
    }, 200);
})();