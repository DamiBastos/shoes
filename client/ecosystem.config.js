module.exports = {
    apps: [
      {
        name: "vite-dev-server",
        script: "npm",
        args: "run dev",
        interpreter: "none",
        watch: true, // Esto reiniciará el servidor si los archivos cambian
        env: {
          NODE_ENV: "development"
        }
      },
      {
        name: "vite-build-server",
        script: "npm",
        args: "run build",
        interpreter: "none",
        env: {
          NODE_ENV: "development"
        }
      }
    ]
  };
  