import java.util.Scanner;

public class InventoryManagementSystem {


    static String[] inventory = {"Item A - 10 pcs", "Item B - 5 pcs", "Item C - 3 pcs"};

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Please log in as administrator.");
        System.out.print("Username: ");
        String username = input.nextLine();
        System.out.print("Password: ");
        String password = input.nextLine();

        if (isAdmin(username, password)) {
            System.out.println("Login successful.");
            // display current inventory
            displayInventory();

            // input new supply
            System.out.println("\nAdd new supply:");
            System.out.print("Item name: ");
            String itemName = input.nextLine();
            System.out.print("Quantity: ");
            int quantity = input.nextInt();
            input.nextLine(); // clear input buffer

            // update inventory
            updateInventory(itemName, quantity);

            // notify administrator
            System.out.println("\nNew supply added. Inventory has been updated.");
        } else {
            System.out.println("Invalid credentials. Access denied.");
        }
    }

    // check if user is admin
    public static boolean isAdmin(String username, String password) {
        // replace with actual admin credentials
        String adminUsername = "admin";
        String adminPassword = "password123";
        return username.equals(adminUsername) && password.equals(adminPassword);
    }

    // display current inventory
    public static void displayInventory() {
        System.out.println("\nCurrent inventory:");
        for (String item : inventory) {
            System.out.println(item);
        }
    }

    // update inventory with new supply
    public static void updateInventory(String itemName, int quantity) {
        boolean itemExists = false;
        for (int i = 0; i < inventory.length; i++) {
            String[] parts = inventory[i].split(" - ");
            if (parts[0].equals(itemName)) {
                int currentQuantity = Integer.parseInt(parts[1].split(" ")[0]);
                inventory[i] = itemName + " - " + (currentQuantity + quantity) + " pcs";
                itemExists = true;
                break;
            }
        }
        if (!itemExists) {
            String newItem = itemName + " - " + quantity + " pcs";
            String[] newInventory = new String[inventory.length + 1];
            for (int i = 0; i < inventory.length; i++) {
                newInventory[i] = inventory[i];
            }
            newInventory[inventory.length] = newItem;
            inventory = newInventory;
        }
    }
}

