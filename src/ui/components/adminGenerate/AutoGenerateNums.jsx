import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUniqueNumsArray } from "../../../common/utils/createUniqueNumsArray";
import { filterWinningNums } from "../../../common/utils/winningNums";
import { updateUserNums } from "../../../common/features/userNumbersSlice";
import { theWinningNums } from "../../../common/features/winningNumbersSlice";
import "./autoGenerateNums.css";

export default function AutoGenerateNums() {
  const [ winningNums, setWinningNums ] = useState([]);
  const userNumbers = useSelector((state) => state.yourNumbers.userNumbers);
  const winningNumsStored = useSelector((state) => state.winningNumbers.drawnWinningNums);
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const roundsOfDrawingNums = 1;
    const generatedNums = createUniqueNumsArray(roundsOfDrawingNums);
    setWinningNums(generatedNums[0]);
  }

  useEffect(() => {
    if(winningNums.length) {
      dispatch(theWinningNums(winningNums));

      if(userNumbers) {
        const updatedUserNumbers = filterWinningNums(winningNums, userNumbers);
        dispatch(updateUserNums(updatedUserNumbers));
      }
    }
  }, [winningNums]);

  return (
    <section id="autogenerate-nums">
      <form onSubmit={handleSubmit}>
        {[...Array(5)].map((item, index) => (
          <input
            key={index}
            type="number"
            name={`winningNum${index + 1}`}
            value={winningNums[index] || winningNumsStored[index]}
            min="1"
            max="39"
            maxLength="2"
            disabled
            autoComplete="off" />
        ))}
        <button type="submit">Draw!</button>
      </form>
    </section>
  );
}