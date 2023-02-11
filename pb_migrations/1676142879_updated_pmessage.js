migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7z1tpegu99m2mud")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7z1tpegu99m2mud")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
