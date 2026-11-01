"use strict";

/* =========================
   THAI CONSONANTS
========================= */

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

/* =========================
   VOWELS
========================= */

const vowels = [
["ะ","a","အသံတို"],
["า","aa","အသံရှည်"],
["ิ","i","အသံတို"],
["ี","ii","အသံရှည်"],
["ึ","ue","အသံတို"],
["ื","uee","အသံရှည်"],
["ุ","u","အသံတို"],
["ู","uu","အသံရှည်"],
["เ-ะ","e","အသံတို"],
["เ","ee","အသံရှည်"],
["แ-ะ","ae","အသံတို"],
["แ","aae","အသံရှည်"],
["โ-ะ","o","အသံတို"],
["โ","oo","အသံရှည်"],
["เ-าะ","aw","အသံတို"],
["อ","aw","အသံရှည်"],
["เ-อะ","oe","အသံတို"],
["เ-อ","oee","အသံရှည်"],
["ไ","ai","အသံပေါင်းစပ်"],
["ใ","ai","အသံပေါင်းစပ်"],
["เอา","ao","အသံပေါင်းစပ်"],
["เอีย","ia","အသံပေါင်းစပ်"],
["เอือ","uea","အသံပေါင်းစပ်"],
["อัว","ua","အသံပေါင်းစပ်"]
];

/* =========================
   TONES
========================= */

const tones = [
{
 mark:"ไม่มี",
 name:"အသံညီ",
 thai:"เสียงสามัญ",
 detail:"ပုံမှန်အသံဖြစ်ပါတယ်။"
},
{
 mark:"่",
 name:"ไม้เอก",
 thai:"เสียงเอก",
 detail:"အသံအမှတ်အသားတစ်ခုဖြစ်ပြီး ဗျည်းအုပ်စုအလိုက် အသံထွက်ပြောင်းပါတယ်။"
},
{
 mark:"้",
 name:"ไม้โท",
 thai:"เสียงโท",
 detail:"အသံထွက်စနစ်တွင် အသုံးပြုသော ဒုတိယအမှတ်အသားဖြစ်ပါတယ်။"
},
{
 mark:"๊",
 name:"ไม้ตรี",
 thai:"เสียงตรี",
 detail:"အလယ်တန်းဗျည်းများတွင် အဓိကအသုံးပြုပါတယ်။"
},
{
 mark:"๋",
 name:"ไม้จัตวา",
 thai:"เสียงจัตวา",
 detail:"အလယ်တန်းဗျည်းများတွင် အဓိကအသုံးပြုပါတယ်။"
}
];

/* =========================
   FINAL CONSONANTS
========================= */

const finals = [
["ก","k","က်","มาก"],
["ข ค ฆ","k","က်","နောက်ဆုံးတွင် k အသံ"],
["ด จ ช ซ ฎ ฏ ฐ ฑ ฒ ต ถ ท ธ ศ ษ ส","t","တ်","นิด"],
["บ ป พ ฟ ภ","p","ပ်","ครับ"],
["ง","ng","င","ทาง"],
["น ณ ญ ร ล ฬ","n","န်","กิน"],
["ม","m","မ်","สาม"],
["ย","y","ယ","အသံပေါင်းစပ်"],
["ว","w","ဝ","အသံပေါင်းစပ်"]
];

/* =========================
   VOCABULARY
========================= */

const words = [
["สวัสดี","မင်္ဂလာပါ","ဆဝတ်ဒီ"],
["ขอบคุณ","ကျေးဇူးတင်ပါတယ်","ခေါ့ပ်ခုန်"],
["ขอโทษ","တောင်းပန်ပါတယ်","ခေါ်ထို့"],
["ใช่","ဟုတ်တယ်","ချိုင်"],
["ไม่ใช่","မဟုတ်ဘူး","မိုင်ချိုင်"],
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
["ที่นั่น","ဟိုမှာ","ထီးနန်"]
];

/* =========================
   SENTENCES
========================= */

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

const spellingData = [
  {
    word: "ไก่",
    meaning: "ကြက်",
    thai: "ก + ไ + ่ = ไก่",
    myanmar: "က + အိုင် + မိုင်အေ့ = ကိုင် = ကြက်"
  },
  {
    word: "ไข่",
    meaning: "ဥ",
    thai: "ข + ไ + ่ = ไข่",
    myanmar: "ခ + အိုင် + မိုင်အေ့ = ခိုင် = ဥ"
  },
  {
    word: "ปลา",
    meaning: "ငါး",
    thai: "ป + ล + า = ปลา",
    myanmar: "ပ + လ + အာ = ပလာ = ငါး"
  },
  {
    word: "บ้าน",
    meaning: "အိမ်",
    thai: "บ + ้ + า + น = บ้าน",
    myanmar: "ဘ + မိုင်ထို + အာ + န် = ဘာန် = အိမ်"
  },
  {
    word: "น้ำ",
    meaning: "ရေ",
    thai: "น + ้ + ำ = น้ำ",
    myanmar: "န + မိုင်ထို + အမ် = နမ် = ရေ"
  },
  {
    word: "มือ",
    meaning: "လက်",
    thai: "ม + ื + อ = มือ",
    myanmar: "မ + အူး + အော် = မူး = လက်"
  },
  {
    word: "แมว",
    meaning: "ကြောင်",
    thai: "ม + แ + ว = แมว",
    myanmar: "မ + အဲ + ဝ် = မဲဝ် = ကြောင်"
  },
  {
    word: "หมา",
    meaning: "ခွေး",
    thai: "ห + ม + า = หมา",
    myanmar: "ဟ + မ + အာ = မာ = ခွေး"
  },
  {
    word: "กิน",
    meaning: "စားသည်",
    thai: "ก + ิ + น = กิน",
    myanmar: "က + အိ + န် = ကင် = စားသည်"
  },
  {
    word: "คน",
    meaning: "လူ",
    thai: "ค + โ + น = คน",
    myanmar: "ခ + အို + န် = ခွန် = လူ"
  }
];



function renderSpelling() {
  const container = document.getElementById("spelling-list");

  if (!container) return;

  container.innerHTML = spellingData.map(item => `
    <div class="spelling-card">

      <div class="spelling-word">
        ${item.word}
      </div>

      <div class="spelling-equation">
        ${item.thai}
      </div>

      <div class="spelling-myanmar">
        ${item.myanmar}
      </div>

      <div class="spelling-meaning">
        အဓိပ္ပာယ် - ${item.meaning}
      </div>

      <div class="spelling-actions">
        <button class="action-btn"
          data-speak="${item.word}">
          🔊 အသံနားထောင်ရန်
        </button>
      </div>

    </div>
  `).join("");
}
/* =========================
   SAFE STORAGE
========================= */

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

let savedWords = readStorage("thai_saved", []);
let completed = readStorage("thai_completed", []);
let score = Number(readStorage("thai_score", 0)) || 0;

function saveData() {
  localStorage.setItem("thai_saved", JSON.stringify(savedWords));
  localStorage.setItem("thai_completed", JSON.stringify(completed));
  localStorage.setItem("thai_score", JSON.stringify(score));
}

/* =========================
   NAVIGATION
========================= */

function showPage(id) {
  const page = document.getElementById(id);
  if (!page) return;

  document.querySelectorAll(".page").forEach(p => {
    p.classList.toggle("active", p.id === id);
  });

  document.querySelectorAll(".nav-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.page === id);
  });

  if (id === "saved") renderSaved();
  if (id === "words") renderWords();
  if (id === "practice" && !quizQuestion) renderQuiz();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("navigation").addEventListener("click", event => {
  const button = event.target.closest("[data-page]");
  if (button) showPage(button.dataset.page);
});

document.addEventListener("click", event => {
  const button = event.target.closest("[data-goto]");
  if (button) showPage(button.dataset.goto);
});

/* =========================
   SPEECH
========================= */

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

/* =========================
   ALPHABET
========================= */

let currentClass = "all";

function className(value) {
  return {
    middle: "အလယ်တန်း",
    high: "အမြင့်တန်း",
    low: "အနိမ့်တန်း"
  }[value];
}

function renderAlphabet() {
  const container = document.getElementById("alphabet-list");

  const filtered = consonants.filter(item =>
    currentClass === "all" || item[3] === currentClass
  );

  container.innerHTML = filtered.map(item => {
    const id = "alphabet-" + item[0];
    const done = completed.includes(id);

    return `
      <article class="alphabet-card">
        <div class="alphabet-letter thai">${item[0]}</div>
        <div class="alphabet-name">${item[1]}</div>
        <div class="alphabet-sound">မြန်မာအသံ: ${item[2]}</div>
        <span class="class-label">${className(item[3])}</span>
        <br>
        <button class="icon-btn" data-speak="${item[0]}">🔊</button>
        <button class="icon-btn" data-complete="${id}">
          ${done ? "✓" : "＋"}
        </button>
      </article>
    `;
  }).join("");
}

document.querySelectorAll("[data-class]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-class]").forEach(b =>
      b.classList.remove("active")
    );

    button.classList.add("active");
    currentClass = button.dataset.class;
    renderAlphabet();
  });
});

/* =========================
   VOWELS
========================= */

function renderVowels() {
  document.getElementById("vowel-list").innerHTML =
    vowels.map(v => {
      const id = "vowel-" + v[0];

      return `
        <article class="vowel-card">
          <div class="vowel-letter thai">${v[0]}</div>
          <div class="vowel-name">${v[1]}</div>
          <div class="vowel-sound">${v[2]}</div>
          <button class="icon-btn" data-speak="${v[0].replaceAll("-", "")}">🔊</button>
          <button class="icon-btn" data-complete="${id}">
            ${completed.includes(id) ? "✓" : "＋"}
          </button>
        </article>
      `;
    }).join("");
}

/* =========================
   TONES
========================= */

function renderTones() {
  document.getElementById("tone-list").innerHTML =
    tones.map(t => `
      <article class="tone-card">
        <div class="tone-mark thai">${t.mark}</div>
        <h3>${t.name}</h3>
        <div class="thai">${t.thai}</div>
        <p>${t.detail}</p>
      </article>
    `).join("");
}

/* =========================
   FINAL CONSONANTS
========================= */

function renderFinals() {
  document.getElementById("final-list").innerHTML =
    finals.map(f => `
      <article class="final-card">
        <h3 class="thai">${f[0]}</h3>
        <b>အဆုံးသတ်အသံ: ${f[1]}</b>
        <p>မြန်မာအသံ: ${f[2]}</p>
        <p class="thai">${f[3]}</p>
      </article>
    `).join("");
}

/* =========================
   WORDS
========================= */

function wordCard(word, index) {
  const isSaved = savedWords.includes(index);

  return `
    <article class="word-card">
      <div class="word-main">
        <div class="word-thai thai">${word[0]}</div>
        <div class="word-meaning">${word[1]}</div>
        <div class="word-pronunciation">
          အနီးစပ်ဆုံးအသံ: ${word[2]}
        </div>
      </div>

      <div class="word-actions">
        <button class="icon-btn" data-speak="${word[0]}">🔊</button>
        <button class="icon-btn" data-save="${index}">
          ${isSaved ? "★" : "☆"}
        </button>
      </div>
    </article>
  `;
}

function renderWords(query = "") {
  const container = document.getElementById("word-list");
  const normalized = query.trim().toLowerCase();

  const filtered = words
    .map((word, index) => ({ word, index }))
    .filter(item =>
      item.word.join(" ").toLowerCase().includes(normalized)
    );

  container.innerHTML = filtered.length
    ? filtered.map(item => wordCard(item.word, item.index)).join("")
    : `<div class="empty-message">စကားလုံး မတွေ့ပါ။</div>`;
}

document.getElementById("word-search").addEventListener("input", event => {
  renderWords(event.target.value);
});

/* =========================
   SAVED WORDS
========================= */

function renderSaved() {
  const container = document.getElementById("saved-list");

  container.innerHTML = savedWords.length
    ? savedWords
        .filter(index => words[index])
        .map(index => wordCard(words[index], index))
        .join("")
    : `<div class="empty-message">သိမ်းထားသော စကားလုံး မရှိသေးပါ။</div>`;
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

/* =========================
   SENTENCES
========================= */

function renderSentences() {
  document.getElementById("sentence-list").innerHTML =
    sentences.map(s => `
      <article class="sentence-card">
        <div class="word-thai thai">${s[0]}</div>
        <div>${s[1]}</div>
        <div class="word-pronunciation">
          အနီးစပ်ဆုံးအသံ: ${s[2]}
        </div>
        <button class="icon-btn" data-speak="${s[0]}">
          🔊 အသံနားထောင်ရန်
        </button>
      </article>
    `).join("");
}


/* ==========================
   SPELLING
========================== */

function renderSpelling() {
  const container = document.getElementById("spelling-list");

  if (!container) return;

  container.innerHTML = spellingData.map(item => `
    <div class="spelling-card">
      <div class="spelling-word">${item.word}</div>
      <div class="spelling-equation">${item.thai}</div>
      <div class="spelling-myanmar">${item.myanmar}</div>
      <div class="spelling-meaning">
        အဓိပ္ပာယ် - ${item.meaning}
      </div>
      <div class="spelling-actions">
        <button class="action-btn" data-speak="${item.word}">
          🔊 အသံနားထောင်ရန်
        </button>
      </div>
    </div>
  `).join("");
}

/* ==========================
   QUIZ
========================== */

/* =========================
   QUIZ
========================= */

let quizQuestion = null;
let quizAnswered = false;
let quizNumber = 0;

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function renderQuiz() {
  const correctIndex = Math.floor(Math.random() * words.length);
  const correct = words[correctIndex];

  const options = shuffle([
    correct,
    ...shuffle(words.filter((_, i) => i !== correctIndex)).slice(0, 3)
  ]);

  quizQuestion = { correct, options };
  quizAnswered = false;
  quizNumber++;

  document.getElementById("quiz-number").textContent = quizNumber;

  document.getElementById("quiz-question").innerHTML =
    `<span class="thai">${correct[0]}</span> ရဲ့ အဓိပ္ပာယ်က ဘာလဲ။`;

  document.getElementById("quiz-feedback").textContent = "";

  document.getElementById("quiz-options").innerHTML =
    options.map((item, i) => `
      <button class="quiz-option" data-answer="${i}">
        ${i + 1}. ${item[1]}
      </button>
    `).join("");

  document.getElementById("quiz-score").textContent = score;
}

document.getElementById("quiz-options").addEventListener("click", event => {
  const button = event.target.closest("[data-answer]");

  if (!button || quizAnswered || !quizQuestion) return;

  quizAnswered = true;

  const selected = quizQuestion.options[Number(button.dataset.answer)];
  const correct = selected[0] === quizQuestion.correct[0];

  document.querySelectorAll(".quiz-option").forEach(option => {
    const item = quizQuestion.options[Number(option.dataset.answer)];

    option.disabled = true;

    if (item[0] === quizQuestion.correct[0]) {
      option.classList.add("correct");
    }
  });

  if (correct) {
    score++;
    document.getElementById("quiz-feedback").textContent =
      "မှန်ပါတယ်။ အလွန်ကောင်းပါတယ်။";
  } else {
    button.classList.add("wrong");

    document.getElementById("quiz-feedback").textContent =
      `အဖြေမှန်က ${quizQuestion.correct[1]} ဖြစ်ပါတယ်။`;
  }

  saveData();

  document.getElementById("quiz-score").textContent = score;
});

document.getElementById("next-question").addEventListener("click", renderQuiz);

/* =========================
   PROGRESS
========================= */

function toggleCompleted(id) {
  if (completed.includes(id)) {
    completed = completed.filter(x => x !== id);
  } else {
    completed.push(id);
  }

  saveData();
  updateProgress();
  renderAlphabet();
  renderVowels();
}

function updateProgress() {
  const total = consonants.length + vowels.length;

  const validCompleted = completed.filter(id =>
    id.startsWith("alphabet-") || id.startsWith("vowel-")
  );

  const count = new Set(validCompleted).size;
  const percent = Math.round((count / total) * 100);

  document.getElementById("progress-bar").style.width =
    Math.min(percent, 100) + "%";

  document.getElementById("progress-text").textContent =
    `လေ့လာပြီး ${count} / ${total} ခု (${Math.min(percent, 100)}%)`;
}

/* =========================
   GLOBAL BUTTON HANDLER
========================= */

document.addEventListener("click", event => {
  const speakButton = event.target.closest("[data-speak]");

  if (speakButton) {
    speakThai(speakButton.dataset.speak);
  }

  const saveButton = event.target.closest("[data-save]");

  if (saveButton) {
    toggleSaved(Number(saveButton.dataset.save));
  }

  const completeButton = event.target.closest("[data-complete]");

  if (completeButton) {
    toggleCompleted(completeButton.dataset.complete);
  }
});

/* =========================
   PWA INSTALL
========================= */

let deferredInstallPrompt = null;

const installButton = document.getElementById("install-btn");

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    alert("Browser Menu မှ Add to Home Screen ကို အသုံးပြုပါ။");
    return;
  }

  deferredInstallPrompt.prompt();

  await deferredInstallPrompt.userChoice;

  deferredInstallPrompt = null;
  installButton.hidden = true;
});

window.addEventListener("appinstalled", () => {
  installButton.hidden = true;
  deferredInstallPrompt = null;
});

/* =========================
   INITIALIZE
========================= */

renderAlphabet();
renderVowels();
renderTones();
renderFinals();
renderWords();
renderSentences();
updateProgress();

if ("serviceWorker" in navigator &&
    location.protocol.startsWith("http")) {

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .catch(error => {
        console.error("Service Worker Error:", error);
      });
  });
}