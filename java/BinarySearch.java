import java.util.Arrays;
import java.util.Scanner;

public class BinarySearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter array size: ");
        int n = sc.nextInt();
        int arr[] = new int[n];

        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();

        Arrays.sort(arr); // ensure sorted array

        System.out.print("Enter element to search: ");
        int key = sc.nextInt();

        int low = 0, high = n - 1, mid, pos = -1;
        while (low <= high) {
            mid = (low + high) / 2;
            if (arr[mid] == key) {
                pos = mid;
                break;
            } else if (arr[mid] < key) low = mid + 1;
            else high = mid - 1;
        }

        if (pos != -1) System.out.println("Element found at index " + pos);
        else System.out.println("Element not found");

        sc.close();
    }
}


/* Input: 5 → 10 20 30 40 50 → 30
 Output: Element found at index 2
Time Complexity: O(log n) */