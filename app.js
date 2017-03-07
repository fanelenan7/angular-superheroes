let superheroData = [
  { name: "Genji", realName: "Genji Shimada", phoneNumber: "+36 55 565 998", affiliation: "Shimada Clan (formerly), Overwatch (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/genji-concept.jpg"},
  { name: "McCree", realName: "Jesse McCree", phoneNumber: "+1-202-555-0166", affiliation: "Overwatch (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/mccree-concept.jpg"},
  { name: "Pharah", realName: "Fareeha Amari", phoneNumber: "+353 20 915 6971", affiliation: "Helix Security International", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/pharah-concept.jpg"},
  { name: "Reaper", realName: "Gabriel Reyes", phoneNumber: "42-42-564", affiliation: "Talon", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/reaper-concept.jpg"},
  { name: "Soldier: 76", realName: "Jack Morrison", phoneNumber: "+1-202-555-0117", affiliation: "Overwatch (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/soldier-76-concept.jpg"},
  { name: "Sombra", realName: "Unknown", phoneNumber: "01632 960645", affiliation: "Talon", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/sombra-concept-a4ff40a617d43989d524431f91a24533d89ed17d613d68c93d56de5f4ce6b4cfd8e748bbfaa00e06058f63f9761a99f3401acc53527d0576514c84f915680ed0.jpg"},
  { name: "Tracer", realName: "Lena Oxton", phoneNumber: "+44 1632 960341", affiliation: "Overwatch (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/tracer-concept.jpg"},
  { name: "Bastion", realName: 'SST Laboratories Siege Automaton E54, "Bastion"', phoneNumber: "0000-0000-00", affiliation: "None", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/bastion-concept.jpg"},
  { name: "Hanzo", realName: "Hanzo Shimada", phoneNumber: "+36 55 384 145", affiliation: "Shimada Clan", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/hanzo-concept.jpg"},
  { name: "Junkrat", realName: "Jamison Fawkes", phoneNumber: "+61 1800 160 401", affiliation: "Junkers (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/junkrat-concept.jpg"},
  { name: "Mei", realName:"Mei-Ling Zhou", phoneNumber: "404-555-0197", affiliation: "Overwatch (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/mei-concept.jpg"},
  { name: "Torbjörn", realName: "Torbjörn Lindholm", phoneNumber: "207-555-0135", affiliation: "Overwatch (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/torbjorn-concept.jpg"},
  { name: "Widowmaker", realName: "Amélie Lacroix", phoneNumber: "701-555-0155", affiliation: "Talon", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/widowmaker-concept.jpg"},
  { name: "D'va", realName: "Hana Song", phoneNumber: "307-555-0159", affiliation: "Mobile Exo-Force of the Korean Army", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/dva-concept.jpg"},
  { name: "Reinhardt", realName: "Reinhardt Wilhelm", phoneNumber: "803-555-0110", affiliation: "Overwatch (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/reinhardt-concept.jpg"},
  { name: "Roadhog", realName: "Mako Rutledge", phoneNumber: "+61 1800 975 709", affiliation: "Junkers (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/roadhog-concept.jpg"},
  { name: "Winston", realName: "Winston", phoneNumber: "614-555-0139", affiliation: "Overwatch (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/winston-concept.jpg"},
  { name: "Zarya", realName: "Aleksandra Zaryanova", phoneNumber: "+7 4212 70-34-02", affiliation: "Russian Defense Forces", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/zarya-concept.jpg"},
  { name: "Ana", realName: "Ana Amari", phoneNumber: "+353 20 914 1126", affiliation: "Overwatch (formerly)", image: ""},
  { name: "Lúcio", realName: "Lúcio Correia dos Santos", phoneNumber: "515-555-0119", affiliation: "None", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/lucio-concept.jpg"},
  { name: "Mercy", realName: "Angela Ziegler", phoneNumber: "502-555-0144", affiliation: "Overwatch (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/mercy-concept.jpg"},
  { name: "Symmetra", realName: "Satya Vaswani", phoneNumber: "717-555-0129", affiliation: "Vishkar Corporation", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/symmetra-concept.jpg"},
  { name: "Zenyatta", realName: "Tekhartha Zenyatta", phoneNumber: "860-555-0126", affiliation: "The Shambali (formerly)", image: "https://blzgdapipro-a.akamaihd.net/media/artwork/zenyatta-concept.jpg"},
]
angular
        .module("superheroPhonebook", [])
        .controller("superheroCtrl", [superheroPhonebookController])

    function superheroPhonebookController () {
      this.superheroes = superheroData
    }
