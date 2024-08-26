import express from 'express'
import bodyParser from 'body-parser';
//import fetch from 'node-fetch';
import eventbrite_API from './config.js';
console.log("API key: ", eventbrite_API);

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Replace 'YOUR_OAUTH_TOKEN' with your actual OAuth token
const oauthToken = 'ZEY6PW3TRSSB6IAPOQ67';

// Example route for fetching user details
app.get('/user', async (req, res) => {
  const dataObj = await fetch(`https://www.eventbriteapi.com
/v3/users/me/?token=${oauthToken}`, {
  headers: {"Content-Type": "application/json"}
})
.catch((error) => {console.log("error:", error)});
  res.send(await dataObj.json());
})

// Example route for fetching event details
app.get('/events/:id', async (req, res) => {
  const dataObj = await fetch(`https://www.eventbriteapi.com/v3/events/${req.params.id}/?token=${oauthToken}`, {
    headers: {"Content-Type": "application/json"}
  })
  .catch((error) => {console.log("error:", error)});
  res.send(await dataObj.json());
})

// Example route for fetching ticket class details

// Example route for fetching order details

// Example route for fetching venue details

// Example route for fetching organizer details

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});

