const express = require('express');
const router = express.Router();
const app = express();
const port = 3001;

router.get('/handle',(req,res)=> {
  res.send("Hi Router");
}
);

app.use("/",router)

app.listen(port,()=> {
//   console.log(`this app is listening at http://localhost:${port}`);
console.log("its the router one")
}
)