import express from 'express';
import fetch from 'node-fetch';
const app = express();
const port = 3000;

app.use(express.static('public'));


app.listen(3000, () => console.log(`Listening at ${port}`));

app.get('/', (req, res) =>{
     res.send('Hi');
});

app.get('/yelpapi', async(req, res) => {
     const fetchApi = await fetch('https://api.yelp.com/v3/businesses/search?location=Kansas', {
          method: 'GET',
          headers: {
               Authorization : 'Aqui va la apikey'
          }
     });
     const apiResponse = await fetchApi.json();
     res.json(apiResponse);
     //res.send(apiResponse);
     console.log(apiResponse);
})

