const $sort_filter_icon = document.querySelector('.sort_filter_icon');
const $filter_bg_container = document.querySelector('.filter_bg_container');
const $filter_container = document.querySelector('.filter_container')
const $filter_close = document.querySelector('.filter_close');


$sort_filter_icon.addEventListener('click', (event) =>{
    $filter_bg_container.className = "filter_bg_container show"
    $filter_container.className = "filter_container show"
    
})

$filter_close.addEventListener('click', (event) => {
    $filter_bg_container.className = "filter_bg_container hidden"
    $filter_container.className = "filter_container hidden"
})
