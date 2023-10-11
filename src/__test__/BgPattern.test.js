import React from "react";
import { render, screen } from "@testing-library/react";
import BgPattern from "../Layout/BgPattern";

describe('BgColor', () => {
    it('Render BgCOlor', () => {
        const {test} = render(<BgPattern/>);
        expect(test).toMatchSnapshot();
        const element = screen.getByTestId('bgpattern');
        expect(element).toBeInTheDocument();
    })
})