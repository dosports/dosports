function reviewTemplate(data) {
    const reviews = `
    <div class="review-margin">
    <img class="review-img" src=${data}>
    <div class="user-info">
        <span>${data}</span>
        <span>| ${data}</span>
    </div>
    <div class="review-content">
        <div>구매 옵션 | ${data}</div>
        <div class="content">
            <p>${data}</p>
        </div>
    </div>
    `
}