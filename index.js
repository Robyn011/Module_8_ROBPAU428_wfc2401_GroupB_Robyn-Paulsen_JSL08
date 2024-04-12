
// Initialize a variable to hold the singleton instance of the BankBranch class
let bankBranchInstance = null;

// Define the BankBranch class
class BankBranch {
  // Constructor to create a new BankBranch instance
  constructor(branchInfo) {
    // Check if bankBranchInstance is null (no instance exists)
    if (!bankBranchInstance) {
      // If no instance exists, set branchInfo for the new instance and assign it to bankBranchInstance
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }
    // Return the singleton instance
    return bankBranchInstance;
  }

  // Method to retrieve branch information
  getBranchInfo() {
    return this.branchInfo;
  }

  // Other methods related to branch management can be added here
}

// Usage of the BankBranch class

// Create an instance of BankBranch named branchA with branch information "Main Street Branch"
const branchA = new BankBranch("Main Street Branch");
console.log(branchA.getBranchInfo()); // Outputs: Main Street Branch

// Create another instance of BankBranch named branchB with branch information "Second Street Branch"
const branchB = new BankBranch("Second Street Branch");
console.log(branchB.getBranchInfo()); // Still outputs: Main Street Branch, because it's a singleton

// Check if branchA and branchB point to the same instance
console.log(branchA === branchB); // true, both variables point to the same instance
