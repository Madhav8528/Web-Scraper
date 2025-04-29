import * as cheerio from "cheerio";

(async () => {
    
    const url = 'https://www.akgec.ac.in/';
    const response = await fetch(url);

    const $ = cheerio.load(await response.text());
    console.log($.html());
    
})();
