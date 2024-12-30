import { Flex } from "@chakra-ui/react";
import "./App.css";
import { DndContext, rectIntersection } from "@dnd-kit/core";
import { DroppableSection } from "./components/atoms/DroppableSection";
import { useState } from "react";
import { InsertTask } from "./components/atoms/InsertTask";

interface Card {
  id: String;
  title: String;
}

function App() {
  const [todoItems, setTodoItems] = useState<Card[]>([
    { id: "1", title: "Buy Milk" },
    { id: "2", title: "Buy Eggs" },
    { id: "3", title: "Buy Bread" },
    { id: "4", title: "Buy Butter" },
  ]);
  const [onGoingItems, setOnGoingItems] = useState<Card[]>([
    { id: "5", title: "Buy Milk" },
    { id: "6", title: "Buy Eggs" },
    { id: "7", title: "Buy Bread" },
    { id: "8", title: "Buy Butter" },
  ]);
  const [doneItems, setDoneItems] = useState<Card[]>([
    { id: "9", title: "Buy Milk" },
    { id: "10", title: "Buy Eggs" },
    { id: "11", title: "Buy Bread" },
    { id: "12", title: "Buy Butter" },
  ]);

  const addToSection = (section: string, card: Card) => {
    switch (section) {
      case "ToDo":
        setTodoItems([...todoItems, card]);
        break;
      case "OnGoing":
        setOnGoingItems([...onGoingItems, card]);
        break;
      case "Done":
        setDoneItems([...doneItems, card]);
        break;
      default:
        break;
    }
  };

  const removeFromSection = (section: string, cardId: string) => {
    switch (section) {
      case "ToDo":
        setTodoItems(todoItems.filter((item) => item.id !== cardId));
        break;
      case "OnGoing":
        setOnGoingItems(onGoingItems.filter((item) => item.id !== cardId));
        break;
      case "Done":
        setDoneItems(doneItems.filter((item) => item.id !== cardId));
        break;
      default:
        break;
    }
  };

  const dragEndHandler = (e) => {
    console.log("drag end", e);
    const currentSection = e.over?.id || ""; //wgere have to ended the drag

    const cardId = e.active?.data?.current?.id; //which card is beign dragged
    const cardTitle = e.active?.data?.current?.title; //which card is beign dragged
    const prevSection = e.active?.data?.current?.section; //where was the card before dragging

    if (currentSection !== prevSection) {
      console.log(
        `Moved ${cardTitle} from ${prevSection} to ${currentSection}`
      );
      removeFromSection(prevSection, cardId);
      addToSection(currentSection.toString(), { id: cardId, title: cardTitle });
    }
  };

  function onAddTodo(title: string, section: string, id: string){
    addToSection(section, {id: id, title})
  }

  return (
    <DndContext
      onDragEnd={dragEndHandler}
      collisionDetection={rectIntersection}
    >
      <InsertTask onAddTask={onAddTodo}/>
      <Flex flexDirection="column">
        <Flex flex={3}>
          <DroppableSection title="ToDo" items={todoItems} />
          <DroppableSection title="OnGoing" items={onGoingItems} />
          <DroppableSection title="Done" items={doneItems} />
        </Flex>
      </Flex>
    </DndContext>
  );
}

export default App;
