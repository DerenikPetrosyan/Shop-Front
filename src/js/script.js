window.addEventListener("DOMContentLoaded", () =>{
    const menuBtn = document.querySelector(".menuBtn");
    const navMenu = document.querySelector("#menu");

    const see_all_product = document.querySelector(".header_content__buttons a");

    try {
		see_all_product .addEventListener("click", () => {

			window.scrollTo({
				top: 620,
			});
		});
	} catch{}


    menuBtn.addEventListener("click", ()=>{
        if(!menuBtn.classList.contains("open")){
            menuBtn.classList.add("open");
            navMenu.classList.add("active_nav");
        }else{
            menuBtn.classList.remove("open");
            navMenu.removeAttribute("class");
        }
    })

    
	try {
		const item = document.querySelectorAll(".item");
		const itemTitle = document.querySelectorAll(".item .item_footer h3 a");

		item.forEach(item => {
			item.setAttribute(
				"title", 
				item.children[1]
				.children[0]
				.textContent.trim()
			);
		})
		
		itemTitle.forEach(title => {
			if (title.textContent.length >= 20) {
				title.textContent = title.textContent.slice(0, 20) + "...";
			}
		});
		
	} catch {}

   

 
})
