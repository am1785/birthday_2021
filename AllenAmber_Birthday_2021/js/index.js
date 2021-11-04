let pink_balloon = document.getElementById('pink_balloon');
let grey_balloon = document.getElementById('grey_balloon');
let blue_balloon = document.getElementById('blue_balloon');

let bears = document.getElementsByClassName('bears')[0];
let cake = document.getElementById('cake_bg');

let card = document.getElementById('birthday_card');
let messages = card.getElementsByTagName('p');
let tran_btn = document.getElementById('translate');
let sim = document.getElementById('fight_sim');


let cn_dict = {
    0:"生日快乐恩培！恭喜你又长大了，又更睿智了，然后又离你的目标进了一步。",
    1:"我特别开心，能够陪着你度过这别具意义的一天。你今年真的办到了许多事情，我相信话有更多的成就在等着你。",
    2:"每当你获得一个成就时我总希望我是第一个来到你身边的人，因为你总是让我引以为豪。",
    3:"不管别人怎么说，对我而言你就是世界上最细心和会照顾人的人。你是我梦寐以求的女朋友。",
    4:"虽然有时候我们会打架，但是就是天作之合的情侣也有吵嘴的时候。",
    5:"所以为了让我们能更好的珍惜我们在一起的时间，少打架，我受你的启发决定制作一个吵架模拟器送给你当作生日礼物。",
    6:"现在还没做好，但是等做好了希望你能给我提一些建议。",
    7:"让我们为了下一个一起成长的一年举杯[]~(￣▽￣)~*",
    8:"生日快乐！！",
    9:"最爱你的",
    10:"猪猪莫",
    11:"11月5日2021年"
};

let en_dict = {
    0: "Happy birthday Amber! You have grown to be a year older, a year wiser, and above all else a year closer to happiness.",
    1: "I am so happy to be with you on this special day. You have accomplished a lot this year and I'm sure there is more to come.",
    2: "I want to be there first whenever you reach a new milestone, because you always make me proud like no other.",
    3: "No matter what others might say about you, to me you are the most thoughtful and caring person ever. You are the best girlfriend of my dreams!",
    4: "Sometimes we get into fights, but even the most compatible couples get themselves into lovers quarrels.",
    5: "So to help us make more out of our time together and spend less time fighting, I decided to take inspiration from you and dedicate this fight simulator as a part of my birthday present to you.",
    6: "When it is done I hope you can try it out and give me some feedback.",
    7: "Here’s to another year of growing together, Amber.",
    8: "Happy Birthday!!",
    9: "With all my love,",
    10: "Piggy Mo",
    11: "11/05/2021"
};

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;
    pink_balloon.style.top = 350 + value * -2.2 + 'px';
    pink_balloon.style.left = 80 + value * -0.35 + 'px';
    grey_balloon.style.top = 200 + value * -1.5 + 'px';
    grey_balloon.style.right = value * -0.8 + 'px';
    blue_balloon.style.top = 300 + value * -1.0 + 'px';
    blue_balloon.style.right = 20 + value * 0.7 + 'px';
    bears.style.bottom = -80 + value * 0.4 + 'px';
});

tran_btn.addEventListener('click', ()=> {
    if(card.classList.contains('english')){
        card.classList.add('chinese');
        card.classList.remove('english');
        for(let i = 0; i <= 10; i++){
            messages[i].textContent = cn_dict[i];
        }
        sim.textContent = "> 吵架模拟器（施工中）";
    } else{
        card.classList.add('english');
        card.classList.remove('chinese');
        for(let i = 0; i <= 11; i++){
            messages[i].textContent = en_dict[i];
        }
        sim.textContent = "> Link to Fight Simulator (coming soon!)";
    };
});