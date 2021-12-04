const inTimeInterval = (timeInterval: string) => {
  let startTime = "",
    endTime = "";
  const currentTime = new Date();

  let a = timeInterval.split(" - ");
  startTime = a[0];
  endTime = a[1];
  let pieces = startTime.split(":");
  let startHour = parseInt(pieces[0]);
  let startMinute = parseInt(pieces[1], 10);
  pieces = endTime.split(":");
  let endHour = parseInt(pieces[0], 10);
  let endMinute = parseInt(pieces[1], 10);
  if (
    currentTime.getHours() * 60 + currentTime.getMinutes() >=
    startHour * 60 + startMinute
  ) {
    if (
      currentTime.getHours() * 60 + currentTime.getMinutes() <=
      endHour * 60 + endMinute
    ) {
      return true;
    }
  }
  return false;
};

export default inTimeInterval;
