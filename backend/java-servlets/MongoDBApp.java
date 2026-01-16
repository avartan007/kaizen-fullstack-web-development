package MongoDB; 

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import java.util.Scanner;

public class MongoDBApp {

    // MongoDB connection variables
    private static MongoClient mongoClient;
    private static MongoDatabase database;
    private static MongoCollection<Document> collection;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Step 1: Connect to MongoDB server and database
        mongoClient = new MongoClient("localhost", 27017); // default host and port
        database = mongoClient.getDatabase("myDatabase"); // Replace "myDatabase" with your database name
        collection = database.getCollection("userCollection"); // Replace with your collection name

        System.out.println("Connected to MongoDB!");

        // Menu for CRUD operations
        while (true) {
            System.out.println("\nMenu:");
            System.out.println("1. Insert Document");
            System.out.println("2. Display Documents");
            System.out.println("3. Update Document");
            System.out.println("4. Delete Document");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    insertDocument(scanner);
                    break;
                case 2:
                    displayDocuments();
                    break;
                case 3:
                    updateDocument(scanner);
                    break;
                case 4:
                    deleteDocument(scanner);
                    break;
                case 5:
                    System.out.println("Exiting...");
                    mongoClient.close(); // close connection
                    scanner.close();
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    // Method to insert a document
    private static void insertDocument(Scanner scanner) {
        System.out.print("Enter name: ");
        String name = scanner.nextLine();
        System.out.print("Enter age: ");
        int age = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter email: ");
        String email = scanner.nextLine();

        Document doc = new Document("name", name)
                        .append("age", age)
                        .append("email", email);

        collection.insertOne(doc);
        System.out.println("Document inserted!");
    }

    // Method to display all documents in the collection
    private static void displayDocuments() {
        System.out.println("\nDocuments in collection:");
        for (Document doc : collection.find()) {
            System.out.println(doc.toJson());
        }
    }

    // Method to update a document
    private static void updateDocument(Scanner scanner) {
        System.out.print("Enter the name of the user to update: ");
        String name = scanner.nextLine();
        System.out.print("Enter new age: ");
        int newAge = scanner.nextInt();
        scanner.nextLine();

        Document query = new Document("name", name);
        Document update = new Document("$set", new Document("age", newAge));
        collection.updateOne(query, update);
        System.out.println("Document updated!");
    }

    // Method to delete a document
    private static void deleteDocument(Scanner scanner) {
        System.out.print("Enter the name of the user to delete: ");
        String name = scanner.nextLine();

        Document query = new Document("name", name);
        collection.deleteOne(query);
        System.out.println("Document deleted!");
    }
}
