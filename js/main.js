const BarButton = document.querySelector("#bars");
const HeaderList = document.querySelector(".header__list");
const Actived = "actived";
document.addEventListener("click", function (e) {
    if (!HeaderList.contains(e.target)
        && HeaderList.classList.contains(Actived) === true
        && !BarButton.contains(e.target)) {
        HeaderList.classList.remove(Actived)
        console.log("close")
    }
})