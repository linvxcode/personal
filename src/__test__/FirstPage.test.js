

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FirstPage from "../FirstPage/FirstPage";

describe('Render Correctly', () => {
    it('render First Page' , () => {
        const {first} = render(<FirstPage />);
        const element = screen.getByText('F');


        // expect(element).toBeInTheDocument();
        fireEvent.click(element)
        expect(first).toMatchSnapshot();
    })

})