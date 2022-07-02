const review_form = document.querySelector("#review-form") ;
const form_input = review_form.querySelectorAll("input");
const hamburger_icon = document.querySelector(".hamburger-bar") ;
const menu_bar = document.querySelector("#menu-bar")
const menu_cancel_btn = document.querySelector("#menu-bar .cancel") ;
const form_cancel_btn = document.querySelector("#sub .sub-container .form-cancel-btn");


function clickBurgerBar() {
    menu_bar.classList.remove('hide');
}

function subForm (e) {
    e.preventDafualt() ;
}

function clickCancelBtn () {
    menu_bar.classList.add("hide");
}

function cancelForm() {
    history.go(-1);
}


review_form.addEventListener("submit", subForm);

hamburger_icon.addEventListener("click" , clickBurgerBar) ;

menu_cancel_btn.addEventListener("click" , clickCancelBtn) ;

form_cancel_btn.addEventListener("click", cancelForm);