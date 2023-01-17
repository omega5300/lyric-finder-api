const lyricsFinder = require('lyrics-finder')

module.exports = async (req, res) => {
  const { artist, title } = req.query

  const lyrics = await lyricsFinder(artist, title) || "Not Found!"

  res.send(lyrics)
}