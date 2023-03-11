migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mu4sdbryhoebf1y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6bs4pmq3",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mu4sdbryhoebf1y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6bs4pmq3",
    "name": "name",
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
