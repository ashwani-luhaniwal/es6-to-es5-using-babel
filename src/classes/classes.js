
/* ES6 classes are simple sugar over the prototype-based OO pattern. 
 * Having a single convenient declarative form makes class pattern easier
 * to use and encourages interoperability. Classes support prototype-based
 * inheritance, super calls, instance and static methods & constructors */

class SkinnedMesh extends THREE.Mesh {
	constructor(geometry, materials) {
		super(geometry, materials);

		this.idMatrix = SkinnedMesh.defaultMatrix();
		this.bones = [];
		this.boneMatrices = [];
		//...
	}
	update(camera) {
		//...
		super.update();
	}
	get boneCount() {
		return this.bones.length;
	}
	set matrixType(matrixType) {
		this.idMatrix = SkinnedMesh[matrixType]();
	}
	static defaultMatrix() {
		return new THREE.Matrix4();
	}
}