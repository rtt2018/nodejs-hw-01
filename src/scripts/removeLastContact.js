import { writeContacts } from "../utils/writeContacts.js";
import { getAllContacts } from "./getAllContacts.js";

export const removeLastContact = async () => {
    const contacts = await getAllContacts();
    if (contacts.length === 0) {
        console.log('No contacts to remove');
        // return contacts;
    } else {
        contacts.length = contacts.length - 1;
        await writeContacts(contacts);
        // return contacts;
    }
};

removeLastContact();
