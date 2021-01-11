#!/usr/bin/env node
import gcd, { taskDescription } from '../games/gcd.js';
import playGame from '../src/index.js';

playGame(gcd, taskDescription);
