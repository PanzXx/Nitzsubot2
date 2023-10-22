const fetch = require('node-fetch')
const cheerio = require('cheerio')

async function ChatGpt(you_qus) {
  let baseURL = "https://free-api.cveoy.top/";
  try {
    const response = await fetch(baseURL + "v3/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "origin": "https://ai1.chagpt.fun",
        "Referer": baseURL
      },
      body: JSON.stringify({
        prompt: you_qus
      })
    });
    
    const data = await response.text();
    return data; // Return the response data if needed
  } catch (error) {
    // Handle any errors here
    console.error(error);
  }
}


module.exports.ChatGpt = ChatGpt