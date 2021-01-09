module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //why? https://stackoverflow.com/questions/54459442/module-not-found-error-cant-resolve-child-process-how-to-fix
    // config.node.child_process = "empty";

    return config;
  },
};
