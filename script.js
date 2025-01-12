//alert("hello world")
let date_de_naissance=prompt("entrez date de naissance:")
let nouvel_annee=prompt("entrez la nouvelle année:")
let age=parseInt(nouvel_annee) - parseInt(date_de_naissance)

if (isNaN(age)) {
	alert("veillez entrez une année valide!")
}else{
	alert("vous avez "+ age + " ans ")
}