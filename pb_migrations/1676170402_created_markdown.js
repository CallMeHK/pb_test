migrate((db) => {
  const collection = new Collection({
    "id": "mu4sdbryhoebf1y",
    "created": "2023-02-12 02:53:22.762Z",
    "updated": "2023-02-12 02:53:22.762Z",
    "name": "markdown",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mgorx0cp",
        "name": "md",
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
      },
      {
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
  const collection = dao.findCollectionByNameOrId("mu4sdbryhoebf1y");

  return dao.deleteCollection(collection);
})
