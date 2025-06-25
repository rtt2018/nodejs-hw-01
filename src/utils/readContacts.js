import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const stringContacts = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(stringContacts);
        return contacts;
    } catch (error) {
        console.error('Error reading contacts from:', PATH_DB);
        console.error(error.message);
        return [];
    }
};