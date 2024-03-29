/*
Theme Name: 	hat
Theme URI: 		http://hat.fokus.fraunhofer.de/wordpress/
Description: 	HbbTV Application Toolkit
Version: 		0.1
Author: 		Fraunhofer Fokus
Author URI: 	http://www.fokus.fraunhofer.de/go/fame
Tags: 			hbbtv
*/

if (typeof(KeyEvent)!='undefined') {
  if (typeof(KeyEvent.VK_LEFT)!='undefined') {
    var VK_LEFT = KeyEvent.VK_LEFT;
    var VK_UP = KeyEvent.VK_UP;
    var VK_RIGHT = KeyEvent.VK_RIGHT;
    var VK_DOWN = KeyEvent.VK_DOWN;
  }
  if (typeof(KeyEvent.VK_ENTER)!='undefined') {
    var VK_ENTER = KeyEvent.VK_ENTER;
  }
  if (typeof(KeyEvent.VK_RED)!='undefined') {
    var VK_RED = KeyEvent.VK_RED;
    var VK_GREEN = KeyEvent.VK_GREEN;
    var VK_YELLOW = KeyEvent.VK_YELLOW;
    var VK_BLUE = KeyEvent.VK_BLUE;
  }
  if (typeof(KeyEvent.VK_PLAY)!='undefined') {
    var VK_PLAY = KeyEvent.VK_PLAY;
    var VK_PAUSE = KeyEvent.VK_PAUSE;
    var VK_STOP = KeyEvent.VK_STOP;
    var VK_TOBEGIN = KeyEvent.VK_TOBEGIN;
    var VK_TOEND = KeyEvent.VK_TOEND;
    var VK_SEEKBACKWARD = KeyEvent.VK_SEEKBACKWARD;
    var VK_SEEKFORWARD = KeyEvent.VK_SEEKFORWARD;
  }
  if (typeof(KeyEvent.VK_BACK)!='undefined') {
    var VK_BACK = KeyEvent.VK_BACK;
  }
  if (typeof(KeyEvent.VK_0)!='undefined') {
    var VK_0 = KeyEvent.VK_0;
    var VK_1 = KeyEvent.VK_1;
    var VK_2 = KeyEvent.VK_2;
    var VK_3 = KeyEvent.VK_3;
    var VK_4 = KeyEvent.VK_4;
    var VK_5 = KeyEvent.VK_5;
    var VK_6 = KeyEvent.VK_6;
    var VK_7 = KeyEvent.VK_7;
    var VK_8 = KeyEvent.VK_8;
    var VK_9 = KeyEvent.VK_9;
  }
}
if (typeof(VK_LEFT)=='undefined') {
  var VK_LEFT = 132;
  var VK_UP = 130;
  var VK_RIGHT = 133;
  var VK_DOWN = 131;
}
if (typeof(VK_ENTER)=='undefined') {
  var VK_ENTER = 13;
}
if (typeof(VK_RED)=='undefined') {
  var VK_RED = 403;
  var VK_GREEN = 404;
  var VK_YELLOW = 502;
  var VK_BLUE = 406;
}
if (typeof(VK_PLAY)=='undefined') {
  var VK_PLAY = 19;
  var VK_PAUSE = 19;
  var VK_STOP = 413;
  var VK_TOBEGIN = 423;
  var VK_TOEND = 425;
  var VK_SEEKBACKWARD = 412;
  var VK_SEEKFORWARD = 408;
}
if (typeof(VK_BACK)=='undefined') {
  var VK_BACK = 461;
}
if (typeof(VK_0)=='undefined') {
  var VK_0 = 48;
  var VK_1 = 49;
  var VK_2 = 50;
  var VK_3 = 51;
  var VK_4 = 52;
  var VK_5 = 53;
  var VK_6 = 54;
  var VK_7 = 55;
  var VK_8 = 56;
  var VK_9 = 57;
}