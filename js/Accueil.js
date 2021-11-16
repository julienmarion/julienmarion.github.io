//je vérifie que mon jquery est bien chargé
//équivalent de faire un window.onload
$(document).ready(function(){
	t = new slider("#galerie");
});

//on peut maintenant appeler notre nouvelle fonction
var slider = function(id){
	//this peut être utilisé 
	var self = this;
	
	//création d'une série de variable
	this.div = $(id);
	this.prec = this.div.find(".prec");
	this.suiv = this.div.find(".suiv");
	this.slider = this.div.find(".slider");
	this.largeurCache = this.div.width(); //récupération de la largeur de la div
	
	// ici on vient récupérer toutes les largeurs pour chaque images
	this.largeur = 0;
	this.div.find('a').each(function(){
		self.largeur+= $(this).width();
	});
	
	//calcul du saut chaque fois que l'on appuie sur un bouton
	this.saut = this.largeurCache/4;
	//et on calcul de nombres de clique possible
	this.nbEtapes = Math.ceil(this.largeur/this.saut - this.largeurCache/this.saut);
	
	//cette nouvelle variable va permettre d'incrémenter et décrémenter le
	//positionnement du slider
	this.courant = 0;

	// fonction pour le bouton suivant
	this.suiv.click(function(){
		if (self.courant<=self.nbEtapes) {
			self.courant++;
			self.slider.animate({
				left:-self.courant*self.saut+52
			},1000);
		}
	});

	// fonction pour le bouton precedent
	this.prec.click(function(){
		if (self.courant>0) {
			self.courant--;
			self.slider.animate({
				left:-self.courant*self.saut+52
			},1000);
		}
	});
}