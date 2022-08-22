import { TodosContext } from "../context/TodosContext";
import {useContext} from 'react';

export const useTodosContext = () => {
  const context = useContext(TodosContext)

  if (!context) {
    throw Error("must be inside a provider")
  }

  return context
}