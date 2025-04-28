function hello(){
    console.log("hello world");
   fetch('articles.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let article=data.filter(el => el.id === articleId);
    // console.log(article)
    document.querySelector("body").innerHTML=article[0].content;
  });
}


hello();
const articleId = getQueryParam('id');
console.log(articleId);
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}