const indexRoute = (req, res) => {
  res.send('Hello Bernie!');
}

const tryRoute = (req, res) => {
  res.send('This is the try route!');
}

module.exports = {
  indexRoute,
  tryRoute
}