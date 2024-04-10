// animacja na naszym btn - klikniecie i pojawia sie menu 



// UWAAGA JS TO NIE JEST OSOBNY PLIK , JEST TO PLIK W KTÓRYM UZYWAMY ELEMENTÓW Z NASZEGO HTML - JAK W PRZYPADKU PRZYCISKU .burger-btn.   W RÓŻNYCH PRZYPADKACH TAK SAMO SIĘ UŻYWA ELEMENTÓW Z HTML




// najpierw uzywam const , a potem nazwyam jak chce element ktory bedzie edytowany - np burgerbtn -  w queryselector musimy użyć nazwy naszego kontenera który ma się zmieniać a jest to przecież nasz burger-btn z htmla
const burgerbtn = document.querySelector('.burger-btn');
const navi = document.querySelector('.navi');

// stworzylem nowy const - handleClick
const handleClick = () => {
	burgerbtn.classList.toggle('burger-btn--active');
    navi.classList.toggle('navi--active');
}

burgerbtn.addEventListener('click', handleClick);
