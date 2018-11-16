function distanceFromHqInBlocks(block) {
	return Math.abs(42-block)
}

function distanceFromHqInFeet(block) {
	return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, destination) {
	return Math.abs(destination-start) * 264
}

function calculatesFarePrice(start, destination) {
	let fare;
	dist = distanceTravelledInFeet(start, destination);

	switch(true) {
		case dist <= 400:
			fare = 0;
			break;
		case dist > 400 && dist <= 2000:
			fare = (dist - 400) * 0.02;
			break;
		case dist > 2500:
			fare = 'cannot travel that far';
			break;
		case dist > 2000:
			fare = 25;
			break;
	}

	return fare
}