# UofT Transcript Beautifier v0.1
Generate a beautiful version version of your Unofficial UofT Transcript.  
<i>Please use Firefox or Chrome.</i>
 
<div class="box">
    <div class="bookmarklet-button css-selector">
        <a href="javascript:(function(){if(window.location.href=='https://acorn.utoronto.ca/sws/#/history/academic'){v=document.getElementsByClassName('hidden-print');if(v.length>0){cols=['  University of Toronto','  Innis College, University of Toronto','  New College, University of Toronto','  St. Michaels College, University of Toronto','  Trinity College, University of Toronto','  University College, University of Toronto','  Victoria College, University of Toronto','  Woodsworth College, University of Toronto','  University of Toronto, Mississauga (UTM)','University of Toronto, Scarborough (UTSC)','University of Toronto, St. George (UTSG)'];qq=`Please select a college/campus designation: \n\n1: ${cols[0]} \n2: ${cols[1]} \n3: ${cols[2]} \n4: ${cols[3]} \n5: ${cols[4]} \n6: ${cols[5]} \n7: ${cols[6]} \n8: ${cols[7]} \n9: ${cols[8]} \n10: ${cols[9]} \n11: ${cols[10]}\n\n`;ii=prompt(qq);if(parseInt(ii)!='NaN'&&parseInt(ii)>-1&&parseInt(ii)<12){n=document.getElementById('acorn-nav-top');m=document.getElementById('acorn-nav-side-parent');d=document.getElementsByClassName('academic-history');f=document.getElementsByClassName('academic-history-report');bt=document.getElementById('acorn-footer');h=document.getElementsByClassName('history-academic-complete')[0];h.style.borderRadius='10px';n.remove();m.remove();bt.remove();t=document.getElementsByTagName('h1');name=v[1].innerHTML.match(/<strong[^>]*>([\s\S]*?)<\/strong>/)[1];t[0].innerHTML=name;d[0].innerHTML=f[0].innerHTML;document.getElementById('main-content').style.maxWidth='850px';document.getElementById('main-content').style.padding='40px';x=document.getElementById('body-container');x.style.paddingTop='0px';x.style.display='flex';x.style.justifyContent='center';k=document.getElementsByClassName('emph blok credit-earned-section');for(i=0;i<k.length;i++){k[i].style.marginBottom='15px';k[i].style.marginTop='-5px';k[i].backgroundColor='#f3f3f3'};hdr=document.getElementsByClassName('skipprint')[0];hdr.style.display='flex';hdr.style.justifyContent='space-between';hdr.style.placeItems='center';hdr.style.marginBottom='3rem';today=new Date();mnth=today.getMonth();monthNames=['January ','February ','March ','April ','May ','June ','July ','August ','September ','October ','November ','December '];date=monthNames[mnth]+today.getDate()+', '+today.getFullYear();hdr.innerHTML=`<div id=frst><h1 class=&#39;page-title academics&#39;>${name}</h1><h4>${cols[ii-1]}</h4></div><div id=scnd><h3>As of ${date}</h3><h4>This is not an official transcript</h4></div>`;document.getElementById('frst').style.paddingLeft='1rem';scnd=document.getElementById('scnd');scnd.style.textAlign='right';scnd.style.marginTop='0.5rem';scnd.style.paddingRight='1rem';scnd.style.opacity='0.6';regh=document.getElementsByClassName('regHistoryHeader blok pre-elem')[0];regh.style.margin='6px 0 13px';regh.style.paddingLeft='1rem';ps=document.getElementsByTagName('p');ps[0].style.paddingLeft='1rem';ps[1].style.paddingLeft='1rem';ps[2].style.padding='1rem 2rem';ps[2].style.fontStyle='italic';hh=document.getElementsByTagName('h1')[0];hh.style.marginBottom='0';hh.style.color='#333';hh.style.fontSize='2.5rem';main=document.getElementsByClassName('history-academic-complete acorn-classic page-container');main[0].style.padding='2rem 0 2rem 2rem';main[0].style.background='#f9f9f9';bg=document.getElementById('body-container');bg.style.backgroundColor='#ffffff';ch=document.getElementsByClassName('courses blok pre-elem');for(j=0;j<ch.length;j++){ch[j].style.backgroundColor='#f3f3f3'};u=document.getElementsByClassName('emph gpa-listing pre-elem');for(k=0;k<u.length;k++){u[k].style.backgroundColor='#f3f3f3';u[k].style.padding='1rem 0 1rem 20px';u[k].style.display='flex';u[k].style.alignItems='center';u[k].style.width='97.3%'}}else{alert('You have to pick a number between 1 and 11, try again.')}}else{alert('See where it says Complete Academic History next to your name? Click that and try again.')}}else{alert('This bookmarklet only works on Acorn! Please log into Acorn, navigate to Academic History, and try again.')}})()">🐿️🐿️🐿️</a> (Drag them to your bookmarks bar)
    </div>
    <div onClick="copyPrintPDFCode();" id="copy-button">qubqiu</div>
</div>

**Step 1:** Drag the Squirrels above into your bookmarks bar  
**Step 2:** Copy all the code from above with `Cmd+A` and `Cmd+C`    
**Step 3:** Log into [Acorn](https://www.acorn.utoronto.ca/) and navigate to the [Academic History](https://acorn.utoronto.ca/sws/#/history/academic) page  
**Step 4:** Toggle *Complete Academic History* to load your full transcript  
**Step 5:** Click the squirrels!  
**Step 6:** Hit `F12` and navigate to the Console tab at the top.   
‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎Paste the code you copied and hit `Enter`.  Be patient.  

## 🧙‍♂️ Before & After  

This will *eventually* be a demo gif.  
![volcano](https://66.media.tumblr.com/9f86687031b209884083604f2c6dab97/tumblr_px6b1hRRpx1wzvt9qo1_640.gif "some lads")

## 🤔 How does this work?

This tool is split into two parts, a bookmarklet which generates the better transcript print-out and a chunk of Javascript code which converts your open browser tab into a  PDF. Every part of this tool uses client-side Javascript execution, <ins>which means I never see your data</ins>.

1. When you click on the squirrels, it executes a chunk of code from [`bookmarklet.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/bookmarklet.js) on top of your open tab, which arranges and styles the data from Acorn to be printer ready.
2. When you press F12 and run the copied code chunk, you are supplying the browser with the source code for [html2pdf](https://ekoopmans.github.io/html2pdf.js/) by [eKoopmans](https://github.com/eKoopmans/html2pdf.js), which is a great open-source library for converting your viewport into a PDF.

Questions or concerns? You can reach me at [hey@curecon.org](mailto:hey@curecon.org).

## 🛸 Credits
Created by [Nikhi Bhambra](https://www.nikhi.ca).  
Last updated on [Dec 30th, 2020](https://github.com/nkhi/adorn-your-acorn/commits/main).  
Inspired by [@arashout](https://github.com/arashout) and [ubc-courses](https://github.com/arashout/ubc-courses).  
Licensed under the MIT License. PRs welcome!  

<div class="css-selector tooltip-box tooltip" data-tooltip="html2pdf.js v0.9.2. Copyright (c) 2020 Erik Koopmans. Released under the MIT License.">
    <textarea rows=6 cols=61 id="codeblock"></textarea>
</div>

<!-- Load the src code for html2pdf.bundle.min.js into a textarea element -->
<script>
  function addScript(url) {
    var textarea = document.getElementById('codeblock');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            textarea.innerHTML = this.responseText;
        };
    };
    xhttp.open("GET", url, true);
    xhttp.send(); 
  };
  function copyPrintPDFCode() {
        const el = document.getElementById('codeblock');
        el.select();
        document.execCommand('copy');
        alert('Copied successfully');
  };
  addScript('https://www.nikhi.ca/adorn-your-acorn/src/html2pdfmin.js');
</script>
