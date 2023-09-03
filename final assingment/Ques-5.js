//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, sourceRod, auxiliaryRod, destinationRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${sourceRod} to ${destinationRod}`);
        return;
    }

    towerOfHanoi(n - 1, sourceRod, destinationRod, auxiliaryRod);
    console.log(`Move disk ${n} from ${sourceRod} to ${destinationRod}`);
    towerOfHanoi(n - 1, auxiliaryRod, sourceRod, destinationRod);
}

// Example usage for 4 disks
const numDisks = 4;
towerOfHanoi(numDisks, 'A', 'B', 'C');