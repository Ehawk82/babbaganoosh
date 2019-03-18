var myUI;

myUI = {
	/*return functions*/
	createEle: (x) => { return document.createElement(x) },
	/*inititialization and startup*/
	init: () => {
        var babbaganoosh = myUI.createEle("button");

        babbaganoosh.innerHTML = "BUTTON";

	    dvContain.append(babbaganoosh);
	}
	/*main program*/
};

window.onload = () => {
	myUI.init();
};