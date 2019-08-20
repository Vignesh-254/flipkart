var mobileTemplate = document.querySelector(".mobile-card-template");
// console.log(mobileTemplate);
var mobileDisplaySection = document.querySelector(".whole-class");
var mobileSection = document.querySelector(".mobiles-section");
// var mobileList = document.querySelector(".full-display");
var mobileHeader = document.querySelector(".mobile-brand");
var Pagination = document.querySelector(".pagination");
var PaginationPages = document.querySelector(".pagination-pages");
var mobiles = {
  Samsung: [
    {
      name: "samsung J5",
      ram: 8,
      price: 50000.25
    },
    {
      name: "samsung J5",
      ram: 8,
      price: 50000.25
    },
    {
      name: "samsung J5",
      ram: 6,
      price: 30000
    },
    {
      name: "samsung J5",
      ram: 12,
      price: 58000.25
    },
    {
      name: "samsung J5",
      ram: 8,
      price: 100000.25
    },
    {
      name: "samsung J5",
      ram: 6,
      price: 50000.25
    },
    {
      name: "samsung J5",
      ram: 8,
      price: 100000.25
    },
    {
      name: "samsung J5",
      ram: 8,
      price: 100000.25
    },
    {
      name: "samsung J5",
      ram: 8,
      price: 100000.25
    },
    {
      name: "samsung J5",
      ram: 8,
      price: 100000.25
    },
    {
      name: "samsung J5",
      ram: 8,
      price: 100000.25
    },
    {
      name: "samsung J5",
      ram: 8,
      price: 100000.25
    },
  ],
  Apple: [
    {
      name: "iphone xs",
      ram: 8,
      price: 50000.25
    },
    {
      name: "iphone xs",
      ram: 6,
      price: 30000
    },
    {
      name: "iphone xs",
      ram: 12,
      price: 58000.25
    },
    {
      name: "iphone xs",
      ram: 8,
      price: 100000.25
    },
    {
      name: "iphone xs",
      ram: 6,
      price: 50000.25
    },
    {
      name: "iphone xs",
      ram: 8,
      price: 100000.25
    },
    {
      name: "iphone xs",
      ram: 8,
      price: 100000.25
    },
    {
      name: "iphone xs",
      ram: 8,
      price: 100000.25
    },
    {
      name: "iphone xs",
      ram: 8,
      price: 100000.25
    },
    {
      name: "iphone xs",
      ram: 8,
      price: 100000.25
    },
    {
      name: "iphone xs",
      ram: 8,
      price: 100000.25
    },
  ],
  Redmi: [
    {
      name: "redmi note",
      ram: 8,
      price: 50000.25
    },
    {
      name: "redmi note",
      ram: 6,
      price: 30000
    },
    {
      name: "redmi note",
      ram: 12,
      price: 58000.25
    },
    {
      name: "redmi note",
      ram: 8,
      price: 100000.25
    },
    {
      name: "redmi note",
      ram: 6,
      price: 50000.25
    },{
      name: "redmi note",
      ram: 8,
      price: 100000.25
    },
    {
      name: "redmi note",
      ram: 8,
      price: 100000.25
    },
    {
      name: "redmi note",
      ram: 8,
      price: 100000.25
    },
    {
      name: "redmi note",
      ram: 8,
      price: 100000.25
    },
    {
      name: "redmi note",
      ram: 8,
      price: 100000.25
    },
    {
      name: "redmi note",
      ram: 8,
      price: 100000.25
    },
  ]
};
for(let iterator in mobiles){
        
        var mobileDisplay = mobileSection.cloneNode(false);
        mobileDisplay.classList.remove("mobiles-section-property");
        var mobileHeaderClone = mobileHeader.cloneNode(true);
        var PaginationClone = Pagination.cloneNode(true);
        // var mobileHeaderClone = mobileHeader.cloneNode(true);
        mobileHeaderClone.classList.remove("mobile-brand-property");
         mobileHeaderClone.innerText = iterator;
        mobileDisplay.appendChild(mobileHeaderClone);


        var a=mobiles[iterator].length;
        console.log(a);
        var no_of_pages =Math.ceil(a/6);
        for(let i=0;i<no_of_pages;i++){
          var PaginationPagesClone = PaginationPages.cloneNode(false);
          PaginationPagesClone.innerText=i+1;
          PaginationClone.appendChild(PaginationPagesClone);
        }

        mobiles[iterator].forEach(function(item) {
          
          var mobile = mobileTemplate.cloneNode(true);
          mobile.classList.remove("mobile-card-template");
          mobile.querySelector(".mobile-name").innerText = item["name"];
          mobile.querySelector(".mobile-ram").innerText = item["ram"];
          mobile.querySelector(".mobile-price").innerText = item["price"];
          mobileDisplay.appendChild(mobile);
    });
    // console.log(a);
  
    //console.log(mobileDisplay);
    
    // var no_of_pages =Math.ceil(a/6);
    // for(let i =0;i<no_of_pages;i++){
    //   var PaginationClone = Pagination.cloneNode(true);
    //   // PaginationClone.classList.remove("Pagination-property");
    //   PaginationClone.innerText=i+1;
    //   mobileDisplaySection.appendChild(PaginationClone);
    // }
    mobileDisplay.appendChild(PaginationClone);
  mobileDisplaySection.appendChild(mobileDisplay);
  }
  console.log("vignesh")