package MongoDb;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import java.awt.event.FocusAdapter;
import org.bson.Document;
import java.util.Scanner;

public class practice{
    static MongoClient mongoClient;
    static MongoCollection<Document> collection;
    static MongoDatabase database;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        mongoClient = new MongoClient("localhost", 27017);
        database = mongoClient.getDatabase("MyDb");
        collection = database.getCollection("records");

        String ans1;
        do { 
            System.out.println("*****Menu*****");
            System.out.println("1. Insert");
            System.out.println("2. Display");
            System.out.println("3. Update");
            System.out.println("4. Delete");
            System.out.println("5. Drop Databse");
            System.out.println("6. Exit");
            System.out.println("Enter your choice: ");

            int choice = sc.nextInt;
            sc.nextLine();

            switch (choice) {
                case 1:
                    insertRecords(sc);
                break;

                case 2:
                    displayRecords();
                break;

                case 3:
                    updateRecords(sc);
                break;

                case 4:
                    deleteRecords(sc);
                break;

                case 5:
                    dropDatabase(sc);
                break;

                case 6:
                    System.out.println("Exiting the program...");
                    System.exit(0);
                break;

                default:
                    System.out.println("Invalid Choice");
            }

            System.out.println("Do you want to continue(y/n): ");
            ans1 = sc.nextLine();

        } while (ans1.equalsIgnoreCase("y"));

        sc.close();
        mongoClient.close();

    }
    
    public static void insertRecords(Scanner sc){
        System.out.println("Enter number of records you want to insert: ");
        int n = sc.nextInt();
        sc.nextLine();

        for(int i = 0; i < n; i++){
            System.out.println("Enter Data" +(i + 1));
            System.out.println("Enter Name");
            String name = sc.nextLine();
            System.out.println("Enter Age");
            int age = sc.nextInt();
            sc.nextLine();
            System.out.println("Enter Mobile Number");
            String mobile = sc.nextLine();

            Document doc = new Document("name", name)
                               .append("age", age)
                               .append("mobile", mobile);
                               
            collection.insertOne(doc);
        }
        System.out.println("Insert Completed");
    }

    public static void displayRecords(){
        for(Document doc : collection.find()){
            System.out.println("Name" + FocusAdapter.getString("name"));
            System.out.println("Age" + doc.getInteger("age"));
            System.out.println("Mobile Number" + doc.getString("mobile"));
            System.out.println("------------------------------------");
        }
    }

    public static void deleteRecords(Scanner sc){
        System.out.println("Enter the name of record you want to delete: ");
        String name = sc.nextLine();

        Dcoument query = new Document("name", name);
        collection.deleteOne(query);
        System.out.println("Delete Operation Successful");
    }

    public static void dropDatabase(Scanner sc){
        System.out.println("Do you want to drop database(y/n): ");
        String drop = sc.nextLine();
        if(drop.equalsIgnoreCase("y")){
            database.drop();
            System.out.println("Database Dropped.");
        } else {
            System.out.println("Database not dropped");
        }
    }

    public static void updateRecords(Scanner sc) {
        System.out.println("Enter the name of record you want to update: ");
        String currentName = sc.nextLine();

        System.out.println("Enter new Name");
        String newName = sc.nextLine();
        System.out.println("Enter new Age");
        int newAge = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter new Mobile Number");
        String newMobile = sc.nextLine();

        Document updateData = new Document ("$set", new Document("name", name)
                           .append("age", age)
                           .append("mobile", mobile), updatedData);
                        
        collection.updateOne(new Document("name", currentName), updateData);
        System.out.println("Update Operation completed");
    
    }

}