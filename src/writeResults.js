import fs from 'fs';

/**
 * 
 * @param {string} arr array of string data (names for example)
 * @description create a /results folder and .txt file with data
 */

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
