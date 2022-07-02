// filter pop up
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

// page span click
const $clothes_image_page_container = document.querySelector('.clothes_image_page_container');

$clothes_image_page_container.addEventListener('click', (event) =>{
    const target = event.target;
    const page_spans = target.parentNode.children;
    for(let i=0; i<page_spans.length;i++){
        page_spans[i].style.fontWeight = '400';
    }
    if(target.tagName != 'SPAN') return;
    target.style.fontWeight = '600';
})

window.addEventListener('load', (event)=>{
    $clothes_image_page_container.children[0].style.fontWeight = '600';
})

// filter page click _ check sign
function removeCheckSign(dom, className){
    const removeCheck = dom.querySelector(`.${className}`);
    if(removeCheck!=null){
        removeCheck.classList.remove(className);
    }
}
function addClassToChoose(dom, className, event, tagName){
    const target = event.target;
    if(target.tagName != tagName) return;

    removeCheckSign(dom, className);
    target.classList.add(className);
}

const $filter_gender_box = document.querySelector(".filter_gender_box");
$filter_gender_box.addEventListener('click', (event) => {
    addClassToChoose($filter_gender_box, 'check', event, 'SPAN');
})

const $level_detail_container = document.querySelector('.level_detail_container');
$level_detail_container.addEventListener('click', (event) => {
    const target = event.target;
    if(!target.classList.contains('level')) return;

    removeCheckSign($level_detail_container, 'check');
    target.classList.add('check');
})

const $price_container = document.querySelector('.price_container');
$price_container.addEventListener('click', (event)=>{
    addClassToChoose($price_container, 'check', event, 'SPAN');
})

// detail category
$detail_category = document.querySelector('.detail_category');
$detail_category.addEventListener('click', (event) =>{
    addClassToChoose($detail_category, 'choose', event, 'SPAN');
})

// expert opinion
const $expert_opinion_arrow = document.querySelector('.expert_opinion_arrow');
const $expert_opinion_main = document.querySelector('.expert_opinion_main');

$expert_opinion_arrow.addEventListener('click',(event) => {
    $expert_opinion_main.classList.toggle('expert_opinion_show');
    $expert_opinion_arrow.classList.toggle('expert_opinion_arrow_up');
})