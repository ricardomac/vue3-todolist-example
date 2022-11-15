import { mount } from "@vue/test-utils";
import TodoListView from "../src/components/TodoListView.vue"
import TodoMemoryGateway from "../src/gateways/TodoMemoryGateway";

function sleep(mili: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, mili)
    });
}

test("Deve testar a tela de todo list", async function () {
    const todoGateway = new TodoMemoryGateway();
    const wrapper = mount(TodoListView, {
        global: {
            provide: {
                todoGateway
            }
        }
    });
    await sleep(100);
    console.log(wrapper.html());
    expect(wrapper.get(".completed").text()).toBe("50%")
});