import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ukSJvb80UQN11lbH47U-xS_GgwzucWCLIRwv_XzDibmKNm9R0G5WPkb0IXnGuu28LPVQ6MYFEl7j0WJg1_H2m5aIhUxIkOEOzhq0nFyEcZPs_dS5WnnIB_S1jlIRZHYx",
  },
});
