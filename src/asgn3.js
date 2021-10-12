const express = require('express');
const router = express.Router();
const app = express();
const port = 3001;

router.post('/handle',(request,respond)=> {
  res.send("Hi Router");
//   req.
}
);

app.use("/",router)

app.listen(port,()=> {
console.log("its the post request one")
}
)