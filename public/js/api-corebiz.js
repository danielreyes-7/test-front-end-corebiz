
function clickItem () {
        let cart = document.querySelector('.header-item.cart i');
        let count = parseInt(cart.innerText)
        cart.innerText = count+1;
}

const createCarrusel = (data) => {
    data.forEach(product => {
        let item = carruselProduct(product)
        
        let container = document.getElementById('carrusel');
        let newElement = document.createElement('li')
        newElement.innerHTML = item;
        container.append(newElement)
    });
}


const carruselProduct = (data) => {





    offFlag = data.listPrice ? "on":"off";

    console.log(offFlag);

    dataString = `<div class="product-container">
    <div class="triangulo-${offFlag}"></div>
    <div class="product-image">
        <img src="${data.imageUrl}">
    </div>
        <div class="product-description">
            <div class="product-name">
                <h4>${data.productName}</h4>
            </div>
            <div class="star-content star-${data.stars}">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <div class="product-listPrice">${data.listPrice ? "$ " + data.listPrice : "" }</div>
            <p class="price">Precio: $ ${data.price}</p>
            <button onclick="clickItem()" type="submit">Comprar</button>
        </div>    
    </div> `;

    return dataString
};

const carrusel = () => {
console.log('yuyiuhyi',$('#carrusel'))
    $('#carrusel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        }
    ]
    });
};

$(document).ready(function() {
    

const url = 'https://corebiz-test.herokuapp.com/api/v1/products';

    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
 
        console.log(data);

        createCarrusel(data);
        setTimeout(carrusel(), 3000)

    })
    .catch(function(e) {
        console.log('error' + e);
    })



});

