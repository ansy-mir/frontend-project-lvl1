#!/usr/bin/env node

import isEven, { taskDescription } from '../games/even.js';
import playGame from '../src/index.js';

playGame(isEven, taskDescription);
