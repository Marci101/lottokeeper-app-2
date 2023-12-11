import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CalculatePrize from "../../components/calculatePrize/CalculatePrize";
import ButtonRounded from "../../components/button/ButtonRounded";
import "./userNumbersPage.css";

export default function UserNumbersPage() {
  const userNumbers = useSelector((state) => state.yourNumbers.userNumbers);
  const [toggleOrder, setToggleOrder ] = useState(false);
  const [renderUserNumbers, setRenderUserNumbers] = useState([]);
  const winningNumbers = useSelector((state) => state.winningNumbers.drawnWinningNums);

  const totalPrize = useSelector((state) => state.yourBalance.totalPrize);


  let reversedUserNumbers = [...userNumbers].reverse();

  const clickHandler = () => {

    if(toggleOrder) {
      const descOrder = [...userNumbers].sort((a, b) => ((b.numOfHits) - (a.numOfHits)));
      setRenderUserNumbers(descOrder);
    } else {
      const ascOrder = [...userNumbers].sort((a, b) => ((a.numOfHits) - (b.numOfHits)));
      setRenderUserNumbers(ascOrder);
    }
    setToggleOrder(!toggleOrder);
  }

  useEffect(() => {
    setRenderUserNumbers(reversedUserNumbers);
  }, []);

console.log("reversedUserNumbers", reversedUserNumbers);

  return (
    <div id="user-numbers">
      {reversedUserNumbers.length === 0 ?
        <p className="page-hint">If you play with us, than you can see your Lucky Numbers here with the current Winning Numbers!</p>
      :
        <>
          {(typeof winningNumbers[0] === "number") &&
            <div className="winning-nums">
              <p className="nums-title">Latest drawn Winning Numbers:&nbsp;</p>
              <p className="nums-row">
                {
                  winningNumbers.map((winningNum, index) => {
                    return (
                      <span key={index}>
                        {winningNum}
                      </span>
                    );
                  })
                }
              </p>
            </div>
          }
          <p className="page-hint with-nums">The list of your Lucky Numbers</p>
          {(typeof winningNumbers[0] === "number") &&
            <div id="order-list">
              <p onClick={clickHandler}>HITS
                {toggleOrder ? <span>&#8681;</span> : <span>&#8679;</span>}
              </p>
            </div>
          }
        </>
      }
      {(reversedUserNumbers.length > 0) &&
        <>
          <ul className="data-of-betting">
            {renderUserNumbers.map((num, index) => {
              return (
                <li key={index}>
                  <div className="timedata">
                    <p className="time-of-bet">Time of bet:</p><p className="timestamp">{num.date}</p>
                  </div>
                  <p className="numbers">
                    {num.userNums.map((numItem, index) => {
                      return (
                        <span key={index}>
                          {numItem}
                        </span>
                      );
                    })}
                  </p>
                  {(num.numOfHits > 0) &&
                  <>
                    <p className="numbers-hit">Hits:
                      {
                        num.hitNumbers.map((hit, index) => {
                          return (
                            <span key={index}>
                              {hit}
                            </span>
                          );
                        })
                      }
                    </p>
                    {<CalculatePrize numOfHits={num.numOfHits} stateOfNum={num.state} />}
                  </>
                  }
                  {(typeof winningNumbers[0] === "number" && num.numOfHits === 0) &&
                    <p className="numbers-hit">Hits:&nbsp;no match, sorry!</p>
                  }
                  {num.state === "expired" &&                                      /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<  STATE  */
                    <div className="expired">
                      <span>E X P I R E D</span>
                    </div>
                  }
                </li>
              );
            })}
          </ul>
          {(typeof winningNumbers[0] === "number") &&
            <p className="prize-total">Prize Total:&nbsp;
            <span className="number-total">{totalPrize}</span>
          </p>}
        </>
      }
      <ul className="button-back">
        <ButtonRounded buttonText='Back' link='/user' />
      </ul>
    </div>
  )
}