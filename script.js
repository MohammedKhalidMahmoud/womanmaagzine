{/* <div class="w-full md:w-1/2 lg:w-1/3 px-4">
        <div class=" bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#" class="">
                <img class="rounded-t-lg h-70 mt-7 mb-1 block mx-auto" src="./imgs/html.png" alt="" />
            </a>
            <div class="p-5">
                <div class="tags">
                    <div class="bg-[#f25287] w-fit rounded-md px-2 py-0.5 text-white text-xs font-semibold ml-auto">حاجز مكان</div>
                </div>
                <a href="#">
                    <h5 class="text-right mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">حاجز مكان</h5>
                </a>
                
                <p class="text-right mb-3 font-normal text-gray-700 dark:text-gray-400">حاجز مكان</p>
                <a href="#" class="block w-fit ml-auto  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <i class="fa-solid fa-arrow-left text-white mr-1"></i>
                    اقرأ المزيد
                     <!-- <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg> -->
                    
                </a>
                
            </div>
        </div>    
    </div> */}
const container=document.querySelector("#content_here")
function display(data){
    let cartona='';
    cartona=data.map(el=>{
        return `<div class="w-full md:w-1/2 lg:w-1/3 px-4" >
            <div class=" bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#" class="">
                    <img class="rounded-t-lg h-70 mt-7 mb-1 block mx-auto" src="./imgs/html.png" alt="" />
                </a>
                <div class="p-5">
                    <div class="tags">
                        <div class="bg-[#f25287] w-fit rounded-md px-2 py-0.5 text-white text-xs font-semibold ml-auto">حاجز مكان</div>
                    </div>
                    <a href="#">
                        <h5 class="text-right mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">حاجز مكان</h5>
                    </a>
                    
                    <p class="text-right mb-3 font-normal text-gray-700 dark:text-gray-400">حاجز مكان</p>
                    <a href="#" class="block w-fit ml-auto  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <i class="fa-solid fa-arrow-left text-white mr-1"></i>
                        اقرأ المزيد
                        <!-- <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg> -->
                    </a> 
                </div>
            </div>  
        </div>  `
    }).join('')
    container.innerHTML=cartona;
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