const greedElem = document.getElementById("griglia");
// console.log(greedElem);
let innerGriglia = "";
let arrayData = [];


axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=6`, { timeout: 1000000000000 }).then((array) => {
    // console.log(array.data);
    arrayData = array.data;
    // console.log(arrayData);
    arrayData.forEach((elem) => {
        const { title, url } = elem;
        // console.log(title);
        console.log(url);
        innerGriglia += `<div class="col-12 col-md-6 col-lg-4">
        <div class="ms-bg-white h-100 relativ-pos"> 
        <div class="absolute-pos debug cirle rounded-circle"></div>
            <div class="container">
                <img src="${url}" class="card-img-top pt-3" alt="descrizione" >
            
            <div class="card-body pt-3 pb-5">
                <h5 class="card-title">${title}</h5>
                </div>
            </div>
        </div>
    </div>`
    })
    greedElem.innerHTML = innerGriglia
})