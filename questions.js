// DSA Questions Database
const dsaQuestions = [
    {
        id: 1,
        category: "Arrays",
        difficulty: "easy",
        question: "What is the time complexity of accessing an element in an array by index?",
        options: [
            "O(1) - Constant time",
            "O(n) - Linear time", 
            "O(log n) - Logarithmic time",
            "O(n²) - Quadratic time"
        ],
        correctAnswer: 0,
        explanation: "Array elements can be accessed directly using their index in constant time O(1) because arrays store elements in contiguous memory locations."
    },
    {
        id: 2,
        category: "Linked Lists",
        difficulty: "medium",
        question: "What is the main advantage of a linked list over an array?",
        options: [
            "Faster access to elements",
            "Better cache locality",
            "Dynamic size allocation",
            "Lower memory usage"
        ],
        correctAnswer: 2,
        explanation: "Linked lists can grow or shrink during runtime, unlike arrays which have a fixed size. This dynamic allocation is their main advantage."
    },
    {
        id: 3,
        category: "Stacks",
        difficulty: "easy",
        question: "Which principle does a stack follow?",
        options: [
            "FIFO (First In, First Out)",
            "LIFO (Last In, First Out)",
            "Random Access",
            "Priority Based"
        ],
        correctAnswer: 1,
        explanation: "Stacks follow the LIFO principle where the last element added is the first one to be removed, like a stack of plates."
    },
    {
        id: 4,
        category: "Queues",
        difficulty: "easy",
        question: "In a queue, where are elements added and removed?",
        options: [
            "Both at the front",
            "Both at the rear",
            "Added at rear, removed from front",
            "Added at front, removed from rear"
        ],
        correctAnswer: 2,
        explanation: "Queues follow FIFO principle: elements are added (enqueued) at the rear and removed (dequeued) from the front."
    },
    {
        id: 5,
        category: "Trees",
        difficulty: "medium",
        question: "What is the maximum number of nodes at level 'h' in a binary tree?",
        options: [
            "h",
            "2^h",
            "2^(h-1)",
            "2^(h+1)"
        ],
        correctAnswer: 1,
        explanation: "At level h (starting from 0), a binary tree can have at most 2^h nodes. Level 0 has 1 node, level 1 has 2 nodes, level 2 has 4 nodes, etc."
    },
    {
        id: 6,
        category: "Sorting",
        difficulty: "medium",
        question: "Which sorting algorithm has the best average-case time complexity?",
        code: `// Consider these sorting algorithms:
// 1. Bubble Sort
// 2. Quick Sort  
// 3. Merge Sort
// 4. Selection Sort`,
        options: [
            "Bubble Sort - O(n²)",
            "Quick Sort - O(n log n)",
            "Both Quick Sort and Merge Sort - O(n log n)",
            "Selection Sort - O(n²)"
        ],
        correctAnswer: 2,
        explanation: "Both Quick Sort and Merge Sort have O(n log n) average-case time complexity, which is optimal for comparison-based sorting algorithms."
    },
    {
        id: 7,
        category: "Hash Tables",
        difficulty: "medium",
        question: "What is the average time complexity for search, insert, and delete operations in a hash table?",
        options: [
            "O(1) for all operations",
            "O(log n) for all operations",
            "O(n) for all operations",
            "O(1) for search, O(n) for insert and delete"
        ],
        correctAnswer: 0,
        explanation: "Hash tables provide O(1) average time complexity for search, insert, and delete operations due to direct indexing via hash functions."
    },
    {
        id: 8,
        category: "Graphs",
        difficulty: "hard",
        question: "Which algorithm is used to find the shortest path between all pairs of vertices in a weighted graph?",
        options: [
            "Dijkstra's Algorithm",
            "Bellman-Ford Algorithm",
            "Floyd-Warshall Algorithm",
            "Kruskal's Algorithm"
        ],
        correctAnswer: 2,
        explanation: "Floyd-Warshall algorithm finds shortest paths between all pairs of vertices in O(V³) time, while Dijkstra's finds shortest path from a single source."
    },
    {
        id: 9,
        category: "Dynamic Programming",
        difficulty: "hard",
        question: "What are the two main properties required for a problem to be solved using Dynamic Programming?",
        options: [
            "Optimal Substructure and Greedy Choice",
            "Optimal Substructure and Overlapping Subproblems",
            "Overlapping Subproblems and Divide and Conquer",
            "Memoization and Tabulation"
        ],
        correctAnswer: 1,
        explanation: "Dynamic Programming requires: 1) Optimal Substructure (optimal solution contains optimal solutions to subproblems) and 2) Overlapping Subproblems (same subproblems are solved multiple times)."
    },
    {
        id: 10,
        category: "Binary Search",
        difficulty: "medium",
        question: "What is the time complexity of binary search on a sorted array?",
        code: `function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
        options: [
            "O(1) - Constant time",
            "O(log n) - Logarithmic time",
            "O(n) - Linear time",
            "O(n log n) - Linearithmic time"
        ],
        correctAnswer: 1,
        explanation: "Binary search eliminates half of the search space in each iteration, resulting in O(log n) time complexity. This is why the array must be sorted."
    },
    {
        id: 11,
        category: "Heaps",
        difficulty: "medium",
        question: "In a max heap, what is the relationship between a parent node and its children?",
        options: [
            "Parent is smaller than both children",
            "Parent is larger than both children",
            "Parent is equal to both children",
            "No specific relationship"
        ],
        correctAnswer: 1,
        explanation: "In a max heap, every parent node has a value greater than or equal to its children. This property ensures the maximum element is always at the root."
    },
    {
        id: 12,
        category: "Recursion",
        difficulty: "easy",
        question: "What are the two essential components of a recursive function?",
        options: [
            "Loop and condition",
            "Base case and recursive case",
            "Input and output",
            "Function call and return"
        ],
        correctAnswer: 1,
        explanation: "Every recursive function needs: 1) Base case (stopping condition) to prevent infinite recursion, and 2) Recursive case where the function calls itself with modified parameters."
    },
    {
        id: 13,
        category: "Big O Notation",
        difficulty: "medium",
        question: "Which of the following time complexities is the most efficient?",
        options: [
            "O(n²)",
            "O(n log n)",
            "O(2^n)",
            "O(log n)"
        ],
        correctAnswer: 3,
        explanation: "O(log n) is the most efficient among these options. The order from most to least efficient is: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n) < O(n!)."
    },
    {
        id: 14,
        category: "Trees",
        difficulty: "hard",
        question: "What is the time complexity of searching in a balanced Binary Search Tree?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        correctAnswer: 1,
        explanation: "In a balanced BST, the height is O(log n), so search operations take O(log n) time. In an unbalanced BST (worst case), it could degrade to O(n)."
    },
    {
        id: 15,
        category: "Algorithms",
        difficulty: "hard",
        question: "Which approach does the Merge Sort algorithm use?",
        code: `function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}`,
        options: [
            "Greedy Algorithm",
            "Dynamic Programming",
            "Divide and Conquer",
            "Backtracking"
        ],
        correctAnswer: 2,
        explanation: "Merge Sort uses Divide and Conquer: it divides the array into smaller subarrays, recursively sorts them, and then merges the sorted subarrays back together."
    }
];

// Shuffle function to randomize questions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get random questions for quiz
function getRandomQuestions(count = 10) {
    const shuffled = shuffleArray(dsaQuestions);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}