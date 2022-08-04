"use strict";document.querySelector("form").addEventListener("submit",(function(e){console.log("server js file handleSubmit function"),e.preventDefault();var t=new FormData(e.target),n=Object.fromEntries(t.entries());console.log({value:n}),window.open("index.html")}));
//# sourceMappingURL=server.js.map
