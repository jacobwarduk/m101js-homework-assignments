Jacobs-MacBook-Pro:m101 jacobward$ mongo
MongoDB shell version: 2.6.5
connecting to: test
Server has startup warnings:
2015-01-10T18:26:23.461+0000 [initandlisten]
2015-01-10T18:26:23.461+0000 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
>
> use m101
switched to db m101
>
> db.hw1_1.findOne()
{
    "_id" : ObjectId("51e4524ef3651c651a42331c"),
    "answer" : "Hello from MongoDB!"
}
>
