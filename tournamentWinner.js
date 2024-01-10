// time complexity = O(n) where n is the number of competitions
    // Because this is what we are iterating through
// space complexity = O(k) where k is the number of teams involved
    // Hash map will be much smaller if 100 rounds of 3 teams VS 50 teams

function tournamentWinner(competitions, results) {
	// Competitions will have at least 2 teams
	// Each team has to face all other teams
	// Only 2 teams compete at a time
	// One team = homeTeam
	// Other team = awayTeam
	// Always a loser and a winner
	// Loser = +3 points

	// Input: competitions array is an array of pairs [ [homeTeam, awayTeam],... ]
	// Input: results array has the winner of the competition at the parallel index
	// 0 means away team won, 1 means home team won

	// Create a roster and keep track of points with a hash map of all the team names
	const pointRoster = {};
	// Iterate through competitions array using index
	for (let i = 0; i < competitions.length; i++) {
		// Match the index in results away and read whether homeTeam or awayTeam won
		// Appropriately accrue points to hash map
		let winner = results[i] === 1 ? competitions[i][0] : competitions[i][1];
		if (!pointRoster[winner]) {
			pointRoster[winner] = 3;
		} else {
			pointRoster[winner] += 3;
		}
	}

	let maxPoints = 0;
	let tournamentWinner;
	// Determine team with max points in hash map
	for (let team in pointRoster) {
		if (pointRoster[team] > maxPoints) tournamentWinner = team;
		maxPoints = pointRoster[team];
	}

	// Output: the one team with the most points (exactly one time each time)
	return tournamentWinner;
}
