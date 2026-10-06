const dialog = document.querySelector("#demoDialog");
const openButton = document.querySelector("#openDialog");
const closeButton = document.querySelector("#closeDialog");

openButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});