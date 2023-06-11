/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import JobSkillTags from "../../components/common/JobSkillTags";
import { BiBookmark, BiCircle, BiShareAlt } from "react-icons/bi";
import RelatedJobs from "../../components/singleJob/RelatedJobs";
import { useRouter } from "next/router";
import useFetch from "../api/useFetch";
import { server } from "../../config";

const SingleJob = () => {
  const router = useRouter();
  const { _id } = router.query;
  const { data: job, loading } = useFetch(`${server}/api/jobs/${_id}`);


  const {
    title,
    category,
    office_location,
    skills,
    experience_level,
    position_type,
    salary_range,
    experience,
    description,
    requirements_and_responsibilities,
    logo_url,
  } = job;

  const { data: jobs } = useFetch(`${server}/api/jobs`);

  const relatedJobs = jobs?.filter(
    (job) => 
      !_id.includes(job._id) && // this will exclude the jobs that have the same _id as the current job
      (job.title === title || job.category === category)
  );
  

  return !loading ? (
    <div className="grid md:grid-cols-3 gap-x-14">
      <div className="md:col-span-2 h-fit md:sticky top-0">
        <div className="card overflow-hidden">
          <div className="relative">
            <img
              src="/images/photo-3.jpg"
              alt=""
              className="h-full sm:h-[200px] object-cover w-full"
            />
            {/* <img
              src={logo_url || "/images/photo-3.jpg"}
              alt=""
              className="w-16 left-10 -bottom-8 absolute rounded-xl"
            /> */}
          </div>
          <div className="pt-10 px-6 pb-6">
            <div className="flex-center-between">
              <h1 className="text-xl font-semibold">{title}</h1>
              <div className="flex-align-center gap-x-2">
                <div className="icon-box card-shadow dark:shadow-none card-bordered !rounded-md">
                  <BiBookmark />
                </div>
                <div className="icon-box card-shadow dark:shadow-none card-bordered !rounded-md">
                  <BiShareAlt />
                </div>
              </div>
            </div>
            <div className="flex-center-between gap-x-2 mt-1">
              <p className="text-sm">
                {/* <span className="text-primary">{category}</span>{" "} */}
                <span className="text-primary">{office_location}</span>
              </p>

              <span className="text-sm ">
                <span className="text-muted mr-4">Posted 8 days ago</span> 98
                Applicants
              </span>
            </div>

            {/*---------------------------------------- Skills------------------------------------- */}
            <div className="mt-8">
              <JobSkillTags skills={skills} />
            </div>

            {/*---------------------------------------- About ------------------------------------ */}
            <div className="mt-5">
              <div className="card">
                <div className="flex flex-col sm:flex-row sm:flex-center-between">
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      Experience
                    </span>
                    <h1 className="capitalize">{experience}</h1>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      work level
                    </span>
                    <h1 className="capitalize">{experience_level}</h1>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      employee type
                    </span>
                    <h1 className="capitalize">{position_type}</h1>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
         
                </div>
              </div>
            </div>

            {/*---------------------------------------- Job Overview--------------------------------------------- */}
            <div className="mt-4">
              <h1 className="text-lg font-semibold">Overview</h1>
              <p className="leading-7">{description}</p>
            </div>

            {/*---------------------------------------- Job Description And Others------------------------------------- */}
            <div className="mt-4">
              <h1 className="text-lg font-semibold">
                Responsibilities & Requirements
              </h1>
              <div className="mt-3">
                {requirements_and_responsibilities?.map((res, i) => (
                  <div className="flex-align-center gap-x-2 mt-3" key={i}>
                    <BiCircle className="text-xs text-primary flex-shrink-0" />
                    <p className="text-sm">{res}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-3">
                <Link
                  href="/jobs/apply"
                  className="btn btn-primary flex-shrink-0"
                >
                  apply now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-1 h-fit md:sticky top-0">
        <RelatedJobs jobs={relatedJobs} />
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex-center-center">
      <div className="loader" />
    </div>
  );
};

export default SingleJob;
