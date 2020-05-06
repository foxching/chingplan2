import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { getProjects, getNotifications } from "../../redux/actions/dataAction";

const Dashboard = () => {
  const { projects, loading, notifications } = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProjects = () => dispatch(getProjects());
    const getAllNotifications = () => dispatch(getNotifications());

    getAllProjects();
    getAllNotifications();
  }, [dispatch]);

  return (
    <div className="dashboard container">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Main" />
      </Helmet>
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} loading={loading} />
        </div>
        <div className="col s12 m5 offset-m1 ">
          <Notifications notifications={notifications} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
