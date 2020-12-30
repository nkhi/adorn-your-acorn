# UofT Transcript Beautifier
Generate a beautiful version version of your Unofficial UofT Transcript.  
 
<div class="bookmarklet-button css-selector">
    <a href="javascript:(function(){if(window.location.href=='https://acorn.utoronto.ca/sws/#/history/academic'){v=document.getElementsByClassName('hidden-print');if(v.length>0){n=document.getElementById('acorn-nav-top');m=document.getElementById('acorn-nav-side-parent');d=document.getElementsByClassName('academic-history');f=document.getElementsByClassName('academic-history-report');bt=document.getElementById('acorn-footer');n.remove();m.remove();bt.remove();t=document.getElementsByTagName('h1');name=v[1].innerHTML.match(/<strong[^>]*>([\s\S]*?)<\/strong>/)[1];t[0].innerHTML=name;d[0].innerHTML=f[0].innerHTML;document.getElementById('main-content').style.maxWidth='850px';document.getElementById('main-content').style.padding='40px';x=document.getElementById('body-container');x.style.paddingTop='0px';x.style.display='flex';x.style.justifyContent='center';k=document.getElementsByClassName('credit-earned-section');for(var j in k){j.style.marginBottom='15px'}}else{alert('See where it says Complete Academic History next to your name? Click that and try again.')}}else{alert('This bookmarklet only works on Acorn! Please log into Acorn, navigate to Academic History, and try again.')}})()">🐿️🐿️🐿️</a> (Drag them to your bookmark bar)
</div>

**Step 1:** Drag the squirrels above into your bookmarks bar  
**Step 2:** Log into [Acorn](https://www.acorn.utoronto.ca/) and navigate to the [Academic History](https://acorn.utoronto.ca/sws/#/history/academic) page  
**Step 3:** Toggle *Complete Academic History* to load your full transcript  
**Step 4:** Click the squirrels!

## 🧙‍♂️ Before & After  

This will *eventually* be a demo gif.  
![volcano](https://66.media.tumblr.com/9f86687031b209884083604f2c6dab97/tumblr_px6b1hRRpx1wzvt9qo1_640.gif "some lads")

## 🤔 How does this work?

If you check the value of the bookmarklet, you will see a snippet in the following template `javascript:(function(){...})()`. Any code inside the curly braces will execute on top of the user's currently open webpage. This widget uses completely client-side Javascript, <ins>which means I never see your data</ins>. When you click on the squirrels, it calls the code found in [`bookmarklet.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/bookmarklet.js), which arranges, styles, and aligns the content already presented on acorn to be printer/PDF ready. After, I use [`html2pdf`](https://ekoopmans.github.io/html2pdf.js/), an open-source library created by [@eKoopmans](https://github.com/eKoopmans/html2pdf.js) to convert the viewport into a multipage PDF file, which is saved automatically.

## 🛸 Credits
Created by [Nikhi Bhambra](https://www.nikhi.ca).  
Last updated on [Dec 29th, 2020](https://github.com/nkhi/adorn-your-acorn/commits/main).  
Please send any inquiries to [hey@curecon.org](mailto:hey@curecon.org).  
Inspired by [@arashout](https://github.com/arashout) and his project [ubc-courses](https://github.com/arashout/ubc-courses).  
Licensed under the MIT License. PRs welcome!  
