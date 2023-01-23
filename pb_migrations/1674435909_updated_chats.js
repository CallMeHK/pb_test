migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjbp0cc9qxs7d8y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "at7eezsk",
    "name": "users",
    "type": "relation",
    "required": true,
    "unique": true,
    "options": {
      "maxSelect": 2,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjbp0cc9qxs7d8y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "at7eezsk",
    "name": "users",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
