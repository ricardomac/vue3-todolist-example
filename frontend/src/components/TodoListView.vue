<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import Observer from "../entities/Observer";
import TodoList from "../entities/TodoList";
import TodoHttpGateway from "../gateways/TodoHttpGateway";
import TodoListComponent from "./TodoListComponent.vue";

const todoList = ref(new TodoList());

const todoGateway = inject("todoGateway") as TodoHttpGateway;

onMounted(async () => {
  const todoLists = await todoGateway.getTodos();
  
  todoLists.register(new Observer("addItem", async function (item: any) {
    await todoGateway.addItem(item)
  }));

  todoLists.register(new Observer("removeItem", async function (item: any) {
    await todoGateway.removeItem(item.id)
  }));

  todoLists.register(new Observer("toggleDone", async function (item: any) {
    await todoGateway.updateItem(item)
  }));

  todoList.value = todoLists;
})


</script>

<template>
  <TodoListComponent :todo-list="todoList" ></TodoListComponent>
</template>

