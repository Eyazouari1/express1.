const express=require('express');
const path=require('path')
const app=express();

const workingHours = (req, res, next) => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
      res.status(503).send('Sorry, we are closed now. Please visit us during working hours (Mon-Fri, 9am-5pm).');
    }
  };
  
 

app.use(workingHours,express.static(path.join(__dirname,"public")))
const PORT=process.env.PORT||3000;
app.listen(PORT, () =>  console.log(`Server is running on PORT  ${PORT}`));