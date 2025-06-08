rs.initiate(
    {
        _id: 'rs0',
        version: 1,
        members: [
            { _id: 0, host: 'mongo-new1:27017', priority: 2 },
            { _id: 1, host: 'mongo-new2:27017', priority: 1 },
            { _id: 2, host: 'mongo-new3:27017', priority: 0 },
        ],
    },
    { force: true }
);
rs.status();