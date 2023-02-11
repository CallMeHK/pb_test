migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjbp0cc9qxs7d8y")

  // remove
  collection.schema.removeField("rxxikonk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjbp0cc9qxs7d8y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxxikonk",
    "name": "messages",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "uaov6t7wcv2xnjm",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
