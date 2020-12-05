import { render } from "@testing-library/react";

function SomeComp() {
  return <div>Hello</div>;
}

describe("SomeComp", () => {
  it("renders Hello", () => {
    const { getByText } = render(<SomeComp />);
    expect(getByText("Hello")).toBeInTheDocument();
  });
});
