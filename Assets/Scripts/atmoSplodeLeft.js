#pragma strict


function Update () {
	transform.localRotation = Quaternion.LookRotation(Vector3.left,Vector3.up);
}