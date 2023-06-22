/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import JobSkillTags from "../common/JobSkillTags";
import { FaBookmark } from "react-icons/fa";
import { motion } from "framer-motion";
import Skeleton from "../loading-skeleton/Skeleton";
import Swal from "sweetalert2";
import moment from "moment";
const JobList = ({ jobs, loading }) => {

  const alertHandalar = () => {
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'Sorry we are under construction. Very soon we will open this feature.',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, got it!'
    })
  }

  return !loading ? (
    <>
      {jobs?.length > 0 ? (
        <>
          {jobs?.map((job) => (
            <motion.div
              className="card p-4 mt-3 group"
              key={job?.id}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
            >
              <div className="flex flex-col sm:flex-row gap-3 justify-between">
                <div className="flex-align-center gap-3">

                  <div>
                    <Link href="/jobs/[id]" as={`/jobs/${job?.id}`}>
                      <a className="group-hover:text-primary transition-a">
                        <h1 className="text-xl font-semibold">{job?.title}</h1>
                      </a>
                    </Link>
                    <p className="text-sm">
                      <span className="text-xl "></span> {moment(job?.created_at).startOf('day').fromNow()}
                    </p>
                  </div>
                </div>

                <div>
                  <button onClick={alertHandalar} className="bg-slate-100 px-3 py-1 rounded-md flex-align-center gap-x-2 flex-shrink-0 text-muted hover:bg-slate-200 dark:bg-hover-color dark:hover:bg-[#252532]">
                    <span>Save Job</span>
                    <FaBookmark />
                  </button>
                </div>
              </div>
              <div className="flex-align-center gap-2 mt-2 flex-wrap">
                <span className="text-muted bg-slate-200 rounded-sm px-2 py-[1px] dark:bg-hover-color sm:text-sm ">
                  {job?.position_type}
                </span>
                <span className="text-muted bg-slate-200 rounded-sm px-2 py-[1px] dark:bg-hover-color sm:text-sm ">
                  {job?.experience}
                </span>
                <span className="text-muted bg-slate-200 rounded-sm px-2 py-[1px] dark:bg-hover-color sm:text-sm ">
                  {job?.experience_level}
                </span>
              </div>

              <div className="my-3">
                <p className="text-sm">{job?.description.slice(0, 350)}...</p>
              </div>
              <JobSkillTags />
              <div className="flex flex-wrap sm:flex-nowrap md:flex-center-between mt-4">
                <div className="flex-align-center gap-4">

                  <h1>
                    54{" "}
                    <span className="text-sm text-muted">People Applied</span>
                  </h1>
                </div>
                <div className="flex-align-center gap-x-4 mt-4 sm:mt-0">
                  <Link href="/jobs/[id]" as={`/jobs/${job?.id}`}>
                    <a className="btn flex-shrink-0 bg-slate-100 hover:bg-slate-200 text-muted dark:bg-hover-color dark:hover:bg-[#252532]">
                      details
                    </a>
                  </Link>

                  <Link 
                     href="/jobs/apply/[id]" as={`/jobs/apply/${job?.id}`}
                  // href="/apply"
                  
                  >
                    <a className="btn btn-primary flex-shrink-0">apply now</a>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </>
      ) : (
        <div className="flex-center-center mt-5">
          <div className="image-wrapper">
            <img
              src="/404.png"
              alt="404"
              className="mx-auto  object-contain h-[350px] w-[350px]"
            />
            <h1 className="text-center mt-5 text-5xl opacity-60">
              Oops! No jobs found
            </h1>
          </div>
        </div>
      )}
    </>
  ) : (
    <>
      {Array.apply(null, { length: 4 }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </>
  );
};

export default JobList;
