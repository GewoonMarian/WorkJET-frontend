import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { DEFAULT_MESSAGE_TIMEOUT } from "../../config/constants";
import { setMessage, clearMessage } from "./slice";

export const showMessageWithTimeout = (
  variant: string,
  dismissable: boolean,
  text: string,
  timeOutMilliSeconds: number
) => {
  return (dispatch: Dispatch<AnyAction>): void => {
    dispatch(setMessage({ variant, dismissable, text }));

    const timeout = timeOutMilliSeconds || DEFAULT_MESSAGE_TIMEOUT;

    setTimeout(() => dispatch(clearMessage()), timeout);
  };
};
