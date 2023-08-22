const express = require("express")
const app = express();
const PORT = 3007;

app.get('/', (req, res) => {
  res.send('Picker Sports Motherfucker!');
})

app.listen(PORT, (err) => {
  if(!err){
    console.log(`Server is fuckin vibin on port ${PORT}`);
  }
  else{
  console.log(`Something went wrong`);
  }
});