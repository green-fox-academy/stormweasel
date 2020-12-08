'use strict';

// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)

export interface Flyable {
	land(): void;
	fly(): void;
	takeOff(): void;
}