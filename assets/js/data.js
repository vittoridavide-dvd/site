/* Structured content for the site. Source: Davide Vittori CV, May 2026. */

const BOOKS = [
  {
    label: "Monograph",
    title: "Southern European Challenger Parties Against the Mainstream: Podemos, SYRIZA, and MoVimento 5 Stelle in Comparative Perspective",
    meta: "London: Routledge, 2023",
    prize: "Pietro Grillo di Cortona Prize — best book of 2023–2024, Italian Political Science Association"
  },
  {
    label: "Monograph",
    title: "Il Valore di Uno. Il Movimento 5 Stelle e l'esperimento della democrazia diretta",
    meta: "Rome: LUISS University Press, 2020",
    prize: null
  }
];

/* Journal articles, most recent first. doi is a full URL or null. */
const ARTICLES = [
  { year: 2026, authors: "Barberà, O., Malý, M., Megías, A., Villaplana, F.R., Vittori, D.", title: "The determinants of turnout in intra-party referendums: a meso-level analysis in digital parties", venue: "European Political Science Review", doi: "https://doi.org/10.1017/S1755773926100423" },
  { year: 2026, authors: "Vittori, D., Rojon, S., Pilet, J-B.", title: "Citizens' Views of Decision-Makers' Roles: A Conjoint Experiment in Fifteen Countries", venue: "World Politics, 78(1): 132–167", doi: null },
  { year: 2025, authors: "Vittori, D., Rojon, S., Pilet, J-B., Paulis, E.", title: "Are citizens' preferences for who should govern linked to their voting behaviour? The case of Italy", venue: "South European Politics and Society", doi: "https://doi.org/10.1080/13608746.2025.2558651" },
  { year: 2025, authors: "Paparo, A., Vittori, D.", title: "\"What's Going On?\" Comparing and Contrasting Issue Affinities and Dissimilarities in the European Electorates", venue: "International Journal of Public Opinion Research, 37(1)", doi: "https://doi.org/10.1093/ijpor/edaf002" },
  { year: 2025, authors: "Angelucci, D., Vittori, D.", title: "Trust in science during the pandemic: an ideological fracture or just a matter of government vs opposition?", venue: "Contemporary Italian Politics, 1–23", doi: "https://doi.org/10.1080/23248823.2025.2499993" },
  { year: 2025, authors: "Paulis, E., Kins, L., Barberà, O., Vittori, D.", title: "The flip side of digital technologies in internal party elections: a cybersecurity dilemma?", venue: "Innovation: The European Journal of Social Science Research", doi: "https://doi.org/10.1080/13511610.2025.2461996" },
  { year: 2024, authors: "Pilet, J.B., Vittori, D., Rojon, S., Paulis, E.", title: "The Preferred Governing Actors of Populist Supporters: Survey Evidence From Eight European Countries", venue: "Politics and Governance, 12(8731): 1–17", doi: "https://doi.org/10.17645/pag.8731" },
  { year: 2024, authors: "Paulis, E., Pilet, J.B., Rojon, S., Vittori, D.", title: "Fair Enough? Mini-Public Composition and Outcome Acceptance from the Maxi Public", venue: "Journal of Deliberative Democracy, 20(1): 1–23", doi: "https://doi.org/10.16997/jdd.1535" },
  { year: 2024, authors: "Vittori, D., Paulis, E.", title: "Experts replacing governments? The socio-cultural and authoritarian roots of citizens' preferences for experts in government in 58 countries", venue: "Acta Politica", doi: "https://doi.org/10.1057/s41269-024-00357-3" },
  { year: 2024, authors: "Angelucci, D., Improta, M., Lachat, R., Vittori, D.", title: "Time will tear us apart: European electoral participation dynamics in longitudinal perspective", venue: "Electoral Studies, 90: 102819", doi: "https://doi.org/10.1016/j.electstud.2024.102819" },
  { year: 2024, authors: "Rojon, S., Pankowska, P., Vittori, D., Paulis, E.", title: "Comparing Political Participation Profiles in four Western European Countries", venue: "European Journal of Political Research", doi: "https://doi.org/10.1111/1475-6765.12695" },
  { year: 2024, authors: "Angelucci, D., Vittori, D.", title: "In science we (dis)trust. Technocratic attitudes, populism, and trust in science during the COVID-19 pandemic", venue: "European Political Science", doi: "https://doi.org/10.1057/s41304-024-00487-4" },
  { year: 2024, authors: "Vittori, D., Rojon, S., Pilet, J.B., Paulis, E.", title: "Beyond parliamentarism: how do citizens want to decide on divisive policies?", venue: "Comparative European Politics, 22: 685–715", doi: "https://doi.org/10.1057/s41295-024-00379-3" },
  { year: 2024, authors: "Angelucci, D., Rojon, S., Vittori, D.", title: "Do populist parties promote direct democracy? An empirical assessment in 29 countries in the last two decades", venue: "Contemporary Politics, 30(4): 473–493", doi: "https://doi.org/10.1080/13569775.2023.2296748" },
  { year: 2023, authors: "Pilet, J.B., Puleo, L., Vittori, D.", title: "Exploring the causes of technocratic minister appointments in Europe", venue: "Political Studies, 72(4): 1572–1590", doi: "https://doi.org/10.1177/00323217231210129" },
  { year: 2023, authors: "Panel, S., Pilet, J.B., Rojon, S., Vittori, D.", title: "The lure of technocrats: a conjoint experiment on preferences for technocratic ministers in six European countries", venue: "Political Behaviour, 46: 1961–1984", doi: "https://doi.org/10.1007/s11109-023-09904-8" },
  { year: 2023, authors: "Vittori, D., Barberà, O.", title: "Approaching the Unknown. COVID-19 pandemic, political parties and digital adaptations: party élites' perceptions in Italy and Spain", venue: "Frontiers in Political Science", doi: "https://doi.org/10.3389/fpos.2023.1005385" },
  { year: 2023, authors: "Biancalana, C., Vittori, D.", title: "Business as usual? How gamification transforms internal party democracy", venue: "The Information Society, 39(5): 282–295", doi: "https://doi.org/10.1080/01972243.2023.2241470" },
  { year: 2023, authors: "Vittori, D., Rojon, S., Pilet, J.B., Paulis, E.", title: "Technocracy above partisanship? Comparing the appeal of non-partisan and partisan experts as ministers. A survey in 14 countries", venue: "The British Journal of Politics and International Relations, 26(3): 779–802", doi: "https://doi.org/10.1177/13691481231178244" },
  { year: 2023, authors: "Angelucci, D., Vittori, D.", title: "Where you live explains how much you trust local (and national) institutions. A study on the Italian case", venue: "European Political Science Review, 15(4): 641–658", doi: "https://doi.org/10.1017/S1755773923000140" },
  { year: 2023, authors: "Rojon, S., Pilet, J.B., Vittori, D., Paulis, E.", title: "Which political outsiders do Europeans prefer as ministers?", venue: "European Political Science Review, 15(3): 444–464", doi: "https://doi.org/10.1017/S1755773923000048" },
  { year: 2023, authors: "Pilet, J.B., Vittori, D., Paulis, E., Rojon, S.", title: "Who do Europeans want to govern? Exploring the multiple dimensions of citizens' preferences regarding political actors in nine European countries", venue: "Party Politics, 30(2): 367–378", doi: "https://doi.org/10.1177/13540688231153932" },
  { year: 2023, authors: "Vittori, D., Paulis, E., Pilet, J.B., Rojon, S.", title: "Do technocrats boost the acceptance of policy proposals among the citizenry? Evidence from a survey experiment in Italy", venue: "Electoral Studies, 81", doi: "https://doi.org/10.1016/j.electstud.2022.102566" },
  { year: 2023, authors: "Vittori, D., Pilet, J.B., Rojon, S., Paulis, E.", title: "Technocratic Ministers in Office in European Countries (2000–2020): What's New?", venue: "Political Studies Review, 21(4): 867–886", doi: "https://doi.org/10.1177/14789299221140036" },
  { year: 2023, authors: "Mosca, L., Vittori, D.", title: "A digital principal? Substantive representation in the case of the Italian Five Star Movement", venue: "European Societies, 25(4): 627–656", doi: "https://doi.org/10.1080/14616696.2022.2144638" },
  { year: 2022, authors: "Emanuele, V., Angelucci, D., Vittori, D.", title: "Editorial: The left behind — Crisis and challenges of the left in contemporary democracies", venue: "Frontiers in Political Science", doi: "https://doi.org/10.3389/fpos.2022.977647" },
  { year: 2022, authors: "Pilet, J.B., Bol, D., Vittori, D., Paulis, E.", title: "Public Support for Deliberative Citizens' Assemblies Selected through Sortition: Evidence from 15 Countries", venue: "European Journal of Political Research, 62(3): 873–902", doi: "https://doi.org/10.1111/1475-6765.12541" },
  { year: 2022, authors: "Angelucci, D., Vittori, D.", title: "Are all populist voters the same? Institutional mistrust and the Five Star Movement in Italy", venue: "South European Politics and Society, 26(3): 303–327", doi: "https://doi.org/10.1080/13608746.2022.2028503" },
  { year: 2022, authors: "Vittori, D.", title: "Vanguard or business-as-usual? \"New\" movement parties in comparative perspective", venue: "International Political Science Review, 43(4): 595–610", doi: "https://doi.org/10.1177/01925121211026648" },
  { year: 2022, authors: "Vittori, D.", title: "Threat or Corrective? Assessing the impact of populist parties in government on the qualities of democracy: a 19-country comparison", venue: "Government & Opposition, 57(4): 589–609", doi: "https://doi.org/10.1017/gov.2021.21" },
  { year: 2021, authors: "Angelucci, D., Vittori, D.", title: "Look where you're going: the cultural and economic explanations of class voting decline", venue: "West European Politics, 46(1): 122–147", doi: "https://doi.org/10.1080/01402382.2021.1987108" },
  { year: 2021, authors: "Carrieri, L., Vittori, D.", title: "Defying Europe? The Euroscepticism of radical right and radical left voters in Western Europe", venue: "Journal of European Integration, 43(8): 955–971", doi: "https://doi.org/10.1080/07036337.2021.1882454" },
  { year: 2021, authors: "Vittori, D.", title: "Which organization for which party? An organizational analysis of the five-star movement", venue: "Contemporary Italian Politics, 13(1): 31–48", doi: "https://doi.org/10.1080/23248823.2020.1838868" },
  { year: 2020, authors: "Paulis, E., Pilet, J.B., Panel, S., Close, C., Vittori, D.", title: "The POLITICIZE dataset: an inventory of deliberative mini-publics (DMPs) in Europe", venue: "European Political Science, 20: 521–542", doi: "https://doi.org/10.1057/s41304-020-00284-9" },
  { year: 2020, authors: "Tarditi, V., Vittori, D.", title: "\"We are different\": do anti-establishment parties promote distinctive elites? An analysis of the Spanish case", venue: "Representation, 57(1): 21–39", doi: "https://doi.org/10.1080/00344893.2020.1785535" },
  { year: 2020, authors: "Vittori, D.", title: "Was it all about personalization? The determinants of the vote in the 2016 Constitutional Referendum in Italy", venue: "Revue Internationale de Politique Comparée, 26(1): 103–127", doi: "https://doi.org/10.3917/ripc.261.0103" },
  { year: 2020, authors: "Vittori, D.", title: "The impact of populism on party organization? A study of four Southern European 'populist' parties", venue: "European Politics and Society, 20(1): 53–71", doi: "https://doi.org/10.1080/23745118.2019.1602925" },
  { year: 2020, authors: "Vittori, D.", title: "Membership and members' participation in new digital parties: bring back the people?", venue: "Comparative European Politics, 18: 609–629", doi: "https://doi.org/10.1057/s41295-019-00201-5" },
  { year: 2019, authors: "Deseriis, M., Vittori, D.", title: "Platform Politics in Europe: Bridging Gaps Between Digital Activism and Digital Democracy at the Close of the Long 2010s", venue: "International Journal of Communication, 13: 5599–5609", doi: null },
  { year: 2019, authors: "Deseriis, M., Vittori, D.", title: "The Impact of Online Participation Platforms on the Internal Democracy of Two Southern European Parties: Podemos and the Five Star Movement", venue: "International Journal of Communication, 13: 5696–5714", doi: null },
  { year: 2019, authors: "Tarditi, V., Vittori, D.", title: "Reshaping EU attitudes? The case of social democratic and radical left parties in Spain and Italy", venue: "Swiss Political Science Review, 25(2): 157–180", doi: "https://doi.org/10.1111/spsr.12349" },
  { year: 2019, authors: "Calcara, A., Vittori, D.", title: "Italians do it better? The Italian approach to the international relations", venue: "European Political Science, 18: 669–694", doi: "https://doi.org/10.1057/s41304-019-00207-3" },
  { year: 2019, authors: "Tarditi, V., Vittori, D.", title: "What are we gonna be when we grow up? SYRIZA's institutionalisation and its new \"governing party\" role", venue: "Communist and Post-Communist Studies, 52(1): 25–37", doi: "https://doi.org/10.1016/j.postcomstud.2019.02.004" },
  { year: 2018, authors: "Vittori, D.", title: "Party change in 'populist' parties in government: the case of the Five Star Movement and SYRIZA", venue: "Italian Politics, 13(2): 78–91", doi: null },
  { year: 2017, authors: "Vittori, D.", title: "Cartelization and party change in social democracies: a comparative perspective on the Parti Socialiste (PS), Partido Socialista Obrero Español (PSOE), and Partito Democratico (PD)", venue: "Italian Political Science Review, 48(1): 43–64", doi: "https://doi.org/10.1017/ipo.2017.15" },
  { year: 2017, authors: "Vittori, D.", title: "Re-conceptualizing populism: Bringing a multifaceted concept within stricter borders", venue: "Revista Española de Ciencia Política, 44: 43–65", doi: "https://doi.org/10.21308/recp.44.02" },
  { year: 2017, authors: "Vittori, D.", title: "Podemos and the Five-star Movement: populist, nationalist or what?", venue: "Contemporary Italian Politics, 9(2): 142–161", doi: "https://doi.org/10.1080/23248823.2017.1339935" },
  { year: 2017, authors: "Vittori, D.", title: "Podemos and Five Stars Movement: Divergent Trajectories In a Similar Crisis?", venue: "Constellations, 24(3): 324–338", doi: "https://doi.org/10.1111/1467-8675.12291" },
  { year: 2017, authors: "Vittori, D.", title: "The Crisis of the European Union: How the Institutional Framework Changed during Crisis Management", venue: "The International Spectator, 52(1): 132–136", doi: "https://doi.org/10.1080/03932729.2017.1272820" },
  { year: 2013, authors: "Vittori, D.", title: "A political crisis in an economic tempest (January 2008 – December 2012)", venue: "Eastern Journal of European Studies", doi: null }
];

const CHAPTERS = [
  { year: 2025, authors: "Vittori, D.", title: "More Deliberative-Oriented Than Their Party: The Curious Case of Five Star Movement's Supporters", venue: "In Gherghina, S. (ed.), Political Parties and Deliberative Democracy in Europe: A Convenient Relationship? London: Routledge" },
  { year: 2024, authors: "Vittori, D.", title: "Cosa non è il populismo", venue: "In Zulianello, M. & Guasti, P. (eds), Capire il Populismo, 40–44. Milano: Utet" },
  { year: 2021, authors: "Biancalana, C., Vittori, D.", title: "Cyber-Parties' Membership Between Empowerment and Pseudo-participation: The Cases of Podemos and the Five Star Movement", venue: "In Barberà, Sandri, Correa, Rodríguez-Teruel (eds), Digital Parties, 109–126. Springer, Cham" },
  { year: 2021, authors: "Tarditi, V., Raniolo, F., Vittori, D.", title: "Political Parties and New ICTs: Between Tradition and Innovation", venue: "In Barberà, Sandri, Correa, Rodríguez-Teruel (eds), Digital Parties, 181–204. Springer, Cham" },
  { year: 2021, authors: "Sorice, M., Vittori, D.", title: "Manipolazione e influenza nei quotidiani: premesse teoriche", venue: "In Sorice & Morlino, L'illusione della scelta, 137–144. Rome: LUISS University Press" },
  { year: 2021, authors: "Sorice, M., Vittori, D., Zunino, M.", title: "I media tradizionali tra persuasione e manipolazione", venue: "In Sorice & Morlino, L'illusione della scelta, 145–193. Rome: LUISS University Press" },
  { year: 2021, authors: "Morlino, L., Vittori, D.", title: "Populism and Democracy in Europe", venue: "In Albertazzi, D. & Vampa, D. (eds), Populism and New Patterns of Political Competition in Western Europe. London: Routledge" },
  { year: 2019, authors: "Tarditi, V., Vittori, D.", title: "European Integration and the Economic Crisis: the Changing Positions of Left Parties in Spain and Italy", venue: "In Baldassarri et al. (eds), Anti-Europeanism, 115–134. Berlin: Springer" },
  { year: 2018, authors: "Paparo, A., Vittori, D.", title: "A Rimini non tiene neanche il Muro di Arcore: la Lega prende direttamente al centrosinistra", venue: "In Paparo & Emanuele (eds), Gli sfidanti al governo, 241–249. Roma: LUISS University Press" },
  { year: 2018, authors: "Vittori, D.", title: "La lunga battaglia: chi può ancora sperare di convincere gli indecisi?", venue: "In Paparo & Emanuele (eds), Gli sfidanti al governo, 59–62. Roma: LUISS University Press" },
  { year: 2018, authors: "Paparo, A., Vittori, D.", title: "La Lombardia non è più il regno di Berlusconi", venue: "In Paparo & Emanuele (eds), Gli sfidanti al governo, 161–167. Roma: LUISS University Press" },
  { year: 2018, authors: "Paparo, A., Vittori, D.", title: "Il quadro della vigilia delle comunali: le alleanze e le amministrazioni uscenti", venue: "In Paparo, A. (ed.), Goodbye Zona Rossa, 27–38. Roma: LUISS University Press" },
  { year: 2018, authors: "Paparo, A., Vittori, D.", title: "Primo turno ad Ancona: la diaspora del M5S, la tenuta del PD, la crescita della Lega", venue: "In Paparo, A. (ed.), Goodbye Zona Rossa, 157–168. Roma: LUISS University Press" },
  { year: 2018, authors: "Paparo, A., Vittori, D.", title: "Ad Ancona il centrosinistra tiene i suoi voti e si conferma al comune", venue: "In Paparo, A. (ed.), Goodbye Zona Rossa, 249–254. Roma: LUISS University Press" },
  { year: 2017, authors: "Paparo, A., Vittori, D.", title: "Parma, i voti M5s vanno nell'astensione: Pizzarotti in vantaggio coi voti del centrosinistra", venue: "In Paparo, A. (ed.), La rinascita del centrodestra?, 133–141. Roma: CISE" },
  { year: 2017, authors: "Paparo, A., Vittori, D.", title: "I flussi elettorali a Parma: Pizzarotti ancora il preferito per elettori di centrodestra e M5s 2013", venue: "In Paparo, A. (ed.), La rinascita del centrodestra?, 225–230. Roma: CISE" },
  { year: 2017, authors: "Paparo, A., Vittori, D.", title: "I flussi elettorali a La Spezia: tutti verso Peracchini, anche un pezzo di sinistra", venue: "In Paparo, A. (ed.), La rinascita del centrodestra?, 237–242. Roma: CISE" }
];

const DATASETS = [
  { year: 2021, authors: "Vittori, D., Pilet, J-B., Paulis, E.", title: "Technocratic Ministers Dataset – 2000–2020 (v. 1.1.0)", doi: "https://doi.org/10.7802/2519" },
  { year: 2021, authors: "Vittori, D., Pilet, J-B., Paulis, E.", title: "Technocratic Ministers Dataset – 2000–2020 (v. 1.0.0)", doi: "https://doi.org/10.7802/2281" },
  { year: 2020, authors: "Vittori, D.", title: "Five Stars Movement Internal Consultations, 2012–2019 (v. 1.0.0)", doi: "https://doi.org/10.7802/1.1986" },
  { year: 2020, authors: "Vittori, D.", title: "Five Stars Movement Internal Consultations, 2012–2024 (v. 2.0.0)", doi: "https://doi.org/10.7802/2835" }
];

const PROJECTS = [
  { tag: "Current · PI", title: "TRUSTLOC — At the Roots of (Dis)Trust in Local Institutions", text: "Postdoctoral project funded by the Valencian Community (Fondo Social Europeo Plus), 2024–2026, examining why trust in local institutions diverges from trust in national ones." },
  { tag: "2020–2025", title: "Non-Elected Politics", text: "ERC-funded project (Horizon 2020), led by Prof. Jean-Benoit Pilet at the Université Libre de Bruxelles, on whether unelected experts and technocrats are a cure or a curse for representative democracy." },
  { tag: "2024–2028", title: "RELINK² — Regaining Linkage?", text: "COST Action studying how digital technologies reshape civic engagement, political organisations, and democratic linkage across Europe." },
  { tag: "2020–2024", title: "The Digital Re-Invention of Political Parties in Europe", text: "Network project funded by the Valencian Regional Government, tracing how European parties adapt their internal organisation to digital tools." }
];

const TEACHING = [
  { yr: "2025–26", course: "Actores políticos: partidos, movimientos, grupos de interés", meta: "University of Valencia — MA course, 6 ECTS" },
  { yr: "2025–26", course: "Introduction to Social and Political Analysis", meta: "LUISS University — undergraduate, ~90 students, 6 ECTS" },
  { yr: "2025–26", course: "Political Parties and Technocracy", meta: "Blended Intensive Program, Summer School on Political Parties (Nova, Pisa & Valencia universities)" },
  { yr: "2024–25", course: "Introduction to Social and Political Analysis", meta: "LUISS University — undergraduate, ~40 students, 6 ECTS" },
  { yr: "2024–25", course: "Opinione Pubblica e Elezioni", meta: "LUISS University — MA, with Dr. D. Angelucci, 6 ECTS" },
  { yr: "2023–24", course: "Partecipazione Politica e Governance", meta: "LUISS University — MA, with Prof. Emiliana De Blasio, 6 ECTS" },
  { yr: "2023–24", course: "Experimental Political Science", meta: "ESPOL Lille — MA, 3 ECTS" },
  { yr: "2023–24", course: "Comparative Political Institutions", meta: "University of Antwerp — BA, ~110 students, part of the YUFE alliance" },
  { yr: "2022–23", course: "Sociology of the European Union", meta: "University of Lille — MA, ~90 students, 6 ECTS" },
  { yr: "2021–22", course: "Comparative Political Institutions", meta: "University of Antwerp — BA, ~140 students, 6 ECTS" },
  { yr: "2020–23", course: "Methods for Social Science", meta: "LUISS University — MA (teaching assistant), 6 ECTS" }
];

/* Career route for the signature strip — from Academic Background & Positions in the CV */
const ROUTE = [
  { city: "Bologna", year: "2006–14" },
  { city: "Nijmegen", year: "2013–14" },
  { city: "Rome (LUISS)", year: "2015–20" },
  { city: "Florence (EUI)", year: "2017–18" },
  { city: "Antwerp", year: "2020–24" },
  { city: "Lille (ESPOL)", year: "2022–24" },
  { city: "Brussels (ULB)", year: "2020–24" },
  { city: "Valencia", year: "2024–" }
];
