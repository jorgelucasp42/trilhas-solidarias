import CryptoJS from 'crypto-js';
import fs from 'fs';
import path from 'path';

function generateApiKey() {
    return CryptoJS.lib.WordArray.random(32).toString();
}

const apiKey = generateApiKey();

const envPath = path.resolve('.env');
fs.appendFileSync(envPath, `\nAPI_KEY=${apiKey}`);

console.log(`Chave de API gerada: ${apiKey}`);
console.log('Chave de API adicionada ao arquivo .env');