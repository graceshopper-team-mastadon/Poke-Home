module.exports = async (req, res) => {
  const { username, password } = req.body;


 // const user = await getUser(username);


  if (user.password !== password) {
    return res.status(403).json({
      error: "Invalid Credentials",
    });
  }
  delete user.password;

  const token = jwt.sign(user, test, { expiresIn: "1h" });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000000,
  });

  return res.redirect("/");
};
