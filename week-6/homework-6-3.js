Which of the following statements are true about choosing and using a shard key:

 - There must be a index on the collection that starts with the shard key.
 - Mongo can not enforce unique indexes on a sharded collection other than the shard key itself.
 - Any update that does not contain the shard key will be sent to all shards. 
