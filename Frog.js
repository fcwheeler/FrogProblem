const runs = 100000;

const init = () => {
  let results = [];

  for (let i = 0; i < runs; i++) {
    const result = session();
    console.log("Run " + i, result);
    results.push(result);
  }

  const avg = results.reduce((a, b) => a + b, 0) / results.length;
  console.log("Average Jumps", avg);
};

const session = () => {
  let currentposition = 0;
  let jumps = 0;
  while (currentposition < 10) {
    jumps++;
    currentposition = jump(currentposition);
  }

  return jumps;
};

const jump = currentposition => {
  const random = Math.random();
  const remaining = 10 - currentposition;

  const newPosition = currentposition + Math.ceil(random * remaining);

  //console.log("Jump", newPosition);
  return newPosition;
};

init();
