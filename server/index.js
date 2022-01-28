const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A faithful friend is a strong defense.", "A good time to finish up old tasks.", "A hunch is creativity trying to tell you something.", "A light heart carries you through all the hard times.", "Advice, when most needed, is least heeded."];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  
  
  res.status(200).send(randomFortune);
});
  


app.get("/api/fortune", (req, res) => {
  const fortunes = ["A faithful friend is a strong defense.", "A good time to finish up old tasks.", "A hunch is creativity trying to tell you something.", "A light heart carries you through all the hard times.", "Advice, when most needed, is least heeded."];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  
  
  res.status(200).send(randomFortune);
});


app.get("/api/quote", (req, res) => {
  const quotes = ["Keep your face always toward the sunshine—and shadows will fall behind you. —Walt Whitman",  "Extraordinary things are always hiding in places people never think to look. —Jodi Picoul", "Setting goals is the first step in turning the invisible into the visible. —Tony Robbins", "You can have it all. Just not all at once. —Oprah Winfrey",];

  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  
  
  res.status(200).send(randomQuote);
});
















app.listen(4000, () => console.log("Server running on 4000"));
