import axios from "axios";
import toast from "react-hot-toast";

const signupService = async (firstname, lastname, email, password) => {
  console.log(firstname, lastname, email, password);
  try {
    const res = await axios.post("api/auth/signup", {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
    });
   if (res.status === 201) {
      toast.success("SignUp sucessfully..Please Login to Continue");
      return res.data.encodedToken;
    }
  } catch (error) {
    toast.error("Email Id Already Exist");
  }
};

export { signupService };
