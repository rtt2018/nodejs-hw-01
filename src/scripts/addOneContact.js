import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

export const addOneContact = async () => {
    try {
        const stringContacts = await readContacts();
        const contacts = Array.isArray(stringContacts) ? stringContacts : [];

        contacts.push(createFakeContact());
        await writeContacts(contacts);
    } catch {
        console.error('Error reading contacts for adding a new one');
        return;
    }
    // readContacts().then(async (contacts) => {
    //     contacts.push(await createContact()).catch(() => {
    //         console.error('Error creating contact');
    //     });
    // }).then(async (contacts) => {
    //     await writeContacts(contacts).catch(() => {
    //         console.error('Error writing contacts');
    //     });
    // }).catch(() => {
    //     console.error('Cant read contacts!');
    // });
};

addOneContact();
