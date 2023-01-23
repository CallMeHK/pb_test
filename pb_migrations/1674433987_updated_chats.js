migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjbp0cc9qxs7d8y")

  collection.listRule = "users ?= @request.auth.id"
  collection.viewRule = "users ?= @request.auth.id"
  collection.createRule = "users ?= @request.auth.id"
  collection.updateRule = "users ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjbp0cc9qxs7d8y")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
