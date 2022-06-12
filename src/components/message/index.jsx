import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";
import { Alert } from "react-bootstrap";
import { clearMessage } from "../../store/appState/slice";
import { selectUserProfile } from "../../store/user/selectors";

export default function MessageBox() {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const user = useSelector(selectUserProfile);

  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    <Alert
      show={showMessage}
      variant={message.variant}
      dismissible={message.dismissable}
      onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
    >
      {message.text} {user.name}
    </Alert>
  );
}
