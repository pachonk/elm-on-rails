import Elm from './CountdownTimer'

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('countdown-timer')

  Elm.CountdownTimer.embed(target, {
    deadline: "May 30 2017 14:05:00"
  });
})
