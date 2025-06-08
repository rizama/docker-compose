rs.initiate(
    {
        _id: 'tmsmono-mongo-set',
        version: 1,
        members: [
            { _id: 0, host: 'mongo-tmsmono-1:27017', priority: 2 },
            { _id: 1, host: 'mongo-tmsmono-2:27017', priority: 1 },
            { _id: 2, host: 'mongo-tmsmono-3:27017', priority: 0 },
        ],
    },
    { force: true }
);
rs.status();