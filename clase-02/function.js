












// Crear una funcion constructora User(con new), que tenga las sig propiedades privadas:
// userId number
// username string
// name string
// surname string
// posts array
// debe contar con un metodo publico para obtener todos los posts del usuario

// var datos = {
// 	userId   	: 1,
// 	username 	: 'walter',
// 	name		: 'Walter',
// 	surname		: 'Vaquero'
// }

// var dataPost = {
// 	titulo 	: 'titulo',
// 	detalle : 'detalle del post'
// }

// function User(datos) {
// 	let userId   	= datos.userId;
// 	let username 	= datos.username;
// 	let name		= datos.name;
// 	let surname		= datos.surname;
// 	this.posts 		= [];

// 	this.mostrarPosts = () => {
// 		console.log(userId);
// 		console.log(username);
// 		console.log(name);
// 		console.log(surname);
// 		// console.log(posts);
// 		this.posts.forEach(function(post){
// 			console.log(post);
// 		});
// 	}

// 	this.addPosts = (post) => {
// 		this.posts.push(post);
// 	}
// }

// User.prototype.getPosts = function(){
// 	// Las variables que use  en el prototipo tienen que ser publicas.
// 	// Por cada
// }


// var usuario = new User(datos);
// usuario.addPosts(dataPost);
// usuario.mostrarPosts();

// -----------------------------------

// const posts = [
//  {
//    userId: "58c2b1633a75ca651ef1cc9d",
//    title: "cupidatat mollit Lorem ex est",
//    summary: "duis sint dolor in reprehenderit nostrud veniam consequat est",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b163be1c3b62aae46134",
//    title: "tempor aute nulla laboris nostrud",
//    summary: "anim veniam et occaecat duis sunt cillum sunt id",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b1637c03205de3e8cf46",
//    title: "dolore consectetur in do eu",
//    summary: "sit aliquip eu id excepteur dolor nulla sunt elit",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b163088464d1826ffb0e",
//    title: "non ad et amet aliqua",
//    summary: "fugiat tempor consectetur ea proident proident tempor Lorem dolor",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b16369a10d974596d6ed",
//    title: "incididunt laborum ullamco officia cillum",
//    summary: "fugiat elit non minim esse aute id eu est",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b163e135daa9b23107a1",
//    title: "in incididunt dolor sint voluptate",
//    summary: "voluptate id adipisicing quis magna cillum exercitation officia laboris",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b16395cf8efe96c03c8e",
//    title: "aliqua occaecat aute aute enim",
//    summary: "et eiusmod dolor dolor consequat nulla irure pariatur anim",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b163048474e666f5d875",
//    title: "ad minim ex sunt ea",
//    summary: "exercitation tempor nostrud commodo ullamco do laboris dolor adipisicing",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b1639d9730b1cfa44591",
//    title: "eu dolor proident anim voluptate",
//    summary: "ex deserunt ipsum cillum qui voluptate Lorem ea nostrud",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b1636fdc9ee9f0fe3765",
//    title: "adipisicing ea consectetur adipisicing anim",
//    summary: "exercitation reprehenderit et mollit aliquip tempor anim ipsum irure",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b163e3330c222f00bfb4",
//    title: "velit cupidatat excepteur amet aliqua",
//    summary: "quis commodo Lorem in cupidatat commodo culpa et in",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b1635ffb495016775b12",
//    title: "fugiat et ut veniam Lorem",
//    summary: "sit sint Lorem nulla aliqua reprehenderit sunt ullamco excepteur",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b163f02975edc6d03526",
//    title: "amet fugiat reprehenderit sit et",
//    summary: "qui incididunt laborum eu est sint voluptate voluptate cillum",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b163f02975edc6d03526",
//    title: "irure Lorem do aliqua qui",
//    summary: "labore irure exercitation do commodo voluptate sint exercitation deserunt",
//    link: "http://placehold.it/32x32"
//  },
//  {
//    userId: "58c2b163f02975edc6d03526",
//    title: "culpa culpa consequat incididunt aliquip",
//    summary: "cupidatat in dolor ut labore et officia pariatur exercitation",
//    link: "http://example.com"
//  }
// ];
//
// function createLatest(cantidad){
// 	return function getLatestFive(posts) {
// 		// console.log(posts.length);
// 		// console.log(cantidad);
// 		return posts.slice(posts.length - cantidad, posts.length);
// 	}
// }
//
// const getLatestFive = createLatest(5);
// const latests = getLatestFive(posts);
// console.log(latests);
// console.log(posts);
//
// console.log( "Largo total de la suma de todos lostitulos : " +
// 	posts.reduce(function(acc,post){
// 		return acc + post.title.length;
// 	},0)
// );
//
// console.log(
// 	posts.map(function(post){
// 		// post.title = 'La Maquinita';
// 		// return post;
// 		return Object.assign({}, post,{title:'La Maquinita'});
// 	})
// );
//
// posts.map(post => Object.assign({},post,{title:'La maquinita'}));
//
//
//
// /// TERMINAR COMO TAREA Y SUBIR A LA PLATAFORMA
//
//
// console.log( "-----> last");
// // console.log(
// // 	posts.map(function(post){
// // 		return posts.reduce(function(acc,post2){
// // 				if(!acc[post.userId]) {
// // 					console.log('a');
// // 					acc[post.userId] = [post2];
// // 				 } else {
// // 					console.log('b');
// // 					acc[post.userId].push(post2);
// // 				}
// // 		 		return acc;
// // 			},[]);
// // 	})
// // );
//
// console.log(
// 	posts.reduce(
// 		function(acc,post2){
// 			if(!acc[post2.userId]) {
// 				// console.log('a');
// 				acc[post2.userId] = [post2];
// 			 } else {
// 				// console.log('b');
// 				acc[post2.userId].push(post2);
// 			}
// 			// console.log(acc);
//  			return acc;
// 		},[])
// );
//
// // ----------------------------
//
// // clases, es correcto ?
// const usernameSym = Symbol('color');
//
// class User {
// 	consrtuctor(datos){
// 		this.userId   		= datos.userId;
// 		this[usernameSym] 	= datos.username;
// 		this.name			= datos.name;
// 		this.surname		= datos.surname;
// 		this.posts 			= [];
// 	}
//
// 	mostrarPosts(){
// 		console.log(userId);
// 		console.log(usernameSym);
// 		console.log(name);
// 		console.log(surname);
// 		// console.log(posts);
// 		this.posts.forEach(function(post){
// 			console.log(post);
// 		});
// 	}
//
// 	addPosts(post) {
// 		this.posts.push(post);
// 	}
// }
//
