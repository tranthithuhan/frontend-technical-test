const path = require('path')
DB_PATH = `${path.dirname(__filename)}/../db.json`


// Need this middleware to catch some requests
// and return both conversations where userId is sender or recipient
module.exports = (req, res, next) => {
  if (/conversations/.test(req.url) && req.method === 'GET') {
    delete require.cache[require.resolve(DB_PATH)]
    const db = require(DB_PATH);

    const userId = req.query?.senderId

    const result = db?.conversations?.filter(
      conv => conv.senderId == userId || conv.recipientId == userId
    )

    res.status(200).json(result)
    return
  }

  next()
}