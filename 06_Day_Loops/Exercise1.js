//4
for (let i = 1; i <= 7; i++) {
  let line = '';
  for (let j = 1; j <= i; j++) {
    line += '*';
  }
  console.log(line);
}
//5
for (let a=0;a<11;a++){
    console.log(`${a} * ${a} = ${a*a}`);
}
//6
console.log('\ni\ti^2\ti^3');
for (let b=0;b<11;b++){
  console.log(`${b}\t${b*b}\t${b**3}`);
}
