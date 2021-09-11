import fs from "fs";

function getData() {
    return JSON.parse(fs.readFileSync(__dirname + '/dummy-books.json', 'utf8'));
}

export default getData;
