
function ajaxCall(obj){
	const req = new XMLHttpRequest();

	req.onreadystatechange = () => {
		if (req.readyState == 4 && req.status == 200) {
			obj.onSuccessResponse(req);
		}
	};

	req.open(obj.method, obj.url , obj.async);
	req.setRequestHeader("Content-type", obj.contentType);
	req.setRequestHeader(obj.headerKey, obj.headerValue);

	if (obj.send) {
		req.send(obj.send);
	} else {
		req.send();
	}
}
