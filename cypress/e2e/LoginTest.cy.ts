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
    cy.get("#\\:r3\\:").clear("12341234");
    cy.get("#\\:r3\\:").type("12341234");
    cy.get(".MuiButtonBase-root").click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".MuiButtonBase-root").click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get("img").click();
    cy.get("#\\:r6\\:").clear("1");
    cy.get("#\\:r6\\:").type("1번 리스트입니다.");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get("img").click();
    cy.get("#\\:r7\\:").clear("2");
    cy.get("#\\:r7\\:").type("2번 리스트입니다.");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get("img").click();
    cy.get("#\\:r8\\:").clear("3");
    cy.get("#\\:r8\\:").type("3번 리스트입니다.");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:r9\\:").clear("1");
    cy.get("#\\:r9\\:").type("1번 1의 제목");
    cy.get("#\\:ra\\:").click();
    cy.get("#\\:ra\\:").type("1번 1의 내용");

    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:rb\\:").clear("2");
    cy.get("#\\:rb\\:").type("1번 2의 제목");
    cy.get("#\\:rc\\:").click();
    cy.get("#\\:rc\\:").type("1번 2의 내용");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.contains("2번 리스트").click();

    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:rd\\:").clear("2");
    cy.get("#\\:rd\\:").type("2번 1의 제목");
    cy.get("#\\:re\\:").click();
    cy.get("#\\:re\\:").type("2번 1의 내용");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:rf\\:").clear("2");
    cy.get("#\\:rf\\:").type("2번 2의 제목");
    cy.get("#\\:rg\\:").click();
    cy.get("#\\:rg\\:").type("2번 2의 내용");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.contains("3번 리스트").click();

    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:rh\\:").clear("3");
    cy.get("#\\:rh\\:").type("3번 1의 제목");
    cy.get("#\\:ri\\:").click();
    cy.get("#\\:ri\\:").type("3번 1의 내용");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:rj\\:").clear("3");
    cy.get("#\\:rj\\:").type("3번 2의 제목");
    cy.get("#\\:rk\\:").click();
    cy.get("#\\:rk\\:").type("3번 2의 내용");
    cy.get(".MuiButton-outlinedPrimary").click();
    /* ==== End Cypress Studio ==== */
  });
});

export {};
