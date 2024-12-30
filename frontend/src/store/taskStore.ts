import { Task } from '@/types/task';
import {create} from 'zustand'

interface storeType {
    tasks: Task[];
    addtask: (task: Task) => void;
}

const useTaskStore = create<storeType>((set) => ({
    tasks: Task[],
    addTask: (task: Task) => set(state =>({
        tasks: [...state.tasks, task]
    })),

}));