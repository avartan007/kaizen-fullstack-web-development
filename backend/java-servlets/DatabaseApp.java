package MongoDB;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import java.util.Scanner;

public class DatabaseApp {
    static MongoClient mongoClient;
    static MongoDatabase database;
    static MongoCollection<Document> collection;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Connect to MongoDB and select the database and collection
        mongoClient = new MongoClient("localhost", 27017); // Make sure MongoDB is running
        database = mongoClient.getDatabase("myDatabase"); // Replace "myDatabase" with your desired database name
        collection = database.getCollection("records"); // Collection name "records"

        String ans1;
        do {
            System.out.println("Menu:");
            System.out.println("1. Insert Records");
            System.out.println("2. Display Records");
            System.out.println("3. Delete Records");
            System.out.println("4. Drop Database");
            System.out.println("5. Update Records");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            
            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    insertRecords(sc);
                    break;
                case 2:
                    displayRecords();
                    break;
                case 3:
                    deleteRecords(sc);
                    break;
                case 4:
                    dropDatabase(sc);
                    break;
                case 5:
                    updateRecords(sc);
                    break;
                case 6:
                    System.out.println("Exiting the program...");
                    System.exit(0);
                default:
                    System.out.println("Invalid choice");
            }

            System.out.print("Do you want to continue (y/n): ");
            ans1 = sc.nextLine();
        } while (ans1.equalsIgnoreCase("y"));

        sc.close();
        mongoClient.close();
    }

    // Insert records into MongoDB
    public static void insertRecords(Scanner sc) {
        System.out.println("Enter the number of records you want to insert:");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            System.out.println("Enter Data " + (i + 1));
            System.out.print("Enter name: ");
            String name = sc.nextLine();
            System.out.print("Enter age: ");
            int age = sc.nextInt();
            sc.nextLine(); 
            System.out.print("Enter Mobile Number: ");
            String mobile = sc.nextLine();

            // Insert data into MongoDB collection
            Document doc = new Document("name", name)
                            .append("age", age)
                            .append("mobile", mobile);
            collection.insertOne(doc);
        }
        System.out.println("Insert Operation completed.");
    }

    // Display records from MongoDB
    public static void displayRecords() {
        for (Document doc : collection.find()) {
            System.out.println("Name: " + doc.getString("name"));
            System.out.println("Age: " + doc.getInteger("age"));
            System.out.println("Mobile Number: " + doc.getString("mobile"));
            System.out.println("-----------------------");
        }
    }

    // Delete records from MongoDB
    public static void deleteRecords(Scanner sc) {
        System.out.print("Enter the name of the record you want to delete: ");
        String name = sc.nextLine();

        // Delete the record based on name
        Document query = new Document("name", name);
        collection.deleteOne(query);
        System.out.println("Delete Operation completed.");
    }

    // Drop the database
    public static void dropDatabase(Scanner sc) {
        System.out.print("Do you want to drop the database (y/n): ");
        String drop = sc.nextLine();
        if (drop.equalsIgnoreCase("y")) {
            database.drop();
            System.out.println("Database dropped.");
        } else {
            System.out.println("Database not dropped.");
        }
    }

    // Update records in MongoDB
    public static void updateRecords(Scanner sc) {
        System.out.print("Enter the name of the record you want to update: ");
        String currentName = sc.nextLine();

        System.out.print("Enter new name: ");
        String newName = sc.nextLine();
        System.out.print("Enter new age: ");
        int newAge = sc.nextInt();
        sc.nextLine();
        System.out.print("Enter new Mobile Number: ");
        String newMobile = sc.nextLine();

    // Update operation with name, age, and mobile
    Document updatedData = new Document("$set", new Document("name", newName)
                                                 .append("age", newAge)
                                                 .append("mobile", newMobile));
    collection.updateOne(new Document("name", currentName), updatedData);
    System.out.println("Update Operation completed.");
}

}
