const path = require('path');

module.exports = {
  apps: [
    {
      name: "jdm-expo-config-server",
      script: "java",
      args: ["-jar", path.join(__dirname, "jdm-expo-config-server", "target", "jdm-config-server-0.0.1-SNAPSHOT.jar")],
      max_restarts: 3,
      log_file: "./logs/jdm-expo-config-server.log",
    },
    {
      name: "jdm-expo-eureka-server",
      script: "java",
      args: ["-jar", path.join(__dirname, "jdm-expo-eureka-server", "target", "jdm-eureka-server-0.0.1-SNAPSHOT.jar")],
      max_restarts: 3,
      log_file: "./logs/jdm-expo-eureka-server.log",
    },
    {
      name: "jdm-expo-api-gateway",
      script: "java",
      args: ["-jar", path.join(__dirname, "jdm-expo-api-gateway", "target", "jdm-api-gateway-0.0.1-SNAPSHOT.jar")],
      max_restarts: 3,
      log_file: "./logs/jdm-expo-api-gateway.log",
    }
  ]
};