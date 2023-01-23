migrate((db) => {
  const collection = new Collection({
    "id": "xjbp0cc9qxs7d8y",
    "created": "2023-01-23 00:15:58.283Z",
    "updated": "2023-01-23 00:15:58.283Z",
    "name": "chats",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xjbp0cc9qxs7d8y");

  return dao.deleteCollection(collection);
})
