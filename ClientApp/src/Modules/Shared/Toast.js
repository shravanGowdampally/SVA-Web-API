import React from "react";
import { toast } from "react-toastify";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import SuccessIcon from "@material-ui/icons/Done";
import { messageType, messageTypeCode } from "./Constants";
import "./Toast.css";

const options = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 10000,
  bodyClassname: {
    margin: "10px",
  },
};

const errorIcon = <ErrorIcon />;
const infoIcon = <InfoIcon />;
const successIcon = <SuccessIcon />;

const contentContainerStyle = {
  alignItems: "center",
};

const contentStyle = {
  maxWidth: "230px",
  fontSize: "small",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const renderContent = (text, icon) => (
  <div style={contentContainerStyle}>
    <div data-test-id="toast-message" className={contentStyle} title={text}>
      {text}
    </div>
  </div>
);

const getOptions = (isError) => {
  if (isError) return { ...options, sutoClose: 20000 };
  return options;
};

const notify = (message) => {
  const text = message.text;
  const type = message.messageType;

  switch (type) {
    case messageType.ERROR:
      return toast.error(renderContent(text, errorIcon), getOptions(true));

    case messageTypeCode.ERROR:
      return toast.error(renderContent(text, errorIcon), getOptions(true));

    case messageType.INFO:
      return toast.info(renderContent(text, infoIcon), getOptions(false));

    case messageTypeCode.INFO:
      return toast.info(renderContent(text, infoIcon), getOptions(false));

    case messageType.SUCCESS:
      return toast.success(renderContent(text, successIcon), getOptions(false));

    case messageTypeCode.SUCCESS:
      return toast.success(renderContent(text, successIcon), getOptions(false));

    default:
      return toast.info(renderContent(text, infoIcon), getOptions(false));
  }
};

const toaster = (message) => {
  notify(message);
};
export default toaster;
