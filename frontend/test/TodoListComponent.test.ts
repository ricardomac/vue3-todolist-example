import { mount } from "@vue/test-utils";
import TodoListComponent from "../src/components/TodoListComponent.vue"
import TodoList from "../src/entities/TodoList";

function sleep(mili: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, mili)
    });
}

test("Deve testar a tela de todo list", async function () {
    const todoList = new TodoList();
    todoList.addItem("a");
    todoList.addItem("b");
    todoList.addItem("c");
    const wrapper = mount(TodoListComponent, {
        props: {
            todoList
        }
    });
    await sleep(100);
    console.log(wrapper.html());
    expect(wrapper.get(".completed").text()).toBe("0%")
});