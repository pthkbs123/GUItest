const startButton = document.querySelector('.start_b');
const result = document.querySelector('.answer');

const start = document.querySelector('.start');
const end = document.querySelector('.end');
const distance = document.querySelector('distance');
const time = document.querySelector('.time');

function click_start_button(){
    if (start.value == ""){
        
        alert('시작지를 입력해주세요.');
        start.focus();
        return false;
    }
    else if (end.value == ""){
        alert('도착지를 입력해주세요.');
        end.focus();
        return false;
    }
    
    result.style.display = 'none';
}

function inner_seo(){
    document.getElementById("start").innerHTML = '서울광역시';
}