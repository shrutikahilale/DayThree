import Note from "./model.js";

async function createNote(extractedText) {
    try {
        const note = await Note.create({ data: extractedText });
        return note._id;
    }
    catch (err) {
        throw new Error(err);
    }
}

async function getNote(id) {
        try {
        const note = await Note.findById(id);
        return note.data;
    }
    catch (err) {
        throw new Error(err);
    }
}
export { createNote , getNote};