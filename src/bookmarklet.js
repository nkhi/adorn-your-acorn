if (window.location.href == 'https://acorn.utoronto.ca/sws/#/history/academic') {
    v = document.getElementsByClassName('hidden-print');
    if (v.length > 0) {
        // Need to import or otherwise run html2pdf
        n = document.getElementById('acorn-nav-top');
        m = document.getElementById('acorn-nav-side-parent');
        d = document.getElementsByClassName('academic-history'); 
        f = document.getElementsByClassName('academic-history-report');
        bt = document.getElementById('acorn-footer'); 
        n.remove(); m.remove(); bt.remove();
        t = document.getElementsByTagName('h1');
        name = v[1].innerHTML.match(/<strong[^>]*>([\s\S]*?)<\/strong>/)[1];
        t[0].innerHTML = name;
        d[0].innerHTML = f[0].innerHTML;
        document.getElementById('main-content').style.maxWidth = '850px';
        document.getElementById('main-content').style.padding = '40px';
        x = document.getElementById('body-container');
        x.style.paddingTop = '0px';
        x.style.display = 'flex';
        x.style.justifyContent = 'center';
        k = document.getElementsByClassName('credit-earned-section');
        for (i = 0; i < k.length; i++) {
            k[i].style.marginBottom = '15px';
        }
        // bd = document.body;
        // html2pdf(bd);
        // alert('Go check your downloads! :)');
    } else {
        alert('See where it says Complete Academic History next to your name? Click that and try again.');
    }
} else {
    alert('This bookmarklet only works on Acorn! Please log into Acorn, navigate to Academic History, and try again.');
}