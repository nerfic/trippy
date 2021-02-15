module.exports = {
  firstName: String,
  surname: String,
  password: String,
  email: String,
  username: String,
  token: String,
  dob: Date, // Date of birth
  thumbnail: String,
  created: {
    type: Date,
    default: Date.now
  }
};
