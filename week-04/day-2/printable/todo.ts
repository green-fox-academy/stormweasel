'use strict';
import { Printable } from './printable';

class Todo implements Printable {
	protected _task: string;
	protected _priority: string;
	protected _isDone: boolean;

	constructor(task: string, priority: string, isDone: boolean) {
		this._task = task;
		this._priority = priority;
		this._isDone = isDone;
	}

	public printAllFields(): void {
		console.log(`Task: ${this._task} | Priority: ${this._priority} | Done: ${this._isDone} `)
	}
}

function initalize(): Todo[] {
	return [
		new Todo('buy milk', 'high', true),
		new Todo('repair laptop', 'high', false),
		new Todo('run a marathon', 'the least important', false)
	]
};

let todos: Todo[] = initalize();

for (let todo of todos) {
	todo.printAllFields();
}