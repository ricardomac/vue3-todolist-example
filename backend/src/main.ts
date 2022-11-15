import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());


const todos: any = [
    { id: Math.random().toString(36).slice(2, 7), description: "Estudar Vue3 com composition API", done: true },
    { id: Math.random().toString(36).slice(2, 7), description: "Fazer a prova online", done: false },
]

app.get("/todos", function (req, res) {
    console.log("GET /todos")
    res.json(todos);
})

app.post("/todos", function (req, res) {
    todos.push(req.body);
    res.json(todos)
})

app.put("/todos/:id", function (req, res) {
    const todo = todos.find((todo: any) => todo.id === req.params.id);
    if (todos) {
        todo.done = req.body.done;
    }
    res.json(todos)
})

app.delete("/todos/:id", function (req, res) {
    const todo = todos.find((todo: any) => todo.id === req.params.id);
    if (todos) {
        todos.splice(todos.indexOf(todo), 1)
    }
    res.json(todos)
})


app.listen(3000);