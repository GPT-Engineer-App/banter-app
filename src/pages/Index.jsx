import React, { useState } from "react";
import { Box, Container, VStack, HStack, Input, Button, Text, Avatar, IconButton } from "@chakra-ui/react";
import { FaPaperPlane, FaSmile } from "react-icons/fa";

const messagesData = [
  { id: 1, sender: "Alice", content: "Hi there!", avatar: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNjg3NjM5MHww&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 2, sender: "Bob", content: "Hello!", avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTY4NzYzOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080' },
];

const Index = () => {
  const [messages, setMessages] = useState(messagesData);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      sender: "You",
      content: newMessage,
      avatar: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b3VyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE2ODc2NDAxfDA&ixlib=rb-4.0.3&q=80&w=1080',
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="70vh" overflowY="auto" border="1px solid #ccc" borderRadius="md" p={4}>
          {messages.map((msg) => (
            <HStack key={msg.id} alignItems="flex-start" spacing={3} mb={3}>
              <Avatar src={msg.avatar} />
              <VStack alignItems="flex-start" spacing={1}>
                <Text fontWeight="bold">{msg.sender}</Text>
                <Text>{msg.content}</Text>
              </VStack>
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input placeholder="Type a message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
          <IconButton aria-label="Emoji" icon={<FaSmile />} />
          <Button colorScheme="teal" onClick={handleSendMessage} rightIcon={<FaPaperPlane />}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
