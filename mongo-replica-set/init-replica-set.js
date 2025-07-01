rs.initiate(
    {
        _id: 'tmsmono-mongo-set',
        version: 1,
        members: [
            { _id: 0, host: 'mongo_rs_1:27017', priority: 2 },
            { _id: 1, host: 'mongo_rs_2:27017', priority: 1 },
            { _id: 2, host: 'mongo_rs_3:27017', priority: 0 },
        ],
    },
    { force: true }
);
rs.status();