import addImage from "../../demo/add-image";
import appButton from "../../components/button/button";
import appHeader from "../../components/header/header";
import testEs6 from "../../demo/es6-imp";

const button = new appButton();
const header = new appHeader();

header.render('User works', 'header-class');
button.render('Click One', 'custom-class');
button.render('Click Two');

addImage();
testEs6();


if (process.env.NODE_ENV === 'production') {
    console.log("%c Production mode", "color:blue");
} else {
    console.log("%c Development mode", "color:blue");
}