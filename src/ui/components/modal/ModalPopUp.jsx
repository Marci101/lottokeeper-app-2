import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../../common/features/modalSlice";
import FormYourName from '../form/FormYourName';
import ButtonRounded from "../button/ButtonRounded";
import "./modalPopUp.css";

export default function ModalPopUp() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const message = useSelector((state) => state.modal.message);
  const withInputField = useSelector((state) => state.modal.withInputField);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(showModal({isOpen: false, message: "", withInputField: false}));
  }

  if (!isOpen) {
    return;
  }
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-message">
        <p>{message}</p>
        {withInputField && <FormYourName buttonText='Enter' />}
      </div>
      <ul id="modal-close" onClick={clickHandler}>
        <ButtonRounded buttonText='Close!' link='#' color="white"/>
      </ul>
    </div>,
    document.getElementById("portal")
  );
}
