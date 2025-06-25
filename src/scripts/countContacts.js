import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    return await readContacts()
        .then(contacts => contacts.length)
        .catch(() => {
            console.error('Error reading contacts');
            return null;
        });
};

console.log(await countContacts());
