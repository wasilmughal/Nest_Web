
//  local database 
// All data  export  {PopularData,FeaturedCard,TopSelling,populerDataV,Relatedproducts,Vendors_Data,shoplist,Recipsarticles} 



const PopularData = [
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
    cat: "Snaks",
    title: "Seed of Change Origanic Quinoa,Brown,Rad Rice",
    by: "NestFood",
    price1: "$28.85",
    price2: "$32.0",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg",
    cat: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    by: "Stouffer",
    price1: "$52.85",
    price2: "$55.0",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
    cat: "Snaks",
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    by: "StarKist",
    price1: "$48.85 ",
    price2: " $52.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg",
    cat: "Vegetable",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    by: " NestFood",
    price1: "$17.85",
    price2: "$19.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg",
    cat: "Pet Foods",
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    by: "NestFood",
    price1: "$23.85",
    price2: " $25.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-2.jpg",
    cat: "Hodo Foods",
    title: "Chobani Complete Vanilla Greek Yogurt",
    by: "NestFood",
    price1: "$54.85 ",
    price2: "$55.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg",
    cat: "Meats",
    title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
    by: "NestFood",
    price1: "$32.85 ",
    price2: "$33.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg",
    cat: "Snack",
    title: "Encore Seafoods Stuffed Alaskan Salmon",
    by: " NestFood",
    price1: "$35.85 ",
    price2: "$37.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-2.jpg",
    cat: "Coffes",
    title: "Gorton’s Beer Battered Fish Fillets with soft paper",
    by: " Old El Paso",
    price1: "$23.85 ",
    price2: "$25.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-2.jpg",
    cat: "Cream",
    title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    by: "Tyson",
    price1: "$22.85 ",
    price2: "$24.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-11-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-11-2.jpg",
    cat: "Coffes",
    title: "Gorton’s Beer Battered Fish Fillets with soft paper",
    by: "Old El Paso",
    price1: "$23.85",
    price2: " $25.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-12-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-12-2.jpg",
    cat: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    by: "Stouffer",
    price1: "$52.85 ",
    price2: "$55.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-13-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-13-2.jpg",
    cat: "Snack",
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    by: " StarKist",
    price1: "$48.85",
    price2: " $52.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-14-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-14-2.jpg",
    cat: "Vegetables",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    by: " NestFood",
    price1: "$17.85",
    price2: "$19.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-15-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-15-2.jpg",
    cat: "Pet Foods",
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    by: "NestFood",
    price1: "$23.85 ",
    price2: "$25.8",
  },
];


const FeaturedCard = [
    {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png",
        name:"Vagetables",
        itemsno:"72",
        color :"#FFFCEB"
    },
    {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png",
        name:"strwberry",
        itemsno:"36",
        color:"#ECFFEC"
    },
    {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png",
        name:"Snaks",
        itemsno:"27",
        color:"#FEEFEA"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png",
        name:"Black Plums",
        itemsno:"26",
        color:"#FFF3EB"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png",
        name:"Custurd Apple",
        itemsno:"92",
        color:"#FFF3FF"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-6.png",
        name:"Graps",
        itemsno:"41",
        color:"#F2FCE4"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-7.png",
        name:"Orange",
        itemsno:"28",
        color:"#FEEFEA"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-8.png",
        name:"tree",
        itemsno:"44",
        color:"#FFFCEB"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png",
        name:"Apple",
        itemsno:"5",
        color:"#FEEFEA"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-10.png",
        name:"Dragon",
        itemsno:"59",
        color:"#ECFFEC"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png",
        name:"Peach",
        itemsno:"83",
        color:"#F2FCE4"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png",
        name:"Organic kivu",
        itemsno:"84",
        color:"#F4F6FA;"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",
        name:"Burgure",
        itemsno:"45",
        color:"#F2FCE4"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png",
        name:"Coofes & Tea",
        itemsno:"89",
        color:"#FFF3EB"

    }, {
        img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-15.png",
        name:"Headphons",
        itemsno:"87",
        color:"#FFFCEB"

    }
    
]


const TopSelling = {
  Topse:[
    {
      title:"Nestle Original Coffee-Mate Coffee Creamer",
      image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg",
      price1:"$32.8",
      price2:"$33.8"
  
    },
    {
      title:"Nestle Original Coffee-Mate Coffee Creamer",
      image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-2.jpg",
      price1:"$32.8",
      price2:"$33.8"
  
    },  {
      title:"Nestle Original Coffee-Mate Coffee Creamer",
      image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg",
      price1:"$32.8",
      price2:"$33.8"
  
    }
  ],
  treding:[

    {
      title:"Organic Cage-Free Grade A Large Brown Eggs",
      image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg",
      price1:"$32.85",
        price2:" $33.8"
  
    },
    {
      title:"Seeds of Change Organic Quinoa, Brown, & Red Rice",
      image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg",
      price1:"$32.85",
      price2:" $33.8"
  
    },  {
      title:"Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
      image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-6.jpg",
      price1:"$32.85",
        price2:" $33.8"
  
    }
   
  
    ],
    recently:[
     

       {
        title:"Pepperidge Farm Farmhouse Hearty White Bread",
        image:"	https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg",
        price1:"$32.85",
        price2:" $33.8"
    
      },
      {
        title:"Organic Frozen Triple Berry Blend",
        image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg",
        price1:"$32.85",
        price2:" $33.8"
    
      },  {
        title:"Oroweat Country Buttermilk Bread",
        image:"	https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-9.jpg",
        price1:"$32.85",
        price2:" $33.8"
    
      }
    ],
    toprate:[
      {
        title:"Foster Farms Takeout Crispy Classic Buffalo Wings",
        image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-10.jpg",
        price1:"$32.85",
        price2:" $33.8"
    
      },
      {
        title:"Angies Boomchickapop Sweet & Salty Kettle Corn",
        image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-11.jpg",
        price1:"$32.85",
        price2:" $33.8"
    
      },  {
        title:"All Natural Italian-Style Chicken Meatballs",
        image:"	https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-12.jpg",
        price1:"$32.85",
        price2:" $33.8"
    
      }
    ]

  
  
}


const populerDataV={
  all:[
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
      cat: "Snaks",
      title: "Seed of Change Origanic Quinoa,Brown,Rad Rice",
      by: "NestFood",
      price1: "$28.85",
      price2: "$32.0",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg",
      cat: "Hodo Foods",
      title: "All Natural Italian-Style Chicken Meatballs",
      by: "Stouffer",
      price1: "$52.85",
      price2: "$55.0",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
      cat: "Snaks",
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      by: "StarKist",
      price1: "$48.85 ",
      price2: " $52.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg",
      cat: "Vegetable",
      title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      by: " NestFood",
      price1: "$17.85",
      price2: "$19.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg",
      cat: "Pet Foods",
      title: "Blue Diamond Almonds Lightly Salted Vegetables",
      by: "NestFood",
      price1: "$23.85",
      price2: " $25.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-2.jpg",
      cat: "Hodo Foods",
      title: "Chobani Complete Vanilla Greek Yogurt",
      by: "NestFood",
      price1: "$54.85 ",
      price2: "$55.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg",
      cat: "Meats",
      title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
      by: "NestFood",
      price1: "$32.85 ",
      price2: "$33.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg",
      cat: "Snack",
      title: "Encore Seafoods Stuffed Alaskan Salmon",
      by: " NestFood",
      price1: "$35.85 ",
      price2: "$37.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-2.jpg",
      cat: "Coffes",
      title: "Gorton’s Beer Battered Fish Fillets with soft paper",
      by: " Old El Paso",
      price1: "$23.85 ",
      price2: "$25.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-2.jpg",
      cat: "Cream",
      title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
      by: "Tyson",
      price1: "$22.85 ",
      price2: "$24.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-11-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-11-2.jpg",
      cat: "Coffes",
      title: "Gorton’s Beer Battered Fish Fillets with soft paper",
      by: "Old El Paso",
      price1: "$23.85",
      price2: " $25.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-12-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-12-2.jpg",
      cat: "Hodo Foods",
      title: "All Natural Italian-Style Chicken Meatballs",
      by: "Stouffer",
      price1: "$52.85 ",
      price2: "$55.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-13-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-13-2.jpg",
      cat: "Snack",
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      by: " StarKist",
      price1: "$48.85",
      price2: " $52.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-14-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-14-2.jpg",
      cat: "Vegetables",
      title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      by: " NestFood",
      price1: "$17.85",
      price2: "$19.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-15-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-15-2.jpg",
      cat: "Pet Foods",
      title: "Blue Diamond Almonds Lightly Salted Vegetables",
      by: "NestFood",
      price1: "$23.85 ",
      price2: "$25.8",
    },

  ],

  Milk:[
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-11-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-11-2.jpg",
      cat: "Coffes",
      title: "Gorton’s Beer Battered Fish Fillets with soft paper",
      by: "Old El Paso",
      price1: "$23.85",
      price2: " $25.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-12-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-12-2.jpg",
      cat: "Hodo Foods",
      title: "All Natural Italian-Style Chicken Meatballs",
      by: "Stouffer",
      price1: "$52.85 ",
      price2: "$55.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-13-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-13-2.jpg",
      cat: "Snack",
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      by: " StarKist",
      price1: "$48.85",
      price2: " $52.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-14-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-14-2.jpg",
      cat: "Vegetables",
      title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      by: " NestFood",
      price1: "$17.85",
      price2: "$19.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-15-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-15-2.jpg",
      cat: "Pet Foods",
      title: "Blue Diamond Almonds Lightly Salted Vegetables",
      by: "NestFood",
      price1: "$23.85 ",
      price2: "$25.8",
    },

  ],


  coffes:[
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg",
      cat: "Pet Foods",
      title: "Blue Diamond Almonds Lightly Salted Vegetables",
      by: "NestFood",
      price1: "$23.85",
      price2: " $25.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-2.jpg",
      cat: "Hodo Foods",
      title: "Chobani Complete Vanilla Greek Yogurt",
      by: "NestFood",
      price1: "$54.85 ",
      price2: "$55.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg",
      cat: "Meats",
      title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
      by: "NestFood",
      price1: "$32.85 ",
      price2: "$33.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg",
      cat: "Snack",
      title: "Encore Seafoods Stuffed Alaskan Salmon",
      by: " NestFood",
      price1: "$35.85 ",
      price2: "$37.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-2.jpg",
      cat: "Coffes",
      title: "Gorton’s Beer Battered Fish Fillets with soft paper",
      by: " Old El Paso",
      price1: "$23.85 ",
      price2: "$25.8",
    },
  

  ],
  petFood:[

    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
      cat: "Snaks",
      title: "Seed of Change Origanic Quinoa,Brown,Rad Rice",
      by: "NestFood",
      price1: "$28.85",
      price2: "$32.0",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg",
      cat: "Hodo Foods",
      title: "All Natural Italian-Style Chicken Meatballs",
      by: "Stouffer",
      price1: "$52.85",
      price2: "$55.0",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
      cat: "Snaks",
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      by: "StarKist",
      price1: "$48.85 ",
      price2: " $52.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg",
      cat: "Vegetable",
      title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      by: " NestFood",
      price1: "$17.85",
      price2: "$19.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg",
      cat: "Pet Foods",
      title: "Blue Diamond Almonds Lightly Salted Vegetables",
      by: "NestFood",
      price1: "$23.85",
      price2: " $25.8",
    },

  ],
  Meats:[

    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg",
      cat: "Pet Foods",
      title: "Blue Diamond Almonds Lightly Salted Vegetables",
      by: "NestFood",
      price1: "$23.85",
      price2: " $25.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-2.jpg",
      cat: "Hodo Foods",
      title: "Chobani Complete Vanilla Greek Yogurt",
      by: "NestFood",
      price1: "$54.85 ",
      price2: "$55.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg",
      cat: "Meats",
      title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
      by: "NestFood",
      price1: "$32.85 ",
      price2: "$33.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg",
      cat: "Snack",
      title: "Encore Seafoods Stuffed Alaskan Salmon",
      by: " NestFood",
      price1: "$35.85 ",
      price2: "$37.8",
    },
    {
      img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg",
      img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-2.jpg",
      cat: "Coffes",
      title: "Gorton’s Beer Battered Fish Fillets with soft paper",
      by: " Old El Paso",
      price1: "$23.85 ",
      price2: "$25.8",
    },

  ]
}

const Relatedproducts=[
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg",
    title: "Ulstra Bass Headphone",
    price1: "$52.85",
    price2: "$55.0",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
    title: "Smart Bluetooth Speaker",
    price1: "$48.85 ",
    price2: " $52.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg",
    title: "HomeSpeak 12UEA Goole",
    price1: "$17.85",
    price2: "$19.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg",
    title: "Dadua Camera 4K 2022EF",
    price1: "$23.85",
    price2: " $25.8",
  },
]


 const  Vendors_Data =[
  {
    img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-1.png",
    title:"Since 2012",
    name:"Nature Food",
 },
 {
  img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-7.png",
  title:"Since 2012",
  name:"Mrs. Smith's Pie",
},
{
  img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-8.png",
  title:"Since 2012",
  name:"Red Baron",
},
{
  img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-9.png",
  title:"Since 2012",
  name:"Noodle Soup",
},
{
  img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-10.png",
  title:"Since 2012",
  name:"Maruchan Ram",
},
{
  img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-11.png",
  title:"Since 2012",
  name:"Totino's Pizza",
},
]

const shoplist =[
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
    cat: "Snaks",
    title: "Seed of Change Origanic Quinoa,Brown,Rad Rice",
    by: "NestFood",
    price1: "$28.85",
    price2: "$32.0",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg",
    cat: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    by: "Stouffer",
    price1: "$52.85",
    price2: "$55.0",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg",
    cat: "Snaks",
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    by: "StarKist",
    price1: "$48.85 ",
    price2: " $52.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg",
    cat: "Vegetable",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    by: " NestFood",
    price1: "$17.85",
    price2: "$19.8",
  },
  {
    img1: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
    img2: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg",
    cat: "Pet Foods",
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    by: "NestFood",
    price1: "$23.85",
    price2: " $25.8",
  },
]

const Recipsarticles=[
  {
    image:"	https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-1.png",
    name:"Side Dish",
    title:"The Intermediate Guide to Healthy Food",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-2.png",
    name:"Soups and Stews",
    title:"Summer Quinoa Salad Jars with Lemon Dill",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-3.png",
    name:"Salad",
    title:"Caprese Chicken with Smashed Potatoes",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"	https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-4.png",
    name:"Dessert",
    title:"Harissa Chickpeas with Whipped Feta",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-5.png",
    name:"Breakfast",
    title:"Almond Butter Chocolate Chip Zucchini Bars",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-6.png",
    name:"Vegan",
    title:"Smoky Beans & Greens Tacos with Aji Verde",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-7.png",
    name:"Gluten Free",
    title:"Sticky Ginger Rice Bowls with Pickled Veg",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-8.png",
    name:"Side Dish",
    title:"Creamy Garlic Sun-Dried Tomato Pasta",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-9.png",
    name:"Dairy Free",
    title:"The Absolute Easiest Spinach and Pizza",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"	https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-10.png",
    name:"Salad",
    title:"Sticky Ginger Rice Bowls with Pickled",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-1.png",
    name:"Soups",
    title:"The Best Soft Chocolate Chip Cookies",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"	https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-12.png",
    name:"Vegetarian",
    title:"Baked Mozzarella Chicken Rolls",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"	https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-13.png",
    name:"Dessert",
    title:"The Best Avocado Egg Salad",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-14.png",
    name:"Vegetarian",
    title:"The litigants on the screen are not actors",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
  {
    image:"https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/blog-15.png",
    name:"Vegetarian",
    title:"The litigants on the screen are not actors",
    date:"25 April 2022",
    view:"126k Views",
    mints:"4 mins read"
  },
]

export {PopularData,FeaturedCard,TopSelling,populerDataV,Relatedproducts,Vendors_Data,shoplist,Recipsarticles} 
