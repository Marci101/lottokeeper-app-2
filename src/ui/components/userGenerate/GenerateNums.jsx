import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserNums } from '../../../common/features/userNumbersSlice';
import { showModal } from "../../../common/features/modalSlice";
import { decreaseBalance } from "../../../common/features/userBalanceSlice";
import { getCurrentDate } from '../../../common/utils/currentDate';
import { validateUiqueUserNums } from "../../../common/utils/uniqueNums";
import "./generateNums.css";

export default function GenerateNums() {
  const [userNums, setUserNums] = useState({});
  const [uniqueUserNums, setUniqueUserNums ] = useState(false);
  const enoughBalance = useSelector((state) => state.yourBalance.enoughBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    const uniqueNums = validateUiqueUserNums(Object.values(userNums));
    setUniqueUserNums(uniqueNums);
  }, [userNums]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserNums({...userNums, [name]: parseInt(value)});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let fiveGoodNumInput = 0;
    const numbers = Object.values(userNums);
    numbers.forEach((num) => {
      if(!uniqueUserNums || isNaN(num) || numbers.length !== 5 || num < 1 || num > 39) {
        dispatch(showModal({isOpen: true, message: "Something went wrong!\nPlease, enter 5 unique numbers!\nChoose from 1 to 39!", withInputField: false}));
      } else {
        fiveGoodNumInput++;
      }
    })
    if (fiveGoodNumInput === 5) {
      if (enoughBalance) {
        setUserNums(userNums);
        dispatch(saveUserNums({userNums: Object.values(userNums), date: getCurrentDate(), isArchive: false}));
        dispatch(showModal({isOpen: false, message: "", withInputField: false}));
      }
      dispatch(decreaseBalance());
    }
  }

  return (
    <section id="generate-nums">
      <form onSubmit={handleSubmit}>
        {[...Array(5)].map((item, index) => (
          <input
            key={index}
            type="number"
            name={`bet${index + 1}`}
            value={(userNums[userNums.bet + `${index + 1}`])}
            onChange={handleChange}
            min="1"
            max="39"
            maxLength="2"
            required
            autoComplete="off" />
        ))}
        <button type="submit">Bet!</button>
      </form>
    </section>
  );
}