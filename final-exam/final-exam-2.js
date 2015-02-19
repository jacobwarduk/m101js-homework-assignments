db.messages.aggregate( [ { $unwind: "$headers.To" }, { $group: { _id: { "from" : "$headers.From", "to" :"$headers.To" }, "sum": { $sum : 1 } } }, { $sort : { "sum" : 1 } } ] )

susan.mara@enron.com to jeff.dasovich@enron.com
