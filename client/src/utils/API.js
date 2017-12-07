import axios from "axios";

export default {
  // Gets all restaurants
  getRestaurants: function() {
    return axios.get("/api/restaurants");
  },
  // Gets the restaurant with the given id
  getRestaurant: function(id) {
    return axios.get("/api/restaurants?name=" + id);
  },
  loadRestaurant: function(id) {
    return axios.get("/api/restaurants/" + id);
  },
  // Deletes the restaurant with the given id
  deleteRestaurant: function(id) {
    return axios.delete("/api/restaurants/" + id);
  },
  // Saves a restaurant to the database
  saveRestaurant: function(restaurantData) {
    return axios.post("/api/restaurants", restaurantData);
  },
  updateRestaurant: function(id, data) {
    return axios.put("/api/restaurants/" + id, data);
  },
  // Gets all restaurants
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the restaurant with the given id
  getUser: function(id) {
    return axios.get("/api/users?id=" + id);
  },

  // Deletes the restaurant with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a restaurant to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  updateUser: function(id, data) {
    return axios.put("/api/users/" + id, data);
  }
};
