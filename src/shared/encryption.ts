import { createCipheriv, createDecipheriv, randomBytes, scrypt, createHash } from 'crypto';
import { encryptionData } from 'src/interfaces/encryption.interface';
import { promisify } from 'util';


export const encrypt = (dataToEncrypt: any): encryptionData => {

    const encryptionKey = process.env.ENCRYPTION_KEY;
    const secretIv = process.env.SECRET_IV;

    const key = createHash('sha512').update(encryptionKey).digest('hex').substring(0, 32);
    const iv = createHash('sha512').update(secretIv).digest('hex').substring(0, 16);

    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const encryptedText = Buffer.from(cipher.update(dataToEncrypt, 'utf8', 'hex') + cipher.final()).toString('base64');

    return {data: encryptedText} as encryptionData;
};

export const decrypt = (dataToDecrypt: encryptionData): any => {

    const buff = Buffer.from(dataToDecrypt.data, 'base64');

    const encryptionKey = process.env.ENCRYPTION_KEY;
    const secretIv = process.env.SECRET_IV;

    const key = createHash('sha512').update(encryptionKey).digest('hex').substring(0, 32);
    const iv = createHash('sha512').update(secretIv).digest('hex').substring(0, 16);

    const decipher = createDecipheriv('aes-256-ctr', key, iv);

    const decryptedText = decipher.update(buff.toString('utf8'), 'hex', 'utf8') + decipher.final('utf8');

    return JSON.parse(decryptedText);
}