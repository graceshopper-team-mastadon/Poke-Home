import React, { useEffect, useState } from "react";
import axios from "axios";
import DashContent from "./DashContent";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = async () => {
      const { data } = await axios.get("/api/users/checkadmin");
      setIsAdmin(data);
    };
    adminStatus();
  }, []);

  return (
    <>
      {!isAdmin && (
        <>
          <p>
            You do not have permission to view Admin Dashboard. Please log in as
            Admin.
          </p>
        </>
      )}
      {isAdmin && (
        <>
          <div>{<DashContent />} </div>
        </>
      )}
    </>
  );
};
export default Dashboard;
