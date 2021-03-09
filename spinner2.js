let delay = 100;
const animation = ['\r|   ','\r/   ','\r-   ','\r\\   '];
while (delay < 2000) {
  for (const part of animation) {
    setTimeout(() => {
      process.stdout.write(part);
    }, delay);
    delay += 200;
  }
}