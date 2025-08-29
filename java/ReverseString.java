import java.util.Scanner;

public class ReverseString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        StringBuilder sb = new StringBuilder(str);
        String reversed = sb.reverse().toString();

        System.out.println("Reversed String: " + reversed);
        sc.close();
    }
}


/* Input: hello
 Output: Reversed String: olleh
Time Complexity: O(n) */