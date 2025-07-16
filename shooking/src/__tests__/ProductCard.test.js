import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ProductCard from "../components/ProductCard";
import userEvent from "@testing-library/user-event";

const mockProduct = {
  title: "테스트 상품",
  desc: "테스트 설명",
  price: 10000,
  image: "test-image.jpg",
};

describe("ProductCard Component", () => {
  beforeEach(() => {
    console.log("테스트 시작");
  });

  afterEach(() => {
    console.log("테스트 종료");
  });

  it("상품 정보가 렌더링된다", () => {
    render(<ProductCard product={mockProduct} setCartCount={() => {}} />);

    expect(screen.getByText("테스트 상품")).toBeInTheDocument();
    expect(screen.getByText("테스트 설명")).toBeInTheDocument();
    expect(screen.getByText("10,000원")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "담기" })).toBeInTheDocument();
  });

  it("담기 버튼 클릭 시 담김! 으로 변경되고 setCartCount 호출된다", async () => {
    const user = userEvent.setup();
    const setCartCount = jest.fn();

    render(<ProductCard product={mockProduct} setCartCount={setCartCount} />);

    const button = screen.getByRole("button", { name: "담기" });

    await user.click(button);

    expect(button).toHaveTextContent("담김!");
    expect(setCartCount).toHaveBeenCalledWith(expect.any(Function));
  });
});
