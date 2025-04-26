function hello(){
    console.log("hello world");
   fetch('articles.json')
  .then(res => res.json())
  .then(data => {
    console.log(data[1]);
    document.querySelector("body").innerHTML=data[20].content;
  });
}


hello();