// Step 1: Manage array of quote objects
const quotes = [
  { text: "Believe you can and you're halfway there.", category: "motivation" },
  { text: "Wisdom is the reward for surviving our own stupidity.", category: "wisdom" },
  { text: "Success is not in what you have, but who you are.", category: "success" }
];

// Step 2: Show a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById('quoteDisplay');

  if (quotes.length === 0) {
    quoteDisplay.textContent = "No quotes available.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Create DOM elements
  quoteDisplay.innerHTML = ''; // clear previous
  const quoteText = document.createElement('p');
  quoteText.textContent = `"${quote.text}"`;

  const quoteCategory = document.createElement('small');
  quoteCategory.textContent = `Category: ${quote.category}`;

  // Append to display area
  quoteDisplay.appendChild(quoteText);
  quoteDisplay.appendChild(quoteCategory);
}

// Step 3: Create quote form 
function createAddQuoteForm() {
 
}

// Step 4: Add new quote from user input
function addQuote() {
  const quoteInput = document.getElementById('newQuoteText');
  const categoryInput = document.getElementById('newQuoteCategory');

  const quoteText = quoteInput.value.trim();
  const categoryText = categoryInput.value.trim();

  if (quoteText && categoryText) {
    const newQuote = {
      text: quoteText,
      category: categoryText.toLowerCase()
    };

    quotes.push(newQuote);

    // Clear input fields
    quoteInput.value = '';
    categoryInput.value = '';
  }}