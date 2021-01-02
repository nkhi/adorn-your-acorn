# UofT Transcript Beautifier <span>v1.0</span>
Generate a better version version of your Unofficial UofT Transcript.  
Please use Chrome or Firefox on a desktop.

## 🐿️ Getting Started

<div class="box">
    <div class="bookmarklet-button css-selector">
        <a onClick="copyPrintPDFCode();">🐿️🐿️🐿️</a> (Click them to copy the script)
    </div>
    <div id="scriptbox">
        <div class="css-selector" id="copy-button" title="you're looking at the script you just copied">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M127.99414,55.99231c-80,0-112,72.00781-112,72.00781s32,71.99219,112,71.99219,112-71.99219,112-71.99219S207.99414,55.99231,127.99414,55.99231Zm0,112.0083a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,127.99414,168.00061Z" opacity="0.2"></path><path d="M127.99414,55.99219c-80,0-112,72.00781-112,72.00781s32,71.99219,112,71.99219,112-71.99219,112-71.99219S207.99414,55.99219,127.99414,55.99219Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="127.99414" cy="128.00061" r="40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></svg>
        </div>
        <div class="tooltip-box tooltip-bottom" data-tooltip="adornyouracorn v1.0">
            <textarea rows=4 cols=42 id="codeblock"></textarea>
        </div>
    </div>
</div>

**Step 1:** Click the Squirrels to get [the script](https://github.com/nkhi/adorn-your-acorn/blob/main/src/bookmarklet.js).  
<!-- **Step 2:** Click the Copy icon to get the [html2pdf] script.   -->    
**Step 2:** Log into [Acorn](https://www.acorn.utoronto.ca/) and navigate to the [Academic History](https://acorn.utoronto.ca/sws/#/history/academic) page.  
**Step 3:** Toggle *Complete Academic History* to load your full transcript.  
<!-- **Step 4:** Click the squirrels!   -->
**Step 4:** Hit `F12` and navigate to the Console tab at the top.  
**Step 5:** ‎‏‏‎Paste (`Ctrl/Cmd` + `V`) the code you copied and hit `Enter`.  
**Step 6:** Be patient and check your Downloads!  

## 🧙‍♂️ Before & After  

<img src="/adorn-your-acorn/assets/comp.png" class="tooltip" data-tooltip='Acorn version vs. Beautified version' alt="comparisson" title="Beautified version vs. Acorn output">

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
