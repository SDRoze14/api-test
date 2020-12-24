const test = async(req, res, next) => {

  res.status(200).json({
    text: 'Hello World'
  })
}

module.exports = test