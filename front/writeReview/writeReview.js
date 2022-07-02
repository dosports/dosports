const review_form = document.querySelector("#review-form") ;
const form_input = review_form.querySelectorAll("input");


function subForm (e) {
    e.preventDafualt() ;
}

review_form.addEventListener("submit", subForm);