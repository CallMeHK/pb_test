migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjbp0cc9qxs7d8y")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjbp0cc9qxs7d8y")

  collection.listRule = null

  return dao.saveCollection(collection)
})
