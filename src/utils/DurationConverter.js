function convertDuration (duration) {
  return `${(duration/60)>>0}ч ${duration%60}м`
}

export default convertDuration;
