// const MOCK_ITEMS = [
//     {
//         image: "https://d2xamzlzrdbdbn.cloudfront.net/products/0f890dc4-9ab0-4e35-9f6a-a8a49d0b8fb922011222.jpg",
//         name: "IPhone 11 Pro Ultra Max",
//         price: 5,
//         location: "Pedakallepalli, Mopidevi",
//         postedDate: "20-08-2023",
//     },
//     {
//         image: "https://placehold.it/280X150",
//         name: "IPhone 11 Pro Ultra Max",
//         price: 10,
//         location: "Pedakallepalli, Mopidevi",
//         postedDate: "20-08-2023",
//     },
//     {
//         image: "https://placehold.it/280X150",
//         name: "IPhone 11 Pro Ultra Max",
//         price: 20,
//         location: "Pedakallepalli, Mopidevi",
//         postedDate: "20-08-2023",
//     },
//     {
//         image: "https://placehold.it/280X150",
//         name: "IPhone 11 Pro Ultra Max",
//         price: 30,
//         location: "Pedakallepalli, Mopidevi",
//         postedDate: "20-08-2023",
//     },
//     {
//         image: "https://placehold.it/280X150",
//         name: "IPhone 11 Pro Ultra Max",
//         price: 40,
//         location: "Pedakallepalli, Mopidevi",
//         postedDate: "20-08-2023",
//     },
//     {
//         image: "https://placehold.it/280X150",
//         name: "IPhone 11 Pro Ultra Max",
//         price: 50,
//         location: "Pedakallepalli, Mopidevi",
//         postedDate: "20-08-2023",
//     },
//     {
//         image: "https://placehold.it/280X150",
//         name: "IPhone 11 Pro Ultra Max",
//         price: 60,
//         location: "Pedakallepalli, Mopidevi",
//         postedDate: "20-08-2023",
//     },
//     {
//         image: "https://placehold.it/280X150",
//         name: "IPhone 11 Pro Ultra Max",
//         price: 70,
//         location: "Pedakallepalli, Mopidevi",
//         postedDate: "20-08-2023",
//     },
//     {
//         image: "https://placehold.it/280X150",
//         name: "IPhone 11 Pro Ultra Max",
//         price: 80,
//         location: "Pedakallepalli, Mopidevi",
//         postedDate: "20-08-2023",
//     },
//     {
//         image: "https://placehold.it/280X150",
//         name: "IPhone 11 Pro Ultra Max",
//         price: 90,
//         location: "Pedakallepalli, Mopidevi",
//         postedDate: "20-08-2023",
//     },
// ];
const MOCK_ITEMS = [];

class Image {
    address;
    width = 150;
    height = 100;
    constructor(address) {
        this.address = address;
    }

    setWidth = (width) => {
        this.width = width;
    };

    getWidth = () => this.width;

    setHeight = (height) => {
        this.height = height;
    };
}

class OlxItem {
    id;
    name;
    price;
    image;
    location;
    postedDate;
    postedBy;

    constructor(name, price, image, location, postedBy, postedDate) {
        this.id = Math.random();
        this.name = name;
        this.price = price;
        this.image = image;
        this.location = location;
        this.postedBy = postedBy;
        this.postedDate = postedDate;
    }

    updatePrice = (newPrice) => {
        this.price = newPrice;
    };
}

// for (let i = 0; i < 100; i++) {
//     MOCK_ITEMS.push(
//         new OlxItem(
//             "Dell XPS " + (i + 1),
//             70000,
//             "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-15-3520/media-gallery/gray-paint/notebook-vostro-15-3520-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full",
//             "Pedakallepalli",
//             "Jyothi Babu Araja",
//             new Date()
//         )
//     );
// }

// MOCK_ITEMS[2].updatePrice(50000);

// MOCK_ITEMS[2].image.setWidth(200);
// MOCK_ITEMS[2].image.setHeight(150);

console.log(MOCK_ITEMS);

function addItems(event) {
    const root = document.getElementById("items");
    MOCK_ITEMS.forEach(function (item, i) {
        const div = createItem(item, i);
        root.appendChild(div);
    });
}

function createItem(item, i) {
    const div = document.createElement("div");
    div.classList.add("list");

    const anchor = document.createElement("a");
    anchor.setAttribute("href", '/item.html?id=${i}');

    div.appendChild(anchor);

    const img = document.createElement("img");
    img.setAttribute("src", item.image);

    const price = document.createElement("p");
    price.innerHTML = item.price;

    const name = document.createElement("p");
    name.innerHTML = item.name;

    const location = document.createElement("p");
    location.innerHTML = item.location;

    anchor.append(img, price, name, location);
    return div;
};

function displayItems(item) {
    const imgwrap = document.createElement("div");
    imgwrap.classList.add("imgwrap");
    const images = document.createElement("div");
    images.classList.add("images");
    const imgel = document.createElement("img");
    imgel.setAttribute("src", item.image);
    const description = document.createElement("p");
    description.innerHTML = "Description Cash on delivery availaable";
    const imageinfo = document.createElement("div");
    imageinfo.classList.add("imageinfo");
    const nameel = document.createElement("div");
    nameel.classList.add("nameel");
    const name = document.createElement("p");
    name.innerHTML = "Twice Nice Home Appliences";
    const button = document.createElement("button");
    button.innerHTML = "Chat with sellers";
    // const priceTag = document.createElement("div");
    // priceTag.classList.add("priceTag");
    const price = document.createElement("P");
    price.innerHTML = item.price;
    // const priceInfo = document.createElement("P");
    // priceInfo.innerHTML = "fully automatic washing";

    const dec = document.createElement("p");
    dec.innerHTML = "Haryana";
    const date = document.createElement("p");
    date.innerHTML = "AUG-22";
    // priceTag.append(price, priceInfo, dec, date);

    const location = document.createElement("p");
    location.innerHTML = item.location;
    location.classList.add("location");
    nameel.append(name, button);

    images.append(imgel, description);
    imageinfo.append(nameel, location);
    imgwrap.append(images, imageinfo);
    return imgwrap;

}