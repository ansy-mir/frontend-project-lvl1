#!/usr/bin/env node
import prime, { taskDescription } from '../games/prime.js';
import playGame from '../src/index.js';

playGame(prime, taskDescription);
