import { readContacts } from "../utils/readContacts.js";


export const getAllContacts = async () => {
    return await readContacts()
        .then(contacts => contacts)
        .catch(() => {
            console.error('Error reading contacts');
            return [];
        });
};

console.log(await getAllContacts());
