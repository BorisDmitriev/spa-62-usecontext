import "@testing-library/jest-dom";
import { fireEvent, getByDisplayValue, render } from "@testing-library/react";
import React, { useContext } from "react";
import TodoApp from "../src/components/TodoApp";
import TodoInput from "../src/components/TodoInput";
import TodoProvider from "../src/context/TodoProvider";

describe("TodoApp", () => {
    it("should add and remove tasks using useContext", () => {
        const { getByRole, getByText, queryByText } = render(
            <TodoProvider>
                <TodoApp />
            </TodoProvider>
        );

        const input = getByRole("textbox");
        const addButton = getByRole("button");

        // Füge eine neue Aufgabe hinzu
        fireEvent.change(input, { target: { value: "Testaufgabe" } });
        fireEvent.click(addButton);
        expect(queryByText("Testaufgabe")).toBeInTheDocument();

        // Entferne eine Aufgabe aus der Liste
        const removeButton = getByText("Entfernen");
        fireEvent.click(removeButton);
        expect(queryByText("Testaufgabe")).not.toBeInTheDocument();
    });

    it("should update the task count using useContext", () => {
        const { getByRole, getByText } = render(
            <TodoProvider>
                <TodoApp />
            </TodoProvider>
        );

        expect(getByText(/0/i)).toBeInTheDocument();

        // Füge eine neue Aufgabe hinzu
        const input = getByRole("textbox");
        const addButton = getByRole("button");
        fireEvent.change(input, { target: { value: "Testaufgabe" } });
        fireEvent.click(addButton);

        expect(getByText(/1/i)).toBeInTheDocument();
    });

    it("should update the input field and clear it after adding a task using useContext", () => {
        const { getByRole } = render(
            <TodoProvider>
                <TodoInput />
            </TodoProvider>
        );

        const input = getByRole("textbox");
        const addButton = getByRole("button");

        // Füge eine neue Aufgabe hinzu
        fireEvent.change(input, { target: { value: "Testaufgabe" } });
        fireEvent.click(addButton);

        expect(input).toHaveValue("");
    });
});
