function s_artamiel() {
  var div = document.getElementById("skill_artamiel");
  if (div.style.display === "none") {
    div.style.display = "block";
    skill_deva.style.display = "none";
	skill_susano.style.display = "none";
	skill_woosa.style.display = "none";
  } else {
    div.style.display = "none";
  }
}

		function choix_competence_1() {
			var div = document.getElementById("cible_attaque");
			if (div.style.display === "none") {
				div.style.display = "block";

				heal_groupe.style.display = "none";
				cible_heal.style.display = "none";

				attaque_zone.style.display = "none";
				buff_attaque_deva.style.display= "none";

				buff_attaque_susano.style.display= "none";
				attaque_special_monocible.style.display = "none";

				attaque_heal_monocible.style.display = "none";
				buff_groupe.style.display = "none";
				} 
			else {
				div.style.display = "none";
			}			
		
		}

		function choix_competence_heal() {
			var div = document.getElementById("cible_heal");
			if (div.style.display === "none") {
				div.style.display = "block";

				cible_attaque.style.display = "none";
				heal_groupe.style.display = "none";

				attaque_zone.style.display = "none";
				buff_attaque_deva.style.display= "none";

				buff_attaque_susano.style.display= "none";
				attaque_special_monocible.style.display = "none";
				
				attaque_heal_monocible.style.display = "none";
				buff_groupe.style.display = "none";
			} else {
				div.style.display = "none";
			}
		}

		function choix_competence_heal_zone() {
			var div = document.getElementById("heal_groupe");
			if (div.style.display === "none") {
				div.style.display = "block";

				cible_attaque.style.display = "none";
				cible_heal.style.display = "none";

				attaque_zone.style.display = "none";
				buff_attaque_deva.style.display= "none";

				buff_attaque_susano.style.display= "none";
				attaque_special_monocible.style.display = "none";
				
				attaque_heal_monocible.style.display = "none";
				buff_groupe.style.display = "none";
			} else {
				div.style.display = "none";
			}
		}

function s_deva() {
  var div = document.getElementById("skill_deva");
  if (div.style.display === "none") {
    div.style.display = "block";
    skill_artamiel.style.display = "none";
	skill_susano.style.display = "none";
	skill_woosa.style.display = "none";
	attaque_zone.style.display = "none";
	buff_attaque_deva.style.display= "none";
  } else {
    div.style.display = "none";
  }
}

		function choix_competence_zone() {
			var div = document.getElementById("attaque_zone");
			if (div.style.display === "none") {
				div.style.display = "block";

				buff_attaque_deva.style.display= "none";
				cible_attaque.style.display = "none";

				heal_groupe.style.display = "none";
				cible_heal.style.display = "none";

				buff_attaque_susano.style.display= "none";
				attaque_special_monocible.style.display = "none";

				attaque_heal_monocible.style.display = "none";
				buff_groupe.style.display = "none";
			} else {
				div.style.display = "none";
			}
		}

		function choix_competence_buff_deva() {
			var div = document.getElementById("buff_attaque_deva");
			if (div.style.display === "none") {
				div.style.display = "block";

				cible_attaque.style.display = "none";
				attaque_zone.style.display = "none";

				heal_groupe.style.display = "none";
				cible_heal.style.display = "none";

				buff_attaque_susano.style.display= "none";
				attaque_special_monocible.style.display = "none";

				attaque_heal_monocible.style.display = "none";
				buff_groupe.style.display = "none";
			} else {
				div.style.display = "none";
			}
		}

function s_susano() {
  var div = document.getElementById("skill_susano");
  if (div.style.display === "none") {
    div.style.display = "block";
	skill_deva.style.display = "none";
	skill_artamiel.style.display = "none";
	skill_woosa.style.display = "none";
  } else {
    div.style.display = "none";
  }
}

		function choix_competence_monocible_special() {
		  var div = document.getElementById("attaque_special_monocible");
		  if (div.style.display === "none") {
		    div.style.display = "block";

			cible_attaque.style.display = "none";
			buff_attaque_susano.style.display= "none";

			heal_groupe.style.display = "none";
			cible_heal.style.display = "none";

			attaque_zone.style.display = "none";
			buff_attaque_deva.style.display= "none";

			attaque_heal_monocible.style.display = "none";
			buff_groupe.style.display = "none";

		  } else {
		    div.style.display = "none";
		  }
		}

		function choix_competence_buff_susano() {
			var div = document.getElementById("buff_attaque_susano");
			if (div.style.display === "none") {
				div.style.display = "block";

			attaque_special_monocible.style.display = "none";
			cible_attaque.style.display = "none";

			heal_groupe.style.display = "none";
			cible_heal.style.display = "none";

			attaque_zone.style.display = "none";
			buff_attaque_deva.style.display= "none";

			attaque_heal_monocible.style.display = "none";
			buff_groupe.style.display = "none";

			} else {
				div.style.display = "none";
			}
		} 

function s_woosa() {
  var div = document.getElementById("skill_woosa");
  if (div.style.display === "none") {
    div.style.display = "block";
	skill_deva.style.display = "none";
	skill_susano.style.display = "none";
	skill_artamiel.style.display = "none";
	attaque_heal_monocible.style.display = "none";
	buff_groupe.style.display = "none";
  } else {
    div.style.display = "none";
  }
}

		function choix_competence_bouclier() {
			var div = document.getElementById("buff_groupe");
			if (div.style.display === "none") {
				div.style.display = "block";

				attaque_heal_monocible.style.display = "none";
				cible_attaque.style.display = "none";

				heal_groupe.style.display = "none";
				cible_heal.style.display = "none";

				attaque_zone.style.display = "none";
				buff_attaque_deva.style.display= "none";

				buff_attaque_susano.style.display= "none";
				attaque_special_monocible.style.display = "none";
			} else {
				div.style.display = "none";
			}
		} 

		function choix_competence_heal_dmg() {
			var div = document.getElementById("attaque_heal_monocible");
			if (div.style.display === "none") {
				div.style.display = "block";

				buff_groupe.style.display = "none";
				cible_attaque.style.display = "none";

				heal_groupe.style.display = "none";
				cible_heal.style.display = "none";

				attaque_zone.style.display = "none";
				buff_attaque_deva.style.display= "none";

				buff_attaque_susano.style.display= "none";
				attaque_special_monocible.style.display = "none";
				
			} else {
				div.style.display = "none";
			}
		} 
		
function choix_ennemi_1(pv_boss_un){
	var div = document.getElementById("cible_attaque");
}
function choix_ennemi_2(){
	var div = document.getElementById("cible_attaque");
	
}
function choix_ennemi_3(){
	var div = document.getElementById("cible_attaque");
}