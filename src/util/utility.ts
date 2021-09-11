import fs from "fs";
import path from "path";

export class Utility {
    public static readFromFile(filename: string) {
        return JSON.parse(fs.readFileSync(path.join(__dirname, `../ds/${filename}`), 'utf8'));
    }
}
