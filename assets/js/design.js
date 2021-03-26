function imgSlider (color){

    const img = document.getElementById('starbucks-img');

    if (color == "green"){

        img.setAttribute('src','assets/img/img1.png');

    }else if (color == "pink"){

        img.setAttribute('src', 'assets/img/img2.png');

    }else {
        img.setAttribute('src', 'assets/img/img3.png');
    }
}



//function changeCircleColor (color){

    //const circle= document.getElementsByClassName('circle');

    //if (color == "green"){

       //circle.style.background ='#017143';

    //}else if (color == "pink"){

        //circle.style.background = '#eb7494';

    //}else {
         //circle.style.background = '#d752b1';
    //}
//}