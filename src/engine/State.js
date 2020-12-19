import Glyph from '../objects/Glyph.js'
import Orb from '../objects/Orb.js'

export default class State {
    constructor(state) {
        this.state = state

        switch (state){
            case 'start':
                this.start();
                break
        }
    }
    
    start() {
        // const testNum = 8;
        // let orbs = new Array(testNum).fill({})
        let orbs = [{name:'Start'},{name:'About'},{name:'Library'}];
        orbs = orbs.map(orb=>new Orb(orb))
        const startGlyph = new Glyph(orbs);
        startGlyph.renderGlyph();
    }
    
}