public class ReverseNumber {
    public static void main(String[] args) {
        int num = 12345;
        int reversed = 0;

        while (num != 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }

        System.out.println("Reversed Number: " + reversed);
    }
}
// Time Complexity: O(d) where d is the number of digits in the number.
// Space Complexity: O(1) as it uses a constant amount of space for variables.