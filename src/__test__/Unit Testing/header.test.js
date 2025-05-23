import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

jest.mock("../../utils/useOnlineStatus.js", () => jest.fn())

import useOnlineStatus from "../../utils/useOnlineStatus";

const renderComponents = () => {
  return render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  )
}

describe("should load all header static contents Component", () => {
  beforeEach(() => {
    renderComponents()
  })
  
  it("should load logo image in the component", async () => {
    const logoImg = await screen.findByRole("img")
    expect(logoImg).toBeInTheDocument()
  })

  it("should load Online Status Text", () =>{
    const onLineStatusText = screen.getByText(/Online Status/i)
    expect(onLineStatusText).toBeInTheDocument()
  })

  it("should load Home Text", () => {
    const homeText = screen.getByText(/home/i)
    expect(homeText).toBeInTheDocument()
  })

  it("should load about text", () => {
    const aboutText = screen.getByText(/about/i);
    expect(aboutText).toBeInTheDocument()
  })

  it("should load contact us text", () => {
    const contactText = screen.getByText(/contact us/i);
    expect(contactText).toBeInTheDocument();
  })

  it("should load cart text in the document", () => {
    const cartText = screen.getByText(/cart/i)
    expect(cartText).toBeInTheDocument()
  })

  it("should load login text in the document", () => {
    const loginText = screen.getByText(/login/i)
    expect(loginText).toBeInTheDocument();
  })
})

describe("should check functionality of onClick", () => {
  beforeEach(() => {
    renderComponents()
  })
  it("should load logout after click on login Button", () => {
    let loginbutton = screen.getByRole("button", { value: "Login"})
    fireEvent.click(loginbutton)
    let logOutButton = screen.getByRole("button", { value: "Logout"})
    expect(logOutButton).toBeInTheDocument()
  })

  it("should load login after click on logout Button", () => {
    let loginbutton = screen.getByRole("button", { value: "Login"})
    fireEvent.click(loginbutton);
    let logoutButton = screen.getByRole("button", { value: "Logout"})
    fireEvent.click(logoutButton)
    expect(loginbutton).toBeInTheDocument()
  })
})

describe("should check Headed Online Status", () => {
  it("should load ✅ when online", () => {
    useOnlineStatus.mockReturnValue(true)
    renderComponents();
    let networkStatus = screen.getByText(/Online Status: ✅/i)
    expect(networkStatus).toBeInTheDocument()
  })

  it("should load 🔴 when offline", () => {
    useOnlineStatus.mockReturnValue(false);
    renderComponents();
    let networkStatus = screen.getByText(/Online Status: 🔴/i)
    expect(networkStatus).toBeInTheDocument()
  })
})



