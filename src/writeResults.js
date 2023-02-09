import fs from 'fs';

export function writeResults(arr) {
  fs.mkdirSync('results', { recursive: true });
  let fileName = arr.length + (arr.length === 1 ? '-name' : '-names');
  let i = 1;

  while (fs.existsSync(`results/${fileName}.txt`)) {
    if (!fs.existsSync(`results/${fileName} (${i}).txt`)) {
      fileName = `${fileName} (${i})`;
      break;
    }
    i++;
  }

  fs.writeFileSync('results/' + fileName + '.txt', arr.join('\n'), {
    encoding: 'utf-8',
    flag: 'wx',
  });
}
