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
    q=document.getElementByTagName('textarea')[0];
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
    }
};
