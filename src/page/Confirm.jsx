import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { FaCircleCheck } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa6";
const Confirm = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:8080/v1/users/activate/${token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        toast.success(data);
        navigate("/login");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div>
        <FaSpinner className="animate-spin" />
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <h2 className="flex items-center gap-2">
          <FaCircleCheck className="text-green-500" />
          Account Varification Completed!
        </h2>
      </div>
    );
  }
};

export default Confirm;
