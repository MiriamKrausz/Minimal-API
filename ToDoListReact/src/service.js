
import axios from 'axios';

// Define the base URL for the API as default
axios.defaults.baseURL="https://localhost:7062";

// Add an interceptor to catch errors in responses and log them
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error('Request failed:', error.message);
    return Promise.reject(error);
  }
);

export default {
  // Function to fetch all tasks
  getTasks: async () => {
    try {
      const result = await axios.get("/tasks");
      return result.data;
    } catch (error) {
      console.error('Error getting tasks:', error);
      throw error;
    }
  },

  // Function to add a new task
  addTask: async (name) => {
    try {
      console.log('addTask', name)
      const result = await axios.post("/tasks", { name });
      return result.data;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },

  // Function to set task completion status
  setCompleted: async (id, isComplete) => {
    try {
      console.log('setCompleted', {id, isComplete})
      const result = await axios.put(`/tasks/${id}`, { isComplete });
      return result.data;
    } catch (error) {
      console.error('Error updating task status:', error);
      throw error;
    }
  },

  // Function to delete a task
  deleteTask: async (id) => {
    try {
      await axios.delete(`/tasks/${id}`);
      console.log('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  }
};

