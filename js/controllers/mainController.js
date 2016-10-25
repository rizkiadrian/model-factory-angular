var app = angular.module("myApp",['app.controllers','app.services']);
var moduleCtrl = angular.module("app.controllers",[]);
moduleCtrl.controller("mainController",mainController);


function mainController($scope,cstService){
$scope.PlayerOne = {};
$scope.PlayerTwo = {};
var PlayerOne = new cstService();
var PlayerTwo = new cstService();
PlayerOne.setname('Rizki');
PlayerTwo.setname('adrian');
$scope.PlayerOne.name = PlayerOne.getname();
$scope.PlayerTwo.name = PlayerTwo.getname();
$scope.PlayerOne.blood = PlayerOne.getblood();
$scope.PlayerTwo.blood = PlayerTwo.getblood();
}

var moduleSrvcs = angular.module("app.services",[]);
moduleSrvcs.factory('cstService',cstService);

function cstService(){

	function hero(baseName){
    this.name = baseName;
    this.blood = 200;
    this.setname = function(name){

    	this.name = name;
    };
    this.getname = function (){

    	return this.name;
    };

    this.setblood = function (blood){

    	this.blood = blood;
    };

    this.getblood = function (){
    	return this.blood;
    };

	}
	return hero;


}