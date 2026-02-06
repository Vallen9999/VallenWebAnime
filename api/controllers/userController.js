exports.createUser = async (req, res, next) => {
  try {
    const { username, email } = req.body;

    res.status(201).json({
      success: true,
      data: {
        username,
        email
      }
    });
  } catch (err) {
    next(err);
  }
};