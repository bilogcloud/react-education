const age = 20;
const status = age >= 18 ? "adult" : "minor";

const isLoggedIn = true;
isLoggedIn && console.log("Welcome!"); // runs only if true

const user = { profile: null };
const city = user.profile?.city; // undefined, no crash
// user.profile.city                      // TypeError

const displayName = user.nickname ?? "Guest"; // fallback for null/undefined
