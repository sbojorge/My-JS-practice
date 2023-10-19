// Get the <html> element
let html = document.getElementsByTagName("html")[0];

// head and body
let head = html.children[0];
let body = html.children[1];
console.log("the first child of the html is:", head);
console.log("the second child of the html is:", body);

// find the URL of this script file (defined in the src attribute):
let scriptUrl = body.getElementsByTagName("script")[0].src;
console.log("URL for script.js is:", scriptUrl);

/* That gave us the whole URL. What if we just want the filename?
How about using window.location.href which will give us the whole URL
leading up to script.js?
*/
let baseUrl = window.location.href;
console.log("baseUrl is:", baseUrl);

// Split the full url using the baseUrl and get index 1
// Remember you don't have to split a string using a single character.
// You can split it using a whole string, like a URL!
let splitUrl = scriptUrl.split(baseUrl);
console.log("Splitting using the baseUrl gives an array:", splitUrl);
let scriptName = splitUrl[1];
console.log("Script file name is:", scriptName);

// Maybe we need to know all the stylesheets in use. First get all the links in the <head> element:
let links = head.getElementsByTagName("link");
console.log("Links in the head:", links);

// It's just an HTMLCollection...like an array! Iterate it!
for (let link of links) {
  /* If the rel attribute is "stylesheet", you've found one! Split it w/ the baseUrl like above to get
       its filename
    */
  if (link.rel === "stylesheet") {
    console.log("Found a stylsheet:", link.href.split(baseUrl)[0]);
  }
}

// the challenge
let ol = html.getElementsByTagName("ol")[0];
let listItems = ol.children;
let first = ol.children[0].innerHTML;
console.log(first);
let fourth = ol.children[3].innerHTML;
console.log(fourth);
