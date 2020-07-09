import React, { useState, useEffect } from 'react';

import { SectionPosters, Banner } from '~/common/components';
import { ContainerScroll } from '~/common/styles/screens/home';
import { request } from '~/services/request';
import { movieByGenre } from '~/helpers/formaters';
import { API_KEY, LANG } from '~/config/consts';

const Home = () => {
	const [moviesByGenres, setMoviesByGenres] = useState({
		Animação: [
			{
				id: 330457,
				overview:
					'De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma visita à floresta dos elementos, onde um acontecimento inesperado teria provocado a separação dos habitantes da cidade com os quatro elementos fundamentais: ar, fogo, terra e água. Esta revelação ajudará Elsa a compreender a origem de seus poderes.',
				poster_path: '/g6n7TdQSgozArIM0okXTjjCM9Np.jpg',
				release_date: '2019-11-20',
				title: 'Frozen II'
			}
		],
		Aventura: [
			{
				id: 8619,
				overview:
					'Jack Aubrey (Russell Crowe) é o capitão do H.M.S. Surprise, um dos principais navios de guerra da marinha britânica. Com seu país em guerra contra a França de Napoleão Bonaparte, Aubrey é atacado por um navio inimigo mais poderoso, que fere boa parte de sua tripulação e ainda danifica o navio. Aubrey então se sente dividido entre cumprir seu dever e tentar derrotar o inimigo ou retornar para cuidar dos feridos.',
				poster_path: '/3v61179ciXMpmyiJZmpqyCoV5us.jpg',
				release_date: '2003-11-14',
				title: 'Mestre dos Mares - O Lado Mais Distante do Mundo'
			},
			{
				id: 475430,
				overview:
					'Artemis Fowl é um garoto de 12 anos extremamente inteligente que usa sua capacidade para roubar. Um dia, ele descobre um local mágico chamado mundo das fadas. Decidido a roubar a fortuna local, ele sequestra um elfo e cobra um resgate para libertá-lo. Só que logo a Liga de Elite da Polícia parte em seu encalço.',
				poster_path: '/avb3THg1FTxBc79h2QECsuwjujY.jpg',
				release_date: '2020-06-12',
				title: 'Artemis Fowl - O Mundo Secreto'
			},
			{
				id: 671,
				overview:
					'Harry Potter é um garoto órfão de 10 anos que vive infeliz com seus tios, os Dursley. Até que, repentinamente, ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente Harry é impedido de ler a carta por seu tio Válter, mas logo ele recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega em sua casa para levá-lo até a escola. A partir de então Harry passa a conhecer um mundo mágico que jamais imaginara, vivendo as mais diversas aventuras com seus mais novos amigos, Rony Weasley e Hermione Granger.',
				poster_path: '/qnw9610ojLT0jU3lMSZOAFttt1e.jpg',
				release_date: '2001-11-16',
				title: 'Harry Potter e a Pedra Filosofal'
			},
			{
				id: 72545,
				overview:
					'Sean capta uma mensagem codificada vinda de uma ilha misteriosa localizada em um ponto onde não deveria haver nada. Um lugar com formas de vida estranhas, montanhas de ouro, vulcões mortais e diversos segredos surpreendentes. Sem conseguir impedi-lo de ir, o novo padrasto de Sean parte com ele na viagem. Junto ao piloto do helicóptero e de sua linda e determinada filha, eles partem em busca da ilha para resgatar seu único habitante e escapar antes que ondas sísmicas levem a ilha para o fundo do oceano, enterrando seus tesouros para sempre.',
				poster_path: '/yfRONMxtQMGgxV8nv2BgIYYzm2O.jpg',
				release_date: '2012-01-19',
				title: 'Viagem 2: A Ilha Misteriosa'
			},
			{
				id: 122917,
				overview:
					'O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. Bard consegue derrotá-lo, mas, rapidamente, sem a ameaça do dragão, inicia-se uma batalha pelo controle de Erebor e sua riqueza. Os anões, liderados por Thorin, adentram a montanha e estão dispostos a impedir a entrada de elfos, anões e orcs. Bilbo Bolseiro e Gandalf tentam impedir a guerra.',
				poster_path: '/q9eDVkrj2moWTZp8PZiPccjs5Vo.jpg',
				release_date: '2014-12-10',
				title: 'O Hobbit: A Batalha dos Cinco Exércitos'
			},
			{
				id: 299536,
				overview:
					'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.',
				poster_path: '/89QTZmn34iwXYeCpVxhC9UrT8sX.jpg',
				release_date: '2018-04-25',
				title: 'Vingadores: Guerra Infinita'
			},
			{
				id: 330457,
				overview:
					'De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma visita à floresta dos elementos, onde um acontecimento inesperado teria provocado a separação dos habitantes da cidade com os quatro elementos fundamentais: ar, fogo, terra e água. Esta revelação ajudará Elsa a compreender a origem de seus poderes.',
				poster_path: '/g6n7TdQSgozArIM0okXTjjCM9Np.jpg',
				release_date: '2019-11-20',
				title: 'Frozen II'
			},
			{
				id: 157336,
				overview:
					'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.',
				poster_path: '/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg',
				release_date: '2014-11-05',
				title: 'Interestelar'
			},
			{
				id: 27205,
				overview:
					'Um ladrão que rouba segredos corporativos por meio do uso da tecnologia de compartilhamento de sonhos, recebe a tarefa inversa de plantar uma ideia na mente de um Diretor Executivo.',
				poster_path: '/o1SB1gHCmEEURs8P6dfmSC9O3iu.jpg',
				release_date: '2010-07-15',
				title: 'A Origem'
			},
			{
				id: 181812,
				overview:
					'Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia. Treinando para ser uma completa Jedi, Rey (Daisy Ridley) ainda se encontra em conflito com seu passado e futuro, mas teme pelas respostas que pode conseguir a partir de sua complexa ligação com Kylo Ren (Adam Driver), que também se encontra em conflito pela Força.',
				poster_path: '/lFx2i2pg1BoaD7grcpGDyHM1eML.jpg',
				release_date: '2019-12-18',
				title: 'Star Wars: A Ascensão Skywalker'
			}
		],
		Ação: [
			{
				id: 531876,
				overview:
					'Uma pequena equipe de soldados dos EUA batalham contra centenas de combatentes do Talibã no Afeganistão.',
				poster_path: '/goEW6QqoFxNI2pfbpVqmXj2WXwd.jpg',
				release_date: '2020-06-24',
				title: 'The Outpost'
			},
			{
				id: 454626,
				overview:
					'Baseado na franquia global de videogames de sucesso da Sega, Sonic: O Filme conta a história do ouriço mais rápido do mundo enquanto ele abraça sua nova casa na Terra. Nesta comédia de aventura de ação ao vivo, Sonic e seu novo melhor amigo se unem para defender o planeta do gênio do mal Dr. Robotnik e seus planos para dominar o mundo.',
				poster_path: '/Kt9iFdTu5TbAm7tNfc876mrWU.jpg',
				release_date: '2020-02-12',
				title: 'Sonic: O Filme'
			},
			{
				id: 72545,
				overview:
					'Sean capta uma mensagem codificada vinda de uma ilha misteriosa localizada em um ponto onde não deveria haver nada. Um lugar com formas de vida estranhas, montanhas de ouro, vulcões mortais e diversos segredos surpreendentes. Sem conseguir impedi-lo de ir, o novo padrasto de Sean parte com ele na viagem. Junto ao piloto do helicóptero e de sua linda e determinada filha, eles partem em busca da ilha para resgatar seu único habitante e escapar antes que ondas sísmicas levem a ilha para o fundo do oceano, enterrando seus tesouros para sempre.',
				poster_path: '/yfRONMxtQMGgxV8nv2BgIYYzm2O.jpg',
				release_date: '2012-01-19',
				title: 'Viagem 2: A Ilha Misteriosa'
			},
			{
				id: 122917,
				overview:
					'O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. Bard consegue derrotá-lo, mas, rapidamente, sem a ameaça do dragão, inicia-se uma batalha pelo controle de Erebor e sua riqueza. Os anões, liderados por Thorin, adentram a montanha e estão dispostos a impedir a entrada de elfos, anões e orcs. Bilbo Bolseiro e Gandalf tentam impedir a guerra.',
				poster_path: '/q9eDVkrj2moWTZp8PZiPccjs5Vo.jpg',
				release_date: '2014-12-10',
				title: 'O Hobbit: A Batalha dos Cinco Exércitos'
			},
			{
				id: 299536,
				overview:
					'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.',
				poster_path: '/89QTZmn34iwXYeCpVxhC9UrT8sX.jpg',
				release_date: '2018-04-25',
				title: 'Vingadores: Guerra Infinita'
			},
			{
				id: 495764,
				overview:
					'Arlequina, Canário Negro, Caçadora, Cassandra Cain e a policial Renée Montoya formam um grupo inusitado de heroínas. Quando um perigoso criminoso começa a causar destruição em Gotham, as cinco mulheres precisam se unir para defender a cidade.',
				poster_path: '/A50Ngq9lh9aCTGHC6kttrppHNoF.jpg',
				release_date: '2020-02-05',
				title: 'Aves de Rapina: Arlequina e sua Emancipação Fantabulosa'
			},
			{
				id: 27205,
				overview:
					'Um ladrão que rouba segredos corporativos por meio do uso da tecnologia de compartilhamento de sonhos, recebe a tarefa inversa de plantar uma ideia na mente de um Diretor Executivo.',
				poster_path: '/o1SB1gHCmEEURs8P6dfmSC9O3iu.jpg',
				release_date: '2010-07-15',
				title: 'A Origem'
			},
			{
				id: 155,
				overview:
					'Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.',
				poster_path: '/iGZX91hIqM9Uu0KGhd4MUaJ0Rtm.jpg',
				release_date: '2008-07-16',
				title: 'Batman: O Cavaleiro das Trevas'
			},
			{
				id: 181812,
				overview:
					'Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia. Treinando para ser uma completa Jedi, Rey (Daisy Ridley) ainda se encontra em conflito com seu passado e futuro, mas teme pelas respostas que pode conseguir a partir de sua complexa ligação com Kylo Ren (Adam Driver), que também se encontra em conflito pela Força.',
				poster_path: '/lFx2i2pg1BoaD7grcpGDyHM1eML.jpg',
				release_date: '2019-12-18',
				title: 'Star Wars: A Ascensão Skywalker'
			}
		],
		Comédia: [
			{
				id: 706510,
				overview:
					'Acompanhada pelos amigos, uma jovem apavorada parte para o México para tentar apagar um e-mail desaforado que enviou ao novo namorado.',
				poster_path: '/hoUzSMxGu4Bm73EvH6B3iceFwW8.jpg',
				release_date: '2020-07-03',
				title: 'Desperados'
			},
			{
				id: 454626,
				overview:
					'Baseado na franquia global de videogames de sucesso da Sega, Sonic: O Filme conta a história do ouriço mais rápido do mundo enquanto ele abraça sua nova casa na Terra. Nesta comédia de aventura de ação ao vivo, Sonic e seu novo melhor amigo se unem para defender o planeta do gênio do mal Dr. Robotnik e seus planos para dominar o mundo.',
				poster_path: '/Kt9iFdTu5TbAm7tNfc876mrWU.jpg',
				release_date: '2020-02-12',
				title: 'Sonic: O Filme'
			},
			{
				id: 531454,
				overview:
					'O sonho deles é participar da maior competição de música do mundo. Mas intrigas de rivais e acidentes no palco vão testar a relação entre esses dois.',
				poster_path: '/7fMJ8ktszaWOyRs5sWntcpssFG.jpg',
				release_date: '2020-06-26',
				title: 'Festival Eurovision da Canção: A Saga de Sigrit e Lars'
			},
			{
				id: 496243,
				overview:
					'Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.',
				poster_path: '/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg',
				release_date: '2019-05-30',
				title: 'Parasita'
			},
			{
				id: 495764,
				overview:
					'Arlequina, Canário Negro, Caçadora, Cassandra Cain e a policial Renée Montoya formam um grupo inusitado de heroínas. Quando um perigoso criminoso começa a causar destruição em Gotham, as cinco mulheres precisam se unir para defender a cidade.',
				poster_path: '/A50Ngq9lh9aCTGHC6kttrppHNoF.jpg',
				release_date: '2020-02-05',
				title: 'Aves de Rapina: Arlequina e sua Emancipação Fantabulosa'
			}
		],
		Crime: [
			{
				id: 475557,
				overview:
					'Arthur Fleck trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais. Após ser demitido, Fleck reage mal à gozação de três homens em pleno metrô e os mata. Os assassinatos iniciam um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.',
				poster_path: '/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg',
				release_date: '2019-10-02',
				title: 'Coringa'
			},
			{
				id: 495764,
				overview:
					'Arlequina, Canário Negro, Caçadora, Cassandra Cain e a policial Renée Montoya formam um grupo inusitado de heroínas. Quando um perigoso criminoso começa a causar destruição em Gotham, as cinco mulheres precisam se unir para defender a cidade.',
				poster_path: '/A50Ngq9lh9aCTGHC6kttrppHNoF.jpg',
				release_date: '2020-02-05',
				title: 'Aves de Rapina: Arlequina e sua Emancipação Fantabulosa'
			},
			{
				id: 155,
				overview:
					'Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.',
				poster_path: '/iGZX91hIqM9Uu0KGhd4MUaJ0Rtm.jpg',
				release_date: '2008-07-16',
				title: 'Batman: O Cavaleiro das Trevas'
			}
		],
		Drama: [
			{
				id: 8619,
				overview:
					'Jack Aubrey (Russell Crowe) é o capitão do H.M.S. Surprise, um dos principais navios de guerra da marinha britânica. Com seu país em guerra contra a França de Napoleão Bonaparte, Aubrey é atacado por um navio inimigo mais poderoso, que fere boa parte de sua tripulação e ainda danifica o navio. Aubrey então se sente dividido entre cumprir seu dever e tentar derrotar o inimigo ou retornar para cuidar dos feridos.',
				poster_path: '/3v61179ciXMpmyiJZmpqyCoV5us.jpg',
				release_date: '2003-11-14',
				title: 'Mestre dos Mares - O Lado Mais Distante do Mundo'
			},
			{
				id: 556574,
				overview:
					'Adaptação do musical da Brodway sobre a vida de um dos principais fundadores da América e primeiro secretário do Tesouro, Alexander Hamilton. A sinopse oificial ainda não foi divulgada.',
				poster_path: '/h1B7tW0t399VDjAcWJh8m87469b.jpg',
				release_date: '2020-07-03',
				title: 'Hamilton'
			},
			{
				id: 419704,
				overview:
					'Roy McBride é um engenheiro espacial, portador de um leve grau de autismo, que decide empreender a maior jornada de sua vida: viajar para o espaço, cruzar a galáxia e tentar descobrir o que aconteceu com seu pai, um astronauta que se perdeu há vinte anos atrás no caminho para Netuno.',
				poster_path: '/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg',
				release_date: '2019-09-17',
				title: 'Ad Astra - Rumo às Estrelas'
			},
			{
				id: 531876,
				overview:
					'Uma pequena equipe de soldados dos EUA batalham contra centenas de combatentes do Talibã no Afeganistão.',
				poster_path: '/goEW6QqoFxNI2pfbpVqmXj2WXwd.jpg',
				release_date: '2020-06-24',
				title: 'The Outpost'
			},
			{
				id: 496243,
				overview:
					'Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.',
				poster_path: '/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg',
				release_date: '2019-05-30',
				title: 'Parasita'
			},
			{
				id: 475557,
				overview:
					'Arthur Fleck trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais. Após ser demitido, Fleck reage mal à gozação de três homens em pleno metrô e os mata. Os assassinatos iniciam um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.',
				poster_path: '/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg',
				release_date: '2019-10-02',
				title: 'Coringa'
			},
			{
				id: 495764,
				overview:
					'Arlequina, Canário Negro, Caçadora, Cassandra Cain e a policial Renée Montoya formam um grupo inusitado de heroínas. Quando um perigoso criminoso começa a causar destruição em Gotham, as cinco mulheres precisam se unir para defender a cidade.',
				poster_path: '/A50Ngq9lh9aCTGHC6kttrppHNoF.jpg',
				release_date: '2020-02-05',
				title: 'Aves de Rapina: Arlequina e sua Emancipação Fantabulosa'
			},
			{
				id: 157336,
				overview:
					'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.',
				poster_path: '/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg',
				release_date: '2014-11-05',
				title: 'Interestelar'
			},
			{
				id: 155,
				overview:
					'Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.',
				poster_path: '/iGZX91hIqM9Uu0KGhd4MUaJ0Rtm.jpg',
				release_date: '2008-07-16',
				title: 'Batman: O Cavaleiro das Trevas'
			}
		],
		Família: [
			{
				id: 475430,
				overview:
					'Artemis Fowl é um garoto de 12 anos extremamente inteligente que usa sua capacidade para roubar. Um dia, ele descobre um local mágico chamado mundo das fadas. Decidido a roubar a fortuna local, ele sequestra um elfo e cobra um resgate para libertá-lo. Só que logo a Liga de Elite da Polícia parte em seu encalço.',
				poster_path: '/avb3THg1FTxBc79h2QECsuwjujY.jpg',
				release_date: '2020-06-12',
				title: 'Artemis Fowl - O Mundo Secreto'
			},
			{
				id: 454626,
				overview:
					'Baseado na franquia global de videogames de sucesso da Sega, Sonic: O Filme conta a história do ouriço mais rápido do mundo enquanto ele abraça sua nova casa na Terra. Nesta comédia de aventura de ação ao vivo, Sonic e seu novo melhor amigo se unem para defender o planeta do gênio do mal Dr. Robotnik e seus planos para dominar o mundo.',
				poster_path: '/Kt9iFdTu5TbAm7tNfc876mrWU.jpg',
				release_date: '2020-02-12',
				title: 'Sonic: O Filme'
			},
			{
				id: 671,
				overview:
					'Harry Potter é um garoto órfão de 10 anos que vive infeliz com seus tios, os Dursley. Até que, repentinamente, ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente Harry é impedido de ler a carta por seu tio Válter, mas logo ele recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega em sua casa para levá-lo até a escola. A partir de então Harry passa a conhecer um mundo mágico que jamais imaginara, vivendo as mais diversas aventuras com seus mais novos amigos, Rony Weasley e Hermione Granger.',
				poster_path: '/qnw9610ojLT0jU3lMSZOAFttt1e.jpg',
				release_date: '2001-11-16',
				title: 'Harry Potter e a Pedra Filosofal'
			},
			{
				id: 330457,
				overview:
					'De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma visita à floresta dos elementos, onde um acontecimento inesperado teria provocado a separação dos habitantes da cidade com os quatro elementos fundamentais: ar, fogo, terra e água. Esta revelação ajudará Elsa a compreender a origem de seus poderes.',
				poster_path: '/g6n7TdQSgozArIM0okXTjjCM9Np.jpg',
				release_date: '2019-11-20',
				title: 'Frozen II'
			}
		],
		Fantasia: [
			{
				id: 475430,
				overview:
					'Artemis Fowl é um garoto de 12 anos extremamente inteligente que usa sua capacidade para roubar. Um dia, ele descobre um local mágico chamado mundo das fadas. Decidido a roubar a fortuna local, ele sequestra um elfo e cobra um resgate para libertá-lo. Só que logo a Liga de Elite da Polícia parte em seu encalço.',
				poster_path: '/avb3THg1FTxBc79h2QECsuwjujY.jpg',
				release_date: '2020-06-12',
				title: 'Artemis Fowl - O Mundo Secreto'
			},
			{
				id: 671,
				overview:
					'Harry Potter é um garoto órfão de 10 anos que vive infeliz com seus tios, os Dursley. Até que, repentinamente, ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente Harry é impedido de ler a carta por seu tio Válter, mas logo ele recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega em sua casa para levá-lo até a escola. A partir de então Harry passa a conhecer um mundo mágico que jamais imaginara, vivendo as mais diversas aventuras com seus mais novos amigos, Rony Weasley e Hermione Granger.',
				poster_path: '/qnw9610ojLT0jU3lMSZOAFttt1e.jpg',
				release_date: '2001-11-16',
				title: 'Harry Potter e a Pedra Filosofal'
			},
			{
				id: 122917,
				overview:
					'O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. Bard consegue derrotá-lo, mas, rapidamente, sem a ameaça do dragão, inicia-se uma batalha pelo controle de Erebor e sua riqueza. Os anões, liderados por Thorin, adentram a montanha e estão dispostos a impedir a entrada de elfos, anões e orcs. Bilbo Bolseiro e Gandalf tentam impedir a guerra.',
				poster_path: '/q9eDVkrj2moWTZp8PZiPccjs5Vo.jpg',
				release_date: '2014-12-10',
				title: 'O Hobbit: A Batalha dos Cinco Exércitos'
			}
		],
		'Ficção científica': [
			{
				id: 419704,
				overview:
					'Roy McBride é um engenheiro espacial, portador de um leve grau de autismo, que decide empreender a maior jornada de sua vida: viajar para o espaço, cruzar a galáxia e tentar descobrir o que aconteceu com seu pai, um astronauta que se perdeu há vinte anos atrás no caminho para Netuno.',
				poster_path: '/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg',
				release_date: '2019-09-17',
				title: 'Ad Astra - Rumo às Estrelas'
			},
			{
				id: 475430,
				overview:
					'Artemis Fowl é um garoto de 12 anos extremamente inteligente que usa sua capacidade para roubar. Um dia, ele descobre um local mágico chamado mundo das fadas. Decidido a roubar a fortuna local, ele sequestra um elfo e cobra um resgate para libertá-lo. Só que logo a Liga de Elite da Polícia parte em seu encalço.',
				poster_path: '/avb3THg1FTxBc79h2QECsuwjujY.jpg',
				release_date: '2020-06-12',
				title: 'Artemis Fowl - O Mundo Secreto'
			},
			{
				id: 454626,
				overview:
					'Baseado na franquia global de videogames de sucesso da Sega, Sonic: O Filme conta a história do ouriço mais rápido do mundo enquanto ele abraça sua nova casa na Terra. Nesta comédia de aventura de ação ao vivo, Sonic e seu novo melhor amigo se unem para defender o planeta do gênio do mal Dr. Robotnik e seus planos para dominar o mundo.',
				poster_path: '/Kt9iFdTu5TbAm7tNfc876mrWU.jpg',
				release_date: '2020-02-12',
				title: 'Sonic: O Filme'
			},
			{
				id: 72545,
				overview:
					'Sean capta uma mensagem codificada vinda de uma ilha misteriosa localizada em um ponto onde não deveria haver nada. Um lugar com formas de vida estranhas, montanhas de ouro, vulcões mortais e diversos segredos surpreendentes. Sem conseguir impedi-lo de ir, o novo padrasto de Sean parte com ele na viagem. Junto ao piloto do helicóptero e de sua linda e determinada filha, eles partem em busca da ilha para resgatar seu único habitante e escapar antes que ondas sísmicas levem a ilha para o fundo do oceano, enterrando seus tesouros para sempre.',
				poster_path: '/yfRONMxtQMGgxV8nv2BgIYYzm2O.jpg',
				release_date: '2012-01-19',
				title: 'Viagem 2: A Ilha Misteriosa'
			},
			{
				id: 299536,
				overview:
					'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.',
				poster_path: '/89QTZmn34iwXYeCpVxhC9UrT8sX.jpg',
				release_date: '2018-04-25',
				title: 'Vingadores: Guerra Infinita'
			},
			{
				id: 157336,
				overview:
					'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.',
				poster_path: '/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg',
				release_date: '2014-11-05',
				title: 'Interestelar'
			},
			{
				id: 27205,
				overview:
					'Um ladrão que rouba segredos corporativos por meio do uso da tecnologia de compartilhamento de sonhos, recebe a tarefa inversa de plantar uma ideia na mente de um Diretor Executivo.',
				poster_path: '/o1SB1gHCmEEURs8P6dfmSC9O3iu.jpg',
				release_date: '2010-07-15',
				title: 'A Origem'
			},
			{
				id: 181812,
				overview:
					'Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia. Treinando para ser uma completa Jedi, Rey (Daisy Ridley) ainda se encontra em conflito com seu passado e futuro, mas teme pelas respostas que pode conseguir a partir de sua complexa ligação com Kylo Ren (Adam Driver), que também se encontra em conflito pela Força.',
				poster_path: '/lFx2i2pg1BoaD7grcpGDyHM1eML.jpg',
				release_date: '2019-12-18',
				title: 'Star Wars: A Ascensão Skywalker'
			}
		],
		Guerra: [
			{
				id: 8619,
				overview:
					'Jack Aubrey (Russell Crowe) é o capitão do H.M.S. Surprise, um dos principais navios de guerra da marinha britânica. Com seu país em guerra contra a França de Napoleão Bonaparte, Aubrey é atacado por um navio inimigo mais poderoso, que fere boa parte de sua tripulação e ainda danifica o navio. Aubrey então se sente dividido entre cumprir seu dever e tentar derrotar o inimigo ou retornar para cuidar dos feridos.',
				poster_path: '/3v61179ciXMpmyiJZmpqyCoV5us.jpg',
				release_date: '2003-11-14',
				title: 'Mestre dos Mares - O Lado Mais Distante do Mundo'
			},
			{
				id: 531876,
				overview:
					'Uma pequena equipe de soldados dos EUA batalham contra centenas de combatentes do Talibã no Afeganistão.',
				poster_path: '/goEW6QqoFxNI2pfbpVqmXj2WXwd.jpg',
				release_date: '2020-06-24',
				title: 'The Outpost'
			}
		],
		História: [
			{
				id: 556574,
				overview:
					'Adaptação do musical da Brodway sobre a vida de um dos principais fundadores da América e primeiro secretário do Tesouro, Alexander Hamilton. A sinopse oificial ainda não foi divulgada.',
				poster_path: '/h1B7tW0t399VDjAcWJh8m87469b.jpg',
				release_date: '2020-07-03',
				title: 'Hamilton'
			},
			{
				id: 531876,
				overview:
					'Uma pequena equipe de soldados dos EUA batalham contra centenas de combatentes do Talibã no Afeganistão.',
				poster_path: '/goEW6QqoFxNI2pfbpVqmXj2WXwd.jpg',
				release_date: '2020-06-24',
				title: 'The Outpost'
			}
		],
		Música: [
			{
				id: 556574,
				overview:
					'Adaptação do musical da Brodway sobre a vida de um dos principais fundadores da América e primeiro secretário do Tesouro, Alexander Hamilton. A sinopse oificial ainda não foi divulgada.',
				poster_path: '/h1B7tW0t399VDjAcWJh8m87469b.jpg',
				release_date: '2020-07-03',
				title: 'Hamilton'
			},
			{
				id: 531454,
				overview:
					'O sonho deles é participar da maior competição de música do mundo. Mas intrigas de rivais e acidentes no palco vão testar a relação entre esses dois.',
				poster_path: '/7fMJ8ktszaWOyRs5sWntcpssFG.jpg',
				release_date: '2020-06-26',
				title: 'Festival Eurovision da Canção: A Saga de Sigrit e Lars'
			}
		],
		Romance: [
			{
				id: 706510,
				overview:
					'Acompanhada pelos amigos, uma jovem apavorada parte para o México para tentar apagar um e-mail desaforado que enviou ao novo namorado.',
				poster_path: '/hoUzSMxGu4Bm73EvH6B3iceFwW8.jpg',
				release_date: '2020-07-03',
				title: 'Desperados'
			}
		],
		Thriller: [
			{
				id: 496243,
				overview:
					'Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.',
				poster_path: '/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg',
				release_date: '2019-05-30',
				title: 'Parasita'
			},
			{
				id: 475557,
				overview:
					'Arthur Fleck trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais. Após ser demitido, Fleck reage mal à gozação de três homens em pleno metrô e os mata. Os assassinatos iniciam um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.',
				poster_path: '/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg',
				release_date: '2019-10-02',
				title: 'Coringa'
			},
			{
				id: 155,
				overview:
					'Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.',
				poster_path: '/iGZX91hIqM9Uu0KGhd4MUaJ0Rtm.jpg',
				release_date: '2008-07-16',
				title: 'Batman: O Cavaleiro das Trevas'
			}
		]
	});

	// useEffect(() => {
	// 	async function getMovies() {
	// 		try {
	// 			const { data: dataGenres } = await request.get(
	// 				`/genre/movie/list?api_key=${API_KEY}&language=${LANG}`
	// 			);
	// 			const { data: dataMovies } = await request.get(
	// 				`/discover/movie?api_key=${API_KEY}&language=${LANG}`
	// 			);
	// 			const newMovieByGenre = movieByGenre(
	// 				dataMovies.results,
	// 				dataGenres.genres
	// 			);
	// 			setMoviesByGenres(newMovieByGenre);
	// 		} catch (error) {
	// 			console.log(error);
	// 			console.log(error.request);
	// 		}
	// 	}
	// 	getMovies();
	// }, []);

	const renderSections = () => {
		return Object.keys(moviesByGenres)
			.sort()
			.map((genre) => {
				console.log(genre);

				return (
					<SectionPosters
						title={genre}
						key={genre}
						movies={moviesByGenres[genre]}
					/>
				);
			});
	};

	return (
		<ContainerScroll>
			<Banner />
			{renderSections()}
		</ContainerScroll>
	);
};

export default Home;
