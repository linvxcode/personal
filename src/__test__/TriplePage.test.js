

import React from "react";
import { render, fireEvent,screen} from "@testing-library/react";
import TriplePage from "../Trple Page/TriplePage";

test('Render Triple Page', () => {
    render(<TriplePage />);
    const linkText = "Traditional Instruments";
    const linkElement = screen.getByText(linkText);
  
    fireEvent.click(linkElement);


    
    // fireEvent.mouseEnter(Hover)
    // expect(Hover).not.toHaveClass("hovered");
  
    // Assert that the browser navigated to the expected URL
    // expect(window.location.href).toBe("https://portofolio-fahlevi.vercel.app/");
})