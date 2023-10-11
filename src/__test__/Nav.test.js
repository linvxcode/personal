

import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "../Navbar/Nav";

describe('Nav', () => {
    it('Render Nav', () => {
        const {Navbar} = render(<Nav />);
        expect(Navbar).toMatchSnapshot();
        const text = screen.getByText('M Fahlevi');
        expect(text).toBeInTheDocument();
    })
})