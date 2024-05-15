// Assuming 'Network' and 'Connection' are imported or defined elsewhere

// Create a configuration object for easy management and potential reusability
const config = {
  fullnode: Network.mainnet()
};

// Initialize a single connection instance for reuse
const connection = new Connection(config.fullnode);

// Error handling (example)
try {
  // Your logic that uses the connection
} catch (error) {
  console.error('Connection error:', error);
}
