const carousel_div=document.querySelector("#carousel");


// console.log(carousel_div);
const a5bar_container=document.querySelector("#a5bar_here")
const mkalat_container=document.querySelector("#mkalat_here")
const tkarer_container=document.querySelector("#tkareer_here")
const t7kekat_container=document.querySelector("#t7kekat_here")
const hwarat_container=document.querySelector("#hwarat_here")
console.log(a5bar_container, mkalat_container,tkarer_container,t7kekat_container,hwarat_container);
function display(data){
    let cartona=''
    // const shuffled = data.sort(() => 0.5 - Math.random());
    for(let j = 0; j < 5; j++) {
        cartona='';
        articles=data.filter(el=> j+1===+el.section_id);
        console.log(articles)
        for(let i=0;i<3;i++){
            let el=articles[i];
            cartona+=`<div class="w-full md:w-1/2 lg:w-1/3 px-2" >
                <div class="mt-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="../articles/article.html?id=${el.id}" class="">
                        <img class="w-full rounded-t-lg  mb-1 block mx-auto h-[500px]" src="../tabs/tab${j+1}/${i+1}.jpeg" alt="" />
                    </a>
                    <div class="p-5">
                        <div class="tags">
                            <div class="bg-[#f25287] w-fit rounded-md px-2 py-1 mb-1 text-white text-xs font-semibold ml-auto">${el.section_name}</div>
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
        }
            
        // }
        j===0? a5bar_container.innerHTML=cartona : j===1? mkalat_container.innerHTML=cartona : j===2? tkarer_container.innerHTML=cartona : j===3? t7kekat_container.innerHTML=cartona : hwarat_container.innerHTML=cartona;
             
    }
    
}

const ul=document.querySelector("#ul_id")
function fun2(){
    ul.classList.toggle("hidden")
    // console.log(ul);
}

function fetch_articles(){
    fetch('./articles/articles.json')
    .then(data=> data.json())
    .then(data=>{
        console.log(data);
        display(data);
    })
}

fetch_articles();




const divs = document.querySelectorAll('#counter');
divs.forEach(div => {
    const target = parseInt(div.getAttribute('data-target'));
    const speed = 2000 / target;
    let counter = 0;
    
    // Immediately display the initial value if you prefer
    div.innerHTML = counter;
    
    const intervalId = setInterval(() => {
        if (counter >= target) {
            clearInterval(intervalId);
            return;
        }
        counter++;
        div.innerHTML = counter;
    }, speed);
});



/* <div class="w-[500px] h-full  flex-shrink-0 mr-2 shadow-md">

                <div class="w-full md:w-1/2 lg:w-1/3 px-2" >
                    <div class="mt-4 w-[500px] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 ">
                        <a href="./articles/article.html?id=${el.id}" class="">
                            <img class="w-full rounded-t-lg  mb-1 block mx-auto h-[500px]" src="./tabs/tab1/1.jpeg" alt="" />
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
                </div> 
                <!-- <img class="w-full rounded-lg" src="./tabs/tab1/1.jpeg" alt=""> -->
            </div> */
let cartona='';
// for (let i = 0; i < 10; i++) {
//     cartona+=` <div class="w-full md:w-1/2 lg:w-1/3 px-4" >
//             <div class=" bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 ">
                
//                 <div class="w-[500px]   flex-shrink-0 mr-2 shadow-md rounded-lg">
//                     <img class="w-full rounded-lg" src="./tabs/tab1/1.jpeg" alt="">
//                 </div>
//                 <div class="p-5">
//                     <div class="tags">
//                         <div class="bg-[#f25287] w-fit rounded-md px-2 py-0.5 text-white text-xs font-semibold ml-auto">حاجز مكان</div>
//                     </div>
//                     <a href="#">
//                         <h5 class="text-right mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">حاجز مكان</h5>
//                     </a>
                    
//                     <p class="text-right mb-3 font-normal text-gray-700 dark:text-gray-400">حاجز مكان</p>
//                     <a href="#" class="block w-fit ml-auto  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                         <i class="fa-solid fa-arrow-left text-white mr-1"></i>
//                         اقرأ المزيد
//                         <!-- <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                         </svg> -->
//                     </a> 
//                 </div>
//             </div>  
//         </div>  `
// }
// carousel_div.innerHTML=cartona;




// next_btn.addEventListener("click",function(){
//     console.log("sliding right")
// })


// prev_btn.addEventListener("click",function(){
//     console.log("sliding left")
// })





