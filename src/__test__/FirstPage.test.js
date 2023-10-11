
import 'intersection-observer'
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import First from "../FirstPage/First";

describe('Render Correctly', () => {
    it('render First Page' , () => {
        const {first} = render(<First />);
        const element = screen.getByText('Frontend Developer');
        const hover = screen.getByTestId("hover test");


        // expect(element).toBeInTheDocument();
        fireEvent.mouseEnter(hover);
        fireEvent.mouseLeave(screen.getByTestId('hover test'));
        expect(element).toBeInTheDocument();
        expect(first).toMatchSnapshot();
    })

})