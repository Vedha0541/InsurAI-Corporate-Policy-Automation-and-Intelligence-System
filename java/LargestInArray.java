import java.util.Scanner;

public class LargestInArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        int arr[] = new int[n];

        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int max = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        System.out.println("Largest element: " + max);
        sc.close();
    }
}


// Java program to find the largest element in an array
//Input: 5 → 4 7 1 9 2
// Output: Largest element: 9
//Time Complexity: O(n)