const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here

    // must be a valid Direction, see Direction.js

		if(direction === Direction.CW) {
			let newMat = [];
			for(let i = 0; i < this.matrix.length; i++) {
				let j = this.matrix.length;
				let newArr = [];
				while(j) newArr.push(this.matrix[--j][i]);
				newMat.push(newArr);
			}
			this.matrix = newMat;
		} else if(direction === Direction.CCW) {
			let newMat = [];
			for(let i = this.matrix.length - 1; i >= 0; i--) {
				let j = 0;
				let newArr = [];
				while(j < this.matrix.length) newArr.push(this.matrix[j++][i]);
				newMat.push(newArr);
			}
			this.matrix = newMat;
		} else {
			throw 'Invalid Direction';
		}

  }
};
