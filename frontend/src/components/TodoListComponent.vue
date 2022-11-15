<script setup lang="ts">
import { ref } from 'vue';

defineProps(["todoList"]);
const description = ref("");

</script>

<template>
    <div>
        <div v-if="todoList.items.length === 0">No results</div>

        <table v-if="todoList.items.length > 0">
            <caption class="completed">{{ todoList.getCompleted() }}%</caption>
            <thead>
                <tr>
                    <th style="text-align: left">Id</th>
                    <th style="text-align: left" colspan="2">Tasks</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in todoList.items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td :style="{ 'text-decoration': item.done ? 'line-through' : '' }">
                        {{ item.description }}
                    </td>
                    <td>
                        <button @click="todoList.toggleDone(item)">done/undone</button>
                        <button @click="todoList.removeItem(item)">remove</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <hr />

        {{ description }}
        <input type="text" v-model="description" @keyup.enter="todoList.addItem(description)" />
    </div>
</template>

