describe("회원가입 후 로그인 테스트", () => {
  it("1. 메인화면 접속", () => {
    cy.visit("http://localhost:3000/");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("회원가입", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000");
    cy.contains("로그인").click().click();
    cy.contains("회원가입").click().click();
    cy.get("#\\:r2\\:").clear("testuser@email.com");
    cy.get("#\\:r2\\:").type("testuser@email.com");
    cy.get("#\\:r3\\:").clear("12345123");
    cy.get("#\\:r3\\:").type("12345123");
    cy.get(".MuiButtonBase-root").click();
    /* ==== End Cypress Studio ==== */
  });
});

export {};
