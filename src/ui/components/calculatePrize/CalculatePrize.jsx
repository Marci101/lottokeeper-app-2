import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { totalPrize } from "../../../common/features/userBalanceSlice";
import { calculatePrize } from "../../../common/utils/calculatePrize"
import "./calculatePrize.css";

export default function CalculatePrize(props) {
  const {numOfHits, stateOfNum} = {...props};
  const [prizeCalculated, setPrizeCalculated] = useState();
  const dispatch = useDispatch();

//console.log("CALCULATE COMPONENT RUNS!!");

  useEffect(() => {
    const prize = calculatePrize(numOfHits);
    setPrizeCalculated(prize);
    if(stateOfNum === "for_current_draw") {                         // <<<<<<<<<<<<<<<<<<<<<<<<<<<<< STATE
      dispatch(totalPrize(prize));
    }
  }, []);

  return (
    <p id="prize">Prize:&nbsp;
      <span className="prize-amount">
        {prizeCalculated}
      </span>
    </p>
  );
}