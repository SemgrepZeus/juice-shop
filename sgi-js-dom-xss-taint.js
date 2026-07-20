// ruleid: sgi-js-dom-xss-taint
document.getElementById("out").innerHTML = location.hash.slice(1);

const params = new URLSearchParams(location.search);
const name = params.get("name");
// ruleid: sgi-js-dom-xss-taint
document.write("Hello " + name);

// ok: sgi-js-dom-xss-taint
document.getElementById("out").innerHTML = DOMPurify.sanitize(location.hash);

// ok: sgi-js-dom-xss-taint
document.getElementById("out").textContent = location.hash;
