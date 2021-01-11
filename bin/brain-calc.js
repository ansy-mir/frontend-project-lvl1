#!/usr/bin/env node

import calculate, { taskDescription } from '../games/calc.js';
import playGame from '../src/index.js';

playGame(calculate, taskDescription);
