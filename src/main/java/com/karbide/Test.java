package com.karbide;

import java.util.Arrays;

/**
 * Created by Ashutosh on 29-04-2017.
 */
public class Test {

    public static void main(String[] args) {

        int arr[] = {2, 5,3, 6};
        int m = arr.length;
        int n = 10;
        System.out.println(count(arr,m,n));
    }

    static long count( int S[], int m, int n )
    {
        long[] table = new long[n+1];

        // Initialize all table values as 0
        Arrays.fill(table, 0);   //O(n)

        // Base case (If given value is 0)
        table[0] = 1;

        // Pick all coins one by one and update the table[]
        // values after the index greater than or equal to
        // the value of the picked coin
        for (int i=0; i<m; i++)
            for (int j=S[i]; j<=n; j++)
                table[j] += table[j-S[i]];

        return table[n];
    }
}
