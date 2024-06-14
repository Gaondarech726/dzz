// 1

function delayedPromise(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), delay);
  });
}

const promises = [
  delayedPromise(1, 1000),
  delayedPromise(2, 2000),
  delayedPromise(3, 3000),
  delayedPromise(4, 4000),
  delayedPromise(5, 5000),
];

// 2

Promise.all(promises)
  .then((results) => {
    console.log("Res: ");
    results.forEach((result) => console.log(result));
  })
  .catch((error) => {
    console.error("Err: ", error);
  });

function randomDelay(value) {
  const delay = Math.random() * 4000 + 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), delay);
  });
}

const promises2 = [
  randomDelay(1),
  randomDelay(2),
  randomDelay(3),
  randomDelay(4),
  randomDelay(5),
];

Promise.race(promises2)
  .then((result) => {
    console.log("Результат найшвидшого промісу:", result);
  })
  .catch((error) => {
    console.error("Помилка при виконанні промісів", error);
  });
