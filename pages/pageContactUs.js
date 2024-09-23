import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageContactUs() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head()}
        <body>
            ${header()}
            <main>
                <h1>Contact us page</h1>
                <p>Dabar bulviakasis - netrukdyk 👀</p>
            </main>
            ${footer()}
        </body>
        </html>`;
}