const express = require("express");

const app = express();

app.listen(8080, () => {
  console.log("サーバ起動中");
});

app.get("/", (req, res) => {
  res.json({ echo: "hello world" });
  console.log("Getリクエストを受け付けました");
  res.end;
});
