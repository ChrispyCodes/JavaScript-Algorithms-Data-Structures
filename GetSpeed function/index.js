//---------------------------SPEED CALCULATION------------------------------------------------
// Speed Limit = 70
// if 5 over speed limit -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    let liscenceSuspended = false;

    if (speed <= speedLimit + kmPerPoint) {
        console.log('You are good');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {
        liscenceSuspended = true;
        console.log("Lisence Suspended!");
    }
    else {
        console.log('Points: ', points);
    }
}
checkSpeed(130);
