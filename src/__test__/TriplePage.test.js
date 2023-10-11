
import 'intersection-observer'
import React from "react";
import { render, fireEvent,screen} from "@testing-library/react";
import TriplePage from "../Trple Page/TriplePage";

describe('triple', () => {
    it('Render', () => {
        const {triple} = render(<TriplePage />);
        // const hover = screen.getAllByTestId('hovertest');

        // fireEvent.mouseEnter(hover);

        expect(triple).toMatchSnapshot();
    })
})