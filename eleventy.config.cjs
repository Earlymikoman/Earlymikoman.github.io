module.exports = function(eleventyConfig) {
  console.log("🟢 Eleventy config loaded successfully!");
  
  eleventyConfig.addLiquidFilter("tab", function(count) {
    count = count || 1;
    return '&nbsp;'.repeat(count * 4);
  });
  
  // Tell Eleventy to include subfolders
  return {
    dir: {
      input: ".",      // default, your root
      includes: "_includes"
    }
  };
};