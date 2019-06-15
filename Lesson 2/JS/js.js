// if (2 * 3 == 8) {
//     console.log("Верно")
// } else {
//     console.log("Неверно")
// }

// let num = prompt("Сколько тебе лет?");
// if (num<49) {
//     console.log("Неверно")
// } else if (num>100) {
//     console.log ("Дофига")
// } else {
//     console.log ("Само то")
// }

// (num==18)?console.log("Номуль"):
// console.log("иди в школу или старпер");

// switch (true) {
//     case num < 18:
//         console.log("иди в школу");
//         break;
//     case num > 50:
//         console.log("Старпер");
//         break;
//     case num > 40:
//         console.log("все еще старпер");
//         break;
//     case num == 18:
//         console.log("нормуль");
//         break;
//         case num > 18 && num < 40:
//         console.log ("то, что нужно")
//         break;
//        }
//  let browser = "Google"


//  if (browser=="IE"){
//     console.log( 'О, да у вас IE!' );

//  } else if (browser=="Chrome"){
//      console.log('Да, и эти браузеры мы поддерживаем' );
//  }else if (browser=="Opera"){
//     console.log('Да, и эти браузеры мы поддерживаем' );
// }else if (browser=="Safari"){
//     console.log('Да, и эти браузеры мы поддерживаем' );
// }else if (browser=="Firefox"){
//     console.log('Да, и эти браузеры мы поддерживаем' );
// } else {
//     console.log( 'Мы надеемся, что и в вашем браузере все ок!' );

//  }

// switch (browser) {
//     case 'IE':
//       console.log( 'О, да у вас IE!' );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       console.log( 'Да, и эти браузеры мы поддерживаем' );
//       break;
  
//     default:
//       console.log( 'Мы надеемся, что и в вашем браузере все ок!' );
  // }

  let num = 50;
  // while (num<55){
  //   console.log(num);
  //   num++;
  // }

  do {
    console.log(num);
  num++;
  }
  while(num<55);

  for (let i =1; i<8; i++){
    if (i==6){
      continue;
    }
    console.log(i);
  };

 
  