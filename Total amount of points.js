function points(games) {
  let totalPoints = 0;
  games.forEach(i => {
    if (parseInt(i[0]) > parseInt(i[2])) {
      totalPoints = totalPoints + 3;
    }
    else if (parseInt(i[0]) < parseInt(i[2])) {
      totalPoints = totalPoints + 0;
    }
    else if (parseInt(i[0]) == parseInt(i[2])) {
      totalPoints = totalPoints + 1;
    }
  })
  return totalPoints;
}

games = ['1:2', '2:2', '3:2', '4:3', '1:3']
points(games)