Jacobs-MacBook-Pro:week-2 jacobward$ mongoimport --db weather --headerline --type csv -c weather < weather_data.csv
connected to: 127.0.0.1
2015-01-18T18:10:21.876+0000 check 9 2964
2015-01-18T18:10:21.877+0000 imported 2963 objects
Jacobs-MacBook-Pro:week-2 jacobward$ mongo
MongoDB shell version: 2.6.5
connecting to: test
Server has startup warnings:
2015-01-18T18:00:15.018+0000 [initandlisten]
2015-01-18T18:00:15.018+0000 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
> use weather
switched to db weather
> db.weather.find( { "Wind Direction": { $gt: 180, $lte: 360 } } ).sort( { "Temperature": 1 } )
{ "_id" : ObjectId("54bbf4e622126f1f40e8719a"), "Day" : 24, "Time" : 153, "State" : "New Mexico", "Airport" : "SAF", "Temperature" : 0, "Humidity" : 87, "Wind Speed" : 5, "Wind Direction" : 260, "Station Pressure" : 23.88, "Sea Level Pressure" : 274 }
...
