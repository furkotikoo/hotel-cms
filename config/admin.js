module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f4ceab0014e8a054675731b1736444c6'),
  },
});
