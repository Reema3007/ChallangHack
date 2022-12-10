import KEYWORDS from "./server-json/sample.json" assert { type: "json" };

anychart.onDocumentReady(function () {
  var data = [
    { x: "Identity Theft", value: 109, category: "ID" },
    { x: "steal consumers information", value: 983, category: "Theft" },
    {
      x: "impersonating a website",
      value: 544000000,
      category: "Impersonating",
    },
    {
      x: "impersonating online shop",
      value: 527000000,
      category: "Impersonating",
    },
    {
      x: "asked for personal data",
      value: 422000000,
      category: "Impersonating",
    },
    {
      x: "Business email compromise",
      value: 281000000,
      category: "Email",
    },
    { x: "lure a companys staff", value: 267000000, category: "Impersonating" },
    {
      x: "fraudulent persons account",
      value: 261000000,
      category: "Impersonating",
    },
    {
      x: "impersonating a higher-up",
      value: 229000000,
      category: "Impersonating",
    },
    { x: "Refund Frauds", value: 229000000, category: "Credit-Card" },
    { x: "Stole Card", value: 150000000, category: "Credit-Card" },
    { x: "Credit Card Theft", value: 148000000, category: "Credit-Card" },
    {
      x: "Credit Limit Increase Call",
      value: 129000000,
      category: "Credit-Card",
    },
    {
      x: "Card-Not-Present Fraud",
      value: 129000000,
      category: "Indo-European",
    },
    { x: "Stolen Cards", value: 121000000, category: "Credit-Card" },
  ];

  // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);

  // set a chart title
  chart.title("");
  // set an array of angles at which the words will be laid out
  chart.angles([0]);
  // enable a color range
  chart.colorRange(true);
  // set the color range length
  chart.colorRange().length("80%");

  // display the word cloud chart
  chart.container("container");
  chart.draw();
});
