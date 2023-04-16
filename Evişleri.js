/*Bu haftaki ödevimiz, foksiyonlarin parametre olarak gecirilmesi ve Array'lerin methodlari
 ile ilgili olacak.

Ev hanimi olan Fatma günlük islerini bir listeye yazmakta ve
bu listeyi her saat basi kontrol etmektedir. Listede, bitirilen
islerin en basina "(x)" karakterlerini koymaktadir.
Fatma hanim, bizim yazdigimiz mobile applikasyonumuzdan 
3 seyi gercek zamanli olarak ögrenmek istemektedir.

1) Bitmis islerin filtrelenmesi ve gösterimi
2) Bitmemis islerin filtrelenmesi ve gösterimi
3) Islerin hepsinin bitip bitmedigi bilgisinin EVET veya HAYIR seklinde gösterilmesi.

Örnek data yapisi:
let islerim = ["Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika", "(x) Yemegi yap", "Alisverise git", "Cocugu okuldan al"];

*/ 

let homeTasks = ["Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika", "(x) Yemegi yap", "Alisverise git", "Cocugu okuldan al"]



//1. Fonksiyon Tamamlanan işler

function endedTasks(tasks) {
    let completed = tasks.filter((t)=>  t.includes("(x)"));
    return completed;
  }
  
  let completedTask = endedTasks(homeTasks);
  console.log(completedTask); // ["(x) Evi süpür", "(x) Yemegi yap"]



//2. Fonksiyon Tamamlanmayan işler

function notEndedTasks(tasks) {
    let notCompleted = tasks.filter((t) => !t.includes("(x)"));
    return notCompleted;
  }
  
  let notCompletedTask = notEndedTasks(homeTasks);
  console.log(notCompletedTask); // ["Yataklari düzelt", "Camasirlari yika", "Alisverise git", "Cocugu okuldan al"]



// 3. Fonksiyon İşlerin bitip bitmediğini gösteren ,evet - hayır dönen

function allEndedTasks(tasks) {
    let completed = tasks.filter(t=> t.includes("(x)"));
    if (completed.length === tasks.length) {
      return "EVET";
    } else {
      return "HAYIR";
    }
  }
  
  let isCompletedTask = allEndedTasks(homeTasks);
  console.log(isCompletedTask); // "HAYIR"
 