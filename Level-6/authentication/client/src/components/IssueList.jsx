import React from "react";
import Issue from "./Issue";
import './Styles.css'
export default function IssueList(props) {
  const { issues } = props;
  return (
    <div className="issue-list">
      {issues.map((issue) => (
        <Issue {...issue} key={issue._id} />
      ))}
    </div>
  );
}
