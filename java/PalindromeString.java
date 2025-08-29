import java.util.Scanner;

public class PalindromeString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        String reversed = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }

        System.out.println("Palindrome? " + str.equals(reversed));
        sc.close();
    }
}

/* Input: madam
 Output: Palindrome? true
 Time Complexity: O(n²) (because reversed += creates new string each time). */