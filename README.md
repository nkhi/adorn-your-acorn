# 🐿️🐿️🐿️ UofT Transcipt Beautifer
Generate a beautiful version version of your UofT Unofficial Transcript

**Step 1:** Drag [this](https://google.com) into your bookmarks bar  
**Step 2:** Open Acorn, log in, and navigate to the [Academic History](https://acorn.utoronto.ca/sws/#/history/academic) page  
**Step 3:** Toggle *Complete Academic History* to load your complete transcript  
**Step 4:** Click the 🐿️🐿️🐿️ link in your bookmarks bar  
**Step 5:** Save or print!  

This widget generates an improved version of the transcript completely on the client-side using scraping and React for templating, which means I never see your data. I'm reachable by email at [hey@curecon.org](mailto:hey@curecon.org).

Inspired by [@arashout](https://github.com/arashout) and his project [ubc-courses](https://github.com/arashout/ubc-courses)


## 🤔🤔 How does this work?

When you click the bookmarklet, it calls [`grades.php`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/grades.php) which is accessible because this repo is hosted on [GitHub Pages](http://www.nikhi.ca/adorn-your-acorn). It scrapes your information from the underlying Acorn HTML, and calls to generate [`index.html`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/index.html), the template webpage. This webpage is made of HTML and a single injected React component from [`pretty.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/pretty.js). Everything gets styled by [`styles.css`](https://github.com/nkhi/adorn-your-acorn/blob/main/styles.css) and [`styles.js`](https://github.com/nkhi/adorn-your-acorn/blob/main/src/styles.js).
