migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7z1tpegu99m2mud")

  collection.listRule = "@request.auth.id = author"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7z1tpegu99m2mud")

  collection.listRule = null

  return dao.saveCollection(collection)
})
