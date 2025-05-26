import { render, act, screen } from "@testing-library/react";
import { mockFetch } from "../MockFunctions/mockFetch";
import RestListData from '../MockData/RestListData.json'
import Body from "../../components/Body";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"

mockFetch(RestListData)

jest.mock('../../utils/useOnlineStatus.js', () => jest.fn())

import useOnlineStatus from "../../utils/useOnlineStatus";

describe("Should render Body Component", () => {
  it("Should render Body Component with title", async () => {
    await act(async () => render(
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    ))

    const title = screen.getByText("Biryani");
    expect(title).toBeInTheDocument()
  })

  it("Should render Body Component with description", async() => {
    await act(async() => render(
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    ))

    const description = screen.getByText("Taste these delectable classics, delectable biryanis to make your day.");
    expect(description).toBeInTheDocument()
  })

  it("Should render Top Restaurant Button", async() => {
    await act(async() => render(
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    ))

    const topRestaurantBtn = screen.getByRole("button")
    expect(topRestaurantBtn).toBeInTheDocument()
  })

  it("Should render Search text box", async() => {
    await act(async() => render(
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    ))

    const searchTextBox = screen.getByRole("textbox")
    expect(searchTextBox).toBeInTheDocument()
  })
})

describe("check if internet connection is there or not", () => {

  it("Should render component if online status is false", async () => {
    useOnlineStatus.mockReturnValue(false);
    await act(async () => render(
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    ))
    let offlineContainer = screen.queryByTestId("offline-container")
    expect(offlineContainer).toBeInTheDocument();
  })

  it("Should render component if online status is true", async () => {
    useOnlineStatus.mockReturnValue(true)
    await act(async() => render(
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    ))

    let offlineContainer = screen.queryByTestId("offline-container")
    expect(offlineContainer).not.toBeInTheDocument()
  })
})

describe("Shimmer UI", () => {
  it("Should render shimmer UI when no data is present", async () => {
    mockFetch([]); // Pass empty array to mockFetch
    await act(async () => render(
      <BrowserRouter>
        <Body/>
      </BrowserRouter>
    ));
    const shimmer = screen.getByTestId("shimmer-ui");
    expect(shimmer).toBeInTheDocument();
  });
});
