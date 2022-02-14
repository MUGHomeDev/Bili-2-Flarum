# Bili-2-Flarum v0.2
A Tampermonkey userscript that turns Bilibili dynamics & articles into Flarum Posts.

### Installation
1. Install Tampermonkey/ViolentMonkey or any other userscipt plugin on your web browser.
2. Go to [Greasyfork](https://greasyfork.org/zh-CN/scripts/440030-bilibili-dynamic-column-to-flarum-post) and click the install button.

### Usage
1. Click the "点击生成Flarum文章" button on the Bilibili dynamic page or article page, and then the flarum post should be generated.
2. copy the generated text and paste it into flarum's post editor.

### Notes
In order to load images from Bilibili's server, you have to add
```
<meta name="referrer" content="no-referrer">
```
to your forum's custom header. Otherwise 403 error will occur and cause failure loading images.
