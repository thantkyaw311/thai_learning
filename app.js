
"use strict";

/* ==================================
   THAI CONSONANTS
================================== */

const consonants = [
["ก","ko kai","က","middle"],
["ข","kho khai","ခ","high"],
["ฃ","kho khuat","ခ","high"],
["ค","kho khwai","ခ","low"],
["ฅ","kho khon","ခ","low"],
["ฆ","kho ra-khang","ခ","low"],
["ง","ngo ngu","င","low"],
["จ","cho chan","ကျ","middle"],
["ฉ","cho ching","ချ","high"],
["ช","cho chang","ချ","low"],
["ซ","so so","စ","low"],
["ฌ","cho choe","ချ","low"],
["ญ","yo ying","ည","low"],
["ฎ","do cha-da","ဒ","middle"],
["ฏ","to pa-tak","တ","middle"],
["ฐ","tho than","ထ","high"],
["ฑ","tho montho","ထ","low"],
["ฒ","tho phu-thao","ထ","low"],
["ณ","no nen","န","low"],
["ด","do dek","ဒ","middle"],
["ต","to tao","တ","middle"],
["ถ","tho thung","ထ","high"],
["ท","tho thahan","ထ","low"],
["ธ","tho thong","ထ","low"],
["น","no nu","န","low"],
["บ","bo baimai","ဘ","middle"],
["ป","po pla","ပ","middle"],
["ผ","pho phueng","ဖ","high"],
["ฝ","fo fa","ဖ","high"],
["พ","pho phan","ဖ","low"],
["ฟ","fo fan","ဖ","low"],
["ภ","pho samphao","ဖ","low"],
["ม","mo ma","မ","low"],
["ย","yo yak","ယ","low"],
["ร","ro ruea","ရ","low"],
["ล","lo ling","လ","low"],
["ว","wo waen","ဝ","low"],
["ศ","so sala","စ","high"],
["ษ","so ruesi","စ","high"],
["ส","so suea","စ","high"],
["ห","ho hip","ဟ","high"],
["ฬ","lo chu-la","လ","low"],
["อ","o ang","အ","middle"],
["ฮ","ho nokhuk","ဟ","low"]
];

/* ==================================
   VOWELS
================================== */

const vowels = [
["ะ","a","အတို"],
["า","aa","အရှည်"],
["ิ","i","အတို"],
["ี","ii","အရှည်"],
["ึ","ue","အတို"],
["ื","uee","အရှည်"],
["ุ","u","အတို"],
["ู","uu","အရှည်"],
["เ-ะ","e","အတို"],
["เ","ee","အရှည်"],
["แ-ะ","ae","အတို"],
["แ","aae","အရှည်"],
["โ-ะ","o","အတို"],
["โ","oo","အရှည်"],
["เ-าะ","aw","အတို"],
["อ","aw","အရှည်"],
["เ-อะ","oe","အတို"],
["เ-อ","oee","အရှည်"],
["ไ","ai","အရှည်"],
["ใ","ai","အရှည်"],
["เอา","ao","ပေါင်းစပ်"],
["เอีย","ia","ပေါင်းစပ်"],
["เอือ","uea","ပေါင်းစပ်"],
["อัว","ua","ပေါင်းစပ်"]
];

/* ==================================
   TONE MARKS
================================== */

const tones = [
{
 mark:"ไม่มี",
 name:"အမှတ်အသားမပါ",
 thai:"เสียงสามัญ",
 detail:"ပုံမှန်အသံ။ စာလုံး၏ ဗျည်းအုပ်စု၊ သရအရှည်အတိုနှင့် အဆုံးသတ်အသံအပေါ် မူတည်ပါတယ်။"
},
{
 mark:"่",
 name:"ไม้เอก",
 thai:"เสียงเอก",
 detail:"ဗျည်းအုပ်စုနှင့် စာလုံးအမျိုးအစားပေါ်မူတည်၍ အသံထွက်ပြောင်းပါတယ်။"
},
{
 mark:"้",
 name:"ไม้โท",
 thai:"เสียงโท",
 detail:"ဗျည်းအုပ်စုနှင့် စာလုံးအမျိုးအစားပေါ်မူတည်၍ အသံထွက်ပြောင်းပါတယ်။"
},
{
 mark:"๊",
 name:"ไม้ตรี",
 thai:"เสียงตรี",
 detail:"အသံအမှတ်အသားဖြစ်ပြီး အဓိကအားဖြင့် အလယ်တန်းဗျည်းများတွင် အသုံးပြုပါတယ်။"
},
{
 mark:"๋",
 name:"ไม้จัตวา",
 thai:"เสียงจัตวา",
 detail:"အသံအမှတ်အသားဖြစ်ပြီး အဓိကအားဖြင့် အလယ်တန်းဗျည်းများတွင် အသုံးပြုပါတယ်။"
}
];

/* ==================================
   FINAL CONSONANTS
================================== */

const finals = [
["ก","k","က","ဥပမာ มาก"],
["ข ค ฆ","k","က","နောက်ဆုံးတွင် k အသံ"],
["ด จ ช ซ ฎ ฏ ฐ ฑ ฒ ต ถ ท ธ ศ ษ ส","t","တ်","နောက်ဆုံးတွင် t အသံ"],
["บ ป พ ฟ ภ","p","ပ်","နောက်ဆုံးတွင် p အသံ"],
["ง","ng","င","နှာခေါင်းသံ ng"],
["น ณ ญ ร ล ฬ","n","န်","နောက်ဆုံးတွင် n အသံ"],
["ม","m","မ်","နောက်ဆုံးတွင် m အသံ"],
["ย","y","ယ","သရနှင့်ပေါင်းစပ်သည့် y အသံ"],
["ว","w","ဝ","သရနှင့်ပေါင်းစပ်သည့် w အသံ"]
];

/* ==================================
   VOCABULARY
================================== */

const words = [
["สวัสดี","မင်္ဂလာပါ","ဆဝတ်ဒီ"],
["ขอบคุณ","ကျေးဇူးတင်ပါတယ်","ခေါ့ပ်ခုန်"],
["ขอโทษ","တောင်းပန်ပါတယ်","ခေါ်ထို့"],
["ใช่","ဟုတ်တယ်","ချိုင့်"],
["ไม่ใช่","မဟုတ်ဘူး","မိုင်ချိုင့်"],
["ไม่","မဟုတ် / မ","မိုင်"],
["ได้","ရတယ်","ဒိုင်"],
["ไม่ได้","မရဘူး","မိုင်ဒိုင်"],
["ไป","သွားသည်","ပိုင်"],
["มา","လာသည်","မာ"],
["กิน","စားသည်","ကင်"],
["ดื่ม","သောက်သည်","ဒွမ်"],
["น้ำ","ရေ","နမ်"],
["ข้าว","ထမင်း","ခ้าว"],
["อาหาร","အစားအစာ","အာဟာန်"],
["บ้าน","အိမ်","ဘ้าน"],
["โรงเรียน","ကျောင်း","ရုန်းရီးယန်း"],
["ทำงาน","အလုပ်လုပ်သည်","ထမ်ငါန်"],
["เพื่อน","သူငယ်ချင်း","ဖွန်း"],
["ครอบครัว","မိသားစု","ခရော့ပ်ခရัว"],
["แม่","အမေ","မဲ"],
["พ่อ","အဖေ","ဖော်"],
["พี่","အစ်ကို / အစ်မ","ဖီး"],
["น้อง","ညီ / ညီမ","နောင့်"],
["คน","လူ","ခွန်"],
["เด็ก","ကလေး","ဒက်"],
["ผู้หญิง","အမျိုးသမီး","ဖူးယင်"],
["ผู้ชาย","အမျိုးသား","ဖူးချိုင်"],
["วันนี้","ဒီနေ့","ဝန်နီး"],
["พรุ่งนี้","မနက်ဖြန်","ဖရုန်းနီး"],
["เมื่อวาน","မနေ့က","မူအဝါန်"],
["ตอนนี้","အခု","တွန်းနီး"],
["เวลา","အချိန်","ဝေလာ"],
["เช้า","မနက်","ချော"],
["กลางคืน","ည","ကလားင်ခွန်း"],
["เงิน","ပိုက်ဆံ","ငန်"],
["ราคา","စျေးနှုန်း","ရာခါ"],
["เท่าไหร่","ဘယ်လောက်လဲ","ထောက်ရိုင်"],
["ที่ไหน","ဘယ်နေရာလဲ","ထီးနိုင်"],
["อะไร","ဘာလဲ","အရိုင်"],
["ใคร","ဘယ်သူလဲ","ခရိုင်"],
["เมื่อไร","ဘယ်အချိန်လဲ","မူအရိုင်"],
["ห้องน้ำ","အိမ်သာ","ဟောင့်နမ်"],
["ตลาด","စျေး","တလတ်"],
["รถ","ကား","ရို့"],
["รถไฟ","ရထား","ရို့ဖိုင်"],
["โทรศัพท์","ဖုန်း","ထိုရဆပ်"],
["หนังสือ","စာအုပ်","နန်ဆူး"],
["ภาษาไทย","ထိုင်းဘာသာစကား","ဖာဆာထိုင်း"],
["เรียน","သင်ယူသည်","ရီးယန်း"],
["อ่าน","ဖတ်သည်","အာန်"],
["เขียน","ရေးသည်","ခီယန်"],
["พูด","ပြောသည်","ဖူးတ်"],
["ฟัง","နားထောင်သည်","ဖัง"],
["เข้าใจ","နားလည်သည်","ခေါ်ချိုင်"],
["ไม่เข้าใจ","နားမလည်ဘူး","မိုင်ခေါ်ချိုင်"],
["สวย","လှတယ်","ဆွေး"],
["ดี","ကောင်းတယ်","ဒီ"],
["ใหญ่","ကြီးတယ်","ယိုင်"],
["เล็ก","သေးတယ်","လက်"],
["ร้อน","ပူတယ်","ရွန်"],
["หนาว","အေးတယ်","နာဝ်"],
["เร็ว","မြန်တယ်","ရေဝ်"],
["ช้า","နှေးတယ်","ချာ"],
["ง่าย","လွယ်တယ်","င่าย"],
["ยาก","ခက်တယ်","ယာ့ခ်"],
["อร่อย","အရသာရှိတယ်","အရိုင်း"],
["หิว","ဗိုက်ဆာတယ်","ဟิว"],
["เหนื่อย","ပင်ပန်းတယ်","နွေး"],
["รัก","ချစ်တယ်","ရတ်"],
["ชอบ","ကြိုက်တယ်","ချော့ပ်"],
["ต้องการ","လိုချင်တယ်","တောင့်ကာန်"],
["ช่วย","ကူညီသည်","ချွေး"],
["รอ","စောင့်သည်","ရော်"],
["ซื้อ","ဝယ်သည်","ဆူး"],
["ขาย","ရောင်းသည်","ခိုင်"],
["เปิด","ဖွင့်သည်","ပဲတ်"],
["ปิด","ပိတ်သည်","ပစ်"],
["นั่ง","ထိုင်သည်","နန်"],
["นอน","အိပ်သည်","နော်န်"],
["เดิน","လမ်းလျှောက်သည်","ဒန်"],
["วิ่ง","ပြေးသည်","ဝင်"],
["ทำ","လုပ်သည်","ထမ်"],
["ดู","ကြည့်သည်","ဒူး"],
["รู้","သိသည်","ရူး"],
["คิด","စဉ်းစားသည်","ခစ်"],
["ถาม","မေးသည်","ထာမ်"],
["ตอบ","ဖြေသည်","တော့ပ်"],
["หนึ่ง","တစ်","နွင်"],
["สอง","နှစ်","ဆောင့်"],
["สาม","သုံး","ဆာမ်"],
["สี่","လေး","ဆီး"],
["ห้า","ငါး","ဟာ"],
["หก","ခြောက်","ဟော့ခ်"],
["เจ็ด","ခုနစ်","เจ็ด"],
["แปด","ရှစ်","ပဲတ်"],
["เก้า","ကိုး","က้าว"],
["สิบ","ဆယ်","စစ်"],
["ร้อย","တစ်ရာ","ရွိုင်း"],
["พัน","တစ်ထောင်","ဖန်"],
["บาท","ဘတ်","ဘတ်"],
["อันนี้","ဒီဟာ","အန်နီး"],
["อันนั้น","ဟိုဟာ","အန်နန်"],
["ที่นี่","ဒီမှာ","ထီးနီး"],
["ที่นั่น","ဟိုမှာ","ထီးနန်"],
["ข้างหน้า","ရှေ့မှာ","ခါင်နာ"],
["ข้างหลัง","နောက်မှာ","ခါင်လန်"]
];

/* ==================================
   DAILY SENTENCES
================================== */

const sentences = [
["คุณชื่ออะไร","နာမည်ဘယ်လိုခေါ်လဲ","ခွန်ချူးအရိုင်"],
["ผมชื่อ...","ကျွန်တော့်နာမည် ... ပါ","ဖုမ်ချူး"],
["ฉันชื่อ...","ကျွန်မနာမည် ... ပါ","ချန်ချူး"],
["คุณมาจากไหน","ဘယ်ကလာတာလဲ","ခွန်မာကျာ့ခ်နိုင်"],
["ผมมาจากเมียนมา","ကျွန်တော် မြန်မာနိုင်ငံကပါ","ဖုမ်မာကျာ့ခ်မီယန်မာ"],
["คุณพูดภาษาไทยได้ไหม","ထိုင်းစကားပြောတတ်လား","ခွန်ဖူးတ်ဖာဆာထိုင်းဒိုင်မိုင်"],
["พูดได้นิดหน่อย","နည်းနည်းပြောတတ်ပါတယ်","ဖူးတ်ဒိုင်နစ်နွိုင်း"],
["ช่วยพูดช้าๆ ได้ไหม","ဖြည်းဖြည်းပြောပေးလို့ရမလား","ချွေးဖူးတ်ချာချာဒိုင်မိုင်"],
["ราคาเท่าไหร่","စျေးဘယ်လောက်လဲ","ရာခါထောက်ရိုင်"],
["ลดราคาได้ไหม","စျေးလျှော့လို့ရမလား","လော့ရာခါဒိုင်မိုင်"],
["ห้องน้ำอยู่ที่ไหน","အိမ်သာဘယ်မှာလဲ","ဟောင့်နမ်ယူထီးနိုင်"],
["ฉันไม่เข้าใจ","ကျွန်မ နားမလည်ဘူး","ချန်မိုင်ခေါ်ချိုင်"],
["ขอบคุณมาก","ကျေးဇူးအများကြီးတင်ပါတယ်","ခေါ့ပ်ခုန်မာ့ခ်"],
["ไม่เป็นไร","ရပါတယ် / ကိစ္စမရှိပါဘူး","မိုင်ပန်ရိုင်"],
["ยินดีที่ได้รู้จัก","တွေ့ရတာ ဝမ်းသာပါတယ်","ယင်ဒီထီးဒိုင်ရူးကျက်"]
];

/* ==================================
   STORAGE
================================== */

function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch {
        return fallback;
    }
}

let savedWords = readStorage("thai_saved", []);
let completed = readStorage("thai_completed", []);
let score = Number(localStorage.getItem("thai_score") || 0);

function saveData() {
    localStorage.setItem("thai_saved", JSON.stringify(savedWords));
    localStorage.setItem("thai_completed", JSON.stringify(completed));
    localStorage.setItem("thai_score", String(score));
}

/* ==================================
   NAVIGATION
================================== */

function showPage(id) {
    const page = document.getElementById(id);
    if (!page) return;

    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));

    page.classList.add("active");

    const nav = document.querySelector(`.nav-btn[data-page="${id}"]`);
    if (nav) nav.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (id === "saved") renderSaved();
    if (id === "words") renderWords();
    if (id === "practice") renderQuiz();
}

document.getElementById("navigation").addEventListener("click", event => {
    const button = event.target.closest("[data-page]");
    if (button) showPage(button.dataset.page);
});

document.addEventListener("click", event => {
    const button = event.target.closest("[data-goto]");
    if (button) showPage(button.dataset.goto);
});

/* ==================================
   SPEECH
================================== */

function speakThai(text) {
    if (!("speechSynthesis" in window)) {
        alert("ဒီ Browser မှာ အသံဖတ်စနစ် မထောက်ပံ့ပါ။");
        return;
    }

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "th-TH";
    utterance.rate = 0.8;
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);
}

/* ==================================
   ALPHABET
================================== */

let currentClass = "all";

function renderAlphabet() {
    const container = document.getElementById("alphabet-list");

    const filtered = consonants.filter(item =>
        currentClass === "all" || item[3] === currentClass
    );

    container.innerHTML = filtered.map(item => `
        <article class="alphabet-card">
            <div class="alphabet-letter thai">${item[0]}</div>
            <div class="alphabet-name">${item[1]}</div>
            <div class="alphabet-sound">မြန်မာအသံ: ${item[2]}</div>
            <span class="class-label">${className(item[3])}</span>
            <br>
            <button class="icon-btn" data-speak="${item[0]}" aria-label="အသံနားထောင်ရန်">🔊</button>
            <button class="icon-btn" data-complete="alphabet-${item[0]}" aria-label="လေ့လာပြီးမှတ်ရန်">✓</button>
        </article>
    `).join("");
}

function className(value) {
    return {
        middle: "အလယ်တန်း",
        high: "အမြင့်တန်း",
        low: "အနိမ့်တန်း"
    }[value];
}

document.querySelectorAll("[data-class]").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll("[data-class]").forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        currentClass = button.dataset.class;
        renderAlphabet();
    });
});

/* ==================================
   VOWELS
================================== */

function renderVowels() {
    document.getElementById("vowel-list").innerHTML = vowels.map(v => `
        <article class="vowel-card">
            <div class="vowel-letter thai">${v[0]}</div>
            <div class="vowel-name">${v[1]}</div>
            <div class="vowel-sound">${v[2]}</div>
            <button class="icon-btn" data-speak="${v[0].replaceAll("-", "")}">🔊</button>
            <button class="icon-btn" data-complete="vowel-${v[0]}">✓</button>
        </article>
    `).join("");
}

/* ==================================
   TONES
================================== */

function renderTones() {
    document.getElementById("tone-list").innerHTML = tones.map(t => `
        <article class="tone-card">
            <div class="tone-mark thai">${t.mark}</div>
            <h3>${t.name}</h3>
            <div class="thai">${t.thai}</div>
            <p>${t.detail}</p>
        </article>
    `).join("");
}

/* ==================================
   FINAL CONSONANTS
================================== */

function renderFinals() {
    document.getElementById("final-list").innerHTML = finals.map(f => `
        <article class="final-card">
            <h3 class="thai">${f[0]}</h3>
            <b>အဆုံးသတ်အသံ: ${f[1]}</b>
            <p>မြန်မာအသံ: ${f[2]}</p>
            <p class="thai">${f[3]}</p>
        </article>
    `).join("");
}

/* ==================================
   VOCABULARY
================================== */

function wordCard(word, index) {
    const isSaved = savedWords.includes(index);

    return `
        <article class="word-card">
            <div class="word-main">
                <div class="word-thai thai">${word[0]}</div>
                <div class="word-meaning">${word[1]}</div>
                <div class="word-pronunciation">အနီးစပ်ဆုံးအသံ: ${word[2]}</div>
            </div>
            <div class="word-actions">
                <button class="icon-btn" data-speak="${word[0]}" aria-label="အသံနားထောင်ရန်">🔊</button>
                <button class="icon-btn" data-save="${index}" aria-label="Favorite သိမ်းရန်">${isSaved ? "★" : "☆"}</button>
            </div>
        </article>
    `;
}

function renderWords(query = "") {
    const container = document.getElementById("word-list");
    const normalized = query.trim().toLowerCase();

    const filtered = words.map((word, index) => ({ word, index }))
        .filter(item => item.word.join(" ").toLowerCase().includes(normalized));

    container.innerHTML = filtered.length
        ? filtered.map(item => wordCard(item.word, item.index)).join("")
        : '<div class="empty-message">ရှာဖွေမှုနှင့် ကိုက်ညီသော စကားလုံးမတွေ့ပါ။</div>';
}

document.getElementById("word-search").addEventListener("input", event => {
    renderWords(event.target.value);
});

/* ==================================
   FAVORITES
================================== */

function renderSaved() {
    const container = document.getElementById("saved-list");

    container.innerHTML = savedWords.length
        ? savedWords.map(index => {
            if (!words[index]) return "";
            return wordCard(words[index], index);
        }).join("")
        : '<div class="empty-message">သိမ်းထားသော စကားလုံး မရှိသေးပါ။</div>';
}

function toggleSaved(index) {
    if (savedWords.includes(index)) {
        savedWords = savedWords.filter(i => i !== index);
    } else {
        savedWords.push(index);
    }

    saveData();
    renderWords(document.getElementById("word-search").value);
    renderSaved();
}

/* ==================================
   QUIZ
================================== */

let quizQuestion = null;
let quizAnswered = false;
let quizNumber = 0;

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function renderQuiz() {
    const correctIndex = Math.floor(Math.random() * words.length);
    const correct = words[correctIndex];

    const options = shuffle([
        correct,
        ...shuffle(words.filter((_, i) => i !== correctIndex)).slice(0, 3)
    ]);

    quizQuestion = {
        correct,
        options
    };

    quizAnswered = false;
    quizNumber++;

    document.getElementById("quiz-number").textContent = quizNumber;
    document.getElementById("quiz-question").innerHTML =
        `"<span class="thai">${correct[0]}</span>" ရဲ့ အဓိပ္ပာယ်က ဘာလဲ။`;

    document.getElementById("quiz-feedback").textContent = "";

    document.getElementById("quiz-options").innerHTML = options.map((item, i) => `
        <button class="quiz-option" data-answer="${i}">
            ${i + 1}. ${item[1]}
        </button>
    `).join("");

    document.getElementById("quiz-score").textContent = score;
}

document.getElementById("quiz-options").addEventListener("click", event => {
    const button = event.target.closest("[data-answer]");
    if (!button || quizAnswered) return;

    quizAnswered = true;

    const selected = quizQuestion.options[Number(button.dataset.answer)];
    const correct = selected[0] === quizQuestion.correct[0];

    document.querySelectorAll(".quiz-option").forEach(option => {
        const item = quizQuestion.options[Number(option.dataset.answer)];

        if (item[0] === quizQuestion.correct[0]) {
            option.classList.add("correct");
        }
    });

    if (correct) {
        score++;
        document.getElementById("quiz-feedback").textContent = "မှန်ပါတယ်။ အလွန်ကောင်းပါတယ်။";
    } else {
        button.classList.add("wrong");
        document.getElementById("quiz-feedback").textContent =
            `မမှန်သေးပါ။ အဖြေမှန်က ${quizQuestion.correct[1]} ဖြစ်ပါတယ်။`;
    }

    document.getElementById("quiz-score").textContent = score;
    localStorage.setItem("thai_score", String(score));
});

document.getElementById("next-question").addEventListener("click", () => {
    renderQuiz();
});

/* ==================================
   COMPLETED LESSONS
================================== */

function toggleCompleted(id) {
    if (completed.includes(id)) {
        completed = completed.filter(x => x !== id);
    } else {
        completed.push(id);
    }

    saveData();
    updateProgress();
}

function updateProgress() {
    const total = consonants.length + vowels.length;
    const percent = Math.round((completed.length / total) * 100);

    document.getElementById("progress-bar").style.width =
        Math.min(percent, 100) + "%";

    document.getElementById("progress-text").textContent =
        `လေ့လာပြီး ${completed.length} / ${total} ခု (${Math.min(percent, 100)}%)`;
}

/* ==================================
   GLOBAL BUTTON HANDLER
================================== */

document.addEventListener("click", event => {
    const speakButton = event.target.closest("[data-speak]");
    if (speakButton) speakThai(speakButton.dataset.speak);

    const saveButton = event.target.closest("[data-save]");
    if (saveButton) toggleSaved(Number(saveButton.dataset.save));

    const completeButton = event.target.closest("[data-complete]");
    if (completeButton) toggleCompleted(completeButton.dataset.complete);
});

/* ==================================
   SENTENCES
================================== */

function renderSentences() {
    document.getElementById("sentence-list").innerHTML = sentences.map(s => `
        <article class="sentence-card">
            <div class="word-thai thai">${s[0]}</div>
            <div>${s[1]}</div>
            <div class="word-pronunciation">အနီးစပ်ဆုံးအသံ: ${s[2]}</div>
            <button class="icon-btn" data-speak="${s[0]}">🔊 အသံနားထောင်ရန်</button>
        </article>
    `).join("");
}

/* ==================================
   INITIALIZE
================================== */

renderAlphabet();
renderVowels();
renderTones();
renderWords();
renderFinals();
renderSentences();
updateProgress();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(error => {
            console.error("Service worker registration failed:", error);
        });
    });
}