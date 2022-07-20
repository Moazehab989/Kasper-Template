let toggle = document.querySelector('.toggle-menu')
let navList = document.querySelector('header nav ul')

toggle.addEventListener("click", () => {
    if (navList.classList.contains("clicked")) {
        navList.classList.remove("clicked")
        toggle.classList.remove("active")
    } else {
        navList.classList.add("clicked")
        toggle.classList.add("active")
    }
})