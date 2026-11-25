import mongoDb from "./db.js"
import { ObjectId } from "mongodb";

const sampleListing = {
  _id: new ObjectId(),
  sellerId: new ObjectId("507f1f77bcf86cd799439011"), // Replace with an existing user ID
  name: "Calculus Textbook",
  description: "Lightly used calculus textbook with minimal highlighting.",
  price: 45.00,
  address: "Student Union, Campus",
  category: "Books",
  condition: "good",
  imageUrls: [
    "https://example.com/images/calculus-textbook.jpg"
  ],
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
  modifiedAt: new Date()
};

const init = async () => {
    try {
        await mongoDb.initDb()
        await seedListings()
    } catch(error) {
        console.error("Seeding failed:", error)
    } finally {
        await mongoDb.closeDb()
    }
}

const seedListings = async () => {

    const db = mongoDb.getDb()

    try {
        const existListing = db.collection("listings")

        try {
            await existListing.drop()
        } catch(error) {
            console.error(error)
        }

        console.log("Collection 'listings' dropped successfully");

        const listings = await db.createCollection("listings")
        const listingResult = await listings.insertOne(sampleListing);
        console.log(listingResult.insertedId)
    } catch (error) {
        console.error(error)
    }
}

init()