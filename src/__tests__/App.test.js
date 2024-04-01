import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import App from '../App'

describe("To do list Testing", () => {
    test("form render testing", () => {

        render(<App />)
        const todoInput = screen.getByTestId('todo_input')
        const listItems = screen.queryAllByRole('listitem')
        expect(listItems).toHaveLength(1)
        expect(todoInput).toBeInTheDocument()
    })
    test("submit testing", () => {

        render(<App />)
        const submitButton = screen.getByRole('button', { name: /add/i })
        const todoInput = screen.getByTestId('todo_input')

        fireEvent.submit(submitButton)
        fireEvent.change(todoInput, { target: { value: 'Test Todo' } })
        const listItem = screen.getByText('Test Todo')
        expect(listItem).toBeInTheDocument()

    })
})