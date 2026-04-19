// Asking user for season and plantType input
let season = prompt(
  "Please enter a season you would like plant advice for. Eg. summer/winter",
);
let plantType = prompt(
  "Please enter a plant type you would like plant advice for. Eg. flower/vegetable",
);

// object to hold gardening advice for different seasons
let advice = {
  summer: {
    general: "Water your plants regularly and provide some shade.",
    flower: "Use fertiliser to encourage blooms.",
    vegetable: "Keep an eye out for pests!",
  },

  winter: {
    general: "Protect your plants from frost with covers.",
    flower: "Protect flowers from cold winds and frost damage.",
    vegetable: "Grow hardy vegetables and protect soil with mulch.",
  },
};

//Logging advice for hardcoded values
console.log(
  `Advice for ${season}:`,
  advice[season]?.general ?? "No advice for this season.",
);
console.log(
  `Advice for a ${plantType} in ${season}:`,
  advice[season]?.[plantType] ?? "No advice for this plant type.",
);
// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
