import { render } from "@testing-library/react"
import App from "../pages"

describe("App", () => {
  it("should render correctly App", () => {
    const { container } = render(<App />)
    expect(
      container
    ).toMatchSnapshot()
  })
})