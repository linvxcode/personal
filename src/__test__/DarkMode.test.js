

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import DarkMode from "../Component/DarkMode";

describe('Darkmode', () => {
    it('Render Darkmode', () => {
        const {Dark} = render(<DarkMode />);
        const text = screen.getByTestId('Darkmode');

        fireEvent.click(text);
        expect(text).toBeInTheDocument();
        expect(Dark).toMatchSnapshot();
    })
})