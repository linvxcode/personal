import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "../Layout/Text";

// test('Render Corectly', () => {
//     render(<Text />);
//     const element = screen.getByText('Welcome To My Portofolio');
//     expect(element).toBeInTheDocument();
// })

describe('Text', () => {
    it('Render Text', () => {
        const {Texttes} = render(<Text />);
        expect(Texttes).toMatchSnapshot();
        const element = screen.getByText('Welcome To My Portofolio')
        expect(element).toBeInTheDocument();
    })
}) 