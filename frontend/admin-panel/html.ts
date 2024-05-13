// Install axios (if not already installed)
// npm install axios --save

// import axios from 'axios';

// export default async function fetchAndLogHtml(url: string) {
//   try {
//     const response = await axios.get(url);

//     // Check for successful response
//     if (response.status === 200) {
//       console.log(response.data); // This will be the HTML content
//     } else {
//       console.error(`Error fetching URL: ${url}, Status Code: ${response.status}`);
//     }
//   } catch (error) {
//     console.error(`Error fetching URL: ${url}`, error);
//   }
// }

// // Example usage
// const targetUrl = 'https://www.example.com'; // Replace with your desired URL
// fetchAndLogHtml(targetUrl);
export default async function fetchAndLogHtml(url: string) {
  try {
    const response = await fetch(url);

    // Check for successful response (status code 200-299)
    if (response.ok) {
      const data = await response.text(); // Parse response as text (HTML)
      console.log(data); // This will be the HTML content
    } else {
      console.error(`Error fetching URL: ${url}, Status Code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error fetching URL: ${url}`, error);
  }
}

// Example usage
// const targetUrl = 'https://www.example.com'; // Replace with your desired URL
// fetchAndLogHtml(targetUrl);
const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function fetchAndParseImages(url: string) {
  try {
    // Fetch the HTML content
    const response = await fetch(url);

    // Check for successful response
    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${url}, status code: ${response.status}`);
    }

    // Parse the fetched HTML
    const html = await response.text();
    const $ = cheerio.load(html);

    // Find all img elements and extract src attributes
    const imageUrls: any[] = [];
    $('img').each((index: any, element: any) => {
      const src = $(element).attr('src');
      if (src) {
        imageUrls.push(src);
      }
    });

    return imageUrls;
  } catch (error) {
    console.error('Error fetching or parsing images:', error);
    return [];
  }
}

// Example usage
const targetUrl = 'https://app.leonardo.ai/auth/login';  // Replace with your target URL

fetchAndParseImages(targetUrl)
  .then(imageUrls => {
    console.log('Extracted image URLs:');
    console.log(imageUrls);
  })
  .catch(error => console.error('Error:', error));

