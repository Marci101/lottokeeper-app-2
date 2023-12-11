import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { totalPrize } from "../../../common/features/userBalanceSlice";
import { calculatePrize } from "../../../common/utils/calculatePrize"
import "./calculatePrize.css";

export default function CalculatePrize(props) {   //////  >>>>>   num.isArchive = true;    <<<<<    ez kell lefejleszteni és szűrhetővé válnak az archiválandó júzer nyerőszámok !!
  const {numOfHits} = {...props};
  const [prizeCalculated, setPrizeCalculated] = useState();
  const dispatch = useDispatch();

console.log("CALCULATE COMPONENT RUNS!!");

  useEffect(() => {
    console.log("U.E.CALC.PRIZE");
    const prize = calculatePrize(numOfHits);
    setPrizeCalculated(prize);
    //if(prizeCalculated) {
      console.log("INNER prizeCalculated",prizeCalculated);
      dispatch(totalPrize(prize));
    //}
  }, []);

  return (
    <p id="prize">Prize:&nbsp;
      <span className="prize-amount">
        {prizeCalculated}
      </span>
    </p>
  );
}