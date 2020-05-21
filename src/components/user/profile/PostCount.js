import React from "react";
import { useSelector } from "react-redux";

const PostCount = () => {
  const { projects } = useSelector(state => state.data);

  return (
    <React.Fragment>
      <span>
        <b>
          {projects.length} {""}
        </b>
      </span>
      <span className="italic">posts </span>
    </React.Fragment>
  );
};

export default PostCount;
