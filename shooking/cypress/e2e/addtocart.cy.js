/* eslint-disable no-undef */
describe("장바구니 담기 프로세스 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/shooking");
  });

  it("상품을 장바구니에 담고 장바구니 페이지로 이동한다", () => {
    // 첫 번째 상품 카드 안에 있는 '담기' 버튼 클릭
    cy.get("button").contains("담기").first().click();

    // 버튼 텍스트가 '담김!'으로 바뀌는지 확인
    cy.get("button").contains("담김!").should("be.visible");

    // 헤더에 있는 장바구니 아이콘 클릭
    cy.get("header").within(() => {
      cy.get('[aria-label="cart-icon"]').click();
    });

    // 장바구니 페이지로 이동했는지 확인
    cy.url().should("include", "/cart");

    // 장바구니 안에 상품이 있는지 확인
    cy.contains("브랜드A").should("be.visible");
  });
});
