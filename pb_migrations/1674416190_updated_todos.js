migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hd1ga8p9ckej2cy")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hd1ga8p9ckej2cy")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
