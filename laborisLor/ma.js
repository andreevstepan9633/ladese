// Example map (nodeById)
let nodeById = new Map();

// Adding some nodes to the map
nodeById.set("node1", { id: "node1", name: "Node 1", type: "A" });
nodeById.set("node2", { id: "node2", name: "Node 2", type: "B" });

// Retrieving a node by ID
let nodeId = "node1";
var node = nodeById.get(nodeId);

console.log(node); // Outputs: { id: "node1", name: "Node 1", type: "A" }
