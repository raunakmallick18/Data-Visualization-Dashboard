const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
(async() => {
    const c = await MongoClient.connect(uri);
    const db = c.db(process.env.DB_NAME || 'vizdb');
    const col = db.collection('insights');
    const cursor = col.find({});
    while (await cursor.hasNext()) {
        const doc = await cursor.next();
        const updates = {};
        if (doc.end_year === "") updates.end_year = null;
        ['intensity', 'likelihood', 'relevance'].forEach(k => {
            if (typeof doc[k] === 'string' && doc[k].trim() !== '') updates[k] = Number(doc[k]);
        });
        if (Object.keys(updates).length) await col.updateOne({ _id: doc._id }, { $set: updates });
    }
    console.log('Normalization complete');
    process.exit();
})();