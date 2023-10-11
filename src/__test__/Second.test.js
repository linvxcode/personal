
import React from "react";
import { render, screen } from "@testing-library/react";
import SecondPage from "../Second Page/SecondPage";

describe('Second Page' , () => {
    it('Render Second Page', () => {
        const {About} = render(<SecondPage />);
        const element = screen.getByText('Me')
        expect(element).toBeInTheDocument();
        expect(About).toMatchSnapshot();
    })
})