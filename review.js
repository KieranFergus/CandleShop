const reviews_arr = [
  {
    text: "Absolutely love the variety of scents available at this candle shop! The ambiance here is heavenly, and their candles are top-notch. My favorite is the lavender vanilla – it instantly relaxes me after a long day.",
    author: "Sara H.",
  },
  {
    text: "Unique and high-quality candles! I always find something new and intriguing whenever I visit. The staff is friendly and helpful. I purchased the cinnamon apple candle, and my entire home smells delightful.",
    author: "Michael P.",
  },
  {
    text: "This candle shop exceeded my expectations! The candles burn evenly and the scents are long-lasting. The packaging is elegant, making them perfect gifts. I'm a regular customer now!",
    author: "Emma G.",
  },
  {
    text: "The aromas in this shop are mesmerizing. I bought the ocean breeze and lemongrass candles, and they instantly transport me to a tranquil place. The shop's ambiance and customer service are delightful!",
    author: "James R.",
  },
  {
    text: "I'm a candle enthusiast, and this shop is a paradise for me. The quality and range of fragrances are impressive. The Christmas-themed candles are a must-buy during the holiday season. Highly recommended!",
    author: "Lisa M.",
  },
  {
    text: "Such a cozy atmosphere! I stumbled upon this gem and fell in love with their handmade candles. The pumpkin spice candle is my favorite; it creates a warm and inviting ambiance in my home. Will definitely come back!",
    author: "David S.",
  },
  {
    text: "A delightful experience! The shop's owner is passionate and knowledgeable about candles. I appreciated the personalized recommendations. The lavender scented candles I bought are heavenly. Can't wait to explore more scents.",
    author: "Emily W.",
  },
  {
    text: "Visited this shop for the first time and was pleasantly surprised. The staff is friendly and patient, allowing me to sample multiple scents. I ended up buying the vanilla bean candle, and it's absolutely divine. Great quality and reasonably priced.",
    author: "Daniel L.",
  },
  {
    text: "I love supporting local businesses, and this candle shop is a hidden treasure. The candles are made with care and attention to detail. The eucalyptus mint candle is refreshing, and the packaging is eco-friendly. Definitely coming back for more!",
    author: "Olivia C.",
  },
  {
    text: "A haven for candle lovers! The shop has a diverse selection, from floral to exotic scents. I purchased the sandalwood candle, and it's so calming. The shop's ambiance and the friendly staff make the shopping experience delightful. Will recommend to all my friends!",
    author: "Nathan B.",
  },
];

$(() => {
  showReviews();
});

function showReviews() {
  const reviews = document.querySelectorAll(".review");
  const indicies = randomIndicies(reviews_arr.length);
  console.log(indicies);
  let i = 0;
  for (let review of reviews) {
    let currRandInx = indicies[i];
    console.log(review);

    const textP = document.createElement("p");
    textP.setAttribute("class", "review-text");
    const authorP = document.createElement("p");
    authorP.setAttribute("class", "author-text");

    textP.textContent = reviews_arr[currRandInx].text;
    authorP.textContent = reviews_arr[currRandInx].author;
    review.appendChild(textP);
    review.appendChild(authorP);
    console.log(review);
    i++;
  }
}
function randomIndicies(lenList) {
  let arr = [];
  while (arr.length != 6) {
    let c = getRandomIndex(lenList);
    if (arr.indexOf(c) == -1) {
      arr.push(c);
    }
  }
  return arr;
}

function getRandomIndex(maxRange) {
  return Math.floor(Math.random() * maxRange);
}
