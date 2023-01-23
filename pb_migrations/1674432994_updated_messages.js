migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uaov6t7wcv2xnjm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nctwo8k0",
    "name": "chat",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "xjbp0cc9qxs7d8y",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uaov6t7wcv2xnjm")

  // remove
  collection.schema.removeField("nctwo8k0")

  return dao.saveCollection(collection)
})
