"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* ES6 classes are simple sugar over the prototype-based OO pattern. 
 * Having a single convenient declarative form makes class pattern easier
 * to use and encourages interoperability. Classes support prototype-based
 * inheritance, super calls, instance and static methods & constructors */

var SkinnedMesh = function (_THREE$Mesh) {
	_inherits(SkinnedMesh, _THREE$Mesh);

	function SkinnedMesh(geometry, materials) {
		_classCallCheck(this, SkinnedMesh);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SkinnedMesh).call(this, geometry, materials));

		_this.idMatrix = SkinnedMesh.defaultMatrix();
		_this.bones = [];
		_this.boneMatrices = [];
		//...
		return _this;
	}

	_createClass(SkinnedMesh, [{
		key: "update",
		value: function update(camera) {
			//...
			_get(Object.getPrototypeOf(SkinnedMesh.prototype), "update", this).call(this);
		}
	}, {
		key: "boneCount",
		get: function get() {
			return this.bones.length;
		}
	}, {
		key: "matrixType",
		set: function set(matrixType) {
			this.idMatrix = SkinnedMesh[matrixType]();
		}
	}], [{
		key: "defaultMatrix",
		value: function defaultMatrix() {
			return new THREE.Matrix4();
		}
	}]);

	return SkinnedMesh;
}(THREE.Mesh);