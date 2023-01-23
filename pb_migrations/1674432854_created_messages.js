migrate((db) => {
  const collection = new Collection({
    "id": "uaov6t7wcv2xnjm",
    "created": "2023-01-23 00:14:14.830Z",
    "updated": "2023-01-23 00:14:14.830Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tysro51v",
        "name": "text",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("uaov6t7wcv2xnjm");

  return dao.deleteCollection(collection);
})
