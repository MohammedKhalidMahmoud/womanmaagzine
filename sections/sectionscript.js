const content_body= document.querySelector("#content-body");
const ul=document.querySelector("#ul_id")
function fun2(){
    ul.classList.toggle("hidden")
    // console.log(ul);
}
const sectionId = getQueryParam('id');

function _fetch(){
    console.log("fetching Articles");
   fetch('../articles/articles.json')
  .then(res => res.json())
  .then(data => {
    filter(data);
    console.log(data);
    // display(data)
  });
}

_fetch();

function display(articles){
    let cartona=''
    cartona=articles.map((el,index)=>{
        return `<div class="w-full md:w-1/2 lg:w-1/3 px-2" >
            <div class="mt-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 ">
                <a href="../articles/article.html?id=${el.id}" class="">
                    <img class="w-full rounded-t-lg  mb-1 block mx-auto h-[500px]" src="../tabs/tab${sectionId}/${index+1}.jpeg" alt="" />
                </a>
                <div class="p-5">
                    <div class="tags">
                        <div class="bg-[#f25287] w-fit rounded-md px-2 py-1 mb-1 text-white text-xs font-semibold ml-auto">${sectionName}</div>
                    </div>
                    <a href="../articles/article.html?id=${el.id}">
                        <h5 class="text-right mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${el.title}</h5>
                    </a>
                    
                    <p class="text-right mb-3 font-normal text-gray-700 dark:text-gray-400">${el.description}</p>
                    <a href="../articles/article.html?id=${el.id}" class="mt-1 block w-fit ml-auto  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <i class="fa-solid fa-arrow-left text-white mr-1"></i>
                        اقرأ المزيد
                        <!-- <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg> -->
                    </a> 
                </div>
            </div>  
        </div>  `
    }).join('');
    content_body.innerHTML=cartona;
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


function filter(data){
    const articles = data.filter(el => el.section_id === sectionId);
    console.log(articles);
    display(articles);
    
    
}
let sectionName;
switch (sectionId) {
    case '1':
        sectionName = "أخبار ";
        break;
    case '2':
        sectionName = "مقالات ";
        break;
    case '3':
        sectionName = "تقارير ";
        break;
    case '4':
        sectionName = "تحقيقات ";
        break;
    case '5':
        sectionName = "حوارات ";
        break;
   
}