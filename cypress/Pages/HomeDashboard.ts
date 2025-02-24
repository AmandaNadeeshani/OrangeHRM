import { LeftPannel } from "./Pannel/leftpannel"
import {Adminpage} from "../Pages/admin"
export class HomeDashboard {
    private sidePannel;
    constructor() {
        this.sidePannel = new LeftPannel();
    }
    private lbl_timeText = 'body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)'

    public step_verifyHeaderText() {
        cy.get(this.lbl_timeText).should('have.text', 'Time at Work');
        return this;
    }

    public step_clickAdminmenu(){
        this.sidePannel.step_clickAdmin();
        return new Adminpage;
    }

}