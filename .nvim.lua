local formatters = invert_table({
  standardjs = {
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "astro",
    "svelte",
    "css",
    "html",
    "json",
    "jsonc",
    "yaml",
    "markdown",
    "graphql",
  },
})

for ft, formatter in pairs(formatters) do
  require('conform').formatters_by_ft[ft] = formatter
end
