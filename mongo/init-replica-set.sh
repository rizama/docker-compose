#!/bin/bash

# Wait for the MongoDB instance to be ready
until mongo --host mongo-new1:27017 --eval "printjson(db.serverStatus())" > /dev/null 2>&1; do
  sleep 1
done

# Initiate the replica set
mongo --host mongo-new1:27017 <<EOF
  rs.initiate(
    {
      _id: "rs0",
      members: [
        { _id: 0, host: "mongo-new1:27017", priority: 2 },
        { _id: 1, host: "mongo-new2:27017", priority: 1 },
        { _id: 2, host: "mongo-new3:27017", priority: 0 }
      ]
    },
    { force: true }
  )
EOF