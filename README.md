# UofT Transcipt Beautifer
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

When you click the bookmarklet, it calls [`grades.php`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/grades.php) which is accessible because this repo is hosted on [GitHub Pages](http://www.nikhi.ca/adorn-your-acorn). It scrapes your information from the underlying Acorn HTML, and calls to generate [`index.html`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/index.html), the template webpage. The generated page contains a single injected React component [`pretty.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/pretty.js), and everything styled by [`styles.css`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/styles.css)/[`.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/styles.js).  

This widget uses completely client-side Javascript, **which means I never see your data**. 

## 🛸 Credits
Created by [Nikhi Bhambra](https://www.nikhi.ca). I'm reachable by email at [hey@curecon.org](mailto:hey@curecon.org).  
Inspired by [@arashout](https://github.com/arashout) and his project [ubc-courses](https://github.com/arashout/ubc-courses).  
Licensed under the MIT License. PRs welcome!  
Last updated on [Dec 29th, 2020](https://github.com/nkhi/adorn-your-acorn/commits/main).  

