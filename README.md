# UofT Transcipt Beautifer
Generate a beautiful version version of your Unofficial UofT Transcript.  
 
<div class="bookmarklet-button css-selector">
    <a href="javascript:(function(){alert('hellooo')});">🐿️🐿️🐿️</a> (Drag them to your bookmark bar)
</div>

**Step 1:** Drag the squirrels above into your bookmarks bar  
**Step 2:** Open Acorn, log in, and navigate to the [Academic History](https://acorn.utoronto.ca/sws/#/history/academic) page  
**Step 3:** Toggle *Complete Academic History* to load your complete transcript  
**Step 4:** Click the squirrels!

This widget generates an improved version of the transcript completely on the client-side using scraping and React for templating, which means I never see your data. I'm reachable by email at [hey@curecon.org](mailto:hey@curecon.org).

Inspired by [@arashout](https://github.com/arashout) and his project [ubc-courses](https://github.com/arashout/ubc-courses).


## 🤔 How does this work?

When you click the bookmarklet, it calls [`grades.php`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/grades.php) which is accessible because this repo is hosted on [GitHub Pages](http://www.nikhi.ca/adorn-your-acorn). It scrapes your information from the underlying Acorn HTML, and calls to generate [`index.html`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/index.html), the template webpage. The generated page contains a single injected React component [`pretty.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/pretty.js), and everything styled by [`styles.css`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/styles.css)/[`.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/styles.js).

##### Created by [Nikhi Bhambra](https://www.nikhi.ca). Last updated on [12/28/20](https://github.com/nkhi/adorn-your-acorn/commits/main).