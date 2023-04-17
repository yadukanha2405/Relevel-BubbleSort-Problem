// Question Name: Bubble Sort

// Problem Statement

// Consider an array A of length N. Initially each element of the array is 0.
//You have to handle Q queries on this array :

// In each query you will be given an index 1<=i<=N. You have to replace the ith element of array A by 1.
//Then you have to print the number of phases Bubble Sort will take to sort this array.
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list compares adjacent elements
// and swaps them if they are in the wrong order.

// More precisely after each query, you have to tell the value of X in the below pseudo-code :

// int X=0;

// int arr[] = A;

// for (i = 0; i < N; i++)

// {

// X++;

// Bool swapped = false;

// for (j = 0; j < N-i-1; j++)

// {

// if (arr[j] > arr[j+1])

// {

// swap(&arr[j], &arr[j+1]);

// swapped = true;

// }

// }

// // IF no two elements were swapped by inner loop, then break

// if(swapped == false)

// break;

// }

// Note :

// The queries are not independent from each other.
// The array arr gets sorted after the query, not array A.
// See sample explanation for more clarity.
// The queries may contain the same index multiple times.
// Input Format

// First line contains two space-seperated integers denoting N and Q.
// Next line contains Q space separated integers denoting i in every query.
// Output Format

// Print Q space separated integers denoting the value of X in each query.
// Constraints

// 1<=N<=105
// 1<=Qi<=N
// Sample Input 1

// 4 5

// 1 3 4 2 1

// Sample Output 1

// 2 3 2 1 1

// Explanation of Sample 1

// Initially array A = [0,0,0,0]

// Query 1 :

// A = [1,0,0,0].

// This array takes 2 phases of bubble sort to get sorted.

// Query 2 :

// A = [1,0,1,0]

// This array takes 3 phases of bubble sort to get sorted.

// Query 3 :

// A = [1,0,1,1]

// This array takes 2 phases of bubble sort to get sorted.

// Query 4 :

// A = [1,1,1,1]

// This array takes 1 phase of bubble sort to get sorted.

// Query 5 :

// A = [1,1,1,1]

// This array takes 1 phase of bubble sort to get sorted.
