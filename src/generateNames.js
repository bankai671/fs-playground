import { name } from 'random-profile-generator';
import { getRandomInteger } from './getRandomInteger.js';

/**
 * @returns array of random names
 */

export function generateNames() {
  return Array.from({ length: process.argv[2] || getRandomInteger() }, () =>
    name()
  );
}
