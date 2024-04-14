import { render, screen } from "@testing-library/react"
import App from "./App"
import React from "react"

describe("", () => {
    it("renders learn react link", () => {
        render(<App />)
        const linkElement = screen.getByText(/Homepage/i)
        expect(linkElement).toBeInTheDocument()
    })
})

