'use strict';
import {Armada} from './armada';

let drake = new Armada('Black Fleet');
let spaniard = new Armada();

drake.fillArmada(3);
spaniard.fillArmada(3);

// drake.getArmadaStatus(); 	// short status
drake.getArmadaStatus(1);			// brief status
// drake.getArmadaStatus(2);  // detailed status
// drake.getArmadaStatus(3);	// complete status
spaniard.getArmadaStatus(1);

drake.war(spaniard);