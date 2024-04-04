const express = require("express");
const gatsby = require("gatsby-plugin-nodejs");

const signals = ['SIGINT', 'SIGTERM'];
const port = process.env.PORT || 8080;
const app = express();

gatsby.prepare({ app }, () => {
  // Here you can define your routes
});

signals.forEach((signal) => {
  process.on(signal, () => {
    console.log(`got signal ${signal}, exiting...`);
    process.exit(0);
  });
})

app.listen(port, () => console.log(`listening on port ${port}`));
