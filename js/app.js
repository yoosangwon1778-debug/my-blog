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

//경험치 올리기 
const expBtn = document.querySelector('.exp-btn');
const expFill = document.querySelector('.exp .bar-fill');
const expNum = document.querySelector('.exp-num');
const levelText = document.querySelector('.level');
let exp = 72;
let level = 10;

expBtn.addEventListener('click', function(){
    exp += 10;
    if(exp >= 100) {
        exp -= 100;
        level++;
        alert(`레벨 업! LV.${level}`);
    }
    expFill.style.width = `${exp}%`;
    expNum.textContent = `${exp}%`;
    levelText.textContent = `LV.${level}`;
});

/*더 읽기*/
const posts = document.querySelectorAll('.post');
for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const more = post.querySelector('.more');
    more.addEventListener('click',function(event){
        event.preventDefault();
        post.classList.toggle('open');
        if (post.classList.contains('open')){
            more.textContent = '접기 ▲';
        } else {
            more.textContent = '더 읽기 ▶';
        }
    });
}

/* 사진 크게 보기 */
const cells = document.querySelectorAll('.cell');
const lightbox = document.querySelector('.lightbox');
const lightboximg = document.querySelector('.lightbox-img');
const lightboxlabel = document.querySelector('.lightbox-label');

for (let i=0; i<cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', function(){
        lightboximg.className = 'lightbox-img ' + cell.classList[1];
        lightboxlabel.textContent = cell.querySelector('.cell-label').textContent;
        lightbox.classList.add('open')
    });
}
lightbox.addEventListener('click',function(){
    lightbox.classList.remove('open');
})

/*잠긴 업적 해금하기*/
const lockedBadges = document.querySelectorAll('.badge.locked'); 
const countText = document.querySelector('.count');
let badgeCount = 6;  
for (let i=0; i<lockedBadges.length; i++){
    const badge = lockedBadges[i];
    badge.addEventListener('click',function(){
        if(badge.classList.contains('locked')){
            badge.classList.remove('locked');
            badge.classList.add('new-badge');

            badge.querySelector('.lock').textContent = '★';
            badge.querySelector('strong').textContent = '새 업적!';
            badge.querySelector('span').textContent = '방금 해결했어요';

            badgeCount++;
            countText.textContent = `${badgeCount}/8`;
        }
    })
}