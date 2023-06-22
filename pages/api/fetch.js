// pages/api/fetch.js
import axios from "axios";

export default async (req, res) => {
  const url = req.query.url; // get the url from the query string
  const response = await axios.get(`${url}apiKey=${process.env.SECRET_KEY}`); // fetch the data with the key
  res.status(200).json({ data: response.data.Data }); // send the data back to the client
};
