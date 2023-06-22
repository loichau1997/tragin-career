// pages/api/fetch.js
import axios from "axios";

export default async (req, res) => {
  const url = req.query.url; // get the url from the query string
  const id = req.query.id; // get the id from the query string
  const response = await axios.get(`${url}${id}?apiKey=${process.env.SECRET_KEY}`); // fetch the data with the key and the id
  res.status(200).json({ data: response.data }); // send the data back to the client
};
