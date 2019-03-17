const port = 3003;

const express = require("express");
const app = express();

app.get("/products", (request, response, next) => {
  response.send([
      {name: "Notebook", price: 1234.33},
      {name: "Monitor", price: 134.00},
      {name: "Led", price: 4.00},
      {name: "USB", price: 34.00},
    ]
  )
});

app.listen(port, () => {
  console.log(`Server ON, port: ${port}`);
});