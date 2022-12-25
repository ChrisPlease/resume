module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksShortcode('daterange', (startDate, endDate) => {
    const start = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(startDate)

    const end = endDate
      ? new Intl.DateTimeFormat('en-US', {
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC'
      }).format(endDate)
      : 'Present'

    return `${start}-${end}`;
  })
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
}
