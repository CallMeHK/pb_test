migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7z1tpegu99m2mud")

  collection.listRule = "@request.auth.id = author.id || @request.auth.id = recipient.id"
  collection.viewRule = "@request.auth.id = author.id || @request.auth.id = recipient.id"
  collection.createRule = "@request.auth.id = author.id"
  collection.updateRule = "@request.auth.id = author.id"
  collection.deleteRule = "@request.auth.id = author.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7z1tpegu99m2mud")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
