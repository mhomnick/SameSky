#pragma strict

var target : Transform;

function Update () {
    transform.position = Vector3.Lerp(transform.position, target.position, Time.deltaTime * 2);
}
