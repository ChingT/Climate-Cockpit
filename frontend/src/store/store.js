import { configureStore } from "@reduxjs/toolkit";
import friendRequests from "./slices/friendRequests.js";
import loggedInUser from "./slices/loggedInUser.js";
import postsFilter from "./slices/postsFilter.js";
import profileFilter from "./slices/profileFilter.js";

export default configureStore({
  reducer: {
    loggedInUser: loggedInUser,
    profileFilter: profileFilter,
    postsFilter: postsFilter,
    friendRequests: friendRequests,
  },
});
