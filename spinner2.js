// process.stdout.write("hello from spinner1.js... \rheyyy\n");

const spinnersArr = ["|", "/", "-", "\\", "|"];
let time = 100;
for (const spin of spinnersArr) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `);
  }, time);
  time += 200;
}

// const spinnersArr = ["|", "/", "-", "\\", "|"];
// let time = [100, 300, 500, 700, 900];
// for (let i = 0; i < time.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(`\r${spinnersArr[i]}   `);
//   }, time[i]);
// }
