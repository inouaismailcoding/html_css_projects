document.getElementById('id_property_type').onchange=(e)=>{
    e.preventDefault();
   var value = document.getElementById('id_property_type').value;
   var appartmentDetail = document.getElementById('appartment-detail');
   var immeubleDetail = document.getElementById('immeuble-detail');
   if (value === '1' | value ==='2') {
    appartmentDetail.classList.remove('info-detail-property');
    appartmentDetail.classList.add('detail');
    immeubleDetail.classList.add('info-detail-property');
} else if (value === '3') {
    immeubleDetail.classList.remove('info-detail-property');
    immeubleDetail.classList.add('detail');
    appartmentDetail.classList.add('info-detail-property');
    
    
    // Ajouter l'effet souhaité pour l'affichage de la div
    // Par exemple : immeubleDetail.classList.add('effet-choisi');
} else {
    appartmentDetail.style.display = 'none';
    immeubleDetail.style.display = 'none';
}

}

