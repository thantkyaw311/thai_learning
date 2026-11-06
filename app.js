const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const store = {
  get(key, fallback){try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}},
  set(key,value){localStorage.setItem(key,JSON.stringify(value))}
};
let saved = store.get("thai_saved",[]);
let completed = store.get("thai_completed",[]);
let customWords = store.get("thai_custom_words",[]);
let bestScore = store.get("thai_score",0);

function speakThai(text){
  if(!("speechSynthesis" in window)){alert("ဤ browser တွင် အသံဖတ်စနစ် မရရှိပါ။");return}
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text); u.lang="th-TH"; u.rate=.82;
  speechSynthesis.speak(u);
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function card({thai,title,meaning,sound,extra="",key="",custom=false}){
  const isSaved=saved.includes(key||thai);
  return `<article class="data-card"><div class="thai">${escapeHTML(thai||"")}</div><h3>${escapeHTML(title||meaning||"")}</h3>${meaning&&title?`<p>${escapeHTML(meaning)}</p>`:""}${sound?`<p>မြန်မာအသံ - ${escapeHTML(sound)}</p>`:""}${extra?`<p>${escapeHTML(extra)}</p>`:""}<div class="card-actions"><button class="small-btn" data-speak="${escapeHTML(thai||"")}">🔊 နားထောင်</button>${key?`<button class="small-btn" data-save="${escapeHTML(key||thai)}">${isSaved?"★ သိမ်းထား":"☆ သိမ်းရန်"}</button>`:""}${custom?`<button class="small-btn" data-delete="${escapeHTML(key)}">ဖျက်ရန်</button>`:""}</div></article>`;
}
function bindCardActions(){
  $$("[data-speak]").forEach(b=>b.onclick=()=>speakThai(b.dataset.speak));
  $$("[data-save]").forEach(b=>b.onclick=()=>{const k=b.dataset.save;saved=saved.includes(k)?saved.filter(x=>x!==k):[...saved,k];store.set("thai_saved",saved);renderAll()});
  $$("[data-delete]").forEach(b=>b.onclick=()=>{customWords=customWords.filter(w=>w.id!==b.dataset.delete);store.set("thai_custom_words",customWords);renderCustom()});
}
function renderAlphabet(){
  const q=($("#alphabet-search").value||"").toLowerCase(), cls=$("#class-filter").value;
  const list=consonants.filter(x=>(cls==="all"||x.cls===cls)&&[x.thai,x.name,x.sound].some(v=>v.toLowerCase().includes(q)));
  $("#alphabet-list").innerHTML=list.map(x=>card({thai:x.thai,title:x.name,meaning:`မြန်မာအသံ - ${x.sound}`,extra:`${({middle:"အလယ်တန်း",high:"အမြင့်တန်း",low:"အနိမ့်တန်း"})[x.cls]} ဗျည်း`,key:x.thai})).join("")||"<p>မတွေ့ပါ။</p>";
  bindCardActions();
}
function renderStatic(){
  $("#vowel-list").innerHTML=vowels.map(x=>card({thai:x.thai,title:`${x.roman} • ${x.length}`,meaning:`မြန်မာအသံ - ${x.sound}`,extra:`ဥပမာ - ${x.example}`,key:x.thai})).join("");
  $("#tone-list").innerHTML=tones.map(x=>card({thai:x.thai,title:x.myanmar,meaning:x.desc})).join("");
  $("#final-list").innerHTML=finals.map(x=>card({thai:x.group,title:x.desc,meaning:`ပါဝင်သော ဗျည်း - ${x.letters}`})).join("");
  $("#phrase-list").innerHTML=phrases.map(x=>card({thai:x.thai,title:x.meaning,sound:x.sound,key:x.thai})).join("");
  bindCardActions();
}
function renderWords(){
  const q=($("#word-search").value||"").toLowerCase();
  const list=words.filter(x=>[x.thai,x.meaning,x.sound].some(v=>v.toLowerCase().includes(q)));
  $("#word-list").innerHTML=list.map(x=>card({thai:x.thai,title:x.meaning,sound:x.sound,key:x.thai})).join("")||"<p>မတွေ့ပါ။</p>";
  bindCardActions();
}
function renderCustom(){
  $("#custom-word-list").innerHTML=customWords.map(x=>card({thai:x.thai,title:x.meaning,sound:x.sound,key:x.id,custom:true})).join("")||'<p class="muted">ထည့်ထားသော စကားလုံး မရှိသေးပါ။</p>';
  bindCardActions();
}
function renderSaved(){
  const all=[...words,...phrases].filter(x=>saved.includes(x.thai));
  $("#saved-list").innerHTML=all.map(x=>card({thai:x.thai,title:x.meaning,sound:x.sound,key:x.thai})).join("")||'<p class="muted">သိမ်းထားသော စကားလုံး မရှိသေးပါ။</p>';
  bindCardActions();
}
function renderStats(){
  $("#completed-count").textContent=completed.length;
  $("#saved-count").textContent=saved.length;
  $("#best-score").textContent=bestScore+"%";
}
function renderAll(){renderAlphabet();renderStatic();renderWords();renderCustom();renderSaved();renderStats()}
function showPage(id){
  $$(".page").forEach(p=>p.classList.toggle("active",p.id===id));
  $$(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
  if(!completed.includes(id)){completed.push(id);store.set("thai_completed",completed);renderStats()}
  window.scrollTo({top:0,behavior:"smooth"});
}
$("#main-nav").addEventListener("click",e=>{const b=e.target.closest("[data-page]");if(b)showPage(b.dataset.page)});
$$("[data-goto]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.goto)));
$("#alphabet-search").addEventListener("input",renderAlphabet);
$("#class-filter").addEventListener("change",renderAlphabet);
$("#word-search").addEventListener("input",renderWords);
$("#add-word-btn").addEventListener("click",()=>{
  const thai=$("#new-thai").value.trim(),meaning=$("#new-meaning").value.trim(),sound=$("#new-sound").value.trim();
  if(!thai||!meaning){alert("ထိုင်းစကားလုံးနှင့် မြန်မာအဓိပ္ပာယ်ကို ဖြည့်ပါ။");return}
  customWords.unshift({id:"w"+Date.now(),thai,meaning,sound});
  store.set("thai_custom_words",customWords);
  $("#new-thai").value=$("#new-meaning").value=$("#new-sound").value="";
  renderCustom();alert("သိမ်းဆည်းပြီးပါပြီ။");
});
$("#theme-btn").onclick=()=>{document.body.classList.toggle("dark");store.set("thai_dark",document.body.classList.contains("dark"))};
if(store.get("thai_dark",false))document.body.classList.add("dark");
$("#backup-btn").onclick=()=>{
  const data={saved,completed,bestScore,customWords};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="thai-learning-backup.json";a.click();URL.revokeObjectURL(a.href);
};
$("#restore-btn").onclick=()=>$("#restore-file").click();
$("#restore-file").onchange=async e=>{
  const f=e.target.files[0];if(!f)return;
  try{const d=JSON.parse(await f.text());saved=Array.isArray(d.saved)?d.saved:[];completed=Array.isArray(d.completed)?d.completed:[];bestScore=Number(d.bestScore)||0;customWords=Array.isArray(d.customWords)?d.customWords:[];store.set("thai_saved",saved);store.set("thai_completed",completed);store.set("thai_score",bestScore);store.set("thai_custom_words",customWords);renderAll();alert("Backup ပြန်ထည့်ပြီးပါပြီ။")}catch{alert("Backup ဖိုင်ဖတ်မရပါ။")}
  e.target.value="";
};

let quiz=[],quizIndex=0,score=0,answered=false;
function startQuiz(){
  const pool=[...words].sort(()=>Math.random()-.5).slice(0,5);
  quiz=pool.map(w=>{const wrong=words.filter(x=>x.meaning!==w.meaning).sort(()=>Math.random()-.5).slice(0,3).map(x=>x.meaning);return {w,opts:[w.meaning,...wrong].sort(()=>Math.random()-.5)}});
  quizIndex=0;score=0;$("#quiz-start").hidden=true;$("#quiz-next").hidden=true;showQuestion();
}
function showQuestion(){
  answered=false;const item=quiz[quizIndex];$("#quiz-progress").textContent=`မေးခွန်း ${quizIndex+1} / ${quiz.length}`;$("#quiz-score").textContent=`အမှတ် ${score}`;
  $("#quiz-question").innerHTML=`<span class="thai">${escapeHTML(item.w.thai)}</span><br>အဓိပ္ပာယ်မှန်ကို ရွေးပါ။`;
  $("#quiz-feedback").textContent="";$("#quiz-options").innerHTML=item.opts.map(o=>`<button class="quiz-option">${escapeHTML(o)}</button>`).join("");
  $$(".quiz-option").forEach(b=>b.onclick=()=>{if(answered)return;answered=true;const correct=b.textContent===item.w.meaning;if(correct){score++;b.classList.add("correct");$("#quiz-feedback").textContent="မှန်ပါတယ်။ ကောင်းပါတယ်။"}else{b.classList.add("wrong");$("#quiz-feedback").textContent=`အဖြေမှန် - ${item.w.meaning}` ;$$(".quiz-option").find(x=>x.textContent===item.w.meaning)?.classList.add("correct")}$$(".quiz-option").forEach(x=>x.disabled=true);$("#quiz-score").textContent=`အမှတ် ${score}`;$("#quiz-next").hidden=false;});
}
$("#quiz-start").onclick=startQuiz;
$("#quiz-next").onclick=()=>{
  quizIndex++;
  if(quizIndex<quiz.length)showQuestion();
  else{const percent=Math.round(score/quiz.length*100);bestScore=Math.max(bestScore,percent);store.set("thai_score",bestScore);$("#quiz-question").textContent=`ပြီးဆုံးပါပြီ။ ${score} / ${quiz.length} မှန်ပါတယ်။`;$("#quiz-options").innerHTML="";$("#quiz-feedback").textContent=`ရလဒ် ${percent}%`;$("#quiz-next").hidden=true;$("#quiz-start").hidden=false;$("#quiz-start").textContent="ထပ်မံဖြေဆိုမည်";renderStats();}
};
renderAll();
if("serviceWorker" in navigator && location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}))}
