import Users from "../model/user.model.js";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //input validation
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required" });
    }
    //validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({ message: "Invalid email format" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .send({ message: "Password must be at least 8 characters" });
    }

    const userInstance = new Users(email, password);
    await userInstance.save();

    res.send({
      message: "User registered!",
      user: { email: userInstance.email },
    });
  } catch (error) {
    console.log("Error registering user:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
