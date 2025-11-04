import users from "../model/user.model.js";
export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let newUser = new users(email, password);
    newUser = await newUser.save();
    res.send({ message: "User registered!", newUser });
  } catch (error) {
    console.log("Error registering user:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
