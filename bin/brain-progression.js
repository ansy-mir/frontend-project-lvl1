#!/usr/bin/env node
import progression, { taskDescription } from '../games/progression.js';
import playGame from '../src/index.js';

playGame(progression, taskDescription);
