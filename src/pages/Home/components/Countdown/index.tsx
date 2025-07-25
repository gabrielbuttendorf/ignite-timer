import { differenceInSeconds } from 'date-fns';
import React from 'react';
import { CountdownContainer, Separator } from './styles';
import { CyclesContext } from '../../../../contexts/CyclesContext';

export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPast, setSecondsPassed } =
    React.useContext(CyclesContext);
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  React.useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference > totalSeconds) {
          markCurrentCycleAsFinished();
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId]);

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPast : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  React.useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    } else {
      document.title = 'Ignite Timer';
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
