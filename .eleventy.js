module.exports = function(eleventyConfig) {
    
    config.addPassthroughCopy()
    config.addPassthroughCopy()

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}