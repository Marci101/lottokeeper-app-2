import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../../common/features/modalSlice";
import { doNotPropagateTooLowBalance } from "../../../common/features/userBalanceSlice";
import { enoughBalance } from "../../../common/features/userBalanceSlice";
import "./yourBalance.css";

export default function YourBalance() {
  const yourBalance = useSelector((state) => state.yourBalance.userBalance);
  const propagate = useSelector((state) => state.yourBalance.propagate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (yourBalance < 500 && propagate) {
      dispatch(showModal({isOpen: true, message: "Your balance has run out!\nIt was your last bet!\nWe hope you will win!", withInputField: false}));
      dispatch(doNotPropagateTooLowBalance(false));
      dispatch(enoughBalance(false));
    }
  });

  return (
    <div id="balance">
      <p>Your balance:&nbsp;</p>
      <p className="your-balance">{yourBalance}&nbsp;Akce</p>
    </div>
  );
}
