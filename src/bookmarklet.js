if (window.location.href == 'https://acorn.utoronto.ca/sws/#/history/academic') {
    v = document.getElementsByClassName('hidden-print');
    if (v.length > 0) {
        cols = ['  University of Toronto', '  Innis College, University of Toronto', '  New College, University of Toronto', '  St. Michaels College, University of Toronto', '  Trinity College, University of Toronto', '  University College, University of Toronto', '  Victoria College, University of Toronto', '  Woodsworth College, University of Toronto', '  University of Toronto, Mississauga (UTM)', 'University of Toronto, Scarborough (UTSC)', 'University of Toronto, St. George (UTSG)'];
        qq = `Please select a college/campus designation: \n\n1: ${cols[0]} \n2: ${cols[1]} \n3: ${cols[2]} \n4: ${cols[3]} \n5: ${cols[4]} \n6: ${cols[5]} \n7: ${cols[6]} \n8: ${cols[7]} \n9: ${cols[8]} \n10: ${cols[9]} \n11: ${cols[10]}\n\n`;
        ii = prompt(qq);
        if (ii != 'NaN' && ii>-1 && ii < 12) {
            n = document.getElementById('acorn-nav-top');
            m = document.getElementById('acorn-nav-side-parent');
            d = document.getElementsByClassName('academic-history'); 
            f = document.getElementsByClassName('academic-history-report');
            bt = document.getElementById('acorn-footer'); 
            h = document.getElementsByClassName('history-academic-complete')[0];
            h.style.borderRadius = '10px';
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
                k[i].style.marginTop = '0';
            };
            hdr = document.getElementsByClassName('skipprint')[0];
            hdr.style.display='flex';
            hdr.style.justifyContent='space-between';
            hdr.style.placeItems='center';
            today = new Date();
            mnth = today.getMonth();
            monthNames = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];
            date = monthNames[mnth]+today.getDate()+', '+today.getFullYear();
            hdr.innerHTML = `<div id=frst><h1 class=&#39;page-title academics&#39;>Nikhil Bhambra</h1><h4>${cols[ii-1]}</h4></div><div id=scnd><h3>As of ${date}</h3><h4>This is not an official transcript</h4></div>`;
            document.getElementById('frst').style.paddingLeft = '1rem';
            scnd = document.getElementById('scnd');
            scnd.style.textAlign = 'right';
            scnd.style.marginTop = '1rem';       
            scnd.style.paddingRight = '1rem';
            regh = document.getElementsByClassName('regHistoryHeader blok pre-elem')[0];
            regh.style.margin = '6px 0 13px';
            regh.style.paddingLeft = '1rem';
            ps = document.getElementsByTagName('p');
            ps[0].style.paddingLeft = '1rem';
            ps[1].style.paddingLeft = '1rem';
            hh = document.getElementsByTagName('h1')[0];
            hh.style.marginBottom = '0';
            hh.style.color = '333';
            hh.style.fontSize = '2.5rem';
        } else {
            alert('You have to pick a number between 1 and 11, try again.')
        }
    } else {
        alert('See where it says Complete Academic History next to your name? Click that and try again.');
    }
} else {
    alert('This bookmarklet only works on Acorn! Please log into Acorn, navigate to Academic History, and try again.');
}

// current bookmarklet form
javascript:(function(){if(window.location.href=='https://acorn.utoronto.ca/sws/#/history/academic'){v=document.getElementsByClassName('hidden-print');if(v.length>0){cols=['  University of Toronto','  Innis College, University of Toronto','  New College, University of Toronto','  St. Michaels College, University of Toronto','  Trinity College, University of Toronto','  University College, University of Toronto','  Victoria College, University of Toronto','  Woodsworth College, University of Toronto','  University of Toronto, Mississauga (UTM)','University of Toronto, Scarborough (UTSC)','University of Toronto, St. George (UTSG)'];qq=`Please select a college/campus designation: \n\n1: ${cols[0]} \n2: ${cols[1]} \n3: ${cols[2]} \n4: ${cols[3]} \n5: ${cols[4]} \n6: ${cols[5]} \n7: ${cols[6]} \n8: ${cols[7]} \n9: ${cols[8]} \n10: ${cols[9]} \n11: ${cols[10]}\n\n`;ii=prompt(qq);if(ii!='NaN'&&ii>-1&&ii<12){n=document.getElementById('acorn-nav-top');m=document.getElementById('acorn-nav-side-parent');d=document.getElementsByClassName('academic-history');f=document.getElementsByClassName('academic-history-report');bt=document.getElementById('acorn-footer');h=document.getElementsByClassName('history-academic-complete')[0];h.style.borderRadius='10px';n.remove();m.remove();bt.remove();t=document.getElementsByTagName('h1');name=v[1].innerHTML.match(/<strong[^>]*>([\s\S]*?)<\/strong>/)[1];t[0].innerHTML=name;d[0].innerHTML=f[0].innerHTML;document.getElementById('main-content').style.maxWidth='850px';document.getElementById('main-content').style.padding='40px';x=document.getElementById('body-container');x.style.paddingTop='0px';x.style.display='flex';x.style.justifyContent='center';k=document.getElementsByClassName('credit-earned-section');for(i=0;i<k.length;i++){k[i].style.marginBottom='15px';k[i].style.marginTop='0'};hdr=document.getElementsByClassName('skipprint')[0];hdr.style.display='flex';hdr.style.justifyContent='space-between';hdr.style.placeItems='center';today=new Date();mnth=today.getMonth();monthNames=['January ','February ','March ','April ','May ','June ','July ','August ','September ','October ','November ','December '];date=monthNames[mnth]+today.getDate()+', '+today.getFullYear();hdr.innerHTML=`<div id=frst><h1 class=&#39;page-title academics&#39;>Nikhil Bhambra</h1><h4>${cols[ii-1]}</h4></div><div id=scnd><h3>As of ${date}</h3><h4>This is not an official transcript</h4></div>`;document.getElementById('frst').style.paddingLeft='1rem';scnd=document.getElementById('scnd');scnd.style.textAlign='right';scnd.style.marginTop='1rem';scnd.style.paddingRight='1rem';regh=document.getElementsByClassName('regHistoryHeader blok pre-elem')[0];regh.style.margin='6px 0 13px';regh.style.paddingLeft='1rem';ps=document.getElementsByTagName('p');ps[0].style.paddingLeft='1rem';ps[1].style.paddingLeft='1rem';hh=document.getElementsByTagName('h1')[0];hh.style.marginBottom='0';hh.style.color='333';hh.style.fontSize='2.5rem';}else{alert('You have to pick a number between 1 and 11, try again.')}}else{alert('See where it says Complete Academic History next to your name? Click that and try again.')}}else{alert('This bookmarklet only works on Acorn! Please log into Acorn, navigate to Academic History, and try again.')}})()