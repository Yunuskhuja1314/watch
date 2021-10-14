const arrowHours = document.querySelector('.h'),
      arrowMinutes = document.querySelector('.m'),
      arrowSeconds = document.querySelector('.s'),
      numHours = document.querySelector('.hours'),
      numMinutes = document.querySelector('.minutes');


function clock(){

    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours();

    // console.log(hours, minutes, seconds);

    arrowHours.style = `transform: rotate(${hours*30}deg)`;
    arrowMinutes.style = `transform: rotate(${minutes*6}deg)`;
    arrowSeconds.style = `transform: rotate(${seconds*6}deg);`;

    numHours.innerHTML = time.getHours() < 10 ? `0${time.getHours()}`: time.getHours();
    numMinutes.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}`: time.getMinutes();

    setTimeout(function(){clock()}, 1000)
}
clock()

const links = document.querySelectorAll('.tabLink'),
      items = document.querySelectorAll('.tabsContent__item');

      for (let i = 0; i < links.length; i++) {
          links[i].addEventListener('click', function(e){
              e.preventDefault();
            //   console.log(links[i]);
              for (let ii = 0; ii < links.length; ii++){
                  links[ii].classList.remove('active')
                  items[ii].classList.remove('active')
              }
              links[i].classList.add('active')
              items[i].classList.add('active')
          })
      }

const watchBtn = document.querySelector('.stopwatch__btn'),
      watchHours = document.querySelector('.stopwatch__hours'),
      watchMinutes = document.querySelector('.stopwatch__minutes'),
      watchSeconds = document.querySelector('.stopwatch__seconds'),
      indicator = document.querySelector('.indicator');

watchBtn.addEventListener('click', function(){
    console.log(watchBtn.innerHTML);
    if (watchBtn.innerHTML == 'start') {
        watchBtn.innerHTML = 'stop';
        indicator.classList.add('active');
        stopWatch(watchBtn, 0);
    }else if(watchBtn.innerHTML == 'stop'){
        watchBtn.innerHTML = 'clear';
        indicator.classList.remove('active');
        indicator.classList.add('active__stop');
    }else{
        watchBtn.innerHTML = 'start';
        indicator.classList.remove('active__stop');
    }
})

function stopWatch(element, i) {
    if (i == 59) {
        i = 0;
    }else{
        i++
        console.log(i++);
    }
    setTimeout(function(){stopWatch(element, i)}, 1000);
}

