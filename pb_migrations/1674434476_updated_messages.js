migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uaov6t7wcv2xnjm")

  collection.listRule = "chat.users.id ?= @request.auth.id"
  collection.viewRule = "chat.users.id ?= @request.auth.id"
  collection.createRule = "author = @request.auth.id && chat.users.id ?= author"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b1ux2hvd",
    "name": "author",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uaov6t7wcv2xnjm")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b1ux2hvd",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
