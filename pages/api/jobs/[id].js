import { jobs } from "../../../data/jobs";

export default function handler(req, res) {
  const { _id } = req.query;
  console.log("check job _id", _id)
  const job = jobs.find((job) => Number(job._id) === Number(_id));
  if (job) {
    res.status(200).json(job);
  } else {
    res.status(404).json({ message: "Job not found" });
  }
}
