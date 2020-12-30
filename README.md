# UofT Transcript Beautifier
Generate a beautiful version version of your Unofficial UofT Transcript.  
 
<div class="box">
    <div class="bookmarklet-button css-selector">
        <a href="javascript:(function(){if(window.location.href=='https://acorn.utoronto.ca/sws/#/history/academic'){v=document.getElementsByClassName('hidden-print');if(v.length>0){cols=['  University of Toronto','  Innis College, University of Toronto','  New College, University of Toronto','  St. Michaels College, University of Toronto','  Trinity College, University of Toronto','  University College, University of Toronto','  Victoria College, University of Toronto','  Woodsworth College, University of Toronto','  University of Toronto, Mississauga (UTM)','University of Toronto, Scarborough (UTSC)','University of Toronto, St. George (UTSG)'];qq=`Please select a college/campus designation: \n\n1: ${cols[0]} \n2: ${cols[1]} \n3: ${cols[2]} \n4: ${cols[3]} \n5: ${cols[4]} \n6: ${cols[5]} \n7: ${cols[6]} \n8: ${cols[7]} \n9: ${cols[8]} \n10: ${cols[9]} \n11: ${cols[10]}\n\n`;ii=prompt(qq);if(ii!='NaN'&&ii>-1&&ii<12){n=document.getElementById('acorn-nav-top');m=document.getElementById('acorn-nav-side-parent');d=document.getElementsByClassName('academic-history');f=document.getElementsByClassName('academic-history-report');bt=document.getElementById('acorn-footer');h=document.getElementsByClassName('history-academic-complete')[0];h.style.borderRadius='10px';n.remove();m.remove();bt.remove();t=document.getElementsByTagName('h1');name=v[1].innerHTML.match(/<strong[^>]*>([\s\S]*?)<\/strong>/)[1];t[0].innerHTML=name;d[0].innerHTML=f[0].innerHTML;document.getElementById('main-content').style.maxWidth='850px';document.getElementById('main-content').style.padding='40px';x=document.getElementById('body-container');x.style.paddingTop='0px';x.style.display='flex';x.style.justifyContent='center';k=document.getElementsByClassName('credit-earned-section');for(i=0;i<k.length;i++){k[i].style.marginBottom='15px';k[i].style.marginTop='0'};hdr=document.getElementsByClassName('skipprint')[0];hdr.style.display='flex';hdr.style.justifyContent='space-between';hdr.style.placeItems='center';today=new Date();mnth=today.getMonth();monthNames=['January ','February ','March ','April ','May ','June ','July ','August ','September ','October ','November ','December '];date=monthNames[mnth]+today.getDate()+', '+today.getFullYear();hdr.innerHTML=`<div id=frst><h1 class=&#39;page-title academics&#39;>Nikhil Bhambra</h1><h4>${cols[ii-1]}</h4></div><div id=scnd><h3>As of ${date}</h3><h4>This is not an official transcript</h4></div>`;document.getElementById('frst').style.paddingLeft='1rem';scnd=document.getElementById('scnd');scnd.style.textAlign='right';scnd.style.marginTop='1rem';scnd.style.paddingRight='1rem';scnd.style.opacity='0.6';regh=document.getElementsByClassName('regHistoryHeader blok pre-elem')[0];regh.style.margin='6px 0 13px';regh.style.paddingLeft='1rem';ps=document.getElementsByTagName('p');ps[0].style.paddingLeft='1rem';ps[1].style.paddingLeft='1rem';hh=document.getElementsByTagName('h1')[0];hh.style.marginBottom='0';hh.style.color='#333';hh.style.fontSize='2.5rem';main=document.getElementsByClassName('history-academic-complete acorn-classic page-container');main[0].style.padding='2rem 0 2rem 2rem'}else{alert('You have to pick a number between 1 and 11, try again.')}}else{alert('See where it says Complete Academic History next to your name? Click that and try again.')}}else{alert('This bookmarklet only works on Acorn! Please log into Acorn, navigate to Academic History, and try again.')}})()">🐿️🐿️🐿️</a> (Drag them to your bookmark bar)
    </div>
    <a class="copy-link" href="nikhi.ca">
        <div class="copy-button css-selector">
            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="96" y1="96" x2="160" y2="96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="96" y1="128" x2="160" y2="128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="96" y1="160" x2="128" y2="160" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M156.68629,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.68629a8,8,0,0,1-2.34315,5.65686l-51.3137,51.3137A8,8,0,0,1,156.68629,216Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="215.276 159.992 160 159.992 160 215.272" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
        </div>
    </a>
</div>

**Step 1:** Drag the squirrels above into your bookmarks bar  
**Step 2:** Click on the copy icon
**Step 3:** Log into [Acorn](https://www.acorn.utoronto.ca/) and navigate to the [Academic History](https://acorn.utoronto.ca/sws/#/history/academic) page  
**Step 4:** Toggle *Complete Academic History* to load your full transcript  
**Step 5:** Click the squirrels!
**Step 6:** Hit `F12` and navigate to the Console tab at the top. Paste the code you copied here and click Enter. It may take a moment.

## 🧙‍♂️ Before & After  

This will *eventually* be a demo gif.  
![volcano](https://66.media.tumblr.com/9f86687031b209884083604f2c6dab97/tumblr_px6b1hRRpx1wzvt9qo1_640.gif "some lads")

## 🤔 How does this work?

If you check the value of the bookmarklet, you will see a snippet in the following template `javascript:(function(){...})()`. Any code inside the curly braces will execute on top of the user's currently open webpage. This widget uses completely client-side Javascript, <ins>which means I never see your data</ins>. When you click on the squirrels, it calls the code found in [`bookmarklet.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/bookmarklet.js), which arranges, styles, and aligns the content already presented on acorn to be printer ready. After, the current browser view gets converted into a PDF using [`html2pdf`](https://ekoopmans.github.io/html2pdf.js/), an open-source library created by [@eKoopmans](https://github.com/eKoopmans/html2pdf.js).

## 🛸 Credits
Created by [Nikhi Bhambra](https://www.nikhi.ca).  
Last updated on [Dec 30th, 2020](https://github.com/nkhi/adorn-your-acorn/commits/main).  
Please send any inquiries to [hey@curecon.org](mailto:hey@curecon.org).  
Inspired by [@arashout](https://github.com/arashout) and his project [ubc-courses](https://github.com/arashout/ubc-courses).  
Licensed under the MIT License. PRs welcome!  
