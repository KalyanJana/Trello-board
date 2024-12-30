import { Flex, Text } from "@chakra-ui/react";
import {useDraggable } from "@dnd-kit/core";
import React, { useEffect } from "react";
import {CSS} from '@dnd-kit/utilities'

interface DraggableCardProps {
    title: string;
    id: string;
    section: string;
}

export const DraggableCard : React.FC<DraggableCardProps> =({title, id, section}) =>{

    const {isDragging, attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id,
        data: {
            title: title,
            section: section,
            id: id
        }
    })

    useEffect(()=>{
        console.log("draggin status",isDragging)
    }, [isDragging])

    return(
            <Flex 
                ref={setNodeRef}
                {...attributes}
                {...listeners}
                transform={CSS.Translate.toString(transform)}
                backgroundColor='white'
                padding={3}
                margin={2}
                borderRadius={8}
                border='2px solid gay.500'
                boxShadow={"0 0 10 0 rgba(0,0,0,0.1"}
            >
                <Text color={"gray.800"}>{title}</Text>
            </Flex>
    )
}