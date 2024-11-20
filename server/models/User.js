// import mongoose from "mongoose";

// //create user schema and set rules
// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);
// export default User;
import mongoose from "mongoose";

// Create user schema and set rules
const userSchema = new mongoose.Schema(
  {
    userId: { type: Number, unique: true, required: true },  // Custom userId field
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// // Pre-save hook to generate a random incremented userId
// userSchema.pre('save', async function (next) {
//   const user = this;

//   if (!user.isNew) return next(); // Skip for updates

//   // Generate a random userId and ensure it's unique
//   let newUserId;
//   let isUnique = false;

//   while (!isUnique) {
//     newUserId = Math.floor(Math.random() * 1000000); // Random number between 0 and 999999
//     const existingUser = await mongoose.models.User.findOne({ userId: newUserId });

//     if (!existingUser) {
//       isUnique = true; // Stop looping if userId is unique
//     }
//   }

//   user.userId = newUserId; // Assign the unique userId

//   next();
// });

const User = mongoose.model("User", userSchema);
export default User;
