const Discord = require('discord.js');
const bot = new Discord.Client();
var bumpers = [];



bot.on('message', message => { // Disboard count
  if (message.content === '!disboard bump') {
    bumpid = message.author.id
    bumpername = message.author.username
    message.channel.send('bumpid')
  }
})

bot.on('message', message => {
  if (message.content.startsWith("+test")) {
    message.channel.send('sì');
    var albump = false;
    for (var i = 0; i < bumpers.length; i++) {
      if (bumpers[i].id === bumpid) {
        message.channel.send('for')
        bumpers[i].points++;
        albump = true;
        break;
      }
    }
    if (albump === false) {
      message.channel.send('albump');
      bumpers.push({
        name: bumpername,
        id: bumpid,
        points: 1
      })
    }
  }
})
bot.on('message', message => {
  if (message.content === '+bumppoints') {
    var bumptext = '__**Points de bump :**__ \n \n'
    for (var i2 = 0; i2 < bumpers.length; i2++) {
      var bumptext = bumptext + '**' + bumpers[i2].name + '** : ' + bumpers[i2].points + " points\n"
    }
    message.channel.send(bumptext)
  }


  else if (message.content === '+bumpreset') {
    if (message.author.id === '263268239038087168') {
      bumpers = []
      message.channel.send('*Points de bump reset !*')

    }
  }
  else if (message.content.startsWith('+bumppush')) {
    if (message.author.id === '263268239038087168') {
      var albump = false
      pusherid = message.content.substr(14, 18)
      for (var i = 0; i < bumpers.length; i++) {
        if (bumpers[i].id === pusherid) {
          bumpers[i].points = bumpers[i].points + parseInt(message.content.substr(11, 2))
          albump = true
          break
        }
      }
      if (albump === false) {
        bumpers.push({
          name: message.content.substr(31, 20),
          id: pusherid,
          points: parseInt(message.content.substr(11, 2))
        })
      }
    }
  }

})


bot.on('message', message => {       // Machine à définition
  if (message.content.startsWith('+def')) {

    if (message.content === '+def random') {
      var defr = Math.floor(Math.random() * 77);
      switch (defr) {
        case 0: message.channel.send('+def questionning'); break;
        case 1: message.channel.send('+def allosexualité'); break;
        case 2: message.channel.send('+def androsexualité'); break;
        case 3: message.channel.send('+def androgynosexualité'); break;
        case 4: message.channel.send('+def apothisexualité'); break;
        case 5: message.channel.send('+def asexualité'); break;
        case 6: message.channel.send('+def autosexualité'); break;
        case 7: message.channel.send('+def bisexualité'); break;
        case 8: message.channel.send('+def caedosexualité'); break;
        case 9: message.channel.send('+def cétérosexualité'); break;
        case 10: message.channel.send('+def cupiosexualité'); break;
        case 11: message.channel.send('+def demisexualité'); break;
        case 12: message.channel.send('+def dysphorasexualité'); break;
        case 13: message.channel.send('+def fraysexualité'); break;
        case 14: message.channel.send('+def greysexualité'); break;
        case 15: message.channel.send('+def gynésexualité'); break;
        case 16: message.channel.send('+def hétérosexualité'); break;
        case 17: message.channel.send('+def homosexualité'); break;
        case 18: message.channel.send('+def homosexuel'); break;
        case 19: message.channel.send('+def homosexuelle'); break;
        case 20: message.channel.send('+def lamvanosexualité'); break;
        case 21: message.channel.send('+def lithosexualité'); break;
        case 22: message.channel.send('+def monosexualité'); break;
        case 23: message.channel.send('+def morosexualité'); break;
        case 24: message.channel.send('+def multisexualité'); break;
        case 25: message.channel.send('+def neurosexualité'); break;
        case 26: message.channel.send('+def ninsexualité'); break;
        case 27: message.channel.send('+def novisexualité'); break;
        case 28: message.channel.send('+def omnisexualité'); break;
        case 29: message.channel.send('+def omniasexualité'); break;
        case 30: message.channel.send('+def pansexualité'); break;
        case 31: message.channel.send('+def polysexualité'); break;
        case 32: message.channel.send('+def placiosexualité'); break;
        case 33: message.channel.send('+def proquasexualité'); break;
        case 34: message.channel.send('+def proquusexualité'); break;
        case 35: message.channel.send('+def reciprosexualité'); break;
        case 36: message.channel.send('+def quoisexualité'); break;
        case 37: message.channel.send('+def skoliosexualité'); break;
        case 38: message.channel.send('+def xumsexualité'); break;
        case 41: message.channel.send('+def alloromantisme'); break;
        case 42: message.channel.send('+def androromantisme'); break;
        case 43: message.channel.send('+def androgynoromantisme'); break;
        case 44: message.channel.send('+def apothiromantisme'); break;
        case 45: message.channel.send('+def aromantisme'); break;
        case 46: message.channel.send('+def autoromantisme'); break;
        case 47: message.channel.send('+def biromantisme'); break;
        case 48: message.channel.send('+def caedoromantisme'); break;
        case 49: message.channel.send('+def cétéroromantisme'); break;
        case 50: message.channel.send('+def cupioromantisme'); break;
        case 51: message.channel.send('+def demiromantisme'); break;
        case 52: message.channel.send('+def dysphoraromantisme'); break;
        case 53: message.channel.send('+def frayromantisme'); break;
        case 54: message.channel.send('+def greyromantisme'); break;
        case 55: message.channel.send('+def gynéromantisme'); break;
        case 56: message.channel.send('+def hétéroromantisme'); break;
        case 57: message.channel.send('+def homoromantisme'); break;
        case 58: message.channel.send('+def homosexuel'); break;
        case 59: message.channel.send('+def homosexuelle'); break;
        case 60: message.channel.send('+def lamvanoromantisme'); break;
        case 61: message.channel.send('+def lithoromantisme'); break;
        case 62: message.channel.send('+def monoromantisme'); break;
        case 63: message.channel.send('+def mororomantisme'); break;
        case 64: message.channel.send('+def multiromantisme'); break;
        case 65: message.channel.send('+def neuroromantisme'); break;
        case 66: message.channel.send('+def ninromantisme'); break;
        case 67: message.channel.send('+def noviromantisme'); break;
        case 68: message.channel.send('+def omniromantisme'); break;
        case 69: message.channel.send('+def omniaromantisme'); break;
        case 70: message.channel.send('+def panromantisme'); break;
        case 71: message.channel.send('+def polyromantisme'); break;
        case 72: message.channel.send('+def placioromantisme'); break;
        case 73: message.channel.send('+def proquaromantisme'); break;
        case 74: message.channel.send('+def proquuromantisme'); break;
        case 75: message.channel.send('+def reciproromantisme'); break;
        case 76: message.channel.send('+def quoiromantisme'); break;
        case 40: message.channel.send('+def skolioromantisme'); break;
        case 39: message.channel.send('+def xumromantisme'); break;
      }
    }
    else if (message.content.startsWith('+deflist')) {
      message.channel.send("__**Liste des termes définis**__ \n``` - Allosexualité/ Zedsexualité/ Z-sexualité\n - Androsexualité\n - Androgynosexualité\n - Apothisexualité\n - Asexualité \n - Autosexualité \n - Bisexualité\n - Caed(o)sexualité\n - Cétérosexualité\n - Cupi(o)sexualité\n - Demisexualité/ Demi-sexualité\n - Dysphorasexualité\n - Fraysexualité/ Ignotasexualité\n - Greysexualité/ Graysexualité/ Gray-(a)sexualité/ Grey-(a)sexualité \n - Gynésexualité\n - Hétérosexualité \n - Homosexualité\n - Homosexualité \n - Homosexualité \n - Lamvanosexualité\n - Lith(o)sexualité / Akoisexualité\n - Monosexualité\n - Morosexualité\n - Multisexualité\n - Neurosexualité\n - Ninsexualité\n - Novisexualité\n - Omnisexualité\n - Omniasexualité/ Panasexualité\n - Pansexualité\n - Polysexualité\n - Placiosexualité\n - Proquasexualité\n - Proquusexualité\n - Reciprosexualité\n - Quoisexualité/ WTFsexualité/ Whatsexualité \n - Sapiosexualité \n - Skoliosexualité \n - Xumsexualité```")
      message.channel.send("``` - Alloromantisme/ Zedromantisme/ Z-romantisme\n - Androromantisme\n - Androgynoromantisme\n - Apothiromantisme\n - Aromantisme \n - Autoromantisme \n - Biromantisme\n - Caed(o)romantisme\n - Cétéroromantisme\n - Cupi(o)romantisme\n - Demiromantisme/ Demi-romantisme\n - Dysphoraromantisme\n - Frayromantisme/ Ignotaromantisme\n - Greyromantisme/ Grayromantisme/ Gray-(a)romantisme/ Grey-(a)romantisme\n - Gynéromantisme\n - Hétéroromantisme \n - Homoromantisme\n - Homoromantisme \n - Homoromantisme \n - Lamvanoromantisme\n - Lith(o)romantisme / Akoiromantisme\n - Monoromantisme\n - Mororomantisme\n - Multiromantisme\n - Neuroromantisme\n - Ninromantisme\n - Noviromantisme\n - Omniromantisme\n - Omniaromantisme/ Panaromantisme\n - Panromantisme\n - Polyromantisme\n - Placioromantisme\n - Proquaromantisme\n - Proquuromantisme\n - Reciproromantisme\n - Quoiromantisme/ WTFromantisme/ Whatromantisme \n - Sapioromantisme \n - Skolioromantisme \n - Xumromantisme```")
      message.channel.send("```- Questionning```")
    }

    else if (message.content.startsWith('+def question')) {
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: 'Questionning',
            icon_url: 'https://pm1.narvii.com/6825/fbc29101104ac752751f05b2bc88e0f9251db231v2_128.jpg'
          },
          title: "Etat où la personne a du mal à se définir sur le plan d'attirance et / ou de genre."

        }
      })
    }

    else if (message.content.includes('sex')) {

      if (message.content.startsWith('+def bisex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Bisexualité',
              icon_url: 'https://pm1.narvii.com/6434/7f3387d3bf0ee9791c41b35b82211f551ec4e6f1_128.jpg'
            },
            title: 'Attirance sexuelle envers certains genres identiques ou différents du siens / des siens.',

          }
        })
      }

      else if (message.content.startsWith('+def homosexual')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Homosexualité',
              icon_url: 'https://pm1.narvii.com/6475/4e3ed569458657ac960f67973649245dd1edd63c_128.jpg'
            },
            title: 'Attirance sexuelle envers un genre identique au sien / à un des siens. Opposé à l\'hétérosexualité. ',
          }
        })
      }

      else if (message.content.startsWith('+def hétérosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Hétérosexualité',
              icon_url: 'https://pm1.narvii.com/6853/9ddda264651ae6b3a5ba086f8be4a4d3d9803cf2v2_128.jpg'
            },
            title: 'Attirance sexuelle envers un genre différent du sien / d\'un des siens. Opposé à l\'homosexualité. ',

          }
        })
      }
      else if (message.content.startsWith('+def asex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Asexualité',
              icon_url: 'https://pm1.narvii.com/6451/8be4a4c74f20b263f19ac460add7410861241127_128.jpg'
            },
            title: 'Absence d\'attirance sexuelle. Opposé à l\'allosexualité.',

          }
        })
      }



      else if (message.content.startsWith('+def greysex') || message.content.startsWith('+def graysex') || message.content.startsWith('+def gray-sex') || message.content.startsWith('+def grey-sex') || message.content.startsWith('+def gray-asex') || message.content.startsWith('+def grey-asex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Greysexualité',
              icon_url: 'https://pm1.narvii.com/7004/ae7122b5ae1ca1b3d467795f752847f70056feefr1-466-354v2_128.jpg'
            },
            title: 'Peu d\'attirance sexuelle, entre une orientation sexuelle et asexuelle. Le préfixe \"gris\" peut s\'appliquer à d\'autres sexualités; exemple : gris-homosexuel.le, gris-pansexuel.le. ',

          }
        })
      }




      else if (message.content.startsWith('+def pansex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Pansexualité',
              icon_url: 'https://pm1.narvii.com/6411/2bbb8cdaf44e5df54d5eed478aef623a4af684fa_128.jpg'
            },
            title: 'Attirance sexuelle qui ne prête pas attention au genre/sexe. ',

          }
        })
      }


      else if (message.content.startsWith('+def allosex') || message.content.startsWith('+def zedsex') || message.content.startsWith('+def zed-sex') || message.content.startsWith('+def zsex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Allosexualité',
              icon_url: 'https://pm1.narvii.com/6824/48fbc72fc5cd33cf9f817a92a37734a73b818c49v2_128.jpg'
            },
            title: 'Présence d\'attirance sexuelle. Opposé à l\'asexualité. ',

          }
        })
      }


      else if (message.content.startsWith('+def demisex') || message.content.startsWith('+def demi-sex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Demisexualité',
              icon_url: 'https://pm1.narvii.com/6507/42133d313ddd079a6a2892bd962e9b077dde797a_128.jpg'
            },
            title: 'Attirance sexuelle uniquement envers des personnes avec qui un lien fort a été crée. Dérivé de la gris-sexualité. Le préfixe \'demi\' peut s\'appliquer à d\'autres sexualités; exemple : demi-homosexuel.le, demi-pansexuel.le.',

          }
        })
      }

      else if (message.content.startsWith('+def quoisex') || message.content.startsWith('+def wtfsex') || message.content.startsWith('+def whatsex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Quoisexualité',
              icon_url: 'https://pm1.narvii.com/6812/bc3d2e8653aa975377cb8e13daa7d050058b39bav2_128.jpg'
            },
            title: 'Incompréhension de son attirance sexuelle, difficulté à se définir.',

          }
        })
      }



      else if (message.content.startsWith('+def fraysex') || message.content.startsWith('+def ignotasex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Fraysexualité',
              icon_url: 'https://pm1.narvii.com/6620/752eb91a8a6c3d4e209ee0bd8444cb03f8524d87_128.jpg'
            },
            title: 'Attirance sexuelle au début d\'une relation, mais s\'estompant au fil du temps. Dérivé de la gris-sexualité. Le préfixe "fray" peut s\'appliquer à d\'autres sexualités; exemple : fray-homosexuel.le, fray-pansexuel.le.',

          }
        })
      }

      else if (message.content.startsWith('+def omnisex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Omnisexualité',
              icon_url: 'https://pm1.narvii.com/6530/74d172a1ce1685d2c51c070f43b0c635e1082477_128.jpg'
            },
            title: "Attirance sexuelle envers tout les genres, et où le genre à son importance, on peut donc avoir des préférences. ",
          }
        })
      }



      else if (message.content.startsWith('+def cupiosex') || message.content.startsWith('+def cupisex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Cupi(o)sexualité',
              icon_url: 'https://pm1.narvii.com/6918/6a4e3db704e003f5acac64aaea96fb79df4d22d7r1-307-164v2_128.jpg'
            },
            title: 'Désir de vouloir ressentir de l\'attirance sexuelle, sans toutefois en ressentir. Dérivé de l\'asexualité.',

          }
        })
      }


      else if (message.content.startsWith('+def aegosex') || message.content.startsWith('+def autochorissex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Aegosexualité',
              icon_url: 'https://pm1.narvii.com/6950/6438420b38847ab8d8b1de49ae63b3e42ced305dr1-960-960v2_128.jpg'
            },
            title: "Fait de ne pas vouloir prendre part à quelconque acte sexuelle, mais d\'apprécier quand même la pornographie et l\'érotisme et avoir des fantasmes sexuelles. Dérivé de l'asexualité."

          }
        })
      }

      else if (message.content.startsWith('+def omniasex') || message.content.startsWith('+def panasex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Omniasexualité',
              icon_url: 'https://pm1.narvii.com/6827/a521e25e9fe4553830d223310048c174bb5f6ae3v2_128.jpg'
            },
            title: "Absence d'attirance sexuelle, inintéressement à toute conversation relative au sexe. Dérivé de l'asexualité."

          }
        })
      }


      else if (message.content.startsWith('+def apothisex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Apothisexualité',
              icon_url: 'https://pm1.narvii.com/6852/a67b77787fa83c982ac80d99c52f57827f8f8d5fv2_128.jpg'
            },
            title: "Dégoût envers le sexe."

          }
        })
      }



      else if (message.content.startsWith('+def multisex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Multisexualité',
              icon_url: 'https://pm1.narvii.com/6544/a0e60bb38fd4aa607232c41b123c34e49a31517c_128.jpg'
            },
            title: "Attirance sexuelle envers plusieurs genres. Opposé à la monosexualité. "

          }
        })
      }

      else if (message.content.startsWith('+def polysex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Polysexualité',
              icon_url: 'https://pm1.narvii.com/6530/e7c3ec6f59920d5f3feb8f9cfbe1faa2deec8568_128.jpg'
            },
            title: "Attirance envers plusieurs genres, mais pas envers tous."

          }
        })
      }
      else if (message.content.startsWith('+def homosexuelle') || message.content.startsWith('+def lesbienne')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Homosexuelle',
              icon_url: 'https://pm1.narvii.com/6851/8c4e9362d0557ea6311698a8c7b90becbea03a42v2_128.jpg'
            },
            title: "Personne ayant un genre sur le spectre féminin, et étant attirée par un ou plusieurs de ses genres."

          }
        })
      }


      else if (message.content.startsWith('+def abrosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Abrosexualité',
              icon_url: 'https://pm1.narvii.com/6804/ec06828f2d30d026ca716114bd09266cf622a67cv2_128.jpg'
            },
            title: "Attirance sexuelle fluide - changeant au cours du temps."

          }
        })
      }
      else if (message.content.startsWith('+def implasex') || message.content.startsWith('+def inexsex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Implasexualité',
              icon_url: 'https://pm1.narvii.com/6864/2d2a7c74cc646cfa3c3f8ccc588cf1658e11213dr1-1080-656v2_128.jpg'
            },
            title: " Doute sur son attirance sexuelle causée par des manques de confiances en soi et / ou des problèmes d'appartenance de genre. Son équivalent neuroatypique est la xumsexualité. "

          }
        })
      }

      else if (message.content.startsWith('+def hypersex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Hypersexualité',
              icon_url: 'https://pm1.narvii.com/6827/896caf2c052e51ea9b5aa6dd17248161a51c47efv2_128.jpg'
            },
            title: "Fortes attirances sexuelles. Opposé à l'hyposexualité. Le préfixe \"hyper\" peut s\'appliquer à d\'autres sexualités; exemple : hyper-homosexuel.le, hyper-pansexuel.le."

          }
        })
      }

      else if (message.content.startsWith('+def hyposex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Hyposexualité',
              icon_url: 'https://pm1.narvii.com/6827/165c45c33ae9100eda2a3ef3144d23edd31c58efv2_128.jpg'
            },
            title: 'Faibles attirances sexuelles. Opposé à l\'hypersexualité. Le préfixe \"hypo\" peut s\'appliquer à d\'autres sexualités; exemple : hypo-homosexuel.le, hypo-pansexuel.le. '

          }
        })
      }

      else if (message.content.startsWith('+def sapiosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Sapiosexualité',
              icon_url: 'https://pm1.narvii.com/6726/cf750e99473583b7aa8d7811d8e585939304165dv2_128.jpg'
            },
            title: "Attirance sexuelle déclenchée par l\'intellect, la vivacité d\'esprit de la personne. Opposé à la morosexualité. Le préfixe \"sapio\" peut s\'appliquer à d\'autres sexualités; exemple : sapio-homosexuel.le, sapio-pansexuel.le."

          }
        })
      }

      else if (message.content.startsWith('+def skoliosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Skoliosexualité',
              icon_url: 'https://pm1.narvii.com/6726/26abf029765172f623f5f848cea7945462f4a1d3v2_128.jpg'
            },
            title: "Attirance sexuelle envers un / des genre(s) non-binaire(s)."

          }
        })
      }

      else if (message.content.startsWith('+def cétérosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Cétérosexualité',
              icon_url: 'https://image.noelshack.com/fichiers/2019/07/1/1549904127-ctsx.jpg'
            },
            title: "Attirance sexuelle d'une personne non-binaire envers un / des genre(s) non-binaire(s)."

          }
        })
      }

      else if (message.content.startsWith('+def novisex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Novisexualité',
              icon_url: 'https://pm1.narvii.com/6827/049ad13103e55bd60f8cd4b1e3b236c2f669084fv2_128.jpg'
            },
            title: "Attirance sexuelle compliquée à un tel point qu'on ne peut la définir en un seul terme."

          }
        })
      }

      else if (message.content.startsWith('+def gynésex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Gynésexualité',
              icon_url: 'https://pm1.narvii.com/6823/acdfd2ac94f60b098201ec8bc4f0708c4c4eef1bv2_128.jpg'
            },
            title: 'Attirance sexuelle envers des personnes " féminines " ( la féminité étant subjective ). Opposé à l\'androsexualité. '

          }
        })
      }

      else if (message.content.startsWith('+def androsex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Androsexualité',
              icon_url: 'https://pm1.narvii.com/6891/af1b4cd26993b392264af1e3ceb7f36dbf592440r1-736-411v2_128.jpg'
            },
            title: 'Attirance sexuelle envers des personnes " masculines " ( la masculinité étant subjective ). Opposé à la gynésexualité. '

          }
        })
      }

      else if (message.content.startsWith('+def ninsex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Ninsexualité',
              icon_url: 'https://pm1.narvii.com/6726/667cf170b6667d94b560dc23e1baf339d2221fb5v2_128.jpg'
            },
            title: 'Attirance sexuelle envers des personnes de genre(s) du spectre neutre, et étant androgynes ( physique " masculin et féminin " ( la masculinité et féminité étant subjectifs.ves )). '

          }
        })
      }

      else if (message.content.startsWith('+def androgynosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Androgynosexualité',
              icon_url: 'https://image.noelshack.com/fichiers/2019/07/1/1549904258-androgyns.jpg'
            },
            title: "Attirance sexuelle d'une personne androgyne  ( physique \" masculin et féminin \" ( la masculinité et féminité étant subjectifs.ves )) envers des personnes de genre(s) du spectre féminin et / ou masculin. "

          }
        })
      }

      else if (message.content.startsWith('+def proquasex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Proquasexualité',
              icon_url: 'https://pm1.narvii.com/6681/a27d852a3cd930d07b4592f442cf19903aeb3e0d_128.jpg'
            },
            title: 'Attirance sexuelle d\'une personne " féminine " envers des personnes " féminines " ( la féminité étant subjective ). Opposé à la proquusexualité. '

          }
        })
      }

      else if (message.content.startsWith('+def proquusex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Proquusexualité',
              icon_url: 'https://pm1.narvii.com/6681/66f53a98ec1637f9f073b76f2402fddd36d53c16_128.jpg'
            },
            title: 'Attirance sexuelle d\'une personne " masculine " envers des personnes " masculines " ( la masculinité étant subjective ). Opposé à la proquasexualité ". '

          }
        })
      }

      else if (message.content.startsWith('+def lithsex') || message.content.startsWith('+def lithosex') || message.content.startsWith('+def akoisex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Lith(o)sexualité',
              icon_url: 'https://pm1.narvii.com/6620/2396c7254517fea338967ad586c4028771afdbe7_128.jpg'
            },
            title: 'Fait de ne pas vouloir que l\'attirance sexuelle que l\'on porte à une personne soit réciproque. Dérivé la gris-sexualité. Le préfixe "lith(o)" peut s\'appliquer à d\'autres sexualités; exemple : lith(o)-homosexuel.le, lith(o)-pansexuel.le.'

          }
        })
      }

      else if (message.content.startsWith('+def autosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Autosexualité',
              icon_url: 'https://pm1.narvii.com/6620/9f56bfd01029f878d36457ca9a8622503e46d08f_128.jpg'
            },
            title: 'Attirance sexuelle envers soi-même. A ne pas confondre avec le narcissisme. Le préfixe "auto" peut s\'appliquer à d\'autres sexualités; exemple : auto-homosexuel.le, auto-pansexuel.le. '

          }
        })
      }

      else if (message.content.startsWith('+def lamvanosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Lamvanosexualité',
              icon_url: 'https://pm1.narvii.com/6743/628ed4d59879f1d532af77b18f870c8190123e2dv2_128.jpg'
            },
            title: 'Envie que les actes sexuelles soient pratiqués uniquement sur soi même, mais ne pas les pratiquer sur les autres. Opposé à la placiosexualité. Le préfixe "lamvano" peut s\'appliquer à d\'autres sexualités; exemple : lamvano-homosexuel.le, lamvano-pansexuel.le. '

          }
        })
      }
      else if (message.content.startsWith('+def monosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Monosexualité',
              icon_url: 'https://pm1.narvii.com/6625/c9eb004f1297e91afa5c9e21fb391d666e614cf9_128.jpg'
            },
            title: 'Attirance sexuelle envers un seul genre. Opposé à la multisexualité. '

          }
        })
      }


      else if (message.content.startsWith('+def placiosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Placiosexualité',
              icon_url: 'https://pm1.narvii.com/6681/9349011a63f05b0c8fd14ad6d84878cd0e2a6304_128.jpg'
            },
            title: 'Envie de pratiquer uniquement sur les autres, mais qu\'ils ne soient pas pratiqués sur soi-même. Opposé à la lamvanosexualité. Le préfixe "placio" peut s\'appliquer à d\'autres sexualités; exemple : placio-homosexuel.le, placio-pansexuel.le. '

          }
        })
      }

      else if (message.content.startsWith('+def neurosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Neurosexualité',
              icon_url: 'https://pm1.narvii.com/6828/3ab58d8d923a601b4305d7584513fe153820b472v2_128.jpg'
            },
            title: 'Attirance sexuelle liée au neurotype, à la maladie mentale ou/et aux conditions neurologiques d\'un individu. Le préfixe "neuro" peut s\'appliquer à d\'autres sexualités; exemple : neuro-homosexuel.le, neuro-pansexuel.le. '

          }
        })
      }

      else if (message.content.startsWith('+def xumsex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Xumsexualité',
              icon_url: 'https://pm1.narvii.com/6866/df38e318d7030016f1ae3a29f8c37f419615abcar1-985-591v2_128.jpg'
            },
            title: 'Doute sur son attirance sexuelle, causée par de l\'anxiété ou des TOC. C\'est une neuroatypie, son équivalent neurotypique est l\'implasexualité '

          }
        })
      }

      else if (message.content.startsWith('+def dysphorasex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Dysphorasexualité',
              icon_url: 'https://pm1.narvii.com/6866/045ba174c29f031996b9e1d8cd2fcbad3667e050r1-1153-692v2_128.jpg'
            },
            title: 'Incapacité à avoir des relations sexuelles à cause de sa dysphorie de genre. Le préfixe "dysphora" peut s\'appliquer à d\'autres sexualités; exemple : dysphora-homosexuel.le, dysphora-pansexuel.le.'

          }
        })
      }

      else if (message.content.startsWith('+def caedosex') || message.content.startsWith('+def caedsex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Caed(o)sexualité',
              icon_url: 'https://pm1.narvii.com/6864/6c2e563c782603b3482e86ffcf070fea6bcd7ca8r1-1080-712v2_128.jpg'
            },
            title: 'Incapacité de ressentir une attirance sexuelle, dû à un traumatisme. C\'est une neuroatypie.'

          }
        })
      }

      else if (message.content.startsWith('+def reciprosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Reciprosexualité',
              icon_url: 'https://pm1.narvii.com/6852/7b6ed8458c4f3e91be7841f669bae29d8d9c4a72v2_128.jpg'
            },
            title: 'Attirance sexuelle ne pouvant subsister que quand l\'autre ressent déjà de l\'attirance sexuelle. Le préfixe "recipro" peut s\'appliquer à d\'autres sexualités; exemple : recipro-homosexuel.le, recipro-pansexuel.le. '

          }
        })
      }



      else if (message.content.startsWith('+def morosex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Morosexualité',
              icon_url: 'https://pm1.narvii.com/7106/d3efd23d45972a5f117428ec9455da1e6639b89ar1-500-302v2_128.jpg'
            },
            title: 'Attirance sexuelle déclenchée par l\'innocence, l\'insouciance ou la stupidité de la personne. Opposé à la sapiosexualité. Le préfixe "moro" peut s\'appliquer à d\'autres sexualités; exemple : moro-homosexuel.le, moro-pansexuel.le. '

          }
        })
      }



      /* ---------------------------------------------------------- */
      else if (message.content.startsWith('+def homosexuel') || message.content.startsWith('+def gay')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Homosexuel',
              icon_url: 'https://pm1.narvii.com/6851/9b5705e458587cf99cc8a7d5d2d6f388feac0ac6v2_128.jpg'
            },
            title: "Personne ayant un genre sur le spectre masculin, et étant attiré sexuellement par son genre."

          }
        })
      }
    }

    else if (message.content.includes('rom')) {

      if (message.content.startsWith('+def birom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Biromantisme',
              icon_url: 'https://pm1.narvii.com/6868/f40df84522dfec573315961fce8179df4452d885r1-1153-692v2_128.jpg'
            },
            title: 'Attirance romantique envers certains genres identiques ou différents du siens / des siens.',

          }
        })
      }

      else if (message.content.startsWith('+def homorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Homoromantisme',
              icon_url: 'https://pm1.narvii.com/6853/3c737e7f517ebf36af4365283aa99062023cd605v2_128.jpg'
            },
            title: 'Attirance romantique envers un genre identique au sien / à un des siens. Opposé à l\'hétéroromantisme. ',
          }
        })
      }

      else if (message.content.startsWith('+def hétérorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Hétéroromantisme',
              icon_url: 'https://pm1.narvii.com/6456/516170a6db9b53ac610f3074c46ccdc97391fe31_128.jpg'
            },
            title: 'Attirance romantique envers un genre différent du sien / d\'un des siens. Opposé à l\'homoromantisme. ',

          }
        })
      }
      else if (message.content.startsWith('+def arom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Aromantisme',
              icon_url: 'https://pm1.narvii.com/6537/c9b337ebc74c3cee8e10b8813bf226a483a7dbd2_128.jpg'
            },
            title: 'Absence d\'attirance romantique. Opposé à l\'alloromantisme.',

          }
        })
      }



      else if (message.content.startsWith('+def greysex') || message.content.startsWith('+def graysex') || message.content.startsWith('+def gray-sex') || message.content.startsWith('+def grey-sex') || message.content.startsWith('+def gray-asex') || message.content.startsWith('+def grey-asex')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Greyromantisme',
              icon_url: 'https://pm1.narvii.com/7011/3f18f4f6e7f992169ad635eb9268e52b4b19b410r1-466-354v2_128.jpg'
            },
            title: 'Peu d\'attirance romantique, entre une orientation romantique et aromantique. Le préfixe \"gris\" peut s\'appliquer à d\'autres orientations romantiques; exemple : gris-homoromantique, gris-panromantique. ',

          }
        })
      }




      else if (message.content.startsWith('+def panrom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Panromantisme',
              icon_url: 'https://pm1.narvii.com/6862/7a49fb45ed4bf5a126aba039d2d7aa08ddfa1aadr1-1153-692v2_128.jpg'
            },
            title: 'Attirance romantique qui ne prête pas attention au genre/sexe. ',

          }
        })
      }


      else if (message.content.startsWith('+def allorom') || message.content.startsWith('+def zedrom') || message.content.startsWith('+def zed-sex') || message.content.startsWith('+def zrom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Alloromantisme',
              icon_url: 'https://pm1.narvii.com/6824/48fbc72fc5cd33cf9f817a92a37734a73b818c49v2_128.jpg'
            },
            title: 'Présence d\'attirance romantique. Opposé à l\'aromantisme. ',

          }
        })
      }


      else if (message.content.startsWith('+def demirom') || message.content.startsWith('+def demi-rom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Demiromantisme',
              icon_url: 'https://pm1.narvii.com/6949/dd9dee0a4285096d04980920b70baf7e7775128cr1-1153-692v2_128.jpg'
            },
            title: 'Attirance romantique uniquement envers des personnes avec qui un lien fort a été crée. Dérivé du gris-romantisme. Le préfixe \'demi\' peut s\'appliquer à d\'autres orientations romantiques; exemple : demi-homoromantique, demi-panromantisme.',

          }
        })
      }

      else if (message.content.startsWith('+def quoirom') || message.content.startsWith('+def wtfrom') || message.content.startsWith('+def whatrom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Quoiromantisme',
              icon_url: 'https://pm1.narvii.com/6584/d941cbd7db5e89c7c1f0f932bca7bce1946fafd0_128.jpg'
            },
            title: 'Incompréhension de son attirance romantique, difficulté à se définir.',

          }
        })
      }



      else if (message.content.startsWith('+def frayrom') || message.content.startsWith('+def ignotarom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Frayromantisme',
              icon_url: 'https://pm1.narvii.com/6805/f1207c851370ac171c3a7db5d124743752136a12v2_128.jpg'
            },
            title: 'Attirance romantique au début d\'une relation, mais s\'estompant au fil du temps. Dérivé du gris-romantisme. Le préfixe "fray" peut s\'appliquer à d\'autres orientations romantiques; exemple : fray-homoromantique, fray-panromantique.',

          }
        })
      }

      else if (message.content.startsWith('+def omnirom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Omniromantisme',
              icon_url: 'https://pm1.narvii.com/6696/e988d3b406f8d1ed3f3604633412fbf833cbdcb7_128.jpg'
            },
            title: "Attirance romantique envers tout les genres, et où le genre à son importance, on peut donc avoir des préférences. ",
          }
        })
      }



      else if (message.content.startsWith('+def cupiorom') || message.content.startsWith('+def cupirom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Cupi(o)romantisme',
              icon_url: 'https://pm1.narvii.com/6918/ff553d75c1378528814d7d575ffe4dd8a6593aa1r1-307-164v2_128.jpg'
            },
            title: 'Désir de vouloir ressentir de l\'attirance romantique, sans toutefois en ressentir. Dérivé de l\'aromantisme.',

          }
        })
      }


      else if (message.content.startsWith('+def aegorom') || message.content.startsWith('+def autochorisrom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Aegoromantisme',
              icon_url: 'https://pm1.narvii.com/6683/f2ae654ee662aa8809a68968ce77569420e5a26c_128.jpg'
            },
            title: "Fait de ne pas vouloir prendre part à quelconque acte romantique, mais d\'apprécier quand même la romance et l'amour. Dérivé de l'aromantisme."

          }
        })
      }

      else if (message.content.startsWith('+def omniarom') || message.content.startsWith('+def panarom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Omniaromantisme',
              icon_url: 'https://pm1.narvii.com/6853/9112a7e61db756cb9960cd01b740106087949d33v2_128.jpg'
            },
            title: "Absence d'attirance romantique, inintéressement à toute conversation relative à l'amour. Dérivé de l'aromantisme."

          }
        })
      }


      else if (message.content.startsWith('+def apothirom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Apothiromantisme',
              icon_url: 'https://pm1.narvii.com/6852/a67b77787fa83c982ac80d99c52f57827f8f8d5fv2_128.jpg'
            },
            title: "Dégoût envers l'amour."

          }
        })
      }



      else if (message.content.startsWith('+def multirom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Multiromantisme',
              icon_url: 'https://pm1.narvii.com/7013/d7d71c2ab8b6370371e6258f2c89067231603fb6r1-1153-692v2_128.jpg'
            },
            title: "Attirance romantique envers plusieurs genres. Opposé au monoromantisme. "

          }
        })
      }

      else if (message.content.startsWith('+def polyrom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Polyromantisme',
              icon_url: 'https://pm1.narvii.com/6544/c3e9059b3fb6c8b19db3b3f402e3bbde61e675ea_128.jpg'
            },
            title: "Attirance romantique envers plusieurs genres, mais pas envers tous."

          }
        })
      }



      else if (message.content.startsWith('+def abrorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Abroromantisme',
              icon_url: 'https://pm1.narvii.com/6698/dcd7930b7424502933bdf223c65d179f35636633_128.jpg'
            },
            title: "Attirance romantique fluide - changeant au cours du temps."

          }
        })
      }
      else if (message.content.startsWith('+def implarom') || message.content.startsWith('+def inexrom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Implaromantisme',
              icon_url: 'https://pm1.narvii.com/6866/14e71723a55b8e2748cdc6faf0150c7b8327b768r1-2048-1229v2_128.jpg'
            },
            title: " Doute sur son attirance romantique causée par des manques de confiances en soi et / ou des problèmes d'appartenance de genre. Son équivalent neuroatypique est le xumromantisme. "

          }
        })
      }

      else if (message.content.startsWith('+def hyperrom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Hyperromantisme',
              icon_url: 'https://pm1.narvii.com/6828/eecdf25b3a02616f26d5f8f08e0304430442bd21v2_128.jpg'
            },
            title: "Fortes attirances romantiques. Opposé à l'hyporomantisme. Le préfixe \"hyper\" peut s\'appliquer à d\'autres orientations romantiques; exemple : hyper-homoromantique, hyper-panromantique."

          }
        })
      }

      else if (message.content.startsWith('+def hyporom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Hyporomantisme',
              icon_url: 'https://pm1.narvii.com/6828/3609bd881ea06644f42dfba0c2e908b6537c4fc5v2_128.jpg'
            },
            title: 'Faibles attirances romantiques. Opposé à l\'hyperromantisme. Le préfixe \"hypo\" peut s\'appliquer à d\'autres orientations romantiques; exemple : hypo-homoromantique, hypo-panromantique. '

          }
        })
      }

      else if (message.content.startsWith('+def sapiorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Sapioromantisme',
              icon_url: 'https://pm1.narvii.com/6881/fa0fa2fe56e297b8e0df540abb9a54164db8fa50r1-767-447v2_128.jpg'
            },
            title: "Attirance romantique déclenchée par l\'intellect, la vivacité d\'esprit de la personne. Opposé au mororomantisme. Le préfixe \"sapio\" peut s\'appliquer à d\'autres orientations romantiques; exemple : sapio-homoromantique, sapio-panromantique."

          }
        })
      }

      else if (message.content.startsWith('+def skoliorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Skolioromantisme',
              icon_url: 'https://pm1.narvii.com/6726/26abf029765172f623f5f848cea7945462f4a1d3v2_128.jpg'
            },
            title: "Attirance romantique envers un / des genre(s) non-binaire(s)."

          }
        })
      }

      else if (message.content.startsWith('+def cétérorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Cétéroromantisme',
              icon_url: 'https://image.noelshack.com/fichiers/2019/07/1/1549904127-ctsx.jpg'
            },
            title: "Attirance romantique d'une personne non-binaire envers un / des genre(s) non-binaire(s)."

          }
        })
      }

      else if (message.content.startsWith('+def novirom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Noviromantisme',
              icon_url: 'https://pm1.narvii.com/6841/9ec2668f9341910f012743e5bb6da5e0391bae09v2_128.jpg'
            },
            title: "Attirance romantique compliquée à un tel point qu'on ne peut la définir en un seul terme."

          }
        })
      }

      else if (message.content.startsWith('+def gynérom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Gynéromantisme',
              icon_url: 'https://pm1.narvii.com/6856/6c29cdcdcd529c2d89a4036b1d4f81c451d51e5dv2_128.jpg'
            },
            title: 'Attirance romantique envers des personnes " féminines " ( la féminité étant subjective ). Opposé à l\'androromantisme. '

          }
        })
      }

      else if (message.content.startsWith('+def androrom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Androromantisme',
              icon_url: 'https://pm1.narvii.com/6856/3df5edd27c40d4cd45baa4a1a418f18f4e122f9cv2_128.jpg'
            },
            title: 'Attirance romantique envers des personnes " masculines " ( la masculinité étant subjective ). Opposé au gynéromantisme. '

          }
        })
      }

      else if (message.content.startsWith('+def ninrom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Ninromantisme',
              icon_url: 'https://pm1.narvii.com/6698/369cbccdf220d553d943d010995ef98833757463_128.jpg'
            },
            title: 'Attirance romantique envers des personnes de genre(s) du spectre neutre androgynes ( physique " masculin et féminin " ( la masculinité et féminité étant subjectifs.ves )). '

          }
        })
      }

      else if (message.content.startsWith('+def androgynorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Androgynoromantisme',
              icon_url: 'https://pm1.narvii.com/7114/fcc9beeefc20bf1f3b731d2ade8d2b126bd794d8r1-1154-692v2_128.jpg'
            },
            title: "Attirance romantique d'une personne androgyne  ( physique \" masculin et féminin \" ( la masculinité et féminité étant subjectifs.ves )) envers des personnes de genre(s) du spectre féminin et / ou masculin. "

          }
        })
      }

      else if (message.content.startsWith('+def proquarom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Proquaromantisme',
              icon_url: 'https://pm1.narvii.com/6857/a5d9841569d4c8f3c2e259412dfd0eb24d99745fv2_128.jpg'
            },
            title: 'Attirance romantique d\'une personne " féminine " envers des personnes " féminines " ( la féminité étant subjective ). Opposé au proquuromantisme. '

          }
        })
      }

      else if (message.content.startsWith('+def proquurom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Proquuromantisme',
              icon_url: 'https://pm1.narvii.com/6857/040b62382f17ca59f2c956a80cc5080540766ff2v2_128.jpg'
            },
            title: 'Attirance romantique d\'une personne " masculine " envers des personnes " masculines " ( la masculinité étant subjective ). Opposé au proquaromantisme ". '

          }
        })
      }

      else if (message.content.startsWith('+def lithrom') || message.content.startsWith('+def lithorom') || message.content.startsWith('+def akoirom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Lith(o)romantisme',
              icon_url: 'https://pm1.narvii.com/6964/e8234440d87c4a6dd651fdaadacbc80c5dd20dd0r1-1153-692v2_128.jpg'
            },
            title: 'Fait de ne pas vouloir que l\'attirance romantique que l\'on porte à une personne soit réciproque. Dérivé la gris-romantisme. Le préfixe "lith(o)" peut s\'appliquer à d\'autres orientations romantiques; exemple : lith(o)-homoromantique, lith(o)-panromantique.'

          }
        })
      }

      else if (message.content.startsWith('+def autorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Autoromantisme',
              icon_url: 'https://pm1.narvii.com/6620/9f56bfd01029f878d36457ca9a8622503e46d08f_128.jpg'
            },
            title: 'Attirance romantique envers soi-même. Le préfixe "auto" peut s\'appliquer à d\'autres orientations romantiques; exemple : auto-homoromantique, auto-panromantique. '

          }
        })
      }

      else if (message.content.startsWith('+def lamvanorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Lamvanoromantisme',
              icon_url: 'https://pm1.narvii.com/6823/ef4553b52b6c21722f30cc788e8b39991732bbb7v2_128.jpg'
            },
            title: 'Envie que les actes romantiques soient pratiqués uniquement sur soi même, mais ne pas les pratiquer sur les autres. Opposé au placioromantisme. Le préfixe "lamvano" peut s\'appliquer à d\'autres orientations romantiques; exemple : lamvano-homoromantique, lamvano-panromantique. '

          }
        })
      }
      else if (message.content.startsWith('+def monorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Monoromantisme',
              icon_url: 'https://pm1.narvii.com/6625/c9eb004f1297e91afa5c9e21fb391d666e614cf9_128.jpg'
            },
            title: 'Attirance romantique envers un seul genre. Opposé au multiromantisme. '

          }
        })
      }


      else if (message.content.startsWith('+def placiorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Placioromantisme',
              icon_url: 'https://pm1.narvii.com/6681/a874258bbf95d40bc1cdfb474bcc03be93d1aed6_128.jpg'
            },
            title: 'Envie de pratiquer des actes romantiques uniquement sur les autres, mais qu\'ils ne soient pas pratiqués sur soi-même. Opposé au lamvanoromantisme. Le préfixe "placio" peut s\'appliquer à d\'autres orientations romantiques; exemple : placio-homoromantique, placio-panromantique. '

          }
        })
      }

      else if (message.content.startsWith('+def neurorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Neuroromantisme',
              icon_url: 'https://pm1.narvii.com/6828/002b3e0b6742fbb10e36a5e20f0b788b8f450be6v2_128.jpg'
            },
            title: 'Attirance romantique liée au neurotype, à la maladie mentale ou/et aux conditions neurologiques d\'un individu. Le préfixe "neuro" peut s\'appliquer à d\'autres orientations romantiques; exemple : neuro-homoromantique, neuro-panromantique. '

          }
        })
      }

      else if (message.content.startsWith('+def xumrom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Xumromantisme',
              icon_url: 'https://pm1.narvii.com/6866/5fbed8f3afa5f9968dc69cadfbedd695833a2b1cr1-1280-768v2_128.jpg'
            },
            title: 'Doute sur son attirance romantique, causée par de l\'anxiété ou des TOC. C\'est une neuroatypie, son équivalent neurotypique est l\'implaromantisme '

          }
        })
      }

      else if (message.content.startsWith('+def dysphorarom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Dysphoraromantisme',
              icon_url: 'https://pm1.narvii.com/6866/045ba174c29f031996b9e1d8cd2fcbad3667e050r1-1153-692v2_128.jpg'
            },
            title: 'Incapacité à avoir des relations romantiques à cause de sa dysphorie de genre. Le préfixe "dysphora" peut s\'appliquer à d\'autres orientations romantiques; exemple : dysphora-homoromantique, dysphora-panromantique.'

          }
        })
      }

      else if (message.content.startsWith('+def caedorom') || message.content.startsWith('+def caedrom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Caed(o)romantisme',
              icon_url: 'https://pm1.narvii.com/6864/6c2e563c782603b3482e86ffcf070fea6bcd7ca8r1-1080-712v2_128.jpg'
            },
            title: 'Incapacité de ressentir une attirance romantique, dû à un traumatisme. C\'est une neuroatypie.'

          }
        })
      }

      else if (message.content.startsWith('+def reciprorom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Reciproromantisme',
              icon_url: 'https://pm1.narvii.com/6852/76b4c490d952653c31887dd028cd12de9a16149bv2_128.jpg'
            },
            title: 'Attirance romantique ne pouvant subsister que quand l\'autre ressent déjà de l\'attirance romantique. Le préfixe "recipro" peut s\'appliquer à d\'autres orientations romantiques; exemple : recipro-homoromantique, recipro-panromantique. '

          }
        })
      }



      else if (message.content.startsWith('+def mororom')) {
        message.channel.send({
          embed: {
            color: 3447003,
            author: {
              name: 'Mororomantisme',
              icon_url: 'https://pm1.narvii.com/7106/d3efd23d45972a5f117428ec9455da1e6639b89ar1-500-302v2_128.jpg'
            },
            title: 'Attirance romantique déclenchée par l\'innocence, l\'insouciance ou la stupidité de la personne. Opposé au sapioromantisme. Le préfixe "moro" peut s\'appliquer à d\'autres orientations romantiques; exemple : moro-homoromantique, moro-panromantique. '

          }
        })
      }

    }
  }
});


bot.login(process.env.TOKEN);
