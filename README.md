# UofT Transcipt Beautifer
Generate a beautiful version version of your Unofficial UofT Transcript.  
 
<div class="bookmarklet-button css-selector">
    <a href="javascript:(function(){if(window.location.href=='https://acorn.utoronto.ca/sws/#/history/academic'){v=document.getElementsByClassName('hidden-print');if(v.length>0){n=document.getElementById('acorn-nav-top');m=document.getElementById('acorn-nav-side-parent');d=document.getElementsByClassName('academic-history');f=document.getElementsByClassName('academic-history-report');bt=document.getElementById('acorn-footer');n.remove();m.remove();bt.remove();t=document.getElementsByTagName('h1');name=v[1].innerHTML.match(/<strong[^>]*>([\s\S]*?)<\/strong>/)[1];t[0].innerHTML=name;d[0].innerHTML=f[0].innerHTML;document.getElementById('main-content').style.maxWidth='850px';document.getElementById('main-content').style.padding='40px';x=document.getElementById('body-container');x.style.paddingTop='0px';x.style.display='flex';x.style.justifyContent='center'}else{alert('See%20where%20it%20says%20Complete%20Academic%20History%20next%20to%20your%20name?%20Click%20that%20and%20try%20again.')}}else{alert('This%20bookmarklet%20only%20works%20on%20Acorn!%20Please%20log%20into%20Acorn,%20navigate%20to%20Academic%20History,%20and%20try%20again.')}})()">🐿️🐿️🐿️</a> (Drag them to your bookmark bar)
</div>

**Step 1:** Drag the squirrels above into your bookmarks bar  
**Step 2:** Log into [Acorn](https://www.acorn.utoronto.ca/) and navigate to the [Academic History](https://acorn.utoronto.ca/sws/#/history/academic) page  
**Step 3:** Toggle *Complete Academic History* to load your full transcript  
**Step 4:** Click the squirrels!

This widget generates an improved version of the transcript completely on the client-side using scraping and React for templating, which means I never see your data. I'm reachable by email at [hey@curecon.org](mailto:hey@curecon.org).

Inspired by [@arashout](https://github.com/arashout) and his project [ubc-courses](https://github.com/arashout/ubc-courses).


## 🤔 How does this work?

When you click the bookmarklet, it calls [`grades.php`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/grades.php) which is accessible because this repo is hosted on [GitHub Pages](http://www.nikhi.ca/adorn-your-acorn). It scrapes your information from the underlying Acorn HTML, and calls to generate [`index.html`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/index.html), the template webpage. The generated page contains a single injected React component [`pretty.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/pretty.js), and everything styled by [`styles.css`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/styles.css)/[`.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/styles.js).

##### Created by [Nikhi Bhambra](https://www.nikhi.ca). Last updated on [12/28/20](https://github.com/nkhi/adorn-your-acorn/commits/main).
