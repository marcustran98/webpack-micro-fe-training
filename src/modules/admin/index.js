import addImage from "../../demo/add-image";
import appButton from "../../components/button/button";
import appHeader from "../../components/header/header";
import testEs6 from "../../demo/es6-imp";

const button = new appButton();
const header = new appHeader();

header.render('App Admin', 'header-class');
button.render('Click One', 'custom-class');
button.render('Click Two');

addImage();
testEs6();