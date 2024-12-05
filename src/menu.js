import wienerImg2 from '/src/wiener-schnitzel.jpg';

const renderMenu = function() {

    const menuImage = document.createElement('img');
    const introPara = document.createElement('p');
    const middlePara = document.createElement('p');

    menuImage.src = wienerImg2;
    menuImage.id = "logo";
    menuImage.alt = "Restaurant logo";

    introPara.textContent = 'Here is another photo of Wiener ';

    middlePara.textContent = 'Some other text';
    
    content.append(introPara, menuImage, middlePara,);

}

export {renderMenu};