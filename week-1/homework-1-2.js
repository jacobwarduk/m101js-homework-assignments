Jacobs-MacBook-Pro:hw1-2 jacobward$ sudo npm install mongodb
Password:

> kerberos@0.0.7 install /Users/jacobward/Downloads/hw1-2/node_modules/mongodb/node_modules/kerberos
> (node-gyp rebuild 2> builderror.log) || (exit 0)

  CXX(target) Release/obj.target/kerberos/lib/kerberos.o
  CXX(target) Release/obj.target/kerberos/lib/worker.o
  CC(target) Release/obj.target/kerberos/lib/kerberosgss.o
  CC(target) Release/obj.target/kerberos/lib/base64.o
  CXX(target) Release/obj.target/kerberos/lib/kerberos_context.o
  SOLINK_MODULE(target) Release/kerberos.node
  SOLINK_MODULE(target) Release/kerberos.node: Finished

> bson@0.2.16 install /Users/jacobward/Downloads/hw1-2/node_modules/mongodb/node_modules/bson
> (node-gyp rebuild 2> builderror.log) || (exit 0)

  CXX(target) Release/obj.target/bson/ext/bson.o
  SOLINK_MODULE(target) Release/bson.node
  SOLINK_MODULE(target) Release/bson.node: Finished
mongodb@1.4.28 node_modules/mongodb
├── readable-stream@1.0.33 (isarray@0.0.1, string_decoder@0.10.31, inherits@2.0.1, core-util-is@1.0.1)
├── kerberos@0.0.7 (nan@1.3.0)
└── bson@0.2.16 (nan@1.3.0)
Jacobs-MacBook-Pro:hw1-2 jacobward$ node app.js
Answer: I like kittens
