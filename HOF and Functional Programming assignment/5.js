// 5. URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.
function validateURL(url) {
    const regex = /^(http:\/\/|https:\/\/)[\w\d\S]+?\.[\w]+$/;
  
    if (regex.test(url)) {
      console.log("The URL is valid.");
    } else {
      console.log("The URL is invalid.");
    }
  }
  
  // Test cases
  validateURL("http://www.example.com"); // Valid URL
  validateURL("https://www.example.com"); // Valid URL
  validateURL("ftp://www.example.com"); // Invalid URL
  validateURL("http://www.example"); // Invalid URL
  