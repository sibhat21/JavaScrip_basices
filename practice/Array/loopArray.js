const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function(a){
  if (a > 0) {
    console.log(`You deposited:${a}`);
  } else {
    console.log(`you withdrew ${Math.abs(a)}`);
  }
});
