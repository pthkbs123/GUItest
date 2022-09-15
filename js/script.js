const Start = document.querySelector('#start')
const End = document.querySelector('#end')

const startButton = document.querySelector('.start_b');
const result = document.querySelector('.answer')

const Start_r = document.querySelector('#start_r')
const End_r = document.querySelector('#end_r')
const Distance = document.querySelector('#distance')
const Time = document.querySelector('#time')

function inner_seo(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '서울특별시';
    }
    else{
        End.innerHTML = '서울특별시';
    }
    
}

function inner_inc(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '인천광역시';
    }
    else{
        End.innerHTML = '인천광역시';
    }
    
}

function inner_daj(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '대전광역시';
    }
    else{
        End.innerHTML = '대전광역시';
    }
    
}

function inner_kwa(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '광주광역시';
    }
    else{
        End.innerHTML = '광주광역시';
    }
    
}

function inner_dae(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '대구광역시';
    }
    else{
        End.innerHTML = '대구광역시';
    }
    
}

function inner_ull(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '울산광역시';
    }
    else{
        End.innerHTML = '울산광역시';
    }
    
}

function inner_buu(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '부산광역시';
    }
    else{
        End.innerHTML = '부산광역시';
    }
    
}

function inner_gie(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '경기도';
    }
    else{
        End.innerHTML = '경기도';
    }
    
}

function inner_kag(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '강원도';
    }
    else{
        End.innerHTML = '강원도';
    }
    
}

function inner_chn(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '충청남도';
    }
    else{
        End.innerHTML = '충청남도';
    }
    
}

function inner_chb(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '충청북도';
    }
    else{
        End.innerHTML = '충청북도';
    }
    
}

function inner_kib(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '경상북도';
    }
    else{
        End.innerHTML = '경상북도';
    }
    
}

function inner_kin(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '경상남도';
    }
    else{
        End.innerHTML = '경상남도';
    }
    
}

function inner_jeb(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '전라북도';
    }
    else{
        End.innerHTML = '전라북도';
    }
    
}

function inner_jen(){
    if (Start.innerHTML.length == 0){
        Start.innerHTML = '전라남도';
    }
    else{
        End.innerHTML = '전라남도';
    }
    
}

function after_click(){
    result.style.display = 'flex';
    Start_r.innerText = Start.innerHTML;
    End_r.innerText = End.innerHTML;
    
    
    if (Start_r.innerText == '서울특별시' || End_r.innerText == '서울특별시') {
        if (Start_r.innerText == '인천광역시' || End_r.innerText == '인천광역시'){
            Distance.innerText = '40km'
            Time.innerText = '1시간 24분'
        }
        if (Start_r.innerText == '대전광역시' || End_r.innerText == '대전광역시'){
            Distance.innerText = '72km'
            Time.innerText = '1시간 41분'
        }
        if (Start_r.innerText == '대전광역시' || End_r.innerText == '대전광역시'){
            Distance.innerText = '240km'
            Time.innerText = '2시간 40분'
        }
        if (Start_r.innerText == '대구광역시' || End_r.innerText == '대구광역시'){
            Distance.innerText = '289km'
            Time.innerText = '3시간 51분'
        }
        if (Start_r.innerText == '광주광역시' || End_r.innerText == '광주광역시'){
            Distance.innerText = '296km'
            Time.innerText = '3시간 51분'
        }
        if (Start_r.innerText == '울산광역시' || End_r.innerText == '울산광역시'){
            Distance.innerText = '375km'
            Time.innerText = '4시간 44분'
        }
        if (Start_r.innerText == '부산광역시' || End_r.innerText == '부산광역시'){
            Distance.innerText = '396km'
            Time.innerText = '5시간 6분'
        }
        
        
        if (Start_r.innerText == '경기도' || End_r.innerText == '경기도'){
            Distance.innerText = '73km'
            Time.innerText = '1시간 47분'
        }
        if (Start_r.innerText == '강원도' || End_r.innerText == '강원도'){
            Distance.innerText = '159km'
            Time.innerText = '2시간 31분'
        }
        if (Start_r.innerText == '충청북도' || End_r.innerText == '충청북도'){
            Distance.innerText = '148km'
            Time.innerText = '2시간 28분'
        }
        if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
            Distance.innerText = '159km'
            Time.innerText = '2시간 21분'
        }
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '279km'
            Time.innerText = '3시간 49분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도 '){
            Distance.innerText = '346km'
            Time.innerText = '4시간 38분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '231km'
            Time.innerText = '3시간 17분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '339km'
            Time.innerText = '4시간 28분'
        }
    }
    else if (Start_r.innerText == '인천광역시' || End_r.innerText == '인천광역시'){
        if (Start_r.innerText == '대전광역시' || End_r.innerText == '대전광역시'){
            Distance.innerText = '72km'
            Time.innerText = '1시간 41분'
        }
        if (Start_r.innerText == '대전광역시' || End_r.innerText == '대전광역시'){
            Distance.innerText = '240km'
            Time.innerText = '2시간 40분'
        }
        if (Start_r.innerText == '대구광역시' || End_r.innerText == '대구광역시'){
            Distance.innerText = '289km'
            Time.innerText = '3시간 51분'
        }
        if (Start_r.innerText == '광주광역시' || End_r.innerText == '광주광역시'){
            Distance.innerText = '296km'
            Time.innerText = '3시간 51분'
        }
        if (Start_r.innerText == '울산광역시' || End_r.innerText == '울산광역시'){
            Distance.innerText = '375km'
            Time.innerText = '4시간 44분'
        }
        if (Start_r.innerText == '부산광역시' || End_r.innerText == '부산광역시'){
            Distance.innerText = '396km'
            Time.innerText = '5시간 6분'
        }
        
        
        if (Start_r.innerText == '경기도' || End_r.innerText == '경기도'){
            Distance.innerText = '73km'
            Time.innerText = '1시간 47분'
        }
        if (Start_r.innerText == '강원도' || End_r.innerText == '강원도'){
            Distance.innerText = '159km'
            Time.innerText = '2시간 31분'
        }
        if (Start_r.innerText == '충청북도' || End_r.innerText == '충청북도'){
            Distance.innerText = '148km'
            Time.innerText = '2시간 28분'
        }
        if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
            Distance.innerText = '159km'
            Time.innerText = '2시간 21분'
        }
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '279km'
            Time.innerText = '3시간 49분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도 '){
            Distance.innerText = '346km'
            Time.innerText = '4시간 38분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '231km'
            Time.innerText = '3시간 17분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '339km'
            Time.innerText = '4시간 28분'
        }
    }
    
}

function click_start_button(){
    if (Start.innerHTML.length == 0){
        alert('출발지를 입력해주세요')
    }
    else if (End.innerHTML.length == 0){
        alert('도착지를 입력해주세요')
    }
    
    setTimeout(after_click, 150);
}

startButton.addEventListener("click", click_start_button);