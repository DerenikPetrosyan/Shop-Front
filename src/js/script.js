window.addEventListener("DOMContentLoaded", () =>{
    const menuBtn = document.querySelector(".menuBtn");
    const navMenu = document.querySelector("#menu");

    const see_all_product = document.querySelector(".header_content__buttons a");

    try {
		see_all_product .addEventListener("click", () => {
            console.log(555);
			window.scrollTo({
				top: 650,
			});
		});
	} catch{}


    // menuBtn.addEventListener("click", ()=>{
    //     if(!menuBtn.classList.contains("open")){
    //         menuBtn.classList.add("open");
    //         navMenu.classList.add("active_nav");
    //     }else{
    //         menuBtn.classList.remove("open");
    //         navMenu.removeAttribute("class");
    //     }
    // })

   

 
})
