import { Selector } from 'testcafe';

export default class ResultsPage {
    constructor() {
        this.searchBar = Selector('div[class="SDkEP"]')
        this.menuBar = Selector('#hdtb-msb-vis')
        this.signInButton = Selector('#gb_70')
    }
}