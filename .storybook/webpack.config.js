module.exports = (storybookBaseConfig, configType) => {

    storybookBaseConfig.module.rules.push(
        { test: /\.(frag|vert)$/, use: "raw-loader" },
        { test: /\.(mp4|ogg|webm|jpe?g|gif|png|webp)$/, use: "file-loader" }
    );

    // Return the altered config
    return storybookBaseConfig;
};
