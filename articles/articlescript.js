function hello(){
    console.log("hello world");
   fetch('articles.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.querySelector("body").innerHTML=data[articleId-1].content;
  });
}


hello();
const articleId = getQueryParam('id');
console.log(articleId);
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}