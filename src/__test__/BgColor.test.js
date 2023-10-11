import React from "react";
import { render, screen } from "@testing-library/react";
import { BgColor } from "../Layout/BgColor";

describe('BgColor', () => {
    it('Render BgCOlor', () => {
        const {test} = render(<BgColor/>);
        expect(test).toMatchSnapshot();
        const element = screen.getByAltText('img');
        expect(element).toBeInTheDocument();
    })
})