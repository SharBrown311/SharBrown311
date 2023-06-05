import React, { useEffect, useContext, useState } from "react";
import { IssueContext } from "../Context/IssueProvider.jsx";
import { UserContext } from "../Context/UserProvider.jsx";
import AddIssueModal from "./AddIssue.jsx";
import Issue from "./Issue.jsx";

export default function IssueList() {
  const { getIssues, issues, vote, addComment, getComments } = useContext(
    IssueContext
  );
  const { addToWatchList } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getIssues();
  }, [getIssues]);

  const toggler = () => setToggle(p => !p);

  return (
    <div>
      <button onClick={toggler}>Add Issue</button>
      <AddIssueModal toggler={toggler} show={toggle} />
      {issues.map(issue => (
        <Issue
          {...issue}
          addComment={addComment}
          getComments={getComments}
          watchListAction={addToWatchList}
          watchListActionText="Add to"
          vote={vote}
          key={issue._id}
        />
      ))}
    </div>
  );
}