(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{13:function(o,t,i){"use strict";i.r(t),i.d(t,"splashError",(function(){return n}));i.p,i(2);var n={initialize:function(){this.SplashError()},SplashError:function(){this.showToastShortBottom("This is taking unexepected long time"),window.cordova&&window.cordova.plugins.settings?(this.showToastLongBottom("Please clear app data to run properly."),setTimeout((function(){window.cordova.plugins.settings.open("application_details",(function(){console.log("opened settings")}),(function(){console.log("failed to open settings")}))}),5e3)):console.log("openNativeSettingsTest is not active!")},showToastShortBottom:function(o){window.plugins.toast.showWithOptions({message:o,duration:3500,position:"bottom",styling:{opacity:.75,backgroundColor:"#000000",textColor:"#FFFFFF",textSize:13,cornerRadius:16,horizontalPadding:50,verticalPadding:30}})},showToastLongBottom:function(o){window.plugins.toast.showWithOptions({message:o,duration:5e3,position:"bottom",styling:{opacity:.75,backgroundColor:"#000000",textColor:"#FFFFFF",textSize:13,cornerRadius:16,horizontalPadding:50,verticalPadding:30}})}}}}]);