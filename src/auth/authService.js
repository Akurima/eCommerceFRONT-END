// src/auth/authService.js

const KEY = "cafeteria_user";

// Simulación de "base de usuarios"
let users = JSON.parse(localStorage.getItem("users")) || [];

export function signup(email, password) {
  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return { error: "Ya existe una cuenta con ese email" };
  }

  const newUser = { email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem(KEY, JSON.stringify(newUser));
  return { user: newUser };
}

export function login(email, password) {
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return { error: "Credenciales incorrectas" };
  }
  localStorage.setItem(KEY, JSON.stringify(user));
  return { user };
}

export function logout() {
  localStorage.removeItem(KEY);
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(KEY));
}
