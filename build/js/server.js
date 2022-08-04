"use strict";document.querySelector("form").addEventListener("submit",(function(e){console.log("server js file handleSubmit function"),e.preventDefault();var t=new FormData(e.target);Object.fromEntries(t.entries()),window.location="index.html"}));
//# sourceMappingURL=server.js.map
