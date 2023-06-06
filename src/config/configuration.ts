export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongoUrl: process.env.MONGO_URL,
  jwtSecret: process.env.JWT_SECRET,
});
