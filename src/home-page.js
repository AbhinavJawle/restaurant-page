import wienerImg from '/src/wiener-schnitzel1.jpg';

const renderHome = function() {

    const homeImage = document.createElement('img');
    const introPara = document.createElement('p');
    const middlePara = document.createElement('p');
    const outroPara = document.createElement('p');

    homeImage.src = wienerImg;
    homeImage.id = "logo";
    homeImage.alt = "Restaurant logo";

    introPara.textContent = 'Welcome to Sapore Italiano, where passion meets tradition. Our restaurant brings the warmth and flavor of Italy directly to your table. Every dish is carefully crafted using the freshest local ingredients and time-honored family recipes passed down through generations.';

    middlePara.textContent = 'From our handmade pasta to our wood-fired pizzas, each bite tells a story of culinary excellence. Our chefs are dedicated to creating an unforgettable dining experience that transports you straight to the rolling hills of Tuscany.';
    
    outroPara.textContent = 'Join us for an evening of delicious food, warm hospitality, and memories that will last a lifetime.';

    content.append(introPara, homeImage, middlePara, outroPara);

}

export {renderHome};