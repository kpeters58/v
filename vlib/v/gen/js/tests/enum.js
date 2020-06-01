// V_COMMIT_HASH 2943bdc
// V_CURRENT_COMMIT_HASH ad5deef
// Generated by the V compiler

"use strict";

/** @namespace builtin */
const builtin = (function () {
	/**
	 * @function
	 * @param {any} s
	 * @returns {void}
	*/
	function println(s) {
		console.log(s);
	}
	
	/**
	 * @function
	 * @param {any} s
	 * @returns {void}
	*/
	function print(s) {
		process.stdout.write(s);
	}

	/* module exports */
	return {
		println,
		print,
	};
})();

/** @namespace hello */
const hello = (function () {
	/**
	 * @function
	 * @returns {void}
	*/
	function raw_js_log() {
		console.log('hello')
	}
	
	/** @constant {string} */
	const hello = "Hello";
	
	/**
	 * @constructor
	 * @param {{foo?: string}} init
	*/
	function Aaa({ foo = "" }) {
		this.foo = foo
	};
	Aaa.prototype = {
		/** @type {string} */
		foo: "",
		/**
		 * @function
		 * @param {string} s
		 * @returns {void}
		*/
		update(s) {
			const a = this;
			a.foo = s;
		}
	};

	
	/**
	 * @constructor
	 * @param {{}} init
	*/
	function Bbb({  }) {
	};
	Bbb.prototype = {
	};

	/** @enum {number} */
	const Ccc = {
		a: 0,
		b: 5,
		c: 6,
	};
	
	/**
	 * @function
	 * @returns {string}
	*/
	function v_debugger() {
		/** @type {Bbb} */
		const v = new Bbb({});
		return hello;
	}
	
	/**
	 * @function
	 * @returns {string}
	*/
	function excited() {
		return v_debugger() + "!";
	}

	/* module exports */
	return {
		raw_js_log,
		Aaa,
		Ccc,
		v_debugger,
		excited,
	};
})();

/** @namespace main */
const main = (function (hello) {
	/** @enum {number} */
	const Test = {
		foo: 2,
		bar: 5,
		baz: 6,
	};
	
	/* program entry point */
	(function() {
		/** @type {number} */
		let a = hello.Ccc.a;
		a = hello.Ccc.b;
		a = hello.Ccc.c;
		builtin.println(a);
		/** @type {number} */
		let b = Test.foo;
		b = Test.bar;
		builtin.println(b);
	})();

	/* module exports */
	return {};
})(hello);

