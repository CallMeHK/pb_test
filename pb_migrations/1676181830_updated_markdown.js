migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mu4sdbryhoebf1y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "olt1ym3u",
    "name": "tags",
    "type": "json",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mu4sdbryhoebf1y")

  // remove
  collection.schema.removeField("olt1ym3u")

  return dao.saveCollection(collection)
})
