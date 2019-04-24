export const getTime = (millisecond) => {
  const mil = millisecond - 1000;
  const min = Math.floor(mil / 1000 / 60);
  const sec = mil / 1000 % 60;

  return{
    mil,
    min,
    sec
  }

}

export const interval = (mil, play, setState, callBack) => {
      if (mil > 0 && play) {
        const time = getTime(mil);
        setState({
          ...time
        })
      } else if (mil <= 0 && play === true) {
        const mil = 600000;
        setState({
          mil,
        })
      }
    }

const timeout = setTimeout(() => interval(), 1000);
