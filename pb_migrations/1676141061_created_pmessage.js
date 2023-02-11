migrate((db) => {
  const collection = new Collection({
    "id": "7z1tpegu99m2mud",
    "created": "2023-02-11 18:44:21.860Z",
    "updated": "2023-02-11 18:44:21.860Z",
    "name": "pmessage",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ndi5ygrq",
        "name": "text",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "8txczazi",
        "name": "author",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "zrtzdkcg",
        "name": "recipient",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
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
  const collection = dao.findCollectionByNameOrId("7z1tpegu99m2mud");

  return dao.deleteCollection(collection);
})
