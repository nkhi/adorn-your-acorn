# UofT Transcript Beautifier <span>v1.0</span>
Generate a better version version of your Unofficial UofT Transcript.  
Please use Chrome or Firefox on a desktop.

## 🚀 Getting Started

<div class="box">
    <div class="bookmarklet-button css-selector">
        <a onClick="copyPrintPDFCode();">🐿️🐿️🐿️</a> (Click them to copy the script)
    </div>
    <div id="scriptbox">
        <div class="css-selector" id="copy-button" title="you're looking at the script you just copied">
            <div id='eye' onClick="hide();">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M127.99414,55.99231c-80,0-112,72.00781-112,72.00781s32,71.99219,112,71.99219,112-71.99219,112-71.99219S207.99414,55.99231,127.99414,55.99231Zm0,112.0083a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,127.99414,168.00061Z" opacity="0.2"></path><path d="M127.99414,55.99219c-80,0-112,72.00781-112,72.00781s32,71.99219,112,71.99219,112-71.99219,112-71.99219S207.99414,55.99219,127.99414,55.99219Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="127.99414" cy="128.00061" r="40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>
            </div>
        </div>
        <div class="tooltip-box tooltip-bottom" data-tooltip="adornyouracorn v1.0 + html2pdf.js v0.9.2 [Copyright (c) 2020 Erik Koopmans]">
            <textarea rows=4 cols=42 id="codeblock"></textarea>
        </div>
    </div>
</div>

**Step 1:** Click the Squirrels to get [the script](https://github.com/nkhi/adorn-your-acorn/blob/main/src/bookmarklet.js).  
**Step 2:** Log into [Acorn](https://www.acorn.utoronto.ca/) and navigate to the [Academic History](https://acorn.utoronto.ca/sws/#/history/academic) page.  
**Step 3:** Toggle *Complete Academic History* to load your full transcript.  
**Step 4:** Hit `F12` and navigate to the Console tab at the top.  
**Step 5:** ‎‏‏‎Paste (`Ctrl/Cmd` + `V`) the code you copied and hit `Enter`.  
**Step 6:** Be patient and check your Downloads!  

## 🧙‍♂️ Before & After  

<img src="/adorn-your-acorn/assets/comp.png" class="tooltip" data-tooltip='Acorn version vs. Beautified version' alt="comparisson" title="Beautified version vs. Acorn output">

<!-- ## 🤔 How does this work? -->

<!-- This tool is split into two parts, a bookmarklet which generates the better transcript print-out, and a chunk of Javascript code which converts your open browser tab into a  PDF. Every part of this tool uses client-side Javascript execution, <ins>which means I never see your data</ins>.

1. When you click on the squirrels, it executes a chunk of code from [`bookmarklet.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/bookmarklet.js) on top of your open tab, which arranges and styles the data from Acorn to be printer ready.
2. When you press F12 and run the copied code chunk, you are supplying the browser with the source code for [html2pdf](https://ekoopmans.github.io/html2pdf.js/) by [eKoopmans](https://github.com/eKoopmans/html2pdf.js), which is a great open-source library for converting your viewport into a PDF. -->

Rewrite this

## 🛸 Credits
Created by [Nikhi Bhambra](https://www.nikhi.ca).   
Last updated on [Jan 1st, 2021](https://github.com/nkhi/adorn-your-acorn/commits/main).   
Inspired by [@arashout](https://github.com/arashout) and [ubc-courses](https://github.com/arashout/ubc-courses).   
Questions or concerns? [hey@curecon.org](mailto:hey@curecon.org).   
Licensed under the MIT License. PRs welcome!  

<!-- Define site scripts from src/script.js-->
<script> 
    // A GET request for the minified version for the script code to load into the textbox element
    // because you cant load external resources on Acorn due to the Content Security Policy.

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

    // Enables copy to clipboard once the textbox request had finished
    function copyPrintPDFCode() {
        const el = document.getElementById('codeblock');
        el.select();
        document.execCommand('copy');
        alert('Script copied successfully!');
    };

    // Click to hide
    function hide(){
        q=document.getElementsByTagName('textarea')[0];
        l=document.getElementById('copy-button');
        e=document.getElementById('eye');
        if (l.title == "you're looking at the script you just copied"){
            q.style.visibility='hidden';
            l.title= "i pretend i simply do not see it";
            e.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='#000000' viewBox='0 0 256 256'><rect width='256' height='256' fill='none'></rect><line x1='201.14971' y1='127.30467' x2='223.95961' y2='166.81257' fill='none' stroke='#000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></line><line x1='154.18201' y1='149.26298' x2='161.29573' y2='189.60689' fill='none' stroke='#000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></line><line x1='101.72972' y1='149.24366' x2='94.61483' y2='189.59423' fill='none' stroke='#000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></line><line x1='54.80859' y1='127.27241' x2='31.88882' y2='166.97062' fill='none' stroke='#000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></line><path d='M31.99943,104.87509C48.81193,125.68556,79.63353,152,128,152c48.36629,0,79.18784-26.31424,96.00039-47.12468' fill='none' stroke='#000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></path></svg>";
        } else if (l.title="i pretend i simply do not see it") { 
            q.visibility='visible';
            l.title="you're looking at the script you just copied";
            e.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='#000000' viewBox='0 0 256 256'><rect width='256' height='256' fill='none'></rect><path d='M127.99414,55.99231c-80,0-112,72.00781-112,72.00781s32,71.99219,112,71.99219,112-71.99219,112-71.99219S207.99414,55.99231,127.99414,55.99231Zm0,112.0083a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,127.99414,168.00061Z' opacity='0.2'></path><path d='M127.99414,55.99219c-80,0-112,72.00781-112,72.00781s32,71.99219,112,71.99219,112-71.99219,112-71.99219S207.99414,55.99219,127.99414,55.99219Z' fill='none' stroke='#000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></path><circle cx='127.99414' cy='128.00061' r='40' fill='none' stroke='#000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></circle></svg>";
        };
    };
    addScript('https://www.nikhi.ca/adorn-your-acorn/src/html2pdfmin.js'); 
</script>