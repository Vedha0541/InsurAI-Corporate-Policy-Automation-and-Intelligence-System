import java.util.Scanner;

public class StringOps {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        System.out.println("Length: " + str.length());
        System.out.println("Uppercase: " + str.toUpperCase());
        System.out.println("Lowercase: " + str.toLowerCase());
        System.out.println("First 3 chars: " + str.substring(0, 3));
        sc.close();
    }
}



//Input: HelloWorld
// Output:

/*Length: 10
Uppercase: HELLOWORLD
Lowercase: helloworld
First 3 chars: Hel


 Time Complexity: O(n) (because most string operations traverse all characters).*/