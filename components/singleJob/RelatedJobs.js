/* eslint-disable @next/next/no-img-element */
import { BiBookmark } from "react-icons/bi";
import Link from "next/link";

const RelatedJobs = ({ jobs }) => {
  return jobs?.length > 0 ? (
    <div className="mt-5">
      <h1 className="text-xl font-bold">Related Jobs</h1>
      {jobs?.map((job) => (
        <div className="card p-3 mt-3 group" key={job._id}>
          <div className="flex-align-center gap-x-2">
      
            <div className="flex-1">
              <Link href="/jobs/[_id]" as={`/jobs/${job?._id}`}>
                <a className="group-hover:text-primary transition-a">
                  <h1 className="font-bold text-lg">{job?.title}</h1>
                </a>
              </Link>
              <h1 className="text-sm">
                <span className="text-muted">{job?.office_location}</span>
              </h1>
            </div>
            <div className="icon-box card-shadow dark:shadow-none !rounded-md card-bordered">
              <BiBookmark />
            </div>
          </div>
          <div className="mt-3 flex-center-between">
            <div className="flex-align-center gap-x-2">
              <span className="px-2 py-[1px] bg-slate-100 dark:bg-hover-color">
                {job?.position_type}
              </span>
              <span className="px-2 py-[1px] bg-slate-100 dark:bg-hover-color">
                {job?.experience_level}
              </span>
            </div>
            <span className="text-sm">
              <span className="text-primary">New</span>{" "}
              <span className="text-muted">7d</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <h1 className="text-3xl font-bold">No Related Jobs found</h1>
    </div>
  );
};

export default RelatedJobs;
