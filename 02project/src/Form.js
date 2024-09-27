import React from "react";
import Button from "./Button";

const Form = ({ requestType, setRequestType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button
        buttonText="posts"
        requestType={requestType}
        setRequestType={setRequestType}
      />
      <Button
        buttonText="comments"
        requestType={requestType}
        setRequestType={setRequestType}
      />
      <Button
        buttonText="users"
        requestType={requestType}
        setRequestType={setRequestType}
      />
    </form>
  );
};

export default Form;
