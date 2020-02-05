const Discord = require('discord.js')
const client = new Discord.Client()


client.on('ready', () => {
    client.user.setActivity("GAMING NAPLÓ", {type: "WATCHING"})


    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    })

    let generalChannel = client.channels.get("665962492232597517")
    generalChannel.send("A bot online lett, vagy fejlesztették!"),
client.on('message', (receivedMessage) => {
    if(receivedMessage.author == client.user) {
        return
    }

    let customEmoji = receivedMessage.guild.emojis.get('591634395111358467')
    receivedMessage.react(customEmoji) 
   
})
    
    client.on('message', msg => { 
        if (msg.content === 'Ki készítette a botot?') {     
            msg.reply('A botot @IGLBAZSI készítette verziószám: 1.1.5!');   
        } 
       if (msg.content === 'Koala') {
            msg.reply('Itt egy koala! :)', {files:['https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/480px-Koala_climbing_tree.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Mi a neved?') {     
            msg.reply('egy bot vagyok ezért nincsen nevem');   
        } 
       if (msg.content === 'Kutya') {
            msg.reply('Itt egy aranyos tacskó! :)', {files:['https://upload.wikimedia.org/wikipedia/commons/a/a1/Standard-Dachshund.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Mikor indult el a szerver?') {     
            msg.reply('a discord szerveremnek első verziója körülbelül 2017 végén indult el');   
        } 
       if (msg.content === 'Macska') {
            msg.reply('Itt egy cicca :3', {files:['https://www.zooplus.hu/magazin/wp-content/uploads/2019/07/A-macska-kommunik%C3%A1ci%C3%B3j%C3%A1nak-meg%C3%A9rt%C3%A9se.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Mi a youtube csatornád linkje?') {     
            msg.reply('https://www.youtube.com/channel/UC3rlCeUzs4wLnZTm3-92JNA?');
        } 
       if (msg.content === 'Nerdhub') {
            msg.reply('Vendell csodás arcszerkezete :)', {files:['https://clips-media-assets2.twitch.tv/AT-cm%7C429858659-preview-480x272.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Szereted a tengerimalacokat?') {     
            msg.reply('nincs annál jobb :3');
        } 
       if (msg.content === 'Tengerimalac') {
            msg.reply('itt egy aranyos kis tengerimalac :)', {files:['https://www.haziallat.hu/upload/4/article/3182/1_original.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Szereted a sasokat?') {     
            msg.reply('Mondhatni kedvenc állatom ezért is és ezért az a neve a klánomnak hogy IGL(ÍGÖL/Eagle) :)');
        } 
       if (msg.content === 'Sas') {
            msg.reply('Itt egy komoly Amerikai Sas', {files:['https://24.p3k.hu/app/uploads/2018/05/feherfeju-retisas.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Bot verziószám') {     
            msg.reply('A bot verziószáma 1.0.3 (alpha) :)');
        }
        if(msg.content === 'Miért van saját botod?') {
            msg.reply('mert szeretnék egy magyar botot készíteni :)');
        }
    });

    client.on('message', message => { 
        if (message.content === 'Szereted a tejet?') {     
            message.reply('Teljes mértékben igen');
        }
        if(message.content === 'Tesla') {
            const TeslaModelSEmbed = new Discord.RichEmbed()

            .setColor('AQUA')
            .setTitle('**TESLA MODEL S**')
            .setAuthor(message.author.username)
            .setDescription('Tesla Model S')
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png")
            .setImage('https://www.teslarati.com/wp-content/uploads/2019/07/tesla-model-s-raven-2.jpg')
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png');

            message.reply(TeslaModelSEmbed);

            const teslaEmbed = new Discord.RichEmbed()

            .setColor('AQUA')
            .setTitle('**TESLA MODEL X**')
            .setAuthor(message.author.username)
            .setDescription('Tesla Model X')
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png")
            .setImage('http://www.technokrata.hu/uploads/2017/05/model-x-blog.png')
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png')

        message.channel.send(teslaEmbed);

            const TeslaRoadsterEmbed = new Discord.RichEmbed()

            .setColor('AQUA')
            .setTitle('**TESLA ROADSTER**')
            .setAuthor(message.author.username)
            .setDescription('Tesla Roadster')
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png")
            .setImage('https://www.teslarati.com/wp-content/uploads/2017/11/Roadster_Front_34_1-e1512593855725.jpg')
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png')


        
        message.channel.send(TeslaRoadsterEmbed);

            const TeslavideoEmbed = new Discord.RichEmbed()

            .setColor('AQUA')
            .setTitle('**16 YEARS OF TESLA**')
            .setAuthor(message.author.username)
            .setDescription('16 YEARS OF TESLA')
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png")
            .setTimestamp()
            .setURL('https://www.youtube.com/watch?v=_EEZ8oRE5Ug&t')            
            .setFooter('A botnak a scriptjét teljes mértékben' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png')

        message.channel.send(TeslavideoEmbed)
        }
    })
            
        }
    );
    
    client.on('message', msg => { 
        if (msg.content === 'Youtube csatorna') {     
            msg.reply('https://www.youtube.com/channel/UC3rlCeUzs4wLnZTm3-92JNA?view_as=subscriber');
        }
        if(msg.content === 'Elefánt') {
            msg.reply('Itt egy elefánt :)', {files:['https://kep.cdn.indexvas.hu/1/0/2106/21060/210606/21060692_ce5bf77f5216a0c558cae95072a4a233_wm.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Mi a kedvenc könyved') {     
            msg.reply('Sajnos ritkán olvasok de a Ropi Naplóját tudom ajánlani! :)');
        }
        if(msg.content === 'Lajhár') {
            msg.reply('Lajhár :)', {files:['https://kep.cdn.indexvas.hu/1/0/2936/29365/293657/29365745_4d957361938d1cc303a98696dae765f5_wm.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Tetszik a bot') {     
            msg.reply('Köszi <3');
        }
        if(msg.content === 'Kecske') {
            msg.reply('Káposzta', {files:['https://nlc.p3k.hu/uploads/2019/01/kecske.jpg']});
        }
    });

    client.on('message', (receivedMessage) => {
        
        if (receivedMessage.author == client.user) {
            return
        }

    })

    client.on('message', msg => { 
        if (msg.content === 'Mennyi idős a bot?') {     
            msg.reply('A bot első verziója 2020.01.10-én lett scriptelve');
        }
        if(msg.content === 'Bot képe') {
            msg.reply('ThInKiES', {files:['https://static-cdn.jtvnw.net/jtv_user_pictures/d0fbe07f-22ca-453c-8413-a9bf8868a3ca-profile_image-300x300.png']});
        }
    });
    
    client.on('message', msg => { 
        if (msg.content === 'Valaki fortnite?') {     
            msg.reply('@everyone? Valaki?');
        }
        if(msg.content === 'Tej') {
            msg.reply('Finom', {files:['https://hu.cat-ret.assets.lidl/catalog4media/hu/article/1587/gallery/zoom/1587_90.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Valami') {     
            msg.reply('Valami');
        }
    });

    client.on('message', msg => { 
        if (msg.content === '$Üzenetek') {     
            msg.reply('**Jelenleg ezek a parancsok vannak bescriptelve:**Valami, Valaki fortnite?, Mennyi idős a bot?, Tetszik a bot, Mi a kedvenc könyved?,Youtube csatorna,Szereted a tejet?,Bot verziószám, Miért van saját botod?, Szereted a sasokat?Szereted a tengerimalacokat?, Mikor indult el a szerver?, Mi a neved?, Ki készítette a botot?,Tej,Bot képe,Kecske, Lajhár, Elefánt, Tengerimalac, Sas, Viziló, Tesla, Nerdhub, Macska, Kutya, Koala, Mee6, Mi az a bot?, Majom, Mókus, Miért videózol?, Lenny, Superlenny, Mi a profilképem?, Mi a szerver neve?, Mi a nevem?,Mi a szerver neve?, Mi az ID-m?, $Régió,Mikor készült el a szerver, Mennyi tag van jelenleg?, Mi az a discord szerver?, Hogyan lehetek tag?, Pocok, Hörcsög, Szia!, Felhasználóinfó, Szerverinfó, Disznó, Medve, Róka'
            + "Teknős, Zebra, Fortnite, Hangya, Borz, Ló, Béka, Fóka, Manuel, Byealex, Krokodil, I3, Model 3, ATV, Mosómedve, Orrszarvú, Farkas, Makákó, Gorilla, Afrika, Bambusznád, Majomkenyérfa, Kókuszdió, Szurikáta, Gyűrűsfarkú, Tigris, Bazsi, Nathan, Semitruck, ATV, TeslaInfo, Elon Musk, Mark Zuckerberg, Facebook, Messenger, Instagram, Twitter, Snapchat, Vans, Youtube, TikTok, Discord, Tinder");
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Mee6') {     
            msg.reply('Egy bot...');
        }
        if(msg.content === 'Viziló') {
            msg.reply('Tessék... Most ez tényleg kellett?', {files:['http://cdn.nwmgroups.hu/s/img/i/1808/20180815vizilo-hippo1.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Mi az a bot?') {     
            msg.reply('A botok tulajdonképpen robotok/mesterséges intelligenciák amik a szervert segítik moderálnak, üdvözölnek, előre bescriptelt programkódot teljesítenek mint például én ezen dolgozik minden nap kb 2 órát @IGLBAZSI');
        }
        if(msg.content === 'Majom') {
            msg.reply('Egyes emberek ebben a fázisban vannak... :/ #nooffense', {files:['https://24.p3k.hu/app/uploads/2019/07/istock-483725510-e1563358238312.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Miért videózol?') {     
            msg.reply('Hobbiból, ritkán');
        }
        if(msg.content === 'Mókus') {
            msg.reply('Itt van.', {files:['https://upload.wikimedia.org/wikipedia/commons/d/dd/MattiParkkonen_Orava.jpg']});
        }
    });

    client.on('message', msg => { 
        if (msg.content === 'Lenny') {     
            msg.reply('( ͡° ͜ʖ ͡°)');
        }
        if(msg.content === 'Superlenny') {
            msg.reply('( ͡° ͜ʖ ͡°)', {files:['https://ih1.redbubble.net/image.274690836.2069/flat,750x1000,075,f.u1.jpg']});
        }
    });


    client.on('message', message => {
        if (message.content === 'Mi a profilképem?') {
            message.reply(message.author.avatarURL);
            message.reply('Itt van a gyönyörű profilképed :)')
        }
    });

    client.on('message', message => {
        if (message.content === 'Mi a nevem?') {
            message.reply(message.author.name);
            message.reply('Jelenleg ez a neved :)')
        }
    });

    client.on('message', message => {
        if (message.content ==='Mi a szerver neve?') {
            message.reply(message.guild.name, message.guild.nameAcronym), true
            message.reply("jelenleg ez a szerver neve :)")
        }
    })

    client.on('message', message => {
        if (message.content ==='Mennyi tag van jelenleg?') {
            message.reply(message.guild.memberCount + "  " + "<== Jelenleg ennyi tag van fent a szerveren :)")
        }
    })

     client.on('message', message => {
        if (message.content ==='Mi az ID-m?') {
            message.reply(message.author.id + "  " + "<== Ez a discord ID-d")
        }
    })

    client.on('message', message => {
        if (message.content ==='Mikor készült el a szerver?') {
            message.reply(message.guild.createdAt + "  " + "<== Az első verzió ekkor készült el")
        }
    })


    client.on('message', message => {
        if (message.content ==='$Régió') {
            message.reply(message.guild.region + "  " + "<== Ez a szerver régiója")
        }
    })

    client.on('message', message => {
        if (message.content ==='Mi az a discord szerver?') {
            message.reply("A discord szerver tulajdonképpen egy DISCORD szerveren futó szolgáltatás ahol beszélgetni tudsz parancsokat tudsz elérni illetve egy jó közösségbe tudsz tartozni! Ha tetszik a pénzed és megteheted akkor **BOOSTOLD FEL DISCORD NITRÓVAL** A SZERVERT ÉS KAPSZ EGY EXKLÚZÍV RANGOT AMINEK SOK JOGA/ENGEDÉLYE VAN!")
        }
    })


    client.on('message', message => {
        if (message.content ==='Szerverinfó') {
            const exampleEmbed = new Discord.RichEmbed()

            .setColor('GREEN')
            .setTitle('Szerver Hivatalos Információja')
            .setAuthor('IGLBAZSI')
            .setDescription('SzerverInfó')
            .setThumbnail(message.guild.iconURL)
            .addField('Szerver Régió', message.guild.region)
            .addBlankField()
            .addField('Ekkor készült a szerver', message.guild.createdAt, true)
            .addField('Szerver Neve', message.guild.name, true)
            .addField('Létszám', message.guild.memberCount, true)
            .addField('Szerver id', message.guild.id, true)
            .addField('AFK csatorna id', message.guild.afkChannelID, true)
            .addField('Neved', message.author.username, true)
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + "**IGLBAZSI**" + ' ' + 'írja' , 'https://i.imgur.com/f14yxuu.jpg');
        
        message.reply(exampleEmbed);
        }
    })

    client.on('message', message => {
        if (message.content ==='Felhasználóinfó') {
            const exampleEmbed = new Discord.RichEmbed()

            .setColor('BLACK')
            .setTitle('**A FELHASZNÁLÓD HIVATALOS INFORMÁCIÓJA**')
            .setAuthor(message.author.username)
            .setDescription('Itt is van :)')
            .setThumbnail(message.author.avatarURL)
            .addBlankField()
            .addField('Ekkor regisztáltál >>>', message.author.createdAt, true)
            .addField('ID-D', message.author.id, true)
            .addField('Neved', message.author.username, true)
            .addField('Legutolsó üzeneted ID-je', message.author.lastMessageID, true)
            .addField('Legutolsó üzeneted', message.author.lastMessage, true)
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + "**IGLBAZSI**" + ' ' + 'írja' , 'https://i.imgur.com/f14yxuu.jpg');
        
        message.reply(exampleEmbed);
        }
    })

    client.on('message', message => {
        if (message.content ==='Szia!') {
            message.author.send("Szia! :) Remélem jól telik a napod! :) Ne felejtsd el elolvasni a szabályzatokat!")
        }
    })

    client.on('message', message => {
    if(message.content === 'Hörcsög') {
        message.reply('Itt egy hörcsög aki épp hörcsög :)', {files:['https://okosgazdi.hu/uimg/e/ec6a71364f3f4da58b7a6497f501fa91.jpg']});
    }
});

    client.on('message', message => {
        if(message.content === 'Pocok') {
            message.reply('Itt egy mezei pocok', {files:['https://kaposvarmost.hu/files/2/b/2b1c5f298013f2d0003c1c4beb73b2f9.jpg']});
        }
    });

    client.on('message', message => {
        if(message.content == 'Medve') {
            message.reply('Itt egy macika', {files:['http://www.erdekesvilag.hu/wp-content/uploads/2016/10/medve.jpg']})
        }
    })

    client.on('message', message => {
        if(message.content == 'Disznó') {
            message.reply('Itt egy malacka', {files:['https://ujszo.com/sites/default/files/styles/pl_article_full_lead/public/lead_image/diszno_0.jpg']})
        }
    })
    
    client.on('message', function(message) {
        if (message.content == "Töröl") {
            if (message.member.hasPermission("DELETE_MESSAGES")) {
                message.channel.fetchMessages()
                   .then(function(list){
                        message.channel.bulkDelete(list);
                    }, function(err){message.channel.send("Hiba: Hiba a törlésben.")})                        
            }
        }
    
    });

    client.on('message', message => {
        if(message.content == "Róka") {
            message.reply('Itt egy róka :)', {files:['https://nlc.p3k.hu/uploads/2019/12/cukik_rokak_alt.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == "Teknős") {
            message.reply('Itt egy teknős teknős :)', {files:['https://www.pecsma.hu/wp-content/uploads/2018/07/Peter-Joo_tekn%C5%91s-1068x750.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == "Zebra") {
            message.reply('Itt egy zebra :)', {files:['https://www.bitcoinbazis.hu/wp-content/uploads/2019/06/A-Zcash-bejelentette-a-Zebra-klienst-j%C3%B6hetnek-a-dappok-a-Zcash-blokkl%C3%A1ncra.jpg']})
        }
    });

    client.on('message',message => {
        if(message.content == "Borz") {
            message.reply('Itt egy büdösborz :)', {files:['https://promotions.hu/files/article/70941/crop/1560951569_budos_borz_video_promotions.hu/1560951569_budos_borz_video_promotions.hu_1180_550_5.jpg']})
        }
    });

    client.on('message',message => {
        if(message.content == "Ló") {
            message.reply('Itt egy paci :)', {files:['http://www.lovasok.hu/wp-content/uploads/2015/09/pipal.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == "Hangya") {
            message.reply('Itt egy hangya :)', {files:['https://www.agrarszektor.hu/images/cimlap/H/hangyakellen768-20190628.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == "Fortnite") {
            message.reply('eZ gameszkó :)', {files:['https://cdn2.unrealengine.com/Fortnite%2Fbattle-pass%2Fchapter-2%2Fchapter-2-skins%2FCarousel_2-new-2016x1642-6e92ac82251e622e3fadab72a8a11b6616a15662.png']})
        }
    });

    client.on('message', message => {
        if(message.content == "Fóka") {
            message.reply('Dik egy fóka lol', {files:['https://upload.wikimedia.org/wikipedia/commons/1/14/ErignathusBarbatus.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == "Béka") {
            message.reply('Itt egy béka :)', {files:['https://marieclaire.hu/uploads/2017/01/A-beka-aki-ugy-nez-ki-mint-Leia-hercegno.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == "Byealex") {
            message.reply('Itt egy Byealex', {files:['https://www.joy.hu/data/cikk/211/211110.775x400.jpg']})
        }
    });


    client.on('message', message => {
        if(message.content == "Krokodil") {
            message.reply('Itt egy kroki :)', {files:['https://www.promenad.hu/wp-content/uploads/2019/08/tizeves-gyermeket-falt-fel-egy-krokodil-1210x642.jpg']})
        }
    });

    client.on('message', message => { 
        if(message.content === 'I3') {
            const BMWI3EMBED = new Discord.RichEmbed()

            .setColor('AQUA')
            .setTitle('**BMW I3**')
            .setAuthor(message.author.username)
            .setDescription('ELEKTROMOS HAJTÁSÚ BMW')
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg")
            .setImage('https://meglepkek.hu/uploads/images/_cache/bmw-i3-4_a3c995d6d8e572198e2769b8f637ecdb.jpg')
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja' , 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg');

            message.reply(BMWI3EMBED);

        }
    });


    client.on('message', message => { 
        if(message.content === 'Model 3') {
            const Model3Embed = new Discord.RichEmbed()

            .setColor('AQUA')
            .setTitle('**Tesla Model 3**')
            .setAuthor(message.author.username)
            .setDescription('A Tesla legolcsóbb járműve')
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png")
            .setImage('https://www.automobil-produktion.de/assets/images/e/%281%29tesla-model-3--0768228e.jpg')
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png');

            message.reply(Model3Embed);

        }
    });

    client.on('message', message => {
        if(message.content == 'ATV') {
            const Model3Embed = new Discord.RichEmbed()

            .setColor('AQUA')
            .setTitle('**Tesla ATV**')
            .setAuthor(message.author.username)
            .setDescription('A Tesla QUAD-ja')
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png")
            .setImage('https://img-new.cgtrader.com/items/2179003/9a3c8cb250/tesla-cyberquad-atv-3d-model-max-obj-3ds-fbx.jpg')
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png');

            message.reply(Model3Embed);

        }
    });

    
    client.on('message', message => {
        if(message.content == "Mosómedve") {
            message.reply('Mosómaci :3', {files:['https://nepszava.hu/i/16/9/1/532452.jpg']})
        }
    });
        
    client.on('message', message => {
        if(message.content == 'Farkas') {
            message.reply('Itt is van :)', {files:['https://infostart.hu/images/site/articles/lead/2018/11/1542900201-zY6CQhEwP_md.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == "Orrszarvú") {
            message.reply('Itt egy orrszarvú :)', {files:['https://upload.wikimedia.org/wikipedia/commons/6/61/Indian_Rhino_001.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == 'Kenguru') {
            message.reply('Itt egy Kenguru :)', {files:['http://media.borsonline.hu/cikk/5/46166/big-lead/650x360/46162.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == 'Makákó') {
            message.reply('Szavannák fekete nők ÓHÓHÓÓÓ AFRIKA!', {files:['https://upload.wikimedia.org/wikipedia/commons/f/f8/MonkeyForestPiet%C3%A1.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == 'Gorilla') {
            message.reply('Itt van Harambe. Nyugodjon békében :(', {files:['https://kep.cdn.indexvas.hu/1/0/1190/11900/119002/11900272_99c633a53ca32fa494edbb1776c6a00b_wm.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == 'Afrika') {
            const AfrikaEmbed = new Discord.RichEmbed()

            .setColor('BLUE')
            .setTitle('**AFRIKA**')
            .setAuthor(message.author.username)
            .setDescription('AFRIKA')
            .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/1200px-Africa_%28orthographic_projection%29.svg.png', true)
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja');

            message.channel.send(AfrikaEmbed,);
            message.channel.send('https://www.youtube.com/watch?v=aAwbuL1iJP4')

        }
    });

    client.on('message', message => {
        if(message.content == 'Mi a kedvenc autód?') {
            message.reply('Jelenleg most a Tesla Model X az álomautója IGLBAZSI-nak :)')
        }
    });
    
    client.on('message', message => {
        if(message.content == 'Bambusznád') {
            message.reply('Bambusznáád', {files:['https://www.alternativenergia.hu/wp-content/uploads/2012/04/bambusz2.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == 'Majomkenyérfa') {
            message.reply('Majomkenyérfaaa', {files:['https://upload.wikimedia.org/wikipedia/commons/0/09/Baobab_and_elephant%2C_Tanzania.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == 'Kókuszdió') {
            message.reply('KÓÓÓKUSZDIÓÓÓÓÓÓÓÓÓÓÓÓ', {files:['https://www.foodandwine.hu/wp-content/uploads/2014/02/coconutmilk.jpg']})
        }
    });


    client.on('message', message => {
        if(message.content == 'Gyűrűsfarkú') {
            message.reply('Itt is van :)', {files:['https://szabadmagyarszo.com/wp-content/uploads/2019/03/makik.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == 'Szurikáta') {
            message.reply('Itt van :)', {files:['https://www.hrportal.hu/images/uploaded/szurikata180518.jpg']})
        }
    });

    client.on('message', message => {
        if(message.content == 'Tigris') {
            message.reply('Itt van :)', {files:['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/1200px-P.t.altaica_Tomak_Male.jpg']})
        }
    });

    client.on('message', msg => {
        if(msg.content == 'Bazsi') {
            msg.reply('Anyád álnéven')
        }
    });

    client.on('channelCreate', channelcreate => {
        let Csatornalogchannel = client.channels.get("668881324387336194")
            const newchannelembed = new Discord.RichEmbed()

            .setTitle('**ÚJ CSATORNA**')
            .setColor('GREEN')
            .setDescription('ÚJ CSATORNA LÉTREHOZVA')
            .addBlankField()
            .addField('Ekkor készítették >>', (channelcreate.createdAt), true)
            .addBlankField()
            .addField('Csatorna Neve >>', (channelcreate.name), true)
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja');
            

    Csatornalogchannel.send("Létrehoztak egy csatornát!")
    Csatornalogchannel.send(newchannelembed)
    
    });
   
    client.on('roleCreate', roleCreate => {
        let ranglogchannel = client.channels.get("668903576579473438")
            const rolecreateembed = new Discord.RichEmbed()

            .setTitle('**ÚJ RANG**')
            .setColor('GREEN')
            .setDescription('ÚJ RANG LÉTREHOZVA')
            .addBlankField()
            .addField('Ekkor készítették >>', (roleCreate.createdAt), true)
            .addBlankField()
            .addField('Rang neve >>', (roleCreate.name), true)
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja');
            

    ranglogchannel.send("Létrehoztak egy rangot!")
    ranglogchannel.send(rolecreateembed)

    });

    client.on('emojiCreate', emojiCreate => {
        let Emojikészítés = client.channels.get("668919207211171935")
            const emojiCreateEmbed = new Discord.RichEmbed()

            .setTitle('**ÚJ EMOJI**')
            .setColor('GREEN')
            .setDescription('ÚJ EMOJI')
            .addBlankField()
            .addField('Ekkor készítették >>', (emojiCreate.createdAt), true)
            .addBlankField()
            .addField('Emoji neve >>', (emojiCreate.name), true)
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja');
            

    Emojikészítés.send("Létrehoztak egy Emótát!")
    Emojikészítés.send(emojiCreateEmbed)
    });

    client.on('message', msg => {
        if(msg.content.includes('Nathan')) {
            msg.reply('Mivan vele? Nem foglalkozom elnyomott cigicsikkekkel, nem hiába vannak elnyomva')
        if(msg.author.bot) {
            return 0;
        }
        }
    });

    client.on('message', message => {
        if(message.content == 'Semitruck') {
            const SemitruckEmbed = new Discord.RichEmbed()

            .setAuthor(message.author.username)
            .setTitle('TESLA SEMITRUCK')
            .setDescription('TESLA ELEKTROMOS KAMION')
            .setColor('AQUA')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png')
            .addField('NEVE', 'Tesla Semitruck', true)
            .setImage('https://pnorental.com/wp-content/uploads/2018/03/PNO_News_02-1.jpg')
            .addField('Márkája', 'TESLA MOTORS', true)
            .addBlankField()
            .addField('ÉRDEKESSÉG', 'EZT A KAMIONT A ROADSTERREL EGYÜTT JELENTETTÉK BE!', true)
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png')
            



            message.channel.send(SemitruckEmbed)
            message.channel.send('https://www.youtube.com/watch?v=5RRmepp7i5g&t');

        }
    });

    
    client.on('message', message => {
        if(message.content == 'Semitruck') {
            message.reply('TÖRÖLVE AZ ÖSSZES ÜZENET AMI LEHETSÉGES!')

        }
    });

    client.on('message', message => {
        if(message.content.includes('Köszönöm bot')) {
            message.reply('Nincsmit! További jó szórakozást! :)')
        }
    });

    client.on('message', message => {
        if(message.content == 'Mi a kedvenc állatod?')
            message.reply('Nincs kedvenc állatom de a Sasokat meg a Tengerimalacokat kedvelem :)')
    });

    client.on('message', message => {
        if(message.content.includes('Segít')) {
            message.reply('HA SEGÍTSÉG KELL ÍRJ A BUGOK CSATORNÁBA VAGY ÍRJ EGY ONLINE ADMINNAK, MODERÁTORNAK, STAFFNAK PRIVÁTBAN ÉS ŐK MEGOLDJÁK!')
        }
    });

    client.on('channelDelete', channelDelete => {
            let Csatornalogchannel = client.channels.get("668881324387336194")
                const delchannel = new Discord.RichEmbed()
    
            .setTitle('EGY CSATORNÁT TÖRÖLTEK')
            .setColor('RED')
            .addField('Törölt channel neve', channelDelete.name)
                
        Csatornalogchannel.send(delchannel)
    });



    client.on('message', message => { 
        if(message.content === 'I8') {
            const BMWI8EMBED = new Discord.RichEmbed()

            .setColor('AQUA')
            .setTitle('**BMW I8**')
            .setAuthor(message.author.username)
            .setDescription('ELEKTROMOS HAJTÁSÚ BMW')
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg")
            .setImage('https://i.ytimg.com/vi/W7S7CzDQ6bI/maxresdefault.jpg')
            .setTimestamp()
            .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja' , 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg');

            message.reply(BMWI8EMBED);

        }
    });

    client.on('channelPinsUpdate', channelPin => {
        let PINCHANNEL = client.channels.get('669533657865650177')
        const PINMESSAGEEMBED = new Discord.RichEmbed()

        .setColor('GREEN')
        .setTitle('KITŰZTEK EGY ÜZENETET')
        .setDescription('KITŰZÉS')
        .addBlankField()
        .addField('EKKOR TŰZTÉK KI', (channelPin.createdAt))
        .setTimestamp()
        .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')

        PINCHANNEL.send(PINMESSAGEEMBED);
        
    });

   client.on('message', message => {
        if(message.content === 'TeslaInfo') {
           const TeslainfoEmbed = new Discord.RichEmbed()

           .setColor('GREEN')
           .setTitle('Tesla Információ')
           .setDescription('TESLA Inc. INFORMÁCIÓJA')
           .setAuthor(message.author.username)
           .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1028px-Tesla_T_symbol.svg.png')
           .setImage('https://www.teslarati.com/wp-content/uploads/2019/08/tesla-gigafactory-4-europe.jpg')
           .addField('Alapítva', '2003', true)
           .addField('Központja', 'Szilícium-völgyben, Palo Altóban található.', true)
           .addBlankField()
           .addField('Tevékenysége', 'Elektromos,önvezető autókat gyárt amelyek full motorikusan működnek. Szofterfrissítésekkel rendelkezik', true)
           .addBlankField()
           .addField('Vezérigazgató', 'Elon Musk', true)
           .addField('Érdekesség', ('A Tesla Amerika legnagyobb autógyártó cége illetve globálisan legnagyobb elektromos autógyártó cég'),true)
           .setTimestamp()
           .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja');

           message.channel.send(TeslainfoEmbed);
           message.reply('Itt is van :)')
       
        }
   });

   client.on('message', message => {
       if(message.content === 'Elon Musk') {
           message.channel.send('https://image.cnbcfm.com/api/v1/image/105797039-1552679350641gettyimages-1130598318.jpeg?v=1579274029&w=1400&h=950')
       }
   });

   client.on('message', message => {
       if(message.content === 'Mark Zuckerberg') {
           message.channel.send('https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg')
       }
   });

   client.on('message', message => {
       if(message.content === 'Facebook') {
           const FacebookEmbed = new Discord.RichEmbed()

           .setTitle('Facebook')
           .setColor('BLUE')
           .setAuthor(message.author.username)
           .setDescription('Facebook Információja')
           .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/7/79/Facebook_f_logo_2013.png')
           .addField('Alapító', 'Mark Zuckerberg', true)
           .addField('Ekkor alapították', '2004', true)
           .addBlankField()
           .addField('Székhelye', '	Palo Alto, Kalifornia, USA', true)
           .addField('Érdekesség', 'Mark Zuckerbergről a Netflixen van fent egy film! Érdemes megnézni :)', true)
           .setTimestamp()
           .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')

           message.channel.send(FacebookEmbed);
           message.channel.send('https://www.facebook.com/')
       }
   });

   client.on('message', message => {
       if(message.content === 'Twitter') {
           const TwitterEmbed = new Discord.RichEmbed()

           .setTitle('Twitter')
           .setColor('AQUA')
           .setAuthor(message.author.username)
           .setDescription('Twitter Információja')
           .setThumbnail('https://rmutrecht.org/wp-content/uploads/sites/259/2017/07/logo-twitter.png')
           .addField('Alapító', 'Jack Dorsey', true)
           .addField('Ekkor alapították', '2006, Március 21', true)
           .addBlankField()
           .addField('Székhelye', 'San Francisco, Kalifornia, Egyesült Államok', true)
           .setTimestamp()
           .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')

           message.channel.send(TwitterEmbed);
           message.channel.send('https://www.twitter.com/')
       }
   });

   client.on('message', message => {
       if(message.content === 'Instagram') {
           const InstaEmbed = new Discord.RichEmbed()

           .setTitle('Instagram')
           .setColor('ORANGE')
           .setAuthor(message.author.username)
           .setDescription('Instagram Információja')
           .setThumbnail('https://i.pinimg.com/originals/4f/01/49/4f0149647a160a47217615866f5469c4.png')
           .addField('Alapító', 'Facebook', true)
           .addField('Ekkor alapították', '2010, Október 6.', true)
           .addBlankField()
           .addField('Székhelye', 'Facebook', true)
           .setTimestamp()
           .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')

           message.channel.send(InstaEmbed);
           message.channel.send('https://www.instagram.com')
       }
   });

   client.on('message', message => {
       if(message.content === 'Messenger') {
           const MessengerEmbed = new Discord.RichEmbed()

           .setTitle('Messenger')
           .setColor('BLUE')
           .setAuthor(message.author.username)
           .setDescription('Messenger Információja')
           .setThumbnail('https://download.logo.wine/logo/Facebook_Messenger/Facebook_Messenger-Logo.wine.png')
           .addField('Alapító', 'faszsetudja', true)
           .addField('Ekkor alapították', '2011. augusztus 9.', true)
           .addBlankField()
           .addField('Székhelye', 'ágyad alatt')
           .setTimestamp()
           .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')

           message.channel.send(MessengerEmbed);
           message.channel.send('https://www.messenger.com') 
       }
   });
   
   client.on('message', message => {
       if(message.content === 'Snapchat') {
           const SnapEmbed = new Discord.RichEmbed()

           .setTitle('Snapchat')
           .setColor('#FFD700')
           .setAuthor(message.author.username)
           .setDescription('Snapchat Információja')
           .setThumbnail('https://lh3.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo')
           .addField('Alapító', 'Evan Spiegel', true)
           .addField('Ekkor alapították', '2011. július', true)
           .addBlankField()
           .addField('Székhelye', 'Santa Monica, Kalifornia, Egyesült Államok', true)
           .addField('Érdekesség', 'A Snapchatet a Stanford Egyetem diákjai hozták létre :)')
           .setTimestamp()
           .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')

           message.channel.send(SnapEmbed);
           message.channel.send('https://www.snapchat.com')
       }
   });

   client.on('message', message => {
       if(message.content === 'Discord') {
           const DiscordEmbed = new Discord.RichEmbed()

           .setTitle('Discord')
           .setColor('PURPLE')
           .setAuthor(message.author.username)
           .setDescription('Discord Információ')
           .setThumbnail('https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png')
           .addField('Alapító', 'Discord Inc.', true)
           .addField('Ekkor alapították', '2015. május 13')
           .addBlankField()
           .addField('Székhelye', 'Nem ismert', true)
           .setTimestamp()
           .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')

           message.channel.send(DiscordEmbed);
           message.channel.send('https://www.discordapp.com')
       }
   });

   client.on('message', message => {
       if(message.content === 'Tinder') {
           const TinderEmbed = new Discord.RichEmbed()

           .setTitle('Tinder')
           .setColor('PINK')
           .setAuthor(message.author.username)
           .setDescription('Tinder információ')
           .setThumbnail('https://tinder.com/static/tinder.png')
           .addField('Alapító', 'IAC', true)
           .addField('Alapítva ekkor', '2012', true)
           .addBlankField()
           .addField('Székhely', 'Ismeretlen', true)
           .setTimestamp()
           .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')

           message.channel.send(TinderEmbed);
           message.channel.send('https://www.tinder.com');
       }
   });

   client.on('message', message => {
       if(message.content === 'TikTok') {
           const TiktokEmbed = new Discord.RichEmbed()

           .setTitle('TikTok')
           .setColor('PURPLE')
           .setAuthor(message.author.username)
           .setDescription('TikTok információja')
           .setThumbnail('https://lh3.googleusercontent.com/z5nin1RdQ4UZhv6fa1FNG7VE33imGqPgC4kKZIUjgf_up7E-Pj3AaojlMPwNNXaeGA')
           .addField('Alapító', 'ByteDance', true)
           .addField('Ekkor alapították', '2016 Szeptember', true)
           .addBlankField()
           .addField('Székhely', 'Ismeretlen', true)
           .addField('Érdekesség', 'IGLBAZSI utálja ezt az alkalmazást', true)
           .setImage('https://gizzmo.hu/blog/wp-content/uploads/2019/10/tiktok-20190415.jpg')
           .setTimestamp()
           .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')

           message.channel.send(TiktokEmbed);
           message.channel.send('https://www.tiktok.com');
       }
   });

   client.on('message', message => {
       if(message.content === 'Youtube') {
           const YoutubeEmbed = new Discord.RichEmbed()

           .setTitle('Youtube')
           .setColor('RED')
           .setAuthor(message.author.username)
           .setDescription('Youtube Információja')
           .setThumbnail('https://www.omnicoreagency.com/wp-content/uploads/2018/02/Youtube-Logo-300x211.png')
           .addField('Alapító', 'Jawed Karim', true)
           .addField('Ekkor alapították', '2005. február 14.', true)
           .addBlankField()
           .addField('Székhely', ' San Bruno, Kalifornia, Egyesült Államok', true)
           .addField('Érdekesség', 'Szar.', true)
           .setTimestamp()
           .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')

           message.channel.send(YoutubeEmbed);
           message.channel.send('https://www.youtube.com');

       }
   });

   client.on('message', message => {
       if(message.content === 'Vans') {
           const VansEmbed = new Discord.RichEmbed()

           .setTitle('VANS')
           .setColor('GREY')
           .setAuthor(message.author.username)
           .setDescription('Vans Információja')
           .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/5/59/Vans_%28brand%29_logo.png')
           .addField('Alapító', 'Paul Van Doren, James Van Doren', true)
           .addField('Ekkor alapították', '1966. március 16.', true)
           .addBlankField()
           .addField('Székhely', 'Costa Mesa, Kalifornia, Egyesült Államok', true)
           .addField('Érdekesség', '2 pár Vans cipőm is van és nagyon kényelmes! Mindenkinek ajánlom! :)')
           .setTimestamp()
           .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')
           
           message.channel.send(VansEmbed);
           message.channel.send('https://www.vansshop.hu');

       }
   });

   client.on('message', message => {
       if(message.content === 'League of Legends') {
           message.reply('Egy jó játék :)')
       }
   });

   client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('?Kirúg')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Sikeresen kirúgtam őt ${user.tag}`);
            if (message.member.hasPermissions('KICK_MEMBERS')) {
                return
            };
          }).catch(err => {

            message.reply('Nemtudom/tudod kirúgni a személyt mert nincs jogod hozzá vagy magasabb rangú nálad!');
            // Log the error
            console.error(err);
          });
        } else {
          message.reply('Ez a személy nincs fent a szerveren!');
        }
      } else {
        message.reply('Nem jelölted meg azt akit ki szeretnél rúgni!');
      }
    }
  });

  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('?kitilt')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Sikeresen kirúgtam őt ${user.tag}`);
            if (message.member.hasPermissions('BAN_MEMBERS')) {
                return
            };
          }).catch(err => {

            message.reply('Nemtudom/tudod kitiltani ezt a személyt mert nincs jogod vagy magasabb rangja van!');
            // Log the error
            console.error(err);
          });
        } else {
          message.reply('Ez a személy nincs fent a szerveren!');
        }
      } else {
        message.reply('Jelöld meg azt a személyt akit kiszeretnél TILTANI!');
      }
    }
  });

  client.on('message', message => {
      if(message.content === 'Hal') {
          message.reply('Itt egy halacska', {files:['https://cdn.penzcentrum.hu/upload/cimlapimg/H/hal_768x434_shutter-20191213.jpg']});
      }
  });
 

  client.on('guild.guildMemberRemove', left => {
      const LeftEmbed = new Discord.RichEmbed()
        let LeftChannel = client.channels.get("670362086026641430")

      .setTitle('KILÉPÉS')
      .setColor('RED')
      .setAuthor(left.username)
      .setDescription('Egy személy brutálisan megrohadt!')
      .setThumbnail('http://www.clipartpanda.com/clipart_images/rip-gravestone-clip-art-22991253/download')
      .addField('Kilépett személy neve', left.username, true)
      .addField('Kilépett személy ID-JE', left.user.id, true)
      .addBlankField()
      .addField('Ekkor Regisztrált', left.user.createdAt, true)
      .addField('Ekkor joinolt fel a szerverre', left.user.guild.login, true)
      .setTimestamp()
      .setFooter('A botnak a scriptjét teljes mértékben ' + ' ' + ">>IGLBAZSI<<" + ' ' + 'írja')

      LeftChannel.send(LeftEmbed);
      LeftEmbed.send('http://www.clipartpanda.com/clipart_images/rip-gravestone-clip-art-22991253/download');
  }); 

  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('?Unban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.guild.unban('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Sikerese unbannoltam őt ${user.tag}`);
            if (message.member.hasPermissions('BAN_MEMBERS')) {
                return
            };
          }).catch(err => {

            message.reply('Nemtudom/tudod unbannolni ezt a személyt mert nincs jogod vagy magasabb rangja van!');
            // Log the error
            console.error(err);
          });
        } else {
          message.reply('Ez a személy nincs fent a szerveren!');
        }
      } else {
        message.reply('Jelöld meg azt a személyt akit UNBANNOLNI Szeretnél!');
      }
    }
  });

  client.on('message', message => {
      if(message.content === "SECRET") {
          message.channel.send('||AREA 51 Írd le ezt a további titkokért||')
      }
  });

  client.on('message', message => {
    if(message.content === "AREA 51") {
        message.channel.send('||Az Area 51 Ben ufókkal dolgoznak? A válasz ismeretlen de minden jel arra utal hogy igen. A kormány velük dolgozik.||')
    }
});

  client.on('message', message => {
    if(message.content.includes('Kristóf')) {
        message.channel.send('Aki őt emlegeti az buzi már nem lehet :)')
        }
    });

   client.on('message', message => {
       if(message.content === 'Rang') {
           message.channel.send('Nyem kapsz :(')
       }
   });
   
   client.on('message', message => {
       if(message.content === "Nyan cat") {
           message.channel.send('https://www.youtube.com/watch?v=QH2-TGUlwu4')
       }
   });

   client.on('message', message => {
       if(message.content.includes("Szia", "szia")) {
           message.channel.send("Helló helló :)")
       if (message.author.bot) {
           return 0;
       } 
       }
   });





client.login("NjU0NzE1ODgxMzgwOTA0OTc2.XhpT6w.TiGIYAuWyg0cH4ucymlIDk1sID0")
