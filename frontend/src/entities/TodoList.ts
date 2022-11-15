import ItemTodoList from "./ItemTodoList";
import Observable from "./Observable";

export default class TodoList extends Observable {
    items: ItemTodoList[]

    constructor(items?: any) {
        super();
        this.items = [];
        if (items) {
            for (const item of items) {
                this.items.push(new ItemTodoList(item.description, item.done, item.id))
            }
        }
    }

    async addItem(description: string) {
        if (!description.trim()) return;
        if (this.items.some((item: any) => item.description === description)) return;
        if (this.items.filter((item: any) => !item.done).length > 4) return;
        const item = new ItemTodoList(description)
        this.items.push(item);
        this.notify("addItem", item);
    }

    async removeItem(item: any) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notify("removeItem", item)
    }

    async toggleDone(item: any) {
        item.done = !item.done
        this.notify("toggleDone", item)
    }

    getItem(description: string) {
        return this.items.find((item: any) => item.description === description);
    }

    getCompleted() {
        const total = this.items.length;
        if (total === 0) return 0;
        const done = this.items.filter((item: any) => item.done).length;
        return Math.round((done / total) * 100);
    }

}