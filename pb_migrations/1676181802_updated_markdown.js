migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mu4sdbryhoebf1y")

  // remove
  collection.schema.removeField("jp4hojot")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mu4sdbryhoebf1y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jp4hojot",
    "name": "tags",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
