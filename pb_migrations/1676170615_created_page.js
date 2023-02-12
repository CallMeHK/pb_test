migrate((db) => {
  const collection = new Collection({
    "id": "cmal3rvvbv3ddm7",
    "created": "2023-02-12 02:56:55.916Z",
    "updated": "2023-02-12 02:56:55.916Z",
    "name": "page",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wsbxxbrk",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mvzjjrln",
        "name": "markdown",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": null,
          "collectionId": "mu4sdbryhoebf1y",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cmal3rvvbv3ddm7");

  return dao.deleteCollection(collection);
})
