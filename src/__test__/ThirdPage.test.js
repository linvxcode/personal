

import React from "react";
import { render, screen} from "@testing-library/react";
import ThirdPage from "../Third Page/ThirdPage";

describe('ThirdPage', () => {
    it('Render', () => {
        const {PageRender} = render(<ThirdPage/>)
        expect(PageRender).toMatchSnapshot();
        const element = screen.getByText('Techno');
        expect(element).toBeInTheDocument()
    })
})