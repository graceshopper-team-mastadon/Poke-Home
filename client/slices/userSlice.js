import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAllUsers = createAsyncThunk("getUsers", async () => {
  const { data } = await axios.get("http://localhost:3000/api/users/");
  return data;
});

export const fetchSingleUser = createAsyncThunk("getUser", async (id) => {
  const { data } = await axios.get("http://localhost:3000/api/users/user");
  return data;
});

export const deleteSingleUser = createAsyncThunk("deleteUser", async (id) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/dashboard/users/${id}`,
    { id }
  );
  await axios.delete(`http://localhost:3000/api/dashboard/users/${id}`, { id });
  return data;
});

export const addUser = createAsyncThunk(
  "AdminAddUser",
  async ({ name, username, password, email, address, role }) => {
    const { data } = await axios.post(
      "http://localhost:3000/api/dashboard/users/add",
      {
        name,
        username,
        password,
        email,
        address,
        role,
      }
    );
    return data;
  }
);

// Admin edits user information
export const editUser = createAsyncThunk(
  "AdminEditsUser",
  async ({ id, name, username, email, address, role }) => {
    const { data } = await axios.put(
      `http://localhost:3000/api/dashboard/users/${id}`,
      {
        name: name,
        username: username,
        email: email,
        address: address,
        role: role,
      }
    );
    return data;
  }
);

// User updates their own profile:
export const updateUser = createAsyncThunk(
  "updateOwnUser",
  async ({ id, username, email, password, address }) => {
    const { data } = await axios.put(`http://localhost:3000/api/users/${id}`, {
      username,
      email,
      password,
      address,
    });
    return data;
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [],
    singleUser: {},
    userStatus: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.singleUser = payload;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
      state.allUsers = payload;
    });
    builder.addCase(fetchSingleUser.fulfilled, (state, { payload }) => {
      state.singleUser = payload;
    });
    builder.addCase(deleteSingleUser.fulfilled, (state, { payload }) => {
      state.allUsers = state.allUsers.filter((user) => user.id !== payload.id);
    });
    builder.addCase(addUser.fulfilled, (state, { payload }) => {
      state.allUsers.push(payload);
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.singleUser = action.payload;
    });
  },
});

export const userState = (state) => state.users;
export default userSlice.reducer;
