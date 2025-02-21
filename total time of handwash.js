function calculateWashingTime(times, days) {
    const totalHandWash = 21 * times * days;
    let min = Math.floor(totalHandWash / 60)
    let sec = totalHandWash % 60
    return `${min} minutes and ${sec} seconds`
}
