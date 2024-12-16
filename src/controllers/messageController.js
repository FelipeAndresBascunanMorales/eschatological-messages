export const getTodaysMessage = async (req, res) => { 
 try { 
 const message = await Message.getTodaysMessage(); 
 if (!message) {
 return res.status(404).json({ error: 'No message found for today.' }); 
} 
 res.status(200).json({ message }); 
 } catch (error) { 
 console.error("Error retrieving today's message:", error); 
 res.status(500).json({ error: 'Internal server error' }); 
 } 
};