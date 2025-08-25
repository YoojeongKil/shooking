/* eslint-disable no-undef */
describe("상품 목록 확인 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/shooking");
  });

  it("동적 로딩으로 추가 상품이 표시되는지 확인", () => {
    // loader 요소가 존재하면 스크롤로 로딩 트리거
    cy.get('[data-testid="loader"]').scrollIntoView();
    cy.wait(600); // loadMore setTimeout 대기

    // 최소 7개 이상의 상품이 렌더링되었는지 확인
    cy.get('[data-testid="product-card"]').should("have.length.greaterThan", 6);
  });

  it("특정 상품 이름이 화면에 표시되는지 확인", () => {
    cy.contains("브랜드A").should("be.visible");
    cy.contains("브랜드B").should("be.visible");
    cy.contains("브랜드C").should("be.visible");
  });
});
