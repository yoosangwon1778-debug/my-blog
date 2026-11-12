//모니터 ON/OFF
const tv = document.querySelector('.tv')
tv.addEventListener('click', function () {
    tv.classList.toggle('off');
})
//프로필 통계 접기 
const avatar = document.querySelector('.avatar');
const profile = document.querySelector('.profile');
avatar.addEventListener('click', function () {
    profile.classList.toggle('fold');
})

//경험치 올리기 
const expBtn = document.querySelector('.exp-btn');
const expFill = document.querySelector('.exp .bar-fill');
const expNum = document.querySelector('.exp-num');
const levelText = document.querySelector('.level');
let exp = 72;
let level = 10;

expBtn.addEventListener('click', function () {
    exp += 10;
    if (exp >= 100) {
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
    more.addEventListener('click', function (event) {
        event.preventDefault();
        post.classList.toggle('open');
        if (post.classList.contains('open')) {
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

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', function () {
        lightboximg.className = 'lightbox-img ' + cell.classList[1];
        lightboxlabel.textContent = cell.querySelector('.cell-label').textContent;
        lightbox.classList.add('open')
    });
}
lightbox.addEventListener('click', function () {
    lightbox.classList.remove('open');
})

/*잠긴 업적 해금하기*/
const lockedBadges = document.querySelectorAll('.badge.locked');
const countText = document.querySelector('.count');
let badgeCount = 6;
for (let i = 0; i < lockedBadges.length; i++) {
    const badge = lockedBadges[i];
    badge.addEventListener('click', function () {
        if (badge.classList.contains('locked')) {
            badge.classList.remove('locked');
            badge.classList.add('new-badge');

            badge.querySelector('.lock').textContent = '★';
            badge.querySelector('strong').textContent = '새 업적!';
            badge.querySelector('span').textContent = '방금 해금했어요';

            badgeCount++;
            countText.textContent = `${badgeCount} / 8`;
        }
    })
}

/*방명록 저장하기*/
const guestForm = document.querySelector('.guest-form');
const nameinput = document.querySelector('.guest-input.name');
const msginput = document.querySelector('.guest-input.msg');
const guestList = document.querySelector('.guest-list');
guestForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameinput.value;
    const msg = msginput.value;
    if (name === '' || msg === '') {
        alert('닉네임과 남길 말을 모두 써 주세요');
    } else {
        const li = document.createElement('li');
        li.classList.add('guest-item');
        li.innerHTML =
            `<div class="guest-head">
        <strong></strong>
        <span>방금</span>
        </div>
        <p></p>
        `;

        li.querySelector('strong').textContent = name;
        li.querySelector('p').textContent = msg;

        guestList.prepend(li);
        nameinput.value = '';
        msginput.value = '';
    }
})

/*지금 플레이 중 (탭)*/
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');
for(let i=0; i<tabs.length; i++){
    tabs[i].addEventListener('click',function(){
        for(let j=0; j<tabs.length; j++){
            tabs[j].classList.remove('active');
            panels[j].classList.remove('active');
        }
        tabs[i].classList.add('active');
        panels[i].classList.add('active');
    })
}