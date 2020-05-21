import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProjectList from "../projects/ProjectList";
import StaticProfile from "./profile/StaticProfile";
import ProfileSkeleton from "../../util/ProfileSkeleton";
import { getUserData } from "../../redux/actions/dataAction";

const UserDetails = props => {
  const [profile, setProfile] = useState(null);

  const { projects, loading } = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = handle => dispatch(getUserData(handle));
    getData(props.match.params.handle);

    axios
      .get(`/user/${props.match.params.handle}`)
      .then(res => {
        setProfile(res.data.user);
      })
      .catch(err => console.log(err));
  }, [dispatch, props.match.params.handle]);

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} loading={loading} />
        </div>
        <div className="col s12 m5 offset-m1">
          {profile === null ? (
            <ProfileSkeleton />
          ) : (
            <StaticProfile profile={profile} loading={loading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
