import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";
const generateContacts = async (number) => {
    const generatedContacts = [];
    for (let i = 0; i < number; i++) {
        try {
            generatedContacts.push(createFakeContact());
        } catch {
            console.error(`Error creating contact ${i + 1}:`);
        }
    }
    return await writeContacts([...await readContacts(), ...generatedContacts]);
};

generateContacts(5);
