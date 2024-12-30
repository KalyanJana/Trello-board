import { Input, Text, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";

interface InsertTaskProps {
  onAddTask: (title: string, section: string, id: string) => void;
}

export const InsertTask: React.FC<InsertTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>("");

  return (
    <Flex
      backgroundColor={"gray.800"}
      padding={4}
      margin={3}
      borderRadius={8}
      border={"2px solid gray.500"}
      boxShadow={"0 0 10px 0 rgba(0,0,0,0.1"}
      align={"center"}
    >
      <Text
        fontSize="xl"
        flex={1}
        fontWeight="bold"
        color="white"
        textAlign={"center"}
      >
        Add new task
      </Text>
      <Input
        placeholder="Task title"
        backgroundColor="white"
        color={"gray.800"}
        flex={4}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="filled"
      />
      <Button
        flex={1}
        backgroundColor="green.400"
        color="white"
        marginLeft={4}
        onClick={() => {
          onAddTask(title, "ToDo", Math.random().toString());
          setTitle("");
        }}
      >
        Add Task
      </Button>
    </Flex>
  );
};
