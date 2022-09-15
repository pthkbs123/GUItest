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
    result.style.marginLeft = 270;
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
    
    Start_r.innerText = Start.innerHTML;
    End_r.innerText = End.innerHTML;
    
    if(Start_r.innerText == End_r.innerText){
        alert('같은 지역을 선택하셨습니다')
        return;
    }
    result.style.display = 'flex';
    
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
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
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
            Distance.innerText = '173km'
            Time.innerText = '2시간 34분'
        }
        if (Start_r.innerText == '대구광역시' || End_r.innerText == '대구광역시'){
            Distance.innerText = '307km'
            Time.innerText = '4시간 2분'
        }
        if (Start_r.innerText == '광주광역시' || End_r.innerText == '광주광역시'){
            Distance.innerText = '312km'
            Time.innerText = '3시간 42분'
        }
        if (Start_r.innerText == '울산광역시' || End_r.innerText == '울산광역시'){
            Distance.innerText = '387km'
            Time.innerText = '4시간 43분'
        }
        if (Start_r.innerText == '부산광역시' || End_r.innerText == '부산광역시'){
            Distance.innerText = '414km'
            Time.innerText = '5시간 20분'
        }
        
        
        if (Start_r.innerText == '경기도' || End_r.innerText == '경기도'){
            Distance.innerText = '97km'
            Time.innerText = '1시간 27분'
        }
        if (Start_r.innerText == '강원도' || End_r.innerText == '강원도'){
            Distance.innerText = '203km'
            Time.innerText = '2시간 37분'
        }
        if (Start_r.innerText == '충청북도' || End_r.innerText == '충청북도'){
            Distance.innerText = '151km'
            Time.innerText = '2시간 5분'
        }
        if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
            Distance.innerText = '125km'
            Time.innerText = '1시간 38분'
        }
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '290km'
            Time.innerText = '3시간 36분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
            Distance.innerText = '354km'
            Time.innerText = '4시간 27분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '241km'
            Time.innerText = '3시간 2분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '359km'
            Time.innerText = '4시간 8분'
        }
    }
    
    else if (Start_r.innerText == '대전광역시' || End_r.innerText == '대전광역시'){
        if (Start_r.innerText == '대구광역시' || End_r.innerText == '대구광역시'){
            Distance.innerText = '153km'
            Time.innerText = '2시간 4분'
        }
        if (Start_r.innerText == '광주광역시' || End_r.innerText == '광주광역시'){
            Distance.innerText = '168km'
            Time.innerText = '2시간 7분'
        }
        if (Start_r.innerText == '울산광역시' || End_r.innerText == '울산광역시'){
            Distance.innerText = '260km'
            Time.innerText = '3시간 14분'
        }
        if (Start_r.innerText == '부산광역시' || End_r.innerText == '부산광역시'){
            Distance.innerText = '259km'
            Time.innerText = '3시간 38분'
        }
        
        
        if (Start_r.innerText == '경기도' || End_r.innerText == '경기도'){
            Distance.innerText = '156km'
            Time.innerText = '2시간 15분'
        }
        if (Start_r.innerText == '강원도' || End_r.innerText == '강원도'){
            Distance.innerText = '286km'
            Time.innerText = '3시간 36분'
        }
        if (Start_r.innerText == '충청북도' || End_r.innerText == '충청북도'){
            Distance.innerText = '75km'
            Time.innerText = '1시간 17분'
        }
        if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
            Distance.innerText = '96km'
            Time.innerText = '1시간 24분'
        }
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '200km'
            Time.innerText = '2시간 37분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
            Distance.innerText = '197km'
            Time.innerText = '2시간 38분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '103km'
            Time.innerText = '1시간 27분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '213km'
            Time.innerText = '2시간 39분'
        }
    }
    
    else if (Start_r.innerText == '대구광역시' || End_r.innerText == '대구광역시'){
        if (Start_r.innerText == '광주광역시' || End_r.innerText == '광주광역시'){
            Distance.innerText = '212km'
            Time.innerText = '2시간 24분'
        }
        if (Start_r.innerText == '울산광역시' || End_r.innerText == '울산광역시'){
            Distance.innerText = '123km'
            Time.innerText = '1시간 37분'
        }
        if (Start_r.innerText == '부산광역시' || End_r.innerText == '부산광역시'){
            Distance.innerText = '10km'
            Time.innerText = '1시간 50분'
        }
        
        
        if (Start_r.innerText == '경기도' || End_r.innerText == '경기도'){
            Distance.innerText = '235km'
            Time.innerText = '2시간 48분'
        }
        if (Start_r.innerText == '강원도' || End_r.innerText == '강원도'){
            Distance.innerText = '349km'
            Time.innerText = '3시간 48분'
        }
        if (Start_r.innerText == '충청북도' || End_r.innerText == '충청북도'){
            Distance.innerText = '178km'
            Time.innerText = '2시간 5분'
        }
        if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
            Distance.innerText = '239km'
            Time.innerText = '2시간 36분'
        }
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '131km'
            Time.innerText = '1시간 46분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
            Distance.innerText = '96km'
            Time.innerText = '1시간 24분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '194km'
            Time.innerText = '2시간 16분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '242km'
            Time.innerText = '2시간 47분'
        }
    }
    
    else if (Start_r.innerText == '광주광역시' || End_r.innerText == '광주광역시'){
        if (Start_r.innerText == '울산광역시' || End_r.innerText == '울산광역시'){
            Distance.innerText = '305km'
            Time.innerText = '3시간 42분'
        }
        if (Start_r.innerText == '부산광역시' || End_r.innerText == '부산광역시'){
            Distance.innerText = '263km'
            Time.innerText = '3시간 24분'
        }
        
        
        if (Start_r.innerText == '경기도' || End_r.innerText == '경기도'){
            Distance.innerText = '319km'
            Time.innerText = '3시간 44분'
        }
        if (Start_r.innerText == '강원도' || End_r.innerText == '강원도'){
            Distance.innerText = '449km'
            Time.innerText = '5시간 5분'
        }
        if (Start_r.innerText == '충청북도' || End_r.innerText == '충청북도'){
            Distance.innerText = '234km'
            Time.innerText = '2시간 47분'
        }
        if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
            Distance.innerText = '221km'
            Time.innerText = '2시간 42분'
        }
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '320km'
            Time.innerText = '3시간 35분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
            Distance.innerText = '184km'
            Time.innerText = '2시간 18분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '101km'
            Time.innerText = '1시간 19분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '47km'
            Time.innerText = '46분'
        }
    }
    
    else if (Start_r.innerText == '울산광역시' || End_r.innerText == '울산광역시'){
        if (Start_r.innerText == '부산광역시' || End_r.innerText == '부산광역시'){
            Distance.innerText = '53km'
            Time.innerText = '1시간 19분'
        }
        
        
        if (Start_r.innerText == '경기도' || End_r.innerText == '경기도'){
            Distance.innerText = '319km'
            Time.innerText = '3시간 35분'
        }
        if (Start_r.innerText == '강원도' || End_r.innerText == '강원도'){
            Distance.innerText = '431km'
            Time.innerText = '4시간 36분'
        }
        if (Start_r.innerText == '충청북도' || End_r.innerText == '충청북도'){
            Distance.innerText = '262km'
            Time.innerText = '2시간 56분'
        }
        if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
            Distance.innerText = '346km'
            Time.innerText = '3시간 46분'
        }
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '183km'
            Time.innerText = '2시간 42분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
            Distance.innerText = '142km'
            Time.innerText = '2시간 7분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '305km'
            Time.innerText = '3시간 24분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '302km'
            Time.innerText = '3시간 41분'
        }
    }
    
    else if (Start_r.innerText == '부산광역시' || End_r.innerText == '부산광역시'){
        if (Start_r.innerText == '경기도' || End_r.innerText == '경기도'){
            Distance.innerText = '347km'
            Time.innerText = '3시간 59분'
        }
        if (Start_r.innerText == '강원도' || End_r.innerText == '강원도'){
            Distance.innerText = '459km'
            Time.innerText = '5시간 3분'
        }
        if (Start_r.innerText == '충청북도' || End_r.innerText == '충청북도'){
            Distance.innerText = '290km'
            Time.innerText = '3시간 23분'
        }
        if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
            Distance.innerText = '347km'
            Time.innerText = '4시간 3분'
        }
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '240km'
            Time.innerText = '3시간 2분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
            Distance.innerText = '99km'
            Time.innerText = '1시간 43분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '257km'
            Time.innerText = '3시간 7분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '302km'
            Time.innerText = '3시간 41분'
        }
    }
    
    else if (Start_r.innerText == '경기도' || End_r.innerText == '경기도'){
        if (Start_r.innerText == '강원도' || End_r.innerText == '강원도'){
            Distance.innerText = '133km'
            Time.innerText = '1시간 51분'
        }
        if (Start_r.innerText == '충청북도' || End_r.innerText == '충청북도'){
            Distance.innerText = '105km'
            Time.innerText = '1시간 34분'
        }
        if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
            Distance.innerText = '192km'
            Time.innerText = '2시간 21분'
        }
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '215km'
            Time.innerText = '2시간 43분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
            Distance.innerText = '290km'
            Time.innerText = '3시간 42분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '251km'
            Time.innerText = '3시간 6분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '363km'
            Time.innerText = '4시간 19분'
        }
    }
    
    else if (Start_r.innerText == '강원도' || End_r.innerText == '강원도'){
        if (Start_r.innerText == '충청북도' || End_r.innerText == '충청북도'){
            Distance.innerText = '240km'
            Time.innerText = '3시간 1분'
        }
        if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
            Distance.innerText = '320km'
            Time.innerText = '4시간 9분'
        }
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '284km'
            Time.innerText = '3시간 45분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
            Distance.innerText = '416km'
            Time.innerText = '5시간 12분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '386km'
            Time.innerText = '4시간 37분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '485km'
            Time.innerText = '6시간 13분'
        }
    }
    
    else if (Start_r.innerText == '충청북도' || End_r.innerText == '충청북도'){
        if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
            Distance.innerText = '116km'
            Time.innerText = '1시간 47분'
        }
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '161km'
            Time.innerText = '2시간 14분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
            Distance.innerText = '230km'
            Time.innerText = '2시간 54분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '169km'
            Time.innerText = '2시간 5분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '279km'
            Time.innerText = '3시간 19분'
        }
    }
    
    else if (Start_r.innerText == '충청남도' || End_r.innerText == '충청남도'){
        if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
            Distance.innerText = '253km'
            Time.innerText = '2시간 56분'
        }
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
            Distance.innerText = '259km'
            Time.innerText = '3시간 1분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '129km'
            Time.innerText = '1시간 30분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '251km'
            Time.innerText = '2시간 40분'
        }
    }
    
    else if (Start_r.innerText == '경상북도' || End_r.innerText == '경상북도'){
        if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
            Distance.innerText = '200km'
            Time.innerText = '2시간 43분'
        }
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '294km'
            Time.innerText = '3시간 26분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '352km'
            Time.innerText = '4시간 2분'
        }
    }
    
    else if (Start_r.innerText == '경상남도' || End_r.innerText == '경상남도'){
        if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
            Distance.innerText = '152km'
            Time.innerText = '2시간 9분'
        }
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '181km'
            Time.innerText = '2시간 28분'
        }
    }
    
    else if (Start_r.innerText == '전라북도' || End_r.innerText == '전라북도'){
        if (Start_r.innerText == '전라남도' || End_r.innerText == '전라남도'){
            Distance.innerText = '129km'
            Time.innerText = '1시간 43분'
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