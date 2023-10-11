import 'intersection-observer'

import React from "react";
import { render, screen } from "@testing-library/react";
import CardLayout from "../Component/CardLayout";

describe('Card Layout', () => {
    it('Render Card Layout' , () => {
        const {Card} = render(<CardLayout />);
        const text = screen.getByTestId('CardLayout');
        expect(text).toBeInTheDocument();
        expect(Card).toMatchSnapshot();

    })
})

