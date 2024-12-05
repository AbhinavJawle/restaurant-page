import charles from '/src/charles.jpg';

const renderAbout = function() {

    const menuImage = document.createElement('img');
    const introPara = document.createElement('p');
    const middlePara = document.createElement('p');

    menuImage.src = charles;
    menuImage.id = "aboutImage";
    menuImage.alt = "Restaurant logo";

    introPara.textContent = 'Here is the owner of the restaurant ';

    middlePara.textContent = 'charles';
    
    content.append(introPara, menuImage, middlePara,);

}

export {renderAbout};