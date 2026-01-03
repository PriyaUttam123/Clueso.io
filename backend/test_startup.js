import fs from 'fs';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

fs.writeFileSync('debug_log.txt', 'Starting debug...\n');

try {
    fs.appendFileSync('debug_log.txt', 'Imports successful\n');
    dotenv.config();
    fs.appendFileSync('debug_log.txt', 'Dotenv config successful\n');
    const app = express();
    fs.appendFileSync('debug_log.txt', 'Express app created\n');
} catch (error) {
    fs.appendFileSync('debug_log.txt', 'Error: ' + error.message + '\n' + error.stack + '\n');
}
