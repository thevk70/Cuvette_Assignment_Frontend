import React from "react";
import { useState } from "react";
import InputBox from "../../common/Input/input";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import "./jobInterview.css";
import TagsInput from "../../common/TagInput/TagsInput";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { postJob } from "../../../actions/UserAction";
import { getBaseUrl } from "../../../config/utility";
import Loader from "../../common/Loader/Loader";

const JobForm = () => {
  const dispatch = useDispatch();

  const [title, setTiltle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [exprienceLevel, setExprienceLevel] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [candidateEmails, setCandidateEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsubmit] = useState(false);

  const send = () => {
    if (
      title &&
      description &&
      salary &&
      location &&
      exprienceLevel &&
      endDate &&
      candidateEmails
    ) {
      const User = jwtDecode(sessionStorage.getItem("token"));
      const newJob = {
        title,
        description,
        salary,
        location,
        exprienceLevel,
        endDate,
        candidateEmails,
        userId: User._id,
      };
      setIsLoading(true);
      dispatch(postJob(getBaseUrl() + "job/createJob", newJob)).then(() =>
        setIsLoading(false)
      );
    } else {
      setIsubmit(true);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className="formContainer">
        <div className="field">
          <label className="label">Job Title</label>
          <InputBox
            placeholder="Job Title"
            icon={<FaUser />}
            isSubmit={isSubmit}
            value={title}
            onChange={setTiltle}
          />
        </div>

        <div className="field">
          <label className="label">Job Description</label>
          <textarea
            className="job-des"
            cols="41"
            rows="8"
            placeholder="Enter Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {/* <InputBox placeholder="Enter Job Description" icon={<FaUser />} /> */}
        </div>
        <div className="field">
          <label className="label">Location</label>
          <select
            className="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="Remote">Remote</option>
            <option value="OnSite">OnSite</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Experience Level</label>
          <select
            className="experienceLevel"
            name="experienceLevel"
            value={exprienceLevel}
            onChange={(e) => setExprienceLevel(e.target.value)}
          >
            <option value="junior">Junior (0-2 years)</option>
            <option value="mid">Mid-Level (2-5 years)</option>
            <option value="senior">Senior (5+ years)</option>
            <option value="expert">Expert (10+ years)</option>
          </select>
        </div>
        <div className="field">
          <label className="label">Salary</label>
          <InputBox
            placeholder="Salary"
            icon={<AiOutlineDollar />}
            isSubmit={isSubmit}
            value={salary}
            onChange={setSalary}
          />
        </div>
        <div className="field">
          <label className="label">Add Candidate</label>
          <TagsInput tags={candidateEmails} setTags={setCandidateEmails} />
        </div>

        <div className="field">
          <label className="label">End Date</label>
          <InputBox
            placeholder="Date"
            type="date"
            isSubmit={isSubmit}
            value={endDate}
            onChange={setEndDate}
            icon={<FaCalendarAlt />}
          />
        </div>
        <button className="button" onClick={send}>
          Send
        </button>
      </div>
    </>
  );
};

export default JobForm;
