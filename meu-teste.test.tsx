import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

function MeuComponente(): JSX.Element {
    return <div>Rodrigo</div>;
}

test("Verificar visibilidade do componente", () => {
    const { getByText } = render(<MeuComponente />);
    expect(getByText("Rodrigo")).toBeVisible();
});
