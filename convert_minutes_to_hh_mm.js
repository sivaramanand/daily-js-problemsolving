function carTimer(totalMinutes) {

    let hour = 0;
    let minutes = totalMinutes;
    while (minutes >= 60) {
        minutes = minutes - 60;
        hour = hour + 1
    }

    const formatted_hours = hour < 10 ? `0${hour}` : hour.toString();
    const formatted_minutes = minutes < 10 ? `0${minutes}` : minutes.toString();;

    return `${formatted_hours}:${formatted_minutes}`
}
