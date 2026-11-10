//모니터 ON/OFF
const tv = document.querySelector('.tv')
tv.addEventListener('click',function(){
    tv.classList.toggle('off');
})
//프로필 통계 접기 
const avatar = document.querySelector('.avatar');
const profile = document.querySelector('.profile');
avatar.addEventListener('click',function(){
    profile.classList.toggle('fold');
})