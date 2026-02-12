{
  "manifest_version"; 3,
  "name"; "Retep",
  "version"; "1.0",
  "description"; "A basic browser extension",
  "permissions"; ["activeTab"],
  "content_scripts"; [
    {
      "matches": ["https://www.wikipedia.org/"],
      "js": ["content.js"]
    }
  ]
}
