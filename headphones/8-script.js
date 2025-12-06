```javascript
// filepath: c:\Users\abele\Documents\Projects\LocalRepoProject\alx_html_css\headphones\8-script.js

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('is-open');
  });
});
```