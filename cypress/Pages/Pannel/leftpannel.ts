export class LeftPannel{

    private leftpanneladmin =':nth-child(1) > .oxd-main-menu-item'

    public step_clickAdmin(){
        cy.get(this.leftpanneladmin).click();
        return this;
    }

}