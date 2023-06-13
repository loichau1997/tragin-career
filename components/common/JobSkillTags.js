import React from "react";

const JobSkillTags = ({ tag }) => {
  return (
    <div className="flex-align-center gap-2 mt-2 flex-wrap">
      {tag?.map((skill, i) => (
        <span
          key={i}
          className="text-muted bg-slate-200 rounded-sm px-2 py-[1px] dark:bg-hover-color sm:text-sm "
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default JobSkillTags;
