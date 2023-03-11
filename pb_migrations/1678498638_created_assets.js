migrate((db) => {
  const collection = new Collection({
    "id": "69990rtr1z388tx",
    "created": "2023-03-11 01:37:18.070Z",
    "updated": "2023-03-11 01:37:18.070Z",
    "name": "assets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ejcpi80o",
        "name": "file",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
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
  const collection = dao.findCollectionByNameOrId("69990rtr1z388tx");

  return dao.deleteCollection(collection);
})
