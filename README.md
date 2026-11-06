# Thai Learning - ထိုင်းစာလေ့လာရန်

## ပါဝင်သောအရာများ
- ထိုင်းဗျည်း ၄၄ လုံးနှင့် အတန်းခွဲခြားမှု
- ထိုင်းသရများ၊ အသံအနိမ့်အမြင့် ၅ မျိုး၊ အသတ်သံအုပ်စု ၈ မျိုး
- မြန်မာအဓိပ္ပာယ်နှင့် ခန့်မှန်းအသံထွက်ပါသော ဝေါဟာရများ
- နေ့စဉ်သုံး စကားစုများ
- ကိုယ်ပိုင်စကားလုံးထည့်ခြင်း၊ သိမ်းခြင်း၊ ဖျက်ခြင်း
- Thai browser speech အသံဖတ်ခြင်း
- Quiz၊ အမှတ်မှတ်တမ်း၊ အရောင်အပြင်အဆင်
- JSON Backup / Restore
- PWA အခြေခံ Offline cache

## အသုံးပြုနည်း
1. ZIP ကိုဖြည်ပါ။
2. `index.html` ကို browser ဖြင့်ဖွင့်ပါ။ အခြေခံအကြောင်းအရာများ အလုပ်လုပ်မည်။
3. PWA/offline cache အတွက် HTTPS hosting (ဥပမာ GitHub Pages) မှ ဖွင့်ပါ။ `file://` ဖြင့်ဖွင့်လျှင် service worker မလုပ်ပါ။
4. ဖုန်း browser တွင် အသံဖတ်ခြင်းသည် device တွင် Thai voice ရှိမှုအပေါ် မူတည်သည်။

## GitHub Pages တင်ရန်
Repository ထဲသို့ `index.html`, `style.css`, `data.js`, `app.js`, `manifest.json`, `sw.js`, `icon.svg` တို့ကို ထည့်ပြီး commit လုပ်ပါ။ GitHub repository ၏ Settings → Pages မှ branch `main` နှင့် folder `/ (root)` ကို ရွေးပါ။

## Font
- Thai: Sarabun (ဖတ်ရလွယ်သော သန့်ရှင်းသည့် ထိုင်းစာလုံးပုံစံ)
- Burmese: Noto Sans Myanmar

Google Fonts ကို online ရှိချိန်တွင် ရယူသည်။ Offline အချိန်တွင် ဖုန်း၏ fallback font ကို အသုံးပြုနိုင်သည်။

## သတိပြုရန်
မြန်မာအသံထွက်များသည် အနီးစပ်ဆုံးလမ်းညွှန်ချက်သာ ဖြစ်သည်။ ထိုင်းအသံအနိမ့်အမြင့်နှင့် အသတ်သံများကို မူရင်းအသံဖြင့် နားထောင်ပြီး ထိုင်းဘာသာပြောသူ/ဆရာနှင့် ပြန်လည်စစ်ဆေးပါ။ ဤ starter version တွင် custom word ထည့်ရာ၌ အလိုအလျောက် ဘာသာပြန်ခြင်း မပါဝင်ပါ။
