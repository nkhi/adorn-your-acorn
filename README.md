# UofT Transcript Beautifier <span>v1.0</span>
Generate a better version version of your Unofficial UofT Transcript.  
Please use Chrome or Firefox on a desktop.

## 🐿️ Getting Started

<div class="box">
    <div class="bookmarklet-button css-selector">
        <a href="javascript:(function(){if(window.location.href=='https://acorn.utoronto.ca/sws/#/history/academic'){v=document.getElementsByClassName('hidden-print');if(v.length>0){cols=['  University of Toronto','  Innis College, University of Toronto','  New College, University of Toronto','  St. Michaels College, University of Toronto','  Trinity College, University of Toronto','  University College, University of Toronto','  Victoria College, University of Toronto','  Woodsworth College, University of Toronto','  University of Toronto, Mississauga (UTM)','University of Toronto, Scarborough (UTSC)','University of Toronto, St. George (UTSG)'];qq=`Please select a college/campus designation: \n\n1: ${cols[0]} \n2: ${cols[1]} \n3: ${cols[2]} \n4: ${cols[3]} \n5: ${cols[4]} \n6: ${cols[5]} \n7: ${cols[6]} \n8: ${cols[7]} \n9: ${cols[8]} \n10: ${cols[9]} \n11: ${cols[10]}\n\n`;ii=prompt(qq);if(parseInt(ii)!='NaN'&&parseInt(ii)>-1&&parseInt(ii)<12){n=document.getElementById('acorn-nav-top');m=document.getElementById('acorn-nav-side-parent');d=document.getElementsByClassName('academic-history');f=document.getElementsByClassName('academic-history-report');bt=document.getElementById('acorn-footer');h=document.getElementsByClassName('history-academic-complete')[0];h.style.borderRadius='10px';h.style.border='1px solid #f1f1f1';n.remove();m.remove();bt.remove();t=document.getElementsByTagName('h1');name=v[1].innerHTML.match(/<strong[^>]*>([\s\S]*?)<\/strong>/)[1];t[0].innerHTML=name;d[0].innerHTML=f[0].innerHTML;document.getElementById('main-content').style.maxWidth='850px';document.getElementById('main-content').style.padding='40px';x=document.getElementById('body-container');x.style.paddingTop='0px';x.style.display='flex';x.style.justifyContent='center';k=document.getElementsByClassName('emph blok credit-earned-section');for(i=0;i<k.length;i++){k[i].style.marginBottom='15px';k[i].style.marginTop='0px';k[i].background='#fff';k[i].fontSize='85%';k[i].style.border='1px solid #e8e8e8';k[i].style.borderTop='none';k[i].style.borderBottomLeftRadius='7px';k[i].style.borderBottomRightRadius='7px'};hdr=document.getElementsByClassName('skipprint')[0];hdr.style.display='flex';hdr.style.justifyContent='space-between';hdr.style.placeItems='center';hdr.style.marginBottom='3rem';today=new Date();mnth=today.getMonth();monthNames=['January ','February ','March ','April ','May ','June ','July ','August ','September ','October ','November ','December '];date=monthNames[mnth]+today.getDate()+', '+today.getFullYear();hdr.innerHTML=`<div id=frst><h1 class=&#39;page-title academics&#39;>${name}</h1><h4>${cols[ii-1]}</h4></div><div id=scnd><h3>As of ${date}</h3><h4>This is not an official transcript</h4></div>`;document.getElementById('frst').style.paddingLeft='1rem';scnd=document.getElementById('scnd');scnd.style.textAlign='right';scnd.style.marginTop='0.5rem';scnd.style.paddingRight='1rem';scnd.style.opacity='0.6';regh=document.getElementsByClassName('regHistoryHeader blok pre-elem')[0];regh.style.margin='6px 0 13px';regh.style.paddingLeft='1rem';ps=document.getElementsByTagName('p');ps[0].style.paddingLeft='1rem';ps[1].style.paddingLeft='1rem';ps[2].style.padding='1rem 2rem';ps[2].style.fontStyle='italic';ps[2].style.border='1px solid #e8e8e8';ps[2].style.borderTop='none';ps[2].style.borderBottom='none';ps[2].style.width='97.34%';ps[2].style.marginBottom='0';hh=document.getElementsByTagName('h1')[0];hh.style.marginBottom='0';hh.style.color='#333';hh.style.fontSize='2.5rem';main=document.getElementsByClassName('history-academic-complete acorn-classic page-container');main[0].style.padding='2rem 0 2rem 2rem';main[0].style.background='#f9f9f9';bg=document.getElementById('body-container');bg.style.backgroundColor='#ffffff';ch=document.getElementsByClassName('courses blok pre-elem');for(j=0;j<ch.length;j++){ch[j].style.backgroundColor='#f3f3f3';ch[j].style.border='1px solid #e8e8e8';ch[j].style.borderTop='none';ch[j].style.borderBottom='none'};u=document.getElementsByClassName('emph gpa-listing pre-elem');for(k=0;k<u.length;k++){u[k].style.backgroundColor='#f3f3f3';u[k].style.padding='1rem 0 1rem 20px';u[k].style.display='flex';u[k].style.alignItems='center';u[k].style.width='97.3%';u[k].style.border='1px solid #e8e8e8';u[k].style.borderTop='none';u[k].style.borderBottom='none'};ttls=document.getElementsByClassName('coursesHeader pre-elem');for(y=0;y<ttls.length;y++){ttls[y].style.border='1px solid #e8e8e8';ttls[y].style.borderBottom='none';ttls[y].style.borderTop='none'};for(s=0;s<ttls.length;s++){if(ttls[s].previousElementSibling.localName=='p'){ttls[s].style.borderTop='1px solid #e8e8e8';ttls[s].style.borderTopLeftRadius='7px';ttls[s].style.borderTopRightRadius='7px'}};ssn=document.getElementsByClassName('sessionHeader pre-elem');for(z=0;z<ssn.length;z++){ssn[z].style.border='1px solid #e8e8e8';ssn[z].style.borderTopLeftRadius='7px';ssn[z].style.borderTopRightRadius='7px';ssn[z].style.borderBottom='none'}}else{alert('You have to pick a number between 1 and 11, try again.')}}else{alert('See where it says Complete Academic History next to your name? Click that and try again.')}}else{alert('This bookmarklet only works on Acorn! Please log into Acorn, navigate to Academic History, and try again.')}})()">🐿️🐿️🐿️</a> (Drag them to your bookmarks bar)
    </div>
    <div id="scriptbox">
        <div onClick="copyPrintPDFCode();" class="css-selector" id="copy-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M88,40H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H168V64H88Z" opacity="0.2"></path><rect x="88" y="24" width="80" height="40" stroke-width="16" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect><path d="M168,40h32a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H88" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="96" y1="152" x2="160" y2="152" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="96" y1="120" x2="160" y2="120" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
        </div>
        <div class="tooltip-box tooltip" data-tooltip="html2pdf.js v0.9.2. Copyright (c) 2020 Erik Koopmans. Released under the MIT License.">
            <textarea rows=4 cols=42 id="codeblock"></textarea>
        </div>
    </div>
</div>

**Step 1:** Drag the Squirrels into your Bookmarks Bar (`Cmd+Shift+B`).  
**Step 2:** Click the Copy icon to get the [html2pdf](https://ekoopmans.github.io/html2pdf.js/) script.  
**Step 2:** Log into [Acorn](https://www.acorn.utoronto.ca/) and navigate to the [Academic History](https://acorn.utoronto.ca/sws/#/history/academic) page.  
**Step 3:** Toggle *Complete Academic History* to load your full transcript.  
**Step 4:** Click the squirrels!  
**Step 5:** Hit `F12` and navigate to the Console tab at the top.  
**Step 6:** ‎‏‏‎Paste (`Cmd+V`) the code you copied and hit `Enter`.  
**Step 7:** Be patient and check your Downloads!  

## 🧙‍♂️ Before & After  

Adorn your Acorn output versus *Print Academic History* output
![comparisson](https://nikhi.ca/adorn-your-acorn/assets/comp.png "Beautified version vs. Acorn output")

## 🤔 How does this work?

This tool is split into two parts, a bookmarklet which generates the better transcript print-out, and a chunk of Javascript code which converts your open browser tab into a  PDF. Every part of this tool uses client-side Javascript execution, <ins>which means I never see your data</ins>.

1. When you click on the squirrels, it executes a chunk of code from [`bookmarklet.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/bookmarklet.js) on top of your open tab, which arranges and styles the data from Acorn to be printer ready.
2. When you press F12 and run the copied code chunk, you are supplying the browser with the source code for [html2pdf](https://ekoopmans.github.io/html2pdf.js/) by [eKoopmans](https://github.com/eKoopmans/html2pdf.js), which is a great open-source library for converting your viewport into a PDF.

Questions or concerns? You can reach me at [hey@curecon.org](mailto:hey@curecon.org).

## 🛸 Credits
Created by [Nikhi Bhambra](https://www.nikhi.ca).  
Last updated on [Jan 1st, 2021](https://github.com/nkhi/adorn-your-acorn/commits/main).  
Inspired by [@arashout](https://github.com/arashout) and [ubc-courses](https://github.com/arashout/ubc-courses).  
Licensed under the MIT License. PRs welcome!  

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
        alert('Script Copied Successfully');
  };
  addScript('https://www.nikhi.ca/adorn-your-acorn/src/html2pdfmin.js');
</script>