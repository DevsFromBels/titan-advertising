module.exports = {
  apps: [
    {
      name: "gateway",
      script: "dist/apps/gateway/main.js",
    },
    {
      name: "users",
      script: "dist/apps/users/main.js",
    },
    {
      name: "profile",
      script: "dist/apps/profile/main.js",
    },
  ],
};
