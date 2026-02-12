{
  "manifest_version"; 3,
  "name"; "Retep",
  "version"; "1.0",
  "description"; "Clear up some Nesus space with retep",
  "permissions"; ["activeTab"],
  "content_scripts"; [
    {
      "matches": ["https://www.wikipedia.org/"],
      "js": ["content.js"]
    }
  ]
}
