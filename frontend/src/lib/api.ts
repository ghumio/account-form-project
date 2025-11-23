const API_URL = "http://localhost:3001";

export interface CreateUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export const api = {
  async createUser(data: CreateUserData) {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to create user");
    }

    return response.json();
  },

  async getUsers() {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
  },
};
