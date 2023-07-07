    // navbar start 
    const openBtn = document.querySelector(".menu-bar");
    const navBar = document.querySelector(".menus");
    const closeBtn = document.querySelector(".close-btn");

    // onclick function 
    openBtn.onclick = () => {
        navBar.style.display= "block";
    } 
    closeBtn.onclick = () => {
        navBar.style.display= "none";
    } 
    // navbar end 

    