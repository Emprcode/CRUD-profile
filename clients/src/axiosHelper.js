import axios from "axios";

const apiEP = "http://localhost:8000/users";

//send all user

export const postUser = async (obj) => {
  try {
    const { data } = await axios.post(apiEP, obj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// get all users

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(apiEP);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteUsers = async (_id) => {
  try {
    const { data } = await axios.delete(apiEP + "/" + _id);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
